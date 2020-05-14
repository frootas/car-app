import React from 'react';

class Comp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            // declare varaiables initially
            x: 0,
            y: 0, 
            ans: 0,
            userAns: '',
            errorText: '',
            resultText: ''
        };
        this.getNumbers = this.getNumbers.bind(this); // we need this
    }
    getNumbers() {
        var n1 = Math.floor(Math.random() * 10);
        var n2 = Math.floor(Math.random() * 10);
        this.setState({ // we need this
            x: n1,
            y: n2,
            ans: n1 + n2
        });
    }
    getInput = (event) => {
        this.setState({
            userAns: event.target.value
        });
    }
    getUserAns = (event) => {
        let n = event.target.name;
        let v = event.target.value;
        this.setState({[n]:v});
    }
    submitHandler = (event) => {
        event.preventDefault();
        let u = this.state.userAns;
        let correctAns = this.state.ans;
        if (!Number(u)) {
            this.setState({
                errorText: "You must enter a number"
            });
        } else {
            this.setState({
                errorText: "All good"
            });
            if (Number(u) === correctAns) {
                this.setState({
                    resultText: "CORRECT ANSWER!!!"
                });
            } else {
                this.setState({
                    resultText: "UNLUGGY, the correct answer was " + correctAns
                })                
            }
        }
    }
    render() {
        return (
            <div className="Comp">
                <h1>added this heading</h1>
                <p>hello Comp {this.state.color}</p>
                <p>this number is {this.state.x}</p>
                <button onClick={this.getNumbers}>click</button> 
                <p>x = {this.state.x} and y = {this.state.y}</p>
                <p>x + y = {this.state.ans}</p>

                <input type='text' name='userAns' onChange={this.getUserAns}></input>
                <button onClick={this.submitHandler}>submit</button>
                <p>user answer is {this.state.userAns}</p>
                <p>Result Text: {this.state.resultText}</p>
                <p>Error Text: {this.state.errorText}</p>
            </div>
        );
    }
}



/*
function Comp() {
  return (
    <div className="Comp">

        hello Comp
    </div>
  );
}
*/

export default Comp;
