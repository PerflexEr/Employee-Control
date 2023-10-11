
import React, { Component } from 'react'; // Используйте `import React` и `Component`

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, rise: false, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: false, rise: true, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 },
      ],
      term: '',
      filter: 'all',
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id),
      };
    });
  };

  createItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArray = [...data, newItem];
      return {
        data: newArray,
      };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const newData = [...data];
      const prev = newData[index];
      const newItem = { ...prev, increase: !prev.increase };
      newData[index] = newItem;

      return {
        data: newData,
      };
    });
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const newData = [...data];
      const prev = newData[index];
      const newItem = { ...prev, rise: !prev.rise };
      newData[index] = newItem;

      return {
        data: newData,
      };
    });
  };

  onValueChange = (id, e) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const newData = [...data];
      const prev = newData[index];
      const newItem = { ...prev, salary: e.target.value }; 
      newData[index] = newItem;

      return {
        data: newData,
      };
    });
  } ;


  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'more1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  
  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo
          amountOfEmployees={data.length}
          increaseCount={data.filter(item => item.increase === true).length}
        />

        <div className="search-panel">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
          onValueChange={this.onValueChange}
        />
        <EmployeesAddForm createItem={this.createItem} />
      </div>
    );
  }
}

export default App;
