import React from 'react'
import { industries } from '@/data/industries'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/dist/server/api-utils';
//check ifuser is onbooarded




const OnboardingPage = async () => {
    const {isOnBoarded}=await getUserOnboardingStatus();
    if(isOnBoarded){    
        redirect("/dashboard");
    }

  return (
    <main>
        <OnboardingForm industries={industries}/>
    </main>
  )
}

export default OnboardingPage
