import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Portfolio />
			</main>
		</>
	);
}
