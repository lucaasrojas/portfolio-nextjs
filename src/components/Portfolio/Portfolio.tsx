"use client";
import React, { useEffect, useState } from "react";
import ProjectCard, { ProjectCardItem } from "../ProjectCard/ProjectCard";
import "./portfolio.css";

const createSlug = (str: string) => {
	return str.trim().replaceAll(" ", "-").toLowerCase();
};

const Portfolio = () => {
	const [projectsList, setProjectsList] = useState<ProjectCardItem[]>([]);
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
			<div className="portfolio-content grid xs:grid-cols-1 xl:grid-cols-2">
				{projectsList.map((project: ProjectCardItem) => (
					<ProjectCard
						key={createSlug(project.title)}
						{...project}
					></ProjectCard>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
