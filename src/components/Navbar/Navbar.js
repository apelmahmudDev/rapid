import React from "react";
import AppBar from "@mui/material/AppBar";
import { Link, Container } from "@mui/material";

const Navbar = () => {
	return (
		<AppBar sx={{ bgcolor: "#fff", height: "3.5rem" }}>
			<Container
				sx={{
					display: "flex",
					flexDirection: "row",
					gap: 3,
					justifyContent: "flex-end",
					p: 2,
				}}
			>
				<Link href="#" color="#666666" underline="none">
					Company
				</Link>
				<Link href="#" color="#666666" underline="none">
					Find Candidate
				</Link>
				<Link href="#" color="#666666" underline="none">
					Guide
				</Link>
			</Container>
		</AppBar>
	);
};

export default Navbar;
