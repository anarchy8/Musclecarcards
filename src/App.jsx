import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import Navbar from './components/navbar'
import Card from './components/card'
import corvette from './assets/corvettec6.jpg'
import challenger from './assets/challenger.jpg'
import viper from './assets/vipersrt10.jpg'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='card-wrapper'>
        <Card specs={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit risus, vestibulum non ipsum id, rutrum dictum sem. Praesent ut mauris vel diam vulputate gravida vitae a justo. Donec maximus ipsum non massa finibus, in sagittis nisl sagittis. Ut eu turpis ex. Integer eu commodo dui. Sed egestas odio ac."} title={"Corvette"} img={corvette}></Card>
        {/*****************Card***************/}
        <Card specs={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit risus, vestibulum non ipsum id, rutrum dictum sem. Praesent ut mauris vel diam vulputate gravida vitae a justo. Donec maximus ipsum non massa finibus, in sagittis nisl sagittis. Ut eu turpis ex. Integer eu commodo dui. Sed egestas odio ac."} title={"Challenger"} img={challenger}></Card>
        {/*****************Card***************/}
        <Card specs={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit risus, vestibulum non ipsum id, rutrum dictum sem. Praesent ut mauris vel diam vulputate gravida vitae a justo. Donec maximus ipsum non massa finibus, in sagittis nisl sagittis. Ut eu turpis ex. Integer eu commodo dui. Sed egestas odio ac."} title={"Viper"} img={viper}></Card>
      </div>

    </>
  )
}

export default App
