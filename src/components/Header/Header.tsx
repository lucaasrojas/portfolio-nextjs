"use client";
import React, { useEffect } from "react";
import styles from "./Header.module.css";
const Header = () => {
	function handleThemeToggle() {
		const toggler = document.getElementById("toggle_theme");
		if (toggler) {
			toggler.classList.toggle("bx-moon");
			toggler.classList.toggle("bx-sun");
			document.body.classList.toggle("dark-mode");
		}
	}

	return (
		<header className="header">
			<a href="#" className="logo">
				Lucas.
			</a>

			<nav className="navbar">
				<a href="#home" className="">
					Home
				</a>
				<a href="#about" className="">
					About
				</a>
				<a href="#portfolio" className="">
					Portfolio
				</a>
			</nav>
			<button className={styles.toggle} onClick={() => handleThemeToggle()}>
				<i id="toggle_theme" className={`bx bx-sun toggle-icon`}></i>
			</button>
		</header>
	);
};

export default Header;
