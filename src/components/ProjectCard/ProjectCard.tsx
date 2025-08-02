"use client";
import Link from "next/link";
import LinkButton from "../Button/LinkButton";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";

export type ProjectCardItem = {
  title: string;
  description: string;
  linkRepo: string;
  linkSite: string;
  image: string;
  className?: string;
};

export default function ProjectCard(props: ProjectCardItem) {
  const { title, description, linkRepo, linkSite, image, className } = props;
  return (
    <Card
      className={cn(
        `border-2 border-secondary rounded-[10px] shadow-lg shadow-secondary/30`,
        className
      )}
    >
      <CardContent className="pt-6">
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
        <div className="mt-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="muted">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <LinkButton href={linkSite} variant="default" label={">"} />
      </CardFooter>
    </Card>
  );
}
