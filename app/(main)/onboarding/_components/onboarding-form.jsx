"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from "sonner";
import { zodResolver } from '@hookform/resolvers/zod';
import { onboardingSchema } from '@/app/lib/schema';
import { useRouter } from 'next/navigation';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    CardAction
} from '@/components/ui/card';
import { useState,useEffect } from 'react';

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectLabel
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useFetch from "@/hooks/use-fetch";
import { updateUser } from "@/actions/user";
const OnboardingForm = ({ industries }) => {
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const router = useRouter();


    const {
    loading: updateLoading,
    fn: updateUserFn,
    data: updateResult,
   } = useFetch(updateUser);

    const { register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm({
        resolver: zodResolver(onboardingSchema),
    });

    const onSubmit = async (values) => { 
       try {
      const formattedIndustry = `${values.industry}-${values.subIndustry
        .toLowerCase()
        .replace(/ /g, "-")}`;

      await updateUserFn({
        ...values,
        industry: formattedIndustry,
      });
    } catch (error) {
      console.error("Onboarding error:", error);
    }

    };

      useEffect(() => {
    if (updateResult?.success && !updateLoading) {
      toast.success("Profile completed successfully!");
      router.push("/dashboard");
      router.refresh();
    }
  }, [updateResult, updateLoading]);


    const watchIndustry = watch("industry");

    return (
        <div className='flex items-center justify-center bg-background'>
            <Card className='w-full max-w-lg mt-10 mx-2'  >
                <CardHeader>
                    <CardTitle className='gradient-title text-4xl'>Complete your profile</CardTitle>
                    <CardDescription>Select your Industry to get Personalized career
                        insights and recommendations.
                    </CardDescription>

                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className='space-y-2'>
                            <Label htmlFor="industry"> Industry</Label>
                            <Select
                                onValueChange={(value) => {
                                    setValue("industry", value);
                                    setSelectedIndustry(industries.find((ind) => ind.id === value));
                                    setValue("subIndustry", ""); // Reset sub-industry when industry changes
                                }}>
                                <SelectTrigger id="industry" >
                                    <SelectValue placeholder="Select Industry" />
                                </SelectTrigger>
                                <SelectContent className="max-h-64 overflow-y-auto">
                                    {industries.map((ind) => {
                                        return <SelectItem value={ind.id} key={ind.id}>{ind.name}</SelectItem>
                                    })}


                                </SelectContent>
                            </Select>
                            {errors.industry && <p className='text-red-500 text-sm'>{errors.industry.message}</p>}

                        </div>


                        {/* //for sub-industry */}

                        {watchIndustry && (
                            <div className='space-y-2'>
                                <Label htmlFor="subIndustry"> Specialization</Label>
                                <Select
                                    onValueChange={(value) =>  // Reset sub-industry when industry changes
                                        setValue("subIndustry", value)}>
                                    <SelectTrigger id="subIndustry" >
                                        <SelectValue placeholder="Select Specialization" />
                                    </SelectTrigger>
                                    <SelectContent className="max-h-64 overflow-y-auto">
                                        {selectedIndustry?.subIndustries.map((ind) => {

                                            return <SelectItem value={ind} key={ind}>{ind}</SelectItem>
                                            })}

                                       


                                    </SelectContent>
                                </Select>
                                {errors.subIndustry && <p className='text-red-500 text-sm'>{errors.subIndustry.message}</p>}

                            </div>)}


                        <div className="space-y-2">
                            <Label htmlFor="experience">Years of Experience</Label>
                            <Input
                                id="experience"
                                type="number"
                                min="0"
                                max="50"
                                placeholder="Enter years of experience"
                                {...register("experience")}
                            />
                            {errors.experience && (
                                <p className="text-sm text-red-500">
                                    {errors.experience.message}
                                </p>
                            )}
                        </div>



                        <div className="space-y-2">
                            <Label htmlFor="skills">Skills</Label>
                            <Input
                                id="skills"
                                placeholder="e.g., Python, JavaScript, Project Management"
                                {...register("skills")}
                            />
                            <p className="text-sm text-muted-foreground">
                                Separate multiple skills with commas
                            </p>
                            {errors.skills && (
                                <p className="text-sm text-red-500">{errors.skills.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about your professional background..."
                className="h-32"
                {...register("bio")}
              />
              {errors.bio && (
                <p className="text-sm text-red-500">{errors.bio.message}</p>
              )}
            </div>


             <Button type="submit" className="w-full" disabled={updateLoading}>
              {updateLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Complete Profile"
              )}
            </Button>


                    </form>
                </CardContent>

            </Card>
        </div>
    )
}

export default OnboardingForm
