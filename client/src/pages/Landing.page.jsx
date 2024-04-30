import React from 'react'
import Homeheading from '../components/homeheading.component'
import HeroComponent from '../components/hero.component'
import FeatureComponent from '../components/feature.component'
import LeftRightComponent from '../components/leftright.component'

const LandingPage = () => {
  return (
    <div>
        <Homeheading/>
        <HeroComponent/>
        <FeatureComponent/>
        <LeftRightComponent/>
    </div>
  )
}

export default LandingPage
