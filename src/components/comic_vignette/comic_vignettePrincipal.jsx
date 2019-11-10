import React, { Component } from "react";
import './design.scss';

class ComicVignettePrincipal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { title, color } = this.props;
        const style = {
            backgroundColor: color 
        }
        return(
            <div className="principal" >
                <div className="contain">
                    <div className="back1"></div>
                    <div className="back1 back2"></div>
                    <div className="back1 back3"></div>
                    <div className="title"> 
                        <h1>
                            {title}
                        </h1>
                    </div>  
                </div>
                <div className="socialblock">
                    <div className="social">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                        <a href="#" class="fa fa-github"></a>
                        <a href="#" class="fa fa-instagram"></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComicVignettePrincipal;