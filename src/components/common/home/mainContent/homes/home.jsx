import React from 'react'
import './style.css'
import Popular from '../popular/popular'
import Ppost from '../ppost/ppost'

const Home = () => {
  return (
    <>
        <main>
            <div className="container">
                <section className="mainContent">
                  <Popular />
                  <Ppost />
                </section>
                <section className="sideContent"></section>
            </div>
        </main>
    </>
  )
}

export default Home