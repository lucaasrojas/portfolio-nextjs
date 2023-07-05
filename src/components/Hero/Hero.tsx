import React from "react";
import Image from "next/image";
import "./home.css";
import LinkButton from "../Button/LinkButton";
const Hero = () => {
	return (
		<section id="home" className="home">
			<div className="home-content">
				<h1>Hi, I&apos;m Lucas Rojas</h1>
				<h3>Frontend Developer</h3>
				<p>Developer since 2018. Self-taught. Coffee</p>
				<LinkButton
					href="/Lucas_Rojas.pdf"
					download
					variant="primary"
					label="Download CV"
				/>
			</div>
			<div className="profile-image">
				<div className="image-circle">
					<div className="white-space"></div>
					<div className="image-circle-line"></div>
					<div className="image-wrapper">
						<Image
							width={280}
							height={280}
							src="/assets/profile_pic.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="home-sci">
				<a href="https://github.com/lucaasrojas" target="_blank">
					<i className="bx bxl-github"></i>
				</a>
				<a href="https://www.linkedin.com/in/lucaasrojas/" target="_blank">
					<i className="bx bxl-linkedin"></i>
				</a>
			</div>
		</section>
	);
};

export default Hero;
