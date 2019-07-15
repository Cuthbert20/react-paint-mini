import React, {Component} from 'react'

export default class Square extends Component {
    constructor(){
        super()

        this.state= {
            backgroundColor: "white"
        }
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this)
    }
    changeBackgroundColor(){
        this.setState({ 
            //Ask Sam or matt why background color isn't set to this.backgroundcolor and why didn't i have to pass in props to super and constructor
            backgroundColor: this.props.selectedColor
        })
    }
    render(){
        return(
            <div style={{
                height: 20,
                width: 20,
                border: "1px solid black",
                background: this.state.backgroundColor
            }}
            onClick={this.changeBackgroundColor} ></div>
        )
    }
    //onMouseMove
}