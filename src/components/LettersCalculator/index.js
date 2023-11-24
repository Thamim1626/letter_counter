import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letter: 0, value: ''}

  onChange = event => {
    this.setState({
      letter: event.target.value.length,
      value: event.target.value,
    })
  }

  onClick = () => this.setState({letter: 0, value: ''})

  render() {
    const {letter, value} = this.state
    return (
      <div className="container">
        <div className="left-section">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="input">
            Enter the phrase
          </label>
          <br />
          <input
            value={value}
            type="text"
            placeholder="Enter the phase"
            className="input"
            id="input"
            onChange={this.onChange}
          />

          <p className="button" onClick={this.onClick}>
            No.of letters: {letter}
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="right-section"
        />
      </div>
    )
  }
}

export default LettersCalculator
