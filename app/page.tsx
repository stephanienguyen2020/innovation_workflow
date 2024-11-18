"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowRight,
  Lightbulb,
  Users,
  FileText,
  PenTool,
  Rocket,
} from "lucide-react";
import AuthModal from "@/components/auth-modal";

const AnimatedScribble = ({
  path,
  duration = 2,
  delay = 0,
}: {
  path: string;
  duration?: number;
  delay?: number;
}) => {
  return (
    <motion.path
      d={path}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

function FeatureCard({
  icon,
  title,
  description,
  isActive,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
}) {
  return (
    <motion.div
      className={`p-6 rounded-lg transition-all duration-300 ${
        isActive
          ? "bg-black text-white"
          : "bg-white text-black border border-black"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      layout
    >
      <motion.div className="flex items-center mb-4" layout>
        {icon}
        <h3 className="text-xl font-bold ml-2">{title}</h3>
      </motion.div>
      <motion.p layout>{description}</motion.p>
    </motion.div>
  );
}

export default function MinimalistLandingPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Lightbulb />,
      title: "AI-Powered Ideation",
      description: "Generate innovative concepts with machine learning",
    },
    {
      icon: <Users />,
      title: "Smart Stakeholder Mapping",
      description: "Identify key players automatically",
    },
    {
      icon: <FileText />,
      title: "Intelligent Research",
      description: "Access relevant data with AI assistance",
    },
    {
      icon: <PenTool />,
      title: "Adaptive Prototyping",
      description: "Create evolving prototypes based on feedback",
    },
    {
      icon: <Rocket />,
      title: "Predictive Management",
      description: "Optimize workflows with AI analytics",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <motion.div
            className="text-3xl font-bold relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            InnovationFlow
            <svg
              className="absolute -top-4 -left-4 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
            >
              <AnimatedScribble path="M10,50 Q25,25 50,50 T90,50" />
            </svg>
          </motion.div>
          <div className="space-x-6">
            <Link href="#features" className="hover:underline">
              Features
            </Link>
            <Link href="#how-it-works" className="hover:underline">
              How It Works
            </Link>
            <AuthModal />
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-24 relative">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revolutionize Your Innovation
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Harness AI-driven workflows to transform ideas into reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/app">
                Start Innovating <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
          >
            <AnimatedScribble path="M10,90 Q50,10 90,90" delay={0.5} />
          </svg>
        </section>

        <section id="features" className="mb-24 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Intelligent Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isActive={index === activeFeature}
              />
            ))}
          </div>
          <svg
            className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
            viewBox="0 0 100 100"
          >
            <AnimatedScribble path="M10,10 Q50,50 90,10 T10,90" duration={3} />
          </svg>
        </section>

        <section id="how-it-works" className="mb-24 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Smart Workflow
          </h2>
          <div className="flex justify-between items-center">
            {["Define", "Research", "Ideate", "Prototype", "Launch"].map(
              (step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mb-2">
                    {index + 1}
                  </div>
                  <span className="text-sm">{step}</span>
                </motion.div>
              )
            )}
          </div>
          <svg
            className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none"
            viewBox="0 0 100 50"
          >
            <AnimatedScribble
              path="M0,25 Q25,50 50,25 T100,25"
              duration={4}
              delay={1}
            />
          </svg>
        </section>

        <section className="mb-24 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Start Innovating
          </h2>
          <div className="bg-muted rounded-lg p-8 max-w-md mx-auto">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <Label htmlFor="projectIdea">Your Project Idea</Label>
                <Input
                  id="projectIdea"
                  placeholder="E.g., AI-powered sustainable energy solution"
                  className="bg-background border-input"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Generate Insights <ArrowRight className="ml-2" />
              </Button>
            </form>
          </div>
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
          >
            <AnimatedScribble
              path="M10,90 C25,10 75,10 90,90"
              duration={5}
              delay={2}
            />
          </svg>
        </section>

        <section className="text-center relative">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Process?
          </h2>
          <p className="text-xl mb-8">
            Join innovators already using InnovationFlow.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/app">Get Started Free</Link>
          </Button>
          <svg
            className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none"
            viewBox="0 0 50 50"
          >
            <AnimatedScribble
              path="M0,25 Q25,0 50,25 T0,25"
              duration={3}
              delay={1.5}
            />
          </svg>
        </section>
      </main>

      <footer className="bg-muted py-8 mt-24">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 InnovationFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
