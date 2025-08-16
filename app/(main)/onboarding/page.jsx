import React from 'react'
import { industries } from '@/data/industries'
//check ifuser is onbooarded

const OnboardingPage = () => {

  return (
    <main>
        <OnboardingForm industries={industries}/>
    </main>
  )
}

export default OnboardingPage
