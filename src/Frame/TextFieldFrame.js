import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

// custom styles
export const useTextFieldStyles = makeStyles({
	label: {
		display: "block",
		marginBottom: "1rem",
	},
	shadow: {
		boxShadow: "rgba(99, 99, 99, 0.1) 0px 2px 8px 0px",
	},
});

const TextFieldFrame = ({ label, placeholder }) => {
	const classes = useTextFieldStyles();
	return (
		<Box component="div">
			<label className={classes.label}>{label}</label>
			<TextField
				className={classes.shadow}
				placeholder={placeholder}
				fullWidth
			/>
		</Box>
	);
};

export default TextFieldFrame;
