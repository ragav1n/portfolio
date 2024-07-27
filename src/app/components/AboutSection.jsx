"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C++/C</li>
        <li>Python</li>
        <li>Machine Learning</li>
        <li>Computer Networking</li>
        <li>Blockchain</li>
        <li>Internet of Things</li>
        <li>Project/Team Manager</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Hyperskill</li>
        <li>R V College of Engineering, Bengaluru</li> 
      </ul>
    ),
  },
  {
    title: "Publications",
    id: "publications",
    content: (
      <ul className="list-disc pl-2">
        <li>Published a paper in IAES International Journal of Artificial Intelligence (IJAI), 2024</li>
        <li>Published a paper in 7th IEEE International Conference CSITSS-2023</li>
        <li>Presented a paper in ERPBSS, 2024</li>
        <li>Presented a paper “Emerging Tech in IBM” in The Open Group INITIATE, 2024</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Passionate Computer Science Engineering student with
          extensive experience in Machine Learning, Computer
          Networks, and IoT. Enthusiastic about Computer Networking
          and Cyber Security, actively participating in workshops and
          conferences. Serving as the Treasurer of IEEE SIGHT and a
          member of ACM. Proficient in C++, C, and Python, with a
          strong commitment to continuous learning and professional
          development.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Publications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
