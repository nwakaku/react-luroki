import React from 'react'
import Cli from './utils/Cli'
import Cloud from './utils/Cloud'
import Footer from './utils/Footer'
import Lan from './utils/Lan'
import NavBar from './utils/NavBar'
import ShowCase from './utils/ShowCase'
import Stats from './utils/Stats'

const Index = () => {
    return (
        <div>
            <NavBar />
            <ShowCase />
            <Stats />
            <Cli />
            <Cloud />
            <Lan />
            <Footer />
        </div>
    )
}

export default Index
