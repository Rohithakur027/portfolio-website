"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-900/5 dark:to-purple-900/20 -z-10" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="section-container w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm <span className="gradient-text">Rohit Thakur</span>
              <br />
              Full-Stack Engineer
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Building modern, scalable web applications with a passion for
              creating impactful products and working with innovative startups.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" className="rounded-full">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 relative max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl" />
              <div className="relative bg-card border border-border rounded-full overflow-hidden shadow-xl">
                <Image
                  src="/images/avatar.webp"
                  alt="Rohit Thakur"
                  width={512}
                  height={512}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
