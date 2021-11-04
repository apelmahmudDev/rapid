import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import AddBenefits from "../components/AddBenefits/AddBenefits";
import RapidBanner from "../components/RapidBanner/RapidBanner";
import RapidForm from "../components/RapidForm/RapidForm";

const useStyles = makeStyles({
	borderStyles: {
		borderTopLeftRadius: "1rem",
		borderTopRightRadius: "1rem",
	},
});

const Main = () => {
	const classes = useStyles();
	return (
		<main>
			<Container>
				<Box sx={{ mt: 4, bgcolor: "#fff" }} className={classes.borderStyles}>
					<RapidBanner />
					<RapidForm />
					<AddBenefits />
				</Box>
			</Container>
		</main>
	);
};

export default Main;
