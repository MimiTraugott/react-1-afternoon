import React, {Component} from 'react'

class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray:[],
            userInput: ''
        }
    }
handleChange (val) {
    this.setState({ userInput: val })
}


    render () {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } ></input>
                <button className="confimationButton">Split </button>
                <span className="resultsBox">{ JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox">{ JSON.stringify(this.stateoddArray) }</span>
            </div>
        
        )
    }
}
export default EvenAndOdd