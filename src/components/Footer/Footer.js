import { Box } from "@mui/system";
import React from "react";
import { Link, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	footerBg: {
		marginTop: "2rem",
		height: "2rem",
		padding: "3rem",
		backgroundColor: "#2A3B8F",
		borderTopLeftRadius: "2rem",
		borderTopRightRadius: "2rem",
	},
});

const Footer = () => {
	const classes = useStyles();

	const footerLinks = [
		{ id: 1, link: "about", name: "About Company" },
		{ id: 2, link: "privacy", name: "Privacy Policy" },
		{ id: 3, link: "terms", name: "Terms & Conditions" },
		{ id: 4, link: "blog", name: "Blog" },
		{ id: 5, link: "contact", name: "Contact" },
	];

	return (
		<Box component="div" className={classes.footerBg}>
			<Container
				sx={{
					display: "flex",
					justifyContent: "center",
					gap: 6,
					flexWrap: "wrap",
				}}
			>
				{footerLinks.map((link) => (
					<Link key={link.id} href="#" color="#ddd" underline="none">
						{link.name}
					</Link>
				))}
			</Container>
		</Box>
	);
};

export default Footer;
