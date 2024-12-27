import React from "react";
import "./home.css";
import LinkButton from "../Button/LinkButton";
import ImageSpinner from "../subcomponents/ImageSpinner/ImageSpinner";

interface SocialMediaIconLinkProps {
	src: string
	type: 'linkedin' | 'github'
}

const SocialMediaIconLink:React.FC<SocialMediaIconLinkProps> = ({ src, type }) => {

	return (
		<a href={src} target="_blank" className="socialMediaIcon_link">
			<i className={`bx bxl-${type} socialMediaIcon_icon`}></i>
		</a>
	)
}

const Hero = () => {
	return (
		<section id="home" className="home container max-sm:p-4 max-md:items-baseline sm:p-10 mx-auto">
			<div className="grid md:grid-cols-2 gap-4 w-full sm:grid-cols-1">

				<div className="home-content max-[450px]:items-baseline max-[768px]:order-2 min-[768px]:order-1">
					<h1 className="text-5xl font-bold leading-tight relative">Hi, I&apos;m Lucas Rojas</h1>
					<h3 className="text-3xl font-bold leading-tight relative">Frontend Developer</h3>
					<p className="text-base leading-tight relative pt-2 mb-2">Developer since 2018. Self-taught. Coffee</p>
					<LinkButton
						href="/Lucas_Rojas.pdf"
						download
						variant="primary"
						label="Download CV"
					/>
				</div>
				<ImageSpinner src={"/assets/profile_pic.jpg"} />
			</div>
			<div className="home-sci grid grid-cols-auto gap-4">
				<SocialMediaIconLink 
					src="https://github.com/lucaasrojas"
					type="github"
				/>
				<SocialMediaIconLink 
					src="https://www.linkedin.com/in/lucaasrojas/"
					type="linkedin"
				/>
			</div>
		</section>
	);
};

export default Hero;
