import React from "react"
import TechStack from "@/components/TechStack/TechStack";
import Experience from "@/components/Experience/Experience";
import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import 'tailwindcss/tailwind.css';
import ScrollIndicator from "@/components/subcomponents/ScrollIndicator/ScrollIndicator";
export default function Home() {

	return (
		<>
			<NavBar />
			<main>
				<Hero />
				<TechStack />
				<Experience />
				<Portfolio />
			</main>

			<ScrollIndicator />
		</>
	);
}
