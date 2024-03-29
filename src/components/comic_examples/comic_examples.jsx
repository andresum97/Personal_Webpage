import React, { Component } from "react";
import './design.scss';

class Comic_examples extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {webpage,texttop,textbottom,widthframe,heightframe} = this.props;
        console.log(webpage);
        const iframe = '<iframe src="'+webpage+'" height="'+heightframe+'" width="'+widthframe+'"></iframe>';
        console.log(iframe);
        return(
            <div className="panel">
                <TextTop text={texttop} />
                <TextBottom text={textbottom} />
                <WebFrame page={iframe} />
            </div>
        )
    }
}

function createFrame(text) {
    return {__html: text};
}

function WebFrame(props) {
    if(Object.keys(props.page).length == 0){
        return null;
    }
    return (
        <div className="framechart">
            <div dangerouslySetInnerHTML={createFrame(props.page)} />
        </div>
    );
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


export default Comic_examples;