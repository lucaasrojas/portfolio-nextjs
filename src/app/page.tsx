import React from "react"
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import 'tailwindcss/tailwind.css';
export default function Home() {

	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Experience />
				<Portfolio />
			</main>
		</>
	);
}
