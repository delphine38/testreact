import React from "react";
import {Link, NavLink} from 'react-router-dom';

function Menu(){
return(
    <div className="header">
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" a href="/Menu">Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" a href="/Docs">Docs</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" a href="/Community">Community</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" a href="/Tuto">Tuto</a>
  </li>
</ul>


<h1 className="text-center">Bonjour et bienvenue sur mon premier essai de site react test avec Bootstrap</h1>

    </div>
)
}

export default Menu;