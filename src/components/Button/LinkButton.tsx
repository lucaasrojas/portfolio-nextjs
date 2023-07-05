import React from "react";
import "./LinkButton.css";
type LinkButtonProps = {
	label: string;
	href: string;
	variant: "primary" | "secondary";
	download?: boolean;
};
const LinkButton = (props: LinkButtonProps) => {
	const { label, variant, href, download } = props;
	return (
		<div className="btn-box">
			<a
				className={`btn ${variant}`}
				href={href}
				target="_blank"
				rel="noreferrer"
				download={download}
			>
				{label}
			</a>
		</div>
	);
};

export default LinkButton;
