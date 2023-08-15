// Write your code here
import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {eachTab} = this.props
    return (
      <li className="tabItem">
        <button type="button" className="tabBtn">
          {eachTab.displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
