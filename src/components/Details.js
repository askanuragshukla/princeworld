
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Card from "./Card";
import CardNews from "./CardNews";
import { config } from "react-spring";
import Carroussel from "./Carroussel";
import React from "react";
import DALLECornSeedsfxf from './images/DALLECornSeedsfxf.webp'
import DallESpicesfxf from './images/DallESpicesfxf.webp'
import rice from './images/rice.webp'
import DALLEMoongnMasoorfxf from './images/DALLEMoongnMasoorfxf.webp'
import makhana from './images/makhanahd.avif'


function Details() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <CardNews imagen={DALLEMoongnMasoorfxf} title="Moong/Mung Beans and Masoor/red Lentils" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardNews imagen={makhana} title="Makhana/Fox nuts" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardNews imagen={rice} title="Rice" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardNews imagen={DALLECornSeedsfxf} title="Corn/Maize" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardNews imagen={DallESpicesfxf} title="Spices" />
      )
    }
    
    
  ];


  return (
    <div> <Carroussel
    cards={cards}
    height="500px"
    width="90%"
    margin="0 auto"
    offset={2}
    showArrows={false}
  /></div>
  )
}

export default Details