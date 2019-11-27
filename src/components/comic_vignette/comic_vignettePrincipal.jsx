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
                        <a href="https://www.facebook.com/albertoandres.urizar" className="fa fa-facebook">
                            <span className="fatooltiptext">Alberto Andres Urizar</span>
                        </a>
                        <a href="https://www.linkedin.com/in/andres-urizar-53b87a18a/" className="fa fa-linkedin">
                            <span className="fatooltiptext">Andres Urizar</span>
                        </a>
                        <a href="https://github.com/andresum97" className="fa fa-github">
                            <span className="fatooltiptext">andresum97</span>
                        </a>
                        <a href="https://www.instagram.com/andres_um97/?hl=es-la" className="fa fa-instagram">
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