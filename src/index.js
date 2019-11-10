import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import ComicVignette from './components/comic_vignette/comic_vignette.jsx';

ReactDOM.render(
    <ComicVignette title="Andrés Urízar" color="#D83D2C" />,
    document.getElementById('title')
)