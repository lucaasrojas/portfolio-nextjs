"use client";
import React, { useEffect, useState, useRef } from "react";
import ProjectCard, { ProjectCardItem } from "../ProjectCard/ProjectCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./portfolio.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const createSlug = (str: string) => {
  return str.trim().replaceAll(" ", "-").toLowerCase();
};

function parseCSVtoJSON(csvData: string) {
  const lines = csvData.trim().split("\r\n");
  const headers = lines[0].split(",");

  const projects = lines.slice(1).map((line) => {
    const values = line.split(",");
    let project: { [key: string]: string } = {};
    headers.forEach((header, index) => {
      project[header] = values[index];
    });
    return project;
  });

  return projects as ProjectCardItem[];
}

const Portfolio = () => {
  const [projectsList, setProjectsList] = useState<ProjectCardItem[]>([]);
  const projectsContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLDivElement>(".projectCard").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "restart none none reverse",
            },
          }
        );
      });
    },
    { scope: projectsContainer }
  );

  const fetchProjectsList = () => {
    fetch(
      "https://docs.google.com/spreadsheets/d/16Dautg48PL9T4jjyEWb-mUtozgVlDCBJkyObQA9psS8/export?format=csv"
    )
      .then((res) => res.text())
      .then((res) => {
        setProjectsList(parseCSVtoJSON(res));
      });
  };
  useEffect(() => {
    fetchProjectsList();
  }, []);

  return (
    <section id="projects" className="portfolio">
      <div
        ref={projectsContainer}
        className="portfolio-content grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 "
      >
        {projectsList.map((project: ProjectCardItem) => (
          <ProjectCard
            className="projectCard"
            key={createSlug(project.title)}
            {...project}
          ></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
