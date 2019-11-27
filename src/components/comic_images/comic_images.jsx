import React, { Component } from "react";
import './design.scss';
import BarChart from "../graph/graphbar.jsx";


class Comic_panel extends Component{
    constructor(props){
        super(props);
        this.graphvalue = false;
    }
    render(){
        const {texttop,textbottom, images} = this.props;
        return(
            <div className="panel">
                <TextTop text={texttop} />
                <TextBottom text={textbottom} />
                <PrincipalImage text={images} />
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

function PrincipalImage(props) {
    if(Object.keys(props.text).length == 0){
        return null;
    }
    return(
        <div className="principaltext">
            <img src={props.text} alt="image"/>
        </div>
    );
}

export default Comic_panel;