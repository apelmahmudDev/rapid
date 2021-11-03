import { Container, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
// import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	label: {
		display: "block",
		marginBottom: "1rem",
	},
	wider: {
		width: "100%",
	},
});

const RapidForm = () => {
	const classes = useStyles();

	return (
		<Box
			sx={{
				m: 2,
			}}
		>
			<Container>
				<Box
					component="form"
					sx={{
						"& > :not(style)": {
							bgcolor: "#fff",
							// m: 2,
							p: 2,
						},
					}}
					noValidate
					autoComplete="off"
				>
					<Box component="div">
						<label className={classes.label}>About company</label>
						<TextField
							placeholder="Type in your Summary"
							fullWidth
							multiline
							rows={4}
						/>
					</Box>
					<Box
						component="div"
						sx={{
							display: "flex",
							flexDirection: "row",
							gap: 2,
							justifyContent: "space-between",
						}}
					>
						<Box component="div" className={classes.wider}>
							<label className={classes.label}>Website</label>
							<TextField placeholder="Website (Url)" fullWidth />
						</Box>
						<Box component="div" className={classes.wider}>
							<label className={classes.label}>Industry</label>
							<TextField placeholder="Employees" fullWidth />
						</Box>
					</Box>
					<Box
						component="div"
						sx={{
							display: "flex",
							flexDirection: "row",
							gap: 2,
							justifyContent: "space-between",
						}}
					>
						<Box component="div" className={classes.wider}>
							<label className={classes.label}>Website</label>
							<TextField placeholder="Website (Url)" fullWidth />
						</Box>
						<Box component="div" className={classes.wider}>
							<label className={classes.label}>Industry</label>
							<TextField placeholder="Employees" fullWidth />
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default RapidForm;
