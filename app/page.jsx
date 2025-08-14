
import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { features } from "@/data/features";
import { Card, CardContent } from "@/components/ui/card";
import { howItWorks } from "@/data/howItWorks";
import { testimonials } from "@/data/testimonials";   
import Image from "next/image";   
export default function Home() {


    return <div>
        <div className="grid-background"></div>
        <HeroSection />


        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Powerful Features for your Career Growth</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {features.map((feature, index) => {
                        return (<Card
                            key={index}
                            className="border-2 hover:border-primary transition-colors duration-400"
                        >
                            <CardContent className="pt-6 text-center flex flex-col items-center">
                                <div className="flex flex-col items-center justify-center">
                                    {feature.icon}
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        );
                    })}
                </div>
            </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <h3 className="text-4xl font-bold">30+</h3>
                        <p className="text-muted-foreground">Industries Covered</p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <h3 className="text-4xl font-bold">1000+</h3>
                        <p className="text-muted-foreground">Interview Questions</p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <h3 className="text-4xl font-bold">97%</h3>
                        <p className="text-muted-foreground">Success Rate</p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <h3 className="text-4xl font-bold">24/7</h3>
                        <p className="text-muted-foreground">AI Support</p>
                    </div>
                </div>
            </div>
        </section>


        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">How it works </h2>
                    <p className="text-muted-foreground">Four simple steps to accelerate your career growth</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
            </div>
        </section>


        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">What our users say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonials, index) => {
                        return (<Card
                            key={index}
                            className="border-2 hover:border-primary transition-colors duration-400"
                        >
                            <CardContent className="pt-6 ">
                                <div className="flex  flex-col space-y-4">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="relative w-12 h-12 flex-shrink-0">
                                            <Image
                                        height={50}
                                        width={50}
                                        src={testimonials.image}
                                        className="rounded-full object-cover border-2 border-primary/20"
                                        
                                        />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{testimonials.author}</p>
                                            <p className="text-sm text-muted-foreground">{testimonials.role}</p>
                                            <p className="text-sm text-primary">{testimonials.company}</p>
                                        </div>
                                    </div>
                                    <blockquote>
                                        <p className="text-muted-foreground italic relative">
                                            <span className="text-primary text-3xl absolute -top-4 -left-2">
                                                &quot;
                                            </span>
                                            {testimonials.quote}
                                            <span  className="text-primary text-3xl absolute -bottom-4"> 
                                                &quot;
                                            </span>
                                        
                                        </p>
                                    </blockquote>
                                </div>
                                
                            </CardContent>
                        </Card>
                        );
                    })}
                </div>
            </div>
        </section>


    </div>
}
