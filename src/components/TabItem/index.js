// Write your code here
import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  onClick = () => {
    const {eachTab, onChangeTab} = this.props
    onChangeTab(eachTab.tabId)
  }

  render() {
    const {eachTab, isActive} = this.props

    const check = isActive ? 'selectedTab' : null
    return (
      <li className="tabItem">
        <button
          type="button"
          onClick={this.onClick}
          className={`tabBtn ${check}`}
        >
          {eachTab.displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
