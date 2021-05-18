import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

    clickHandlerAF = () => {
        this.setState({
            message: 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Approach 1: binding in the render method
                <button onClick={this.clickHandler.bind(this)}>Click</button>
                 */}

                {/* Approach 2: using arrow function in render method 
                <button onClick={() => this.clickHandler()}>Click</button>
                */}

                {/* Approach 3: binding in class constructor 
                Add this line of code to constructor: this.clickHandler = this.clickHandler.bind(this);    
                <button onClick={this.clickHandler}>Click</button>
                */}

                {/* Approach 4: using arrow function as class property (change way define the function) */}
                <button onClick={this.clickHandlerAF}>Click</button>
            </div>
        )
    }
}

export default EventBind
