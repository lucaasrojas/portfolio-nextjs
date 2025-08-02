import React from "react";
import "./LinkButton.css";
import Link from "next/link";
import { Button } from "../ui/button";
type LinkButtonProps = {
  label: string;
  href: string;
  variant:
    | "secondary"
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "ghost"
    | null
    | undefined;
  download?: boolean;
};
const LinkButton = (props: LinkButtonProps) => {
  const { label, variant, href, download } = props;
  return (
    <div className="btn-box">
      <Link href={href} download={download}>
        <Button variant={variant}>{label}</Button>
      </Link>
    </div>
  );
};

export default LinkButton;
