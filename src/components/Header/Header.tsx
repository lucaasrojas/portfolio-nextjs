"use client";
import React, { useEffect } from "react";
import styles from "./Header.module.css";

import Link from 'next/link'
const headerPadding = 90;
const Header = () => {
	const sections = ["Home", "About", "Experience", "Portfolio"]
	function handleThemeToggle() {
		const toggler = document.getElementById("toggle_theme");
		if (toggler) {
			toggler.classList.toggle("bx-moon");
			toggler.classList.toggle("bx-sun");
			document.body.classList.toggle("dark-mode");
		}
	}
	let sectionPositions:{[key:string]:any} = {}

	React.useEffect(() => {
		sections.forEach((section:string) => {
			if(!sectionPositions[section]){
				sectionPositions[section]= document.getElementById(section.toLowerCase())?.offsetTop || 0
			}
		})
		scrollTo({top: 0})
	},[])

const scrollToSection = (sectionId:string) => {
	const section = document.getElementById(sectionId)
	if(section) {

		scrollTo({
			behavior: "smooth",
			top:( section.offsetTop - headerPadding)
		})
	}
}

	return (
		<header className="header">
			<a href="#" className="logo">
				Lucas.
			</a>

			<nav className="navbar">
				{
					sections.map((section:string) => (
						<Link key={section} href="#" scroll={false} onClick={() => scrollToSection(section.toLowerCase())} className="">
							{section}
						</Link>
					))
				}

			</nav>
			<button className={styles.toggle} onClick={() => handleThemeToggle()}>
				<i id="toggle_theme" className={`bx bx-sun toggle-icon`}></i>
			</button>
		</header>
	);
};

export default Header;
