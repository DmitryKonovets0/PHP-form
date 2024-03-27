import React, {Component} from "react";
import './email.scss'

export default class Email extends Component{
    constructor(props) {
    super(props);
    this.state = {
        text: "visible-text",
        buttonClicked: false
        }
}
        hideText = (e) => {
            if (e.target.tagName.toLowerCase() !== 'button' && !this.state.buttonClicked) {
                this.setState({ text: "hidden-text", buttonClicked: true });
                console.log(1);
            }
        };


    visibleText = () => {
        this.setState({text: "visible-text", buttonClicked: false} )
        console.log(this.state.text)
        document.querySelector('input').value = ''
    }
    render() {
        let {text} = this.state
        return(
            <div className="wrapper">
                <div className="container">
                    <div onClick={this.hideText}  className="box">
                        <input type="email" className='email'/>
                        <div className={text}>Leave your email here</div>
                        <button onClick={this.visibleText}>send</button>
                    </div>
                </div>
            </div>

        )
    }
}