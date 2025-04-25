"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "E-Cell Coordinator",
    company: "University",
    period: "2023 - 2024",
    description:
      "Organized tech events and workshops. Managed a team of volunteers and coordinated with industry professionals for guest lectures.",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "2023 - 2025",
    description:
      "Built websites for small businesses and startups. Focused on creating responsive, user-friendly interfaces with modern technologies.",
  },
];

export default function ExperienceSection() {
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
    <section id="experience" className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and career highlights
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`mb-12 relative ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right md:ml-0 md:mr-auto md:pl-0"
                  : "md:pl-12 md:ml-auto md:mr-0 md:pr-0"
              } md:w-1/2 w-full pl-12`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-5 w-4 h-4 rounded-full bg-primary z-10 md:transform md:translate-x-2" />

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Briefcase className="h-4 w-4" />
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
