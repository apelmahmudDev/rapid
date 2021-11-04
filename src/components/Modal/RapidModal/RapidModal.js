import { Button, Modal, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { benefitOptions } from "../../../data/benefitOptions";
import BenefitCustomize from "../BenefitCustomize";

// custom styles
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	overflowY: "scroll",
	transform: "translate(-50%, -50%)",
	width: "50%",
	height: "85%",
	bgcolor: "#fff",
	boxShadow: 24,
	p: 4,
};

const useStyles = makeStyles({
	gradientBg: {
		backgroundImage: "linear-gradient(120deg, #2D3E8B, #9396FF)",
	},
	modalFooterAlgn: {
		marginTop: "2rem",
		padding: "1rem",
		width: "100%",
		textAlign: "right",
		borderTop: "1px solid #ddd",
	},
});

const RapidModal = ({ open, handleClose }) => {
	const classes = useStyles();

	return (
		<Modal open={open} onClose={handleClose}>
			<Box sx={style}>
				<Typography
					sx={{
						color: "#2A3B8F",
						pb: 1,
						mb: 1,
						borderBottom: "1px solid #ddd",
					}}
					variant="subtitle1"
				>
					Add Benefits
				</Typography>

				{/* Choose benefit to add */}
				<Box component="div" sx={{ bgcolor: "#f7f7f7", p: 1 }}>
					<Typography variant="subtitle1" sx={{ py: 1 }}>
						Choose benefit to add
					</Typography>
					<Box
						component="div"
						sx={{
							display: "flex",
							flexWrap: "wrap",
							gap: 1,
						}}
					>
						{benefitOptions?.map((benefit) => (
							<Button
								key={benefit.id}
								sx={{
									display: "flex",
									gap: 2,
									alignItems: "center",
									borderRadius: 16,
								}}
								variant="outlined"
								color="success"
								className={classes.benefitsBtn}
							>
								<span>{benefit.benefit}</span>
								<ControlPointIcon />
							</Button>
						))}
					</Box>
				</Box>

				{/* Benefits customize chance */}
				<BenefitCustomize />

				{/*  modal footer button*/}
				<div className={classes.modalFooterAlgn}>
					<Button variant="outlined" sx={{ borderRadius: 16, px: 4, mx: 2 }}>
						Back
					</Button>
					<Button
						variant="contained"
						sx={{ borderRadius: 16, px: 4, mx: 2 }}
						className={classes.gradientBg}
					>
						Save
					</Button>
				</div>
			</Box>
		</Modal>
	);
};

export default RapidModal;
