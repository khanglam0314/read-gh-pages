import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)

        // First approach to create Ref
        this.inputRef = React.createRef() 

        // Second approach to create Ref
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }
    componentDidMount() {
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if (this.cbRef) {
            this.cbRef.focus()
        }
    }
    clickHandler = () => {
        // alert(this.inputRef.current.value)
        alert(this.cbRef.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
