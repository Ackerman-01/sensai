import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRightIcon } from 'lucide-react';

const InterviewPage = () => {
  return (
    <div>
      <Link href={"/interview/mock"}>
          <Button variant="link" className="gap-2 pl-0">
            <ArrowRightIcon className="h-4 w-4" />
            Take Mock Interview
          </Button>
        </Link>
    </div>
  )
}

export default InterviewPage
