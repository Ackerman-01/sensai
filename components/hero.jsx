import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return( <section className="w-full pt-36 md:pt-48 pb-10">
    <div className="space-y-6 mx-auto text-center">
        <div className="space-y-6 mx-auto ">
            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title " >Your Personal AI Coach for
                <br />
                Professional Success
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">Advance your career with personalized guidance, interview prep, and AI-powered
                tools. Whether you're a student, job seeker, or professional, Sensai is here to help you
                achieve your career goals.
            </p>
        </div>
        <div className="gap-4 flex justify-center items-center flex-wrap">
            <Link href="/dashboard">
                <Button size="lg" className="px-8">
                    Get Started
                </Button>
            </Link>
             <Link href="/dashboard">
                <Button size="lg" className="px-8" variant={"outline"}>
                    Get Started
                </Button>
            </Link>
        </div>
        <div>
            <div>
                <Image 
                src={"/banner.jpeg"}
                width={1280}
                height={720}
                alt="Sensai Banner"
                className="rounded-lg shadow-lg w-full h-auto" 
                priority
                ></Image>
            </div>
        </div>
    </div>
  </section>
  );
  
};

export default HeroSection
