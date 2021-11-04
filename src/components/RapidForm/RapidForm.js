import { Container, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

// custom styles
const useStyles = makeStyles({
	label: {
		display: "block",
		marginBottom: "1rem",
	},
	shadow: {
		boxShadow: "rgba(99, 99, 99, 0.1) 0px 2px 8px 0px",
	},
});

const RapidForm = () => {
	const classes = useStyles();

	return (
		<Box
			sx={{
				mt: 4,
			}}
		>
			<Container>
				<Box
					component="form"
					sx={{
						"& > :not(style)": {
							bgcolor: "#fff",
							p: 2,
						},
					}}
					noValidate
					autoComplete="off"
				>
					{/* About company field */}
					<Box component="div">
						<label className={classes.label}>About company*</label>
						<TextField
							className={classes.shadow}
							placeholder="Type in your Summary"
							fullWidth
							multiline
							rows={4}
							required
						/>
					</Box>

					{/* website & industry field */}
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<Box component="div">
								<label className={classes.label}>Website</label>
								<TextField
									className={classes.shadow}
									placeholder="Website (Url)"
									fullWidth
								/>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box component="div">
								<label className={classes.label}>Industry*</label>
								<TextField
									className={classes.shadow}
									placeholder="Industry name"
									fullWidth
								/>
							</Box>
						</Grid>
					</Grid>

					{/* company size & Headquarters */}
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<Box component="div">
								<label className={classes.label}>Company Size*</label>
								<TextField
									className={classes.shadow}
									placeholder="Employees"
									fullWidth
								/>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box component="div">
								<label className={classes.label}>Headquarters</label>
								<TextField
									className={classes.shadow}
									placeholder="Enter text"
									fullWidth
								/>
							</Box>
						</Grid>
					</Grid>

					{/* type & founded field*/}
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<Box component="div">
								<label className={classes.label}>Type</label>
								<TextField
									className={classes.shadow}
									placeholder="Enter text"
									fullWidth
								/>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box component="div">
								<label className={classes.label}>Founded</label>
								<TextField
									className={classes.shadow}
									placeholder="Enter year"
									fullWidth
								/>
							</Box>
						</Grid>
					</Grid>

					{/* specialties field */}
					<Box component="div">
						<label className={classes.label}>Specialties</label>
						<TextField
							className={classes.shadow}
							placeholder="Enter text"
							fullWidth
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default RapidForm;
