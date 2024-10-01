"use client";
import React, { useCallback, useEffect } from "react";
import styles from "./About.module.css";
import { hobbies, technologies } from "@/const";

const About = () => {
	const [showTechnologies, setShowTechnologies] = React.useState(false);
	useEffect(() => {
		const list = document.getElementById("technologies_list");
		const listYPosition = list?.getBoundingClientRect()["y"];

		window.addEventListener("scroll", () =>
			handleScrollOnElement(listYPosition, list)
		);
		return () => {
			document.removeEventListener("scroll", () =>
				handleScrollOnElement(listYPosition, list)
			);
		};
	}, []);

	const handleScrollOnElement = useCallback(
		(listYPosition: any, list: HTMLElement | null) => {
			if (
				!showTechnologies &&
				list &&
				listYPosition &&
				window.scrollY + document.body.clientHeight >= listYPosition
			) {
				setShowTechnologies(true);
			}
		},
		[showTechnologies]
	);
	return (
		<section id="about" className="about">
			<div className="about-content">
				<div className="left-column p-10">
					<ul
						style={{ position: "relative" }}
						className={`${styles.technologies_list}`}
						id="technologies_list"
					>
						{technologies.map((tech, i) => (
							<li
								key={tech}
								style={{ "--i": i } as React.CSSProperties}
								className={showTechnologies ? styles.technology_item : ""}
							>
								<p className={`font-semibold text-xl my-20 tech_label`}>{tech}</p>
							</li>
						))}
					</ul>
				</div>

				<div className="right-column">
					<div className="circle">
						{hobbies.map((hobby, i) => (
							<div
								key={`${hobby}-${i}`}
								className="item"
								style={{ "--i": i } as React.CSSProperties}
							>
								<h3>{hobby}</h3>
							</div>
						))}

						<div className="circle-line"></div>
					</div>
					<div className="overlay"></div>
					<div className="overlay-filler"></div>
				</div>
			</div>
		</section>
	);
};

export default About;
