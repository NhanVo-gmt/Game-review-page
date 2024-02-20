import React from 'react'
import './style.css'
import Popular from '../popular/popular'
import Ppost from '../ppost/ppost'
import Life from '../life/life'
import Music from '../music/music'
import Side from '../../sideContent/side/side'

const Home = () => {
  return (
    <>
        <main>
            <div className="container">
                <section className="mainContent">
                  <Popular />
                  <Ppost />
                  <Life />
                  <Music />
                </section>
                <section className="sideContent">
                  <Side />
                </section>
            </div>
        </main>
    </>
  )
}

export default Home