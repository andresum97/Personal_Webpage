import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import ComicVignettePrincipal from './components/comic_vignette/comic_vignettePrincipal.jsx';
import Comic_panel from './components/comic_panel/comic_panel.jsx';

ReactDOM.render(
    <ComicVignettePrincipal title="Andrés Urízar" color="#D83D2C" />,
    document.getElementById('title')
)
ReactDOM.render(
    <Comic_panel textbottom="" texttop="Conocimientos" principalText="Colegio Suizo Americano"/>,
    document.getElementById('panel1')
)
ReactDOM.render(
    <Comic_panel textbottom="prueba" texttop=""  principalText="" />,
    document.getElementById('panel2')
)
ReactDOM.render(
    <Comic_panel textbottom="prueba2" texttop=""  principalText="" />,
    document.getElementById('panel3')
)
ReactDOM.render(
    <Comic_panel textbottom="prueba" texttop=""   principalText="" />,
    document.getElementById('panel4')
)
ReactDOM.render(
    <Comic_panel textbottom="prueba"  texttop="prueba"  principalText="" />,
    document.getElementById('panel5')
)