"use client"
import React from 'react'
import  Link  from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Quiz from '../_components/quiz';

const MockInterviewPage = () => {
  return (
    <div>
      <div>
        <Link href={"/interview"}>
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Interview Preparation
          </Button>
        </Link>

        <div>
          <h1>

          </h1>
          <p>

          </p>
        </div>
        </div>

        <Quiz />
    </div>
  )
}

export default MockInterviewPage;
