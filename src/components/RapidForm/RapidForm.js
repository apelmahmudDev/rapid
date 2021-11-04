import { Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import TextFieldFrame, { useTextFieldStyles } from "../../Frame/TextFieldFrame";

const RapidForm = () => {
	// comes from TextFieldFrame component
	const classes = useTextFieldStyles();

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
							<TextFieldFrame label="Website" placeholder="Enter text" />
						</Grid>
						<Grid item xs={12} md={6}>
							<TextFieldFrame label="Industry*" placeholder="Industry name" />
						</Grid>
					</Grid>

					{/* company size & Headquarters */}
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<TextFieldFrame label="Company Size*" placeholder="Employees" />
						</Grid>
						<Grid item xs={12} md={6}>
							<TextFieldFrame label="Headquarters" placeholder="Enter text" />
						</Grid>
					</Grid>

					{/* type & founded field*/}
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<TextFieldFrame label="Type" placeholder="Enter text" />
						</Grid>
						<Grid item xs={12} md={6}>
							<TextFieldFrame label="Founded" placeholder="Enter year" />
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
