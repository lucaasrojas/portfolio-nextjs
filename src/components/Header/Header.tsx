"use client";
import React, { useEffect } from "react";

const Header = () => {
	useEffect(() => {
		const toggleIcon = document.querySelector(".toggle-icon");
		if (toggleIcon) {
			toggleIcon.addEventListener("click", () => {
				toggleIcon.classList.toggle("bx-moon");
				toggleIcon.classList.toggle("bx-sun");
				document.body.classList.toggle("dark-mode");
			});
		}
	}, []);

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
			<div className="toggle">
				<i className="bx bx-sun toggle-icon"></i>
			</div>
		</header>
	);
};

export default Header;
