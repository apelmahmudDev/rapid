import { Container, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import RapidModal from "../Modal/RapidModal/RapidModal";

const AddBenefits = () => {
	// modal handler state & methods
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
					<div textColor="warning">Benefits</div>
					<Button
						onClick={handleOpen}
						sx={{ borderRadius: 16 }}
						variant="outlined"
					>
						Add Benefits
					</Button>
				</Box>

				{/* rapid modal */}
				<RapidModal open={open} handleClose={handleClose} />
			</Box>
		</Container>
	);
};

export default AddBenefits;
