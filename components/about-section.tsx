"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Rocket } from "lucide-react";

export default function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            My journey, passion, and expertise in web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              My Journey
            </h3>
            <p className="text-muted-foreground mb-6">
              Hi, I’m a passionate Full-Stack Engineer currently pursuing my
              engineering degree from NIT Hamirpur. What started as a curiosity
              about how websites work turned into a deep dive into both frontend
              and backend technologies.
            </p>
            <p className="text-muted-foreground">
              Currently building products, documenting my learnings, and open to
              remote opportunities. I'm particularly interested in working with
              startups and on projects that make a meaningful impact.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
            className="grid grid-cols-1 gap-6"
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Proficient in building complete web applications from
                    frontend interfaces to backend systems and databases.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Remote Collaboration</h4>
                  <p className="text-muted-foreground">
                    Experienced in working remotely with distributed teams,
                    maintaining clear communication and delivering results.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Startup Enthusiast</h4>
                  <p className="text-muted-foreground">
                    Passionate about the startup ecosystem and building products
                    that solve real-world problems efficiently.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
