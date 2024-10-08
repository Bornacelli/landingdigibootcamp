import { Component } from "react";
import "./Informacion.css"

class InformacionData extends Component{
    render(){
        return (

            <div className={this.props.className}> 

                <div className="des-text">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img src={this.props.img1} alt="img"/>
                    <img src={this.props.img2} alt="img"/>
                </div>
            </div>
        )
    }
}

export default InformacionData