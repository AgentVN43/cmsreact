import React from 'react'
import Banner from '../Components/Banner/Banner'
import Slideinfo from '../Components/SlideInfo/Slideinfo'
import Sectionwhy from '../Components/SectionWhy/Sectionwhy'
import Service from '../Components/Services/Service'
import Partner from '../Components/Partner/Partner'
import Clientsay from '../Components/ClientSay/Clientsay'
import "../Components/sass/base/_reset.scss"
//import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <>
    <Banner/>
    <Slideinfo/>
    <Sectionwhy/>
    <Service/>
    <Partner/>
    <Clientsay/>
    </>
  )
}
