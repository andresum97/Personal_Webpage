import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import ComicVignettePrincipal from './components/comic_vignette/comic_vignettePrincipal.jsx';
import Comic_panel from './components/comic_panel/comic_panel.jsx';
import Comic_examples from './components/comic_examples/comic_examples.jsx';
import Comic_images from './components/comic_images/comic_images.jsx';

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
    <Comic_panel textbottom="" texttop="" graph="0" principalText=""  />,
    document.getElementById('panel3')
)
ReactDOM.render(
    <Comic_panel textbottom="" texttop="Conocimientos" graph="1"  principalText=""  />,
    document.getElementById('panel4')
)
ReactDOM.render(
    <Comic_panel textbottom="Experiencia laboral" texttop="" graph="0" principalText="Practicas realizadas en Tigo en departamento de Tigo People - 2016/ Software Development en Pacifiko.com - 2019" />,
    document.getElementById('panel5')
)
ReactDOM.render(
    <Comic_images texttop="Aplicacion de Voto Electrónico"  textbottom="trabajos realizados" images="./src/images/votacion.jpg" />,
    document.getElementById('panel6')
)
ReactDOM.render(
    <Comic_panel textbottom=""  texttop="" graph="0"  principalText="" />,
    document.getElementById('panel6-1')
)
ReactDOM.render(
    <Comic_examples webpage="http://msdeus.site/17632/lab08/" textbottom="Trabajos realizados" texttop="" widthframe="545" heightframe="295" />,
    document.getElementById('panel7')
)
ReactDOM.render(
    <Comic_examples webpage="http://msdeus.site/17632/proyecto01/" textbottom="Trabajos realizados" texttop="" widthframe="1230" heightframe="425" />,
    document.getElementById('panel8')
)
ReactDOM.render(
    <Comic_images textbottom="mis amigos"  texttop="lo que me define" images="./src/images/amigos.jpg" />,
    document.getElementById('panel10')
)
ReactDOM.render(
    <Comic_images textbottom="mi familia"  texttop="lo que me define" images="./src/images/familia.jpg" />,
    document.getElementById('panel9')
)
ReactDOM.render(
    <Comic_panel textbottom=""  texttop="" graph="0"  principalText="" />,
    document.getElementById('panel10-1')
)
ReactDOM.render(
    <Comic_images textbottom="La música"  texttop="lo que me define" images="./src/images/Divide.jpg" />,
    document.getElementById('panel11')
)
ReactDOM.render(
    <Comic_panel textbottom=""  texttop="" graph="0"  principalText="" />,
    document.getElementById('panel11-1')
)
ReactDOM.render(
    <Comic_images textbottom="Mi fe"  texttop="lo que me define" images="./src/images/santiago.jpg" />,
    document.getElementById('panel12')
)
ReactDOM.render(
    <Comic_images textbottom="Viajar(destino en Bucket List)"  texttop="lo que me define" images="./src/images/Iguazu.jpg" />,
    document.getElementById('panel13')
)
ReactDOM.render(
    <Comic_images textbottom="Los comics"  texttop="lo que me define" images="./src/images/comics.jpg" />,
    document.getElementById('panel14')
)