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
	transform: "translate(-50%, -50%)",
	width: "50%",
	bgcolor: "#fff",
	border: "2px solid #ddd",
	boxShadow: 24,
	p: 4,
};

const useStyles = makeStyles({
	benefitsBtn: {
		fontSize: "0.7rem",
		textTransform: "capitalize",
	},
});

const RapidModal = ({ open, handleClose }) => {
	const classes = useStyles();

	return (
		<Modal open={open} onClose={handleClose}>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
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
			</Box>
		</Modal>
	);
};

export default RapidModal;
