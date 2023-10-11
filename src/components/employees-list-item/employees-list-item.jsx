import './employees-list-item.css';

import React from 'react';

const EmployeesListItem = (props) => {
  const {id,name,salary,onDelete,onToggleIncrease,onToggleRise,onValueChange ,increase,rise} = props
  
  let classNames = "list-group-item d-flex justify-content-between"

  if(increase === true){
    classNames += ' increase'
  }
  if(rise === true){
    classNames += ' like'
  }
      
  return (
    
    <li className= {classNames}>
        <span className="list-group-item-label"
              onClick={onToggleRise}
        >{name}</span>
        <input type="text" c
        lassName="list-group-item-input" 
        defaultValue={salary + ' $'}
        onChange={(id,e) => onValueChange(id, e)}
       />
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
                className="btn-cookie btn-sm "
                onClick={onToggleIncrease}>
                <i className="fas fa-cookie"></i>
            </button>

            <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
  )

}
export default EmployeesListItem;