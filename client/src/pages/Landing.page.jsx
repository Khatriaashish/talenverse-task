import React from 'react'
import HeroComponent from '../components/hero.component'
import FeatureComponent from '../components/feature.component'
import LeftRightComponent from '../components/leftright.component'
import TeamComponent from '../components/team.component'
import FaqComponent from '../components/faq.component'
import CallToActionComponent from '../components/calltoaction.component'
import Logosection from '../components/logosection.component'

const LandingPage = () => {
  return (
    <div>
        <HeroComponent/>
        <FeatureComponent/>
        <LeftRightComponent/>
        <TeamComponent/>
        <FaqComponent/>
        <CallToActionComponent/>
        <Logosection/>
    </div>
  )
}

export default LandingPage
