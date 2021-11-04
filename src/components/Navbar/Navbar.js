import React from "react";
import AppBar from "@mui/material/AppBar";
import { Link, Container } from "@mui/material";

const Navbar = () => {
	const navLinks = [
		{ id: 1, name: "Company", link: "company" },
		{ id: 2, name: "Find Candidate", link: "candidate" },
		{ id: 3, name: "Guide", link: "guide" },
	];

	return (
		<AppBar sx={{ bgcolor: "#fff", height: "3.5rem" }} position="static">
			<Container
				sx={{
					display: "flex",
					flexDirection: "row",
					gap: 3,
					justifyContent: "flex-end",
					p: 2,
				}}
			>
				{navLinks.map((link) => (
					<Link href={`#${link.link}`} color="#666666" underline="none">
						{link.name}
					</Link>
				))}
			</Container>
		</AppBar>
	);
};

export default Navbar;
