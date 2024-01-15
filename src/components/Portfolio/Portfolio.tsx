import React from "react";
import ProjectCard, { ProjectCardItem } from "../ProjectCard/ProjectCard";
import "./portfolio.css";
const projectList: ProjectCardItem[] = [
	{
		title: "Best Timer",
		id: "besttimer",
		description: "Minimalistic Timer | ReactJS",
		linkRepo: "https://github.com/lucaasrojas/best-timer",
		linkSite: "https://lucaasrojas-best-timer.netlify.app/",
	},
	{
		title: "Share your WiFi",
		id: "sharewifi",
		description: "Share you WiFi credentials easily | ReactJS",
		linkRepo: "https://github.com/lucaasrojas/qrcode-wifi",
		linkSite: "https://lucaasrojas-share-wifi.netlify.app/",
	},
	{
		title: "Expense Tracker",
		id: "expense_tracker",
		description: "Manage your expenses with this tool | ReactJS - Material UI",
		linkRepo: "https://github.com/lucaasrojas/expense-tracker",
		linkSite: "https://lucaasrojas-expense-tracker.netlify.app/",
	},
	{
		title: "Food Order",
		id: "food_order",
		description: "Forget to cook, order your meal | ReactJS ",
		linkRepo: "https://github.com/lucaasrojas/react-food-order",
		linkSite: "https://lucaasrojas-food-order.netlify.app/",
	},
	{
		title: "Stickit Notes",
		id: "stickit_notes",
		description: "Just notes | Vanilla JS",
		linkRepo: "https://github.com/lucaasrojas/stickynotes_vanillajs",
		linkSite: "https://lucaasrojas-sticky-notes.netlify.app/",
	},
	{
		title: "Calculator",
		id: "calculator",
		description: "Nothing else to say | ReactJs",
		linkRepo: "https://github.com/lucaasrojas/React-Calculator",
		linkSite: "https://lucaasrojas-calculator.netlify.app/",
	},
	{
		title: "PokeDex",
		id: "pokedex",
		description: "Track your pokemons | ReactJs",
		linkRepo: "https://github.com/lucaasrojas/pokedex",
		linkSite: "https://lucaasrojas-pokedex.netlify.app/",
	},
];
const Portfolio = () => {
	return (
		<section id="portfolio" className="portfolio">
			<div className="portfolio-content">
				{projectList.map((project: ProjectCardItem) => (
					<ProjectCard
						key={project.id}
						id={project.id}
						title={project.title}
						description={project.description}
						linkRepo={project.linkRepo}
						linkSite={project.linkSite}
					></ProjectCard>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
