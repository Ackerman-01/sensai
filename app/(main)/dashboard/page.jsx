import React from 'react'
import { redirect } from 'next/navigation';
import { getUserOnboardingStatus } from '@/actions/user';

const IndustryInsightPage = async () => {
        const {isOnBoarded}=await getUserOnboardingStatus();
        if(!isOnBoarded){    
            redirect("/onboarding");
        }
  return (
    <div>
      Dashboard Page
    </div>
  )
}

export default IndustryInsightPage
