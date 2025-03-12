import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopTests from '../components/TopTests'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <TopTests/>
        <Banner/>
    </div>
  )
}

export default Home