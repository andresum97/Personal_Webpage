import React, { Component } from "react";
import './design.scss';


class Comic_panel extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {texttop,textbottom} = this.props;
        return(
            <div className="panel">
                <TextTop text={texttop} />
                <TextBottom text={textbottom} />
            </div>
        )
    }
}

function TextTop(props) {
    if(Object.keys(props.text).length == 0){
        return null;
    }
    return (
        <div>
            <p className="text top-text">{props.text}</p>
        </div>
    );
}
function TextBottom(props) {
    if(Object.keys(props.text).length == 0){
        return null;
    }
    return (
        <div>
            <p className="text bottom-text">{props.text}</p>
        </div>
    );
}

export default Comic_panel;