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
                    <div className="prueba">
                        <div className="back1"></div>
                        <div className="back1 back2"></div>
                        <div className="back1 back3"></div>
                    </div>
                    <div className="title"> 
                        <h1>
                            {title}
                        </h1>
                    </div>  
                </div>
                <div className="socialblock">
                    <div className="social">
                        <a href="#" className="fa fa-facebook">
                            <span className="fatooltiptext">Alberto Andres Urizar</span>
                        </a>
                        <a href="#" className="fa fa-linkedin">
                            <span className="fatooltiptext">Andres Urizar</span>
                        </a>
                        <a href="#" className="fa fa-github">
                            <span className="fatooltiptext">andresum97</span>
                        </a>
                        <a href="#" className="fa fa-instagram">
                            <span className="fatooltiptext">andresum_97</span>
                        </a>
                        <a href="#" className="fa fa-whatsapp">
                            <span className="fatooltiptext">+502 4762-2485</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComicVignettePrincipal;