'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { useAnime } from "@/lib/hooks/useAnime";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
import Image  from "next/image";

export default function Home() {
  const { 
    heroRef, 
    aboutRef, 
    projectsRef, 
    isHeroInView, 
    isAboutInView, 
    isProjectsInView,
    fadeInUp,
    fadeInLeft,
    staggerContainer
  } = useAnime();

  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section id="hero" className="h-screen flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-[url('/topography.svg')] bg-repeat opacity-10"
          style={{ backgroundSize: 'cover' }}
        />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I&apos;m <span className="text-primary">Nobel Smith</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A passionate full-stack developer crafting beautiful and functional web experiences
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex gap-4">
              <Button size="lg" asChild>
                <a href="https://github.com/nobelsmith" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/nobel-smith-74a57b1a3/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:nobel.hooks@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background flex justify-center">
        <div className="container px-4 md:px-6 max-w-6xl">
          <motion.div
            ref={aboutRef}
            initial="hidden"
            animate={isAboutInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-muted-foreground md:text-xl">
                I&apos;m a full-stack developer with a passion for creating elegant solutions to complex problems.
                With expertise in modern web technologies, I build applications that are both beautiful and functional. 
                My experience includes building robust orchestration platforms that handle complex workflows and microservices at scale. 
                
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Frontend</h3>
                  <p className="text-sm text-muted-foreground">React, Next.js, Tailwind CSS</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Backend</h3>
                  <p className="text-sm text-muted-foreground">Python, Golang, Dagster</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Database</h3>
                  <p className="text-sm text-muted-foreground">PostgreSQL, LibSQL</p>
                </div>
              </div>
              <div className="space-y-2">
                If you want to know more about me, check out my <a href="https://nobelsmith.com" className="text-primary font-bold">Blog</a>.  
              </div>
            </motion.div>
            <motion.div variants={fadeInLeft} className="flex items-center justify-center">
              {/* <div className="relative h-[300px] w-[300px] rounded-full bg-gradient-to-r from-primary to-secondary opacity-20"> */}
              <div className="relative h-[300px] w-[300px] rounded-full overflow-hidden">
                <Image src="/wedding_photo.jpg" alt="Wedding photo of Nobel and Ali" fill className="object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted flex justify-center">
        <div className="container px-4 md:px-6 max-w-6xl">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>
          <motion.div
            ref={projectsRef}
            initial="hidden"
            animate={isProjectsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
          >
            {/* Project Card 1 */}
            <motion.div variants={fadeInUp}>
              <Card className="project-card">
                <CardHeader>
                  <CardTitle>Portfolio Website</CardTitle>
                  <CardDescription>A modern web application built with Next.js, Shadcn UI, and Tailwind CSS</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    You&apos;re looking at it! It is a simple and clean portfolio website that showcases my projects and skills.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div variants={fadeInUp}>
              <Card className="project-card">
                <CardHeader>
                  <CardTitle>Blog</CardTitle>
                  <CardDescription>A simple blog built with Hugo and the PaperMod theme</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A personal blog where I share my thoughts and insights on technology, golf, and other topics I am passionate about.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div variants={fadeInUp}>
              <Card className="project-card">
                <CardHeader>
                  <CardTitle>Project Three</CardTitle>
                  <CardDescription>A full-stack application with modern architecture</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Description of your third project goes here. Showcase the technical challenges you overcame.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* <Footer /> */}
    </main>
  );
}
