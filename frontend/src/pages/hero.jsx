import React from 'react'
import { Button } from '@/components/ui/button'
import { TbProgressCheck } from 'react-icons/tb';
import { MdSelfImprovement } from 'react-icons/md';
import { LuTestTubeDiagonal } from 'react-icons/lu';
import { VscFeedback } from 'react-icons/vsc';
import { FaQuoteLeft } from 'react-icons/fa';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Navbar from '@/components/navbar'

const features = [
  {
    icon: <TbProgressCheck className="text-5xl mb-2" />,
    title: "Track Your Progress",
    description: "Monitor your improvement with detailed analytics and reports.",
  },
  {
    icon: <MdSelfImprovement className="text-5xl mb-2" />,
    title: "Improve Your Skills",
    description: "Access a variety of resources and practice materials to enhance your skills.",
  },
  {
    icon: <LuTestTubeDiagonal className="text-5xl mb-2" />,
    title: "Practice with Real Tests",
    description: "Take full-length practice tests to simulate the exam experience.",
  },
  {
    icon: <VscFeedback className="text-5xl mb-2" />,
    title: "Get Personalized Feedback",
    description: "Receive tailored feedback on your performance to identify areas for improvement.",
  },
];

const feedbacks = [
  {
    quote: "AptiBox helped me improve my scores significantly. The practice tests were invaluable!",
    name: "John Doe",
  },
  {
    quote: "I love the personalized feedback feature. It really helped me focus on my weak areas.",
    name: "Jane Smith",
  },
  {
    quote: "The resources available on AptiBox are top-notch. I felt well-prepared for my exams.",
    name: "George Brown",
  },
  {
    quote: "AptiBox has been a game-changer for my exam preparation. Highly recommend!",
    name: "Albert Rizz",
  },
];

const Hero = () => {
  const handleLearnMore = () => {
    // Logic to navigate to the Features section
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleGetStarted = () => {
    // Logic to navigate to the Sign Up section or open a modal
    const signUpSection = document.getElementById('sign-up');
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="dark:text-white h-screen selection:bg-[#328aff] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center h-[90%] text-center px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to AptiBox</h1>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
          Discover your potential with AptiBox - your ultimate platform for mastering aptitude tests.
        </p>
        <div className="space-x-4">
          <Button className="dark:text-white shadow-md" onClick={handleGetStarted}>
            Get Started
          </Button>
          <Button variant="outline" className="shadow-md" onClick={handleLearnMore}>
            Learn More
          </Button>
        </div>
      </main>

      {/* Features Section */}
      <section className='flex flex-col justify-center items-center h-screen'>
        <h2 className="text-3xl font-bold">Features</h2>
        <div className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              {feature.icon}
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='flex flex-col justify-center items-center h-screen'>
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <div className="my-8">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {feedbacks.map((feedback, index) => (
                <CarouselItem key={index}>
                  <Card className="mx-4">
                    <CardContent>
                      <FaQuoteLeft className="text-2xl mb-4 text-gray-400" />
                      <p className="italic mb-4">"{feedback.quote}"</p>
                      <p className="font-bold text-right">~ {feedback.name}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <footer className='m-20 text-center text-gray-600 border-t border-gray-800 p-4'>
        <p className='text-md'>
          &copy; {new Date().getFullYear()} AptiBox. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Hero
