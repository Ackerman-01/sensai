import React from 'react'
import { redirect } from 'next/navigation';
import { getUserOnboardingStatus } from '@/actions/user';
import { getIndustryInsights } from '@/actions/dashboard';
import DashboardView from "./_components/dashboard-view";

const IndustryInsightPage = async () => {
        const {isOnboarded}=await getUserOnboardingStatus();
       
        if(!isOnboarded){    
            redirect("/onboarding");
        }
        const insights = await getIndustryInsights();

  return (
    <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
  )
}

export default IndustryInsightPage
