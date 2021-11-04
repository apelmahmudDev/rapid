import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CustomizeEditField = () => {
	return (
		<div>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 1, width: "100%" },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					required
					label="Title"
					defaultValue="Group Activities"
					variant="standard"
				/>
				<TextField
					placeholder="Type in your Summary"
					fullWidth
					multiline
					rows={1}
					required
				/>
			</Box>
			<div style={{ width: "100%", textAlign: "right" }}>
				<Button variant="outlined" sx={{ borderRadius: 16, px: 2 }}>
					Save
				</Button>
			</div>
		</div>
	);
};

export default CustomizeEditField;
