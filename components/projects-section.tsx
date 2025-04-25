"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Tirthan Valley Tourism",
    description:
      "A tourism website for Tirthan Valley showcasing attractions, accommodations, and activities with booking functionality.",
    image: "/images/tirthan-valley.webp",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Stripe"],
    demoUrl: "https://tirthanvalley.vercel.app/",
    githubUrl: "https://github.com/Rohithakur027/tirthanvalley",
  },
  {
    title: "Music Academy Website",
    description:
      "A Music Academy website showcasing lessons, teachers, and student enrollment with easy navigation and interactive learning tools.",
    image: "/images/music-academy.webp",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
    demoUrl: "https://musicacadmy.vercel.app/",
    githubUrl: "https://github.com/Rohithakur027/musicacademy",
  },
];

export default function ProjectsSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and the technologies I've used
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-4">
                  <Button asChild variant="default" size="sm">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
