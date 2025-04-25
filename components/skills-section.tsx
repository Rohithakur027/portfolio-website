"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Database,
  Server,
  Layers,
  GitBranch,
  PenTool,
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express", "REST APIs"],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MongoDB"],
    },
    {
      title: "DevOps & Tools",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", , "Vercel", "VSCode", "Postman"],
    },
    {
      title: "Architecture",
      icon: <Layers className="h-6 w-6" />,
      skills: [
        "Microservices",
        "API Design",
        "System Design",
        "Performance Optimization",
      ],
    },
    {
      title: "Design",
      icon: <PenTool className="h-6 w-6" />,
      skills: ["Figma", "UI/UX Principles", "Responsive Design", "Wireframing"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
