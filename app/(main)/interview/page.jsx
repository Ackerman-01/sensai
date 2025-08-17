import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRightIcon } from 'lucide-react';
import StatsCards from './_components/stats-cards';
import PerformanceChart from './_components/performance-charts';
import QuizList from './_components/quiz-list';
import { getAssessments } from '@/actions/interview';

const InterviewPage = async() => {

  const assessments = await getAssessments();
  return (
    <div>
      <h1 className="text-6xl font-bold gradient-title mb-5">Interview Preparation</h1>


    <div className='space-y-4'>
<StatsCards assessments={assessments}/>
<PerformanceChart assessments={assessments}/>
<QuizList assessments={assessments}/>

    </div>
    </div>
  )
}

export default InterviewPage
