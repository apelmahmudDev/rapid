import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { benefits } from "../../data/benefits";

// icon
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles({
	rightAlign: {
		marginTop: "2rem",
		width: "100%",
		textAlign: "right",
	},
	gradientBg: {
		backgroundImage: "linear-gradient(120deg, #2D3E8B, #9396FF)",
	},
});

const Benefits = () => {
	const classes = useStyles();

	return (
		<div>
			<Box
				component="div"
				sx={{
					mt: 3,
					display: "flex",
					flexWrap: "wrap",
					gap: 2,
				}}
			>
				{benefits?.map((benefit) => (
					<Button
						key={benefit.id}
						sx={{
							display: "flex",
							gap: 1,
							alignItems: "center",
							borderRadius: 16,
						}}
						variant={`${benefit.checked ? "contained" : "outlined"}`}
						color="success"
						className={classes.benefitsBtn}
					>
						{benefit.icon}
						<span>{benefit.benefit}</span>
						{benefit.checked ? (
							<CheckCircleIcon />
						) : (
							<RadioButtonUncheckedIcon />
						)}
					</Button>
				))}
			</Box>

			{/* footer button */}
			<div className={classes.rightAlign}>
				<Button variant="outlined" sx={{ borderRadius: 16, px: 3, mx: 1 }}>
					Skip
				</Button>
				<Button
					variant="contained"
					sx={{ borderRadius: 16, px: 3, mx: 1 }}
					className={classes.gradientBg}
				>
					<span>Save</span>
					<KeyboardArrowRightIcon />
				</Button>
			</div>
		</div>
	);
};

export default Benefits;
