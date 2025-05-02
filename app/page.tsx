import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm <span className="text-primary">Your Name</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A passionate full-stack developer crafting beautiful and functional web experiences
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button size="lg" variant="outline">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-muted-foreground md:text-xl">
                I'm a full-stack developer with a passion for creating elegant solutions to complex problems.
                With expertise in modern web technologies, I build applications that are both beautiful and functional.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Frontend</h3>
                  <p className="text-sm text-muted-foreground">React, Next.js, Tailwind CSS</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Backend</h3>
                  <p className="text-sm text-muted-foreground">Node.js, Python, SQL</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] rounded-full bg-gradient-to-r from-primary to-secondary opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>
          <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {/* Project Card 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Project One</CardTitle>
                <CardDescription>A modern web application built with Next.js and Tailwind CSS</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Description of your first project goes here. Explain the technologies used and your role in the project.
                </p>
              </CardContent>
            </Card>

            {/* Project Card 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Project Two</CardTitle>
                <CardDescription>An innovative solution using React and Node.js</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Description of your second project goes here. Highlight the key features and your contributions.
                </p>
              </CardContent>
            </Card>

            {/* Project Card 3 */}
            <Card>
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
          </div>
        </div>
      </section>
    </main>
  );
}
