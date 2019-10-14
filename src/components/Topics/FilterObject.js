import React, { Component } from 'react'

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            students: [
                {
                    name: 'Peter Smith',
                    title: 'Senior Student',
                    age: 39,
                },
                {
                    name: 'Sara Anderson',
                    age: 24,
                    hobby: 'guitar',
                },
                {
                    name: 'Steve Carlson',
                    title: 'Sophmore Student',
                },
            ],

            userInput: '',
            filteredStudents: [],
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterStudents(prop) {
        let students = this.state.students;
        let filterStudents = [];

        for (let i = 0; i < students.length; i++) {
            if (students[i].hasOwnProperty(prop)) {
                filterStudents.push(students[i]);
            }
        }
        this.setState({ filterStudents: filterStudents });
    }

    render() {
        return (
            <div className="puzzleBox FilterObjectPB">

                <h4> Filter Object </h4>

                <span className="puzzleText"> Original: {JSON.stringify(this.state.students, null, 10)}</span>

                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} ></input>

                <button className="confirmationButton" onClick={() => this.filterStudents(this.state.userInput)}> Filter </button>
                <span className="resultsBox"> Filtered: {JSON.stringify(this.state.filterStudents, null, 10)}</span>
&nbsp;
            </div>
        )
    }

}
export default FilterObject