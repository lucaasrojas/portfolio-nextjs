"use client";
import LinkButton from "../Button/LinkButton";
import styles from "./ProjectCard.module.css";
import Image from "next/image";

export type ProjectCardItem = {
	title: string;
	description: string;
	linkRepo: string;
	linkSite: string;
	id: string;
};

export default function ProjectCard(props: ProjectCardItem) {
	const { title, description, linkRepo, linkSite, id } = props;

	return (
		<div className={styles.proyect_card}>
			<a
				className={styles.proyect_card__a}
				href={linkSite}
				target="_blank"
				rel="noreferrer"
			>
				<div className={styles.img_card}>
					<Image
						src={`/assets/projects/${id}.png`}
						fill
						alt="Picture of the author"
					/>
				</div>
			</a>
			<div className={styles.card_content}>
				<h3>{title}</h3>
				<p>{description}</p>
				<p className={styles.card_content__links_wrapper}>
					<LinkButton href={linkRepo} variant="secondary" label={"Repo"} />
					<LinkButton href={linkSite} variant="primary" label={"Site"} />
				</p>
			</div>
		</div>
	);
}
