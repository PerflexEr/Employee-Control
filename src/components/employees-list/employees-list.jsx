import EmployeesListItem from "../employees-list-item/employees-list-item"
import "./employees-list.css"


function EmployeesList({data,onDelete , onToggleIncrease , onToggleRise , onValueChange}) {

const elements = data.map(item => {
    const {id, ...itemProps} = item
    return(
      <EmployeesListItem 
      key={id}
      {...itemProps}
      onDelete={() => onDelete(id)}
      onToggleIncrease={() => onToggleIncrease(id)}
      onToggleRise={() => onToggleRise(id)}
      onValueChange={(e) => onValueChange(id, e)}
      />
    )
    
  }
)
  return(
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList