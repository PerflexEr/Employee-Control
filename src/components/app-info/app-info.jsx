import './app-info.css'
import { Component } from 'react'
class AppInfo extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="app-info">
      <h1>Учет сотрудников в Prosperity</h1>
      <h2>Общее число сотрудников: {this.props.amountOfEmployees}</h2>
      <h2>Премию получат: {this.props.increaseCount}</h2>
    </div>
    )
  }
  
}

export default AppInfo