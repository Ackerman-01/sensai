import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
const QuizList = ({ assessments }) => {
    const router = useRouter();
    const [selectedQuiz, setSelectedQuiz] = React.useState(null);
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                    <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>

            </Card>
        </div>
    )
}

export default QuizList
