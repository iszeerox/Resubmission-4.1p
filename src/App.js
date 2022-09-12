import React from 'react';
import './App.css';
import CardItem from './CardItem'
import Wallpaper from './Wallpaper'
import Navbar from './Navbar';
import authors from './authors';
import './card.css';
import { Card } from 'semantic-ui-react';
import Newsletter from './Newsletter';
import Socials from './Socials';
import abilities from './abilities';

function cardComponent (authors, i)
{
  return <CardItem 
  key = {authors.key}
  Image = {authors.Image}
  Name = {authors.Name}
  Date =  {authors.Date}
  Description = {authors.Description}
  Friends = {authors.Friends} />

}
function cardComponent_2 (abilities, i)
{
  return <CardItem
  key = {abilities.key}
  Image = {abilities.Image}
  Name = {abilities.Name}
  Date =  {abilities.Date}
  Description = {abilities.Description}
  Friends = {abilities.Friends} />

}
function App() {
  return ( 
  <div>

    <Navbar />

    <Wallpaper />


<a className = "row">
  {authors.map(cardComponent)}
/</a>
<b className="row">
  {abilities.map(cardComponent_2)}
</b>

<c className="centre">
<Newsletter />
</c>

<Socials />

  </div>

  );
}

export default App

