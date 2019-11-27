import React, { Component } from "react";
import './design.scss';
import BarChart from "../graph/graphbar.jsx";


class Comic_panel extends Component{
    constructor(props){
        super(props);
        this.graphvalue = false;
    }
    render(){
        const {texttop,textbottom, principalText,graph} = this.props;
        if(graph == "1"){
            this.graphvalue = true;
        }
        return(
            <div className="panel">
                <TextTop text={texttop} />
                <TextBottom text={textbottom} />
                <PrincipalText text={principalText} />
                <GraphComponent value={this.graphvalue} />
            </div>
        )
    }
}

function GraphComponent(props){
    if(!props.value){
        return null;
    }
    return(
        <div className="graphpadding">
            <BarChart />
        </div>
    )
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

function PrincipalText(props) {
    if(Object.keys(props.text).length == 0){
        return null;
    }
    return(
        <div className="principaltext">
            <span>
                {props.text}
            </span>
        </div>
    );
}

export default Comic_panel;