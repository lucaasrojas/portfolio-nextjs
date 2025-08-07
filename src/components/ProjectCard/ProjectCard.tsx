import LinkButton from "../Button/LinkButton";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

export type ProjectCardItem = {
  title: string;
  description: string;
  linkRepo: string;
  linkSite: string;
  image: string;
  className?: string;
  state: 'ready' | 'wip';
  type: 'assesment' | 'own'
};

export default function ProjectCard(props: ProjectCardItem) {
  const { title, description, linkSite, image, className, state, type } = props;
  const [ imgSrc, setImgSrc] = useState(image)

  // TODO: Keep working on this, the issue is in prod api returns 500
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`/api/screenshot?url=${linkSite}`);
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        setImgSrc(objectURL);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
    // fetchImage();
  }, [linkSite])

  return (
    <Card
      className={cn(
        `border-2 border-secondary rounded-[10px] shadow-lg shadow-secondary/30`,
        className
      )}
    >
      <CardContent className="pt-6">
        <div className={styles.img_card}>
          <Image
            src={imgSrc || "/assets/placeholder.jpg"}
            unoptimized
            fill
            alt={title}
            blurDataURL="/assets/placeholder.jpg"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="mt-2">
        {state === 'wip' && <Badge variant="outline" className="bg-yellow-200 text-yellow-800 border-yellow-800">WIP</Badge>}
        {type === 'assesment' && <Badge variant="outline" className="bg-gray-200 text-gray-800 border-gray-800">Technical Assesment</Badge>}
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
