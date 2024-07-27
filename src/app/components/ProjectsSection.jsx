"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "MedicalBERT",
    description: "Analyzing symptoms and medical reports to detect probable diseases using Machine Learning",
    image: "/images/projects/1.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Sleep Analyzer",
    description: "Analyzing Sleep Cycle patterns to find probable cardiovascualar diseases using Machine Learning",
    image: "/images/projects/2.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Real Time Object Detection",
    description: "Detecting pedestrians using YOLOv8, CNN, SSD, OpenCV, Pytorch and CUDA",
    image: "/images/projects/3.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Stacks and Queues Learning",
    description: "An Interactive website where users can learn concepts and solve problems of Stacks & Queues in Data Structures",
    image: "/images/projects/4.png",
    tag: ["All", "Web Dev"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Smart Home Automation",
    description: "Automating lights and fans via remote control and mobile application, monitoring humidity levels, and sending real-time alerts using IoT technology",
    image: "/images/projects/5.png",
    tag: ["All", "IoT"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Router and Switch Configuration",
    description: "Manually configure routers and switches and connect them via LAN",
    image: "/images/projects/6.png",
    tag: ["All", "Computer Networking"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Enterprise Architecture",
    description: "Architect a company that uses Emerging Technoloiges in Fintech to tackle existing problems using Emerging Technolgies",
    image: "/images/projects/7.png",
    tag: ["All", "Others"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Simple Chat Bot in Python",
    description: "Building a tool that can assist you in your daily tasks",
    image: "/images/projects/8.png",
    tag: ["All", "Programming"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Zookeeper with Python",
    description: "Help zoo take care of its animals by building a tool to keep an eye on them",
    image: "/images/projects/9.png",
    tag: ["All", "Programming"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Bill Splitter",
    description: "Develop a tool to pay an equal amount",
    image: "/images/projects/10.png",
    tag: ["All", "Programming"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Loan Calculator",
    description: "Calculate different financial parameters using Python",
    image: "/images/projects/11.png",
    tag: ["All", "Programming"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="IoT"
          isSelected={tag === "IoT"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Computer Networking"
          isSelected={tag === "Computer Networking"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web Dev"
          isSelected={tag === "Web Dev"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Programming"
          isSelected={tag === "Programming"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Others"
          isSelected={tag === "Others"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
