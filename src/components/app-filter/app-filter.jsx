import './app-filter.css'
import { Component } from 'react'

class AppFilter extends Component{
  
  render(){
    const buttonsData = [
      {name: 'all' , label: 'Все сотрудники'},
      {name: 'rise' , label: ' На повышение'},
      {name: 'more1000' , label: 'Больше 1000$'}
    ]

    const buttons = buttonsData.map(({name,label}) => {
      const active = this.props.filter === name
      const clazz = active ? 'btn-light' : 'btn-outline-light'
      return (
        <button className={`btn ${clazz}`}
        type="button"
        data-all='all'
        key={name}
        onClick={() => this.props.onFilterSelect(name)}>
          {label}
        </button>
      )
    })

    return(
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}

export default AppFilter