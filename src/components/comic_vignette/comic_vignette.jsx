import React, { Component } from "react";
import './design.scss';

class ComicVignette extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { title, color } = this.props;
        const style = {
            backgroundColor: color 
        }
        return(
            <div className="principal" style={style}>
                {title.length > 0 &&
                    <div className="title"> 
                        <h1>
                            {title}
                        </h1>
                    </div>
                }
            </div>
        )
    }
}

export default ComicVignette;