// Write your code here
import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {eachApp} = this.props
    return (
      <li className="appItem">
        <img className="appImg" src={eachApp.imageUrl} alt={eachApp.appName} />
        <h1 className="appName">{eachApp.appName}</h1>
      </li>
    )
  }
}

export default AppItem
