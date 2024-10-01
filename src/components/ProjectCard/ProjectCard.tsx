"use client";
import LinkButton from "../Button/LinkButton";
import styles from "./ProjectCard.module.css";
import Image from "next/image";

export type ProjectCardItem = {
	title: string;
	description: string;
	linkRepo: string;
	linkSite: string;
	image: string;
};

export default function ProjectCard(props: ProjectCardItem) {
	const { title, description, linkRepo, linkSite, image } = props;
	return (
		<div className={`${styles.proyect_card} grid xs:grid-cols-1 md:grid-cols-2`}>
			<a
				className={styles.proyect_card__a}
				href={linkSite}
				target="_blank"
				rel="noreferrer"
			>
				<div
					className={styles.img_card}
					style={{ ["--content" as string]: `'${title}'` }}
				>
					<Image
						src={image}
						fill
						alt={title}
						blurDataURL="./assets/placeholder.jpg"
						placeholder="blur"
					/>
				</div>
			</a>
			<div className={styles.card_content}>
				<h3 className="text-lg font-bold">{title}</h3>
				<p>{description}</p>
				<p className={styles.card_content__links_wrapper}>
					<LinkButton href={linkRepo} variant="secondary" label={"Repo"} />
					<LinkButton href={linkSite} variant="primary" label={"Site"} />
				</p>
			</div>
		</div>
	);
}
