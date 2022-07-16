import React from "react"
import './Details.css'
class Rating extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            className: ''
        }
    const setActive = () => {
        this.setState({
            className: this.state.className = 'active'
        })
    }
    }
    render() {
      return(
        <div id="rating">
            <span id="1" className={this.className} onClick={this.setActive()}>*</span>
            <span id="2" className={this.className}>*</span>
            <span id="3" className={this.className}>*</span>
            <span id="4" className={this.className}>*</span>
            <span id="5" className={this.className}>*</span>
        </div>
      )
    }
  }
export default Rating