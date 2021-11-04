import { Container, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import bannerImage from "../../images/banner-bg.svg";
import logo from "../../images/brand-logo.png";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/system";

const useStyles = makeStyles({
	backgroundStyles: {
		position: "relative",
		height: "10rem",
		backgroundImage: `url(${bannerImage})`,
		backgroundSize: "cover",
		borderTopLeftRadius: "1rem",
		borderTopRightRadius: "1rem",
	},
	rightAlign: {
		paddingTop: "1rem",
		textAlign: "right",
	},
	logoStyles: {
		height: "4rem",
		width: "4rem",
		background: "#fff",
		borderRadius: 100,
		border: "1px solid #C3C3C3",
	},
	logoPosition: {
		position: "absolute",
		top: "78%",
		left: "2rem",
	},
});

const RapidBanner = () => {
	const classes = useStyles();
	return (
		<Container className={classes.backgroundStyles}>
			<div className={classes.rightAlign}>
				<IconButton sx={{ bgcolor: "#fff" }}>
					<EditIcon color="grey" />
				</IconButton>
			</div>
			<div className={classes.logoPosition}>
				<Box className={classes.logoStyles}>
					<img width="100%" src={logo} alt="brand-logo" />
				</Box>
			</div>
		</Container>
	);
};

export default RapidBanner;
