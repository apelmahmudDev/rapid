import { Container, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Benefits from "../Benefits/Benefits";
import RapidModal from "../Modal/RapidModal/RapidModal";

// custom styles
const useStyles = makeStyles({
	textColor: {
		color: "#2E7D32",
		fontWeight: "bold",
	},
	buttonStyle: {
		textTransform: "capitalize",
	},
});

const AddBenefits = () => {
	// modal handler state & methods
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const classes = useStyles();

	return (
		<Container>
			<Box sx={{ bgcolor: "#fff", p: 2, my: 2 }}>
				<Box
					sx={{
						display: "flex",
						gap: 2,
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div className={classes.textColor}>Benefits</div>

					{/* Add benefits button for OPEN MODAL */}
					<Button
						onClick={handleOpen}
						sx={{ borderRadius: 16 }}
						variant="outlined"
						className={classes.buttonStyle}
					>
						Add Benefits
					</Button>
				</Box>

				{/* rapid modal */}
				<RapidModal open={open} handleClose={handleClose} />

				{/* Benefits */}
				<Benefits />
			</Box>
		</Container>
	);
};

export default AddBenefits;
