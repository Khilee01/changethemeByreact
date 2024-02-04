import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {classTheme: 'LightMode'}

  themeChange = () => {
    this.setState(prevState => ({
      classTheme:
        prevState.classTheme === 'DarkMode' ? 'LightMode' : 'DarkMode',
    }))
  }

  render() {
    const {classTheme} = this.state
    return (
      <div className="mainContainer">
        <div className={classTheme}>
          <h1>Click To Change Mode</h1>
          {classTheme === 'DarkMode' ? (
            <button type="button" onClick={this.themeChange}>
              Dark Mode
            </button>
          ) : (
            <button type="button" onClick={this.themeChange}>
              Light Mode
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
