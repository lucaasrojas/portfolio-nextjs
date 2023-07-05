import React from "react";

const About = () => {
	return (
		<section id="about" className="about">
			<div className="about-content">
				<div className="left-column">
					<ul>
						<li>
							<h3>ReactJs</h3>
						</li>
						<li>
							<h3>Redux / Redux Thunk / Context API</h3>
						</li>
						<li>
							<h3>Typescript</h3>
						</li>
						<li>
							<h3>Material UI / Styled Components</h3>
						</li>
						<li>
							<h3>Webpack / Babel</h3>
						</li>
						<li>
							<h3>Figma / UX</h3>
						</li>
						<li>
							<h3>Jest / React Testing Library</h3>
						</li>
						<li>
							<h3>Amazon Web Services</h3>
						</li>
					</ul>
				</div>

				<div className="right-column">
					<div className="circle">
						<div className="item" style={{ "--i": 0 } as React.CSSProperties}>
							<h3>Coding</h3>
						</div>
						<div className="item" style={{ "--i": 1 } as React.CSSProperties}>
							<h3>Cyclism</h3>
						</div>
						<div className="item" style={{ "--i": 2 } as React.CSSProperties}>
							<h3>Craftmen</h3>
						</div>
						<div className="item" style={{ "--i": 3 } as React.CSSProperties}>
							<h3>Selfthought</h3>
						</div>
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
