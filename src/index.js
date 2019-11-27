import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import ComicVignettePrincipal from './components/comic_vignette/comic_vignettePrincipal.jsx';
import Comic_panel from './components/comic_panel/comic_panel.jsx';

ReactDOM.render(
    <ComicVignettePrincipal title="Andrés Urízar" color="#D83D2C" graph="0"/>,
    document.getElementById('title')
)
ReactDOM.render(
    <Comic_panel textbottom="" texttop="Educación" graph="0" principalText= 'Primaria, Secundaria y Diversificado Colegio Suizo Americano. Graduado en Bachillerato en Computación / Universidad: Universidad del Valle 3er año en Ing. Ciencias de la Computación' />,
    document.getElementById('panel1')
)
ReactDOM.render(
    <Comic_panel textbottom="Reconocimientos" texttop="" graph="0" principalText="Diploma de Mención Academica en 2017 y 2018 en la UVG / Auxiliar del curso de Física I y II, Algoritmos y Progamación Básica en la UVG / Certificado de TOEFL Junior Standard Test" />,
    document.getElementById('panel2')
)
ReactDOM.render(
    <Comic_panel textbottom="Experiencia laboral" texttop="" graph="0" principalText=""  />,
    document.getElementById('panel3')
)
ReactDOM.render(
    <Comic_panel textbottom="Conocimientos" texttop="" graph="1"  principalText=""  />,
    document.getElementById('panel4')
)
ReactDOM.render(
    <Comic_panel textbottom="y me define"  texttop="lo que me gusta" graph="0" principalText="" />,
    document.getElementById('panel5')
)