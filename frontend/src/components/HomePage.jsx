import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  AnimatedSection,
  SlideInLeft,
  SlideInRight
} from "./AnimatedSection";

import Slideshow from "./Slideshow";
import StatCard from "./StatCard";
import FeatureCard from "./FeatureCard";
import TechFeature from "./TechFeature";
import FloatingOrbs from "./FloatingOrbs";
import NeuralNetwork from "./NeuralNetwork";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Neural Network Background */}
      <NeuralNetwork />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <FloatingOrbs />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-6">
                  🧠 Intelligent Health Screening
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Timely Identification Powers{" "}
                  <span className="text-gradient">Better Outcomes</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-xl"
              >
                Our intelligent platform examines brain MRI imagery to identify
                Alzheimer's indicators with remarkable accuracy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-4"
              >
                <Link to="/detection" className="btn-hero">
                  Begin Assessment
                </Link>
                <Link to="/WhatToDo" className="btn-outline-hero">
                  Discover the Process
                </Link>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <div className="absolute inset-0 rounded-2xl">
                <Slideshow />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          <StatCard value="97%" label="Precision Score" />
          <StatCard value="24/7" label="Always Online" delay={0.1} />
          <StatCard value="3-5s" label="Analysis Duration" delay={0.2} />
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <SlideInLeft className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Cutting-Edge System
              </h2>
              <p className="text-muted-foreground text-lg">
                We blend machine learning with clinical knowledge to deliver
                precise Alzheimer's screening.
              </p>
            </div>

            <div className="space-y-6">
              <TechFeature
                title="Sophisticated Scan Interpretation"
                description="Algorithms designed for medical imaging"
              />
              <TechFeature
                title="Neural Network Analysis"
                description="AI models detect subtle brain variations"
                delay={0.1}
              />
              <TechFeature
                title="Clinician-Backed Validation"
                description="Validated by neurology specialists"
                delay={0.2}
              />
            </div>
          </SlideInLeft>

          <SlideInRight>
            <img
              src="https://files.infinitiresearch.com/wp-content/uploads/2018/02/iStock-493216371-1-1200x900.jpg"
              alt="AI Medical Technology"
              className="rounded-2xl"
            />
          </SlideInRight>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              What We Offer
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard title="Medicine Notifications" description="Timely alerts." />
            <FeatureCard title="Activity Planning" description="Daily routines." />
            <FeatureCard title="Facial Recognition Aid" description="Recognize loved ones." />
            <FeatureCard title="Memory Keeper" description="Capture moments." />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
