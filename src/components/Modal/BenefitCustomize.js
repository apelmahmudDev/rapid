import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import HomeIcon from "@mui/icons-material/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomizeEditField from "./CustomizeEditField";

const theme = createTheme({
	typography: {
		subtitle2: {
			fontSize: 12,
		},
		body2: {
			fontSize: 10,
			color: "#4D4F5C",
		},
	},
});

const BenefitCustomize = () => {
	return (
		<ThemeProvider theme={theme}>
			<Typography variant="h6" component="h2">
				Benefits
			</Typography>
			{/* first item */}
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 2,
					bgcolor: "#f7f7f7",
					my: 1,
					p: 1,
				}}
			>
				<TrackChangesIcon />
				<Box sx={{ flexGrow: 1 }}>
					<Typography variant="subtitle2">Excellent Health Care</Typography>
					<Typography variant="body2">
						We offer a comprehensive Benefits Package that includes Medical,
						dental and vision coverage
					</Typography>
				</Box>
				<div>
					<IconButton>
						<EditIcon />
					</IconButton>
					<IconButton>
						<DeleteIcon />
					</IconButton>
					<IconButton>
						<DragIndicatorIcon />
					</IconButton>
				</div>
			</Box>
			{/* second item */}
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 2,
					bgcolor: "#f7f7f7",
					my: 1,
					p: 1,
				}}
			>
				<HomeIcon />
				<Box sx={{ flexGrow: 1 }}>
					<Typography variant="subtitle2">Daily Snacks</Typography>
					<Typography variant="body2">
						Enjoy various services and snacks in break room
					</Typography>
				</Box>
				<div>
					<IconButton>
						<EditIcon />
					</IconButton>
					<IconButton>
						<DeleteIcon />
					</IconButton>
					<IconButton>
						<DragIndicatorIcon />
					</IconButton>
				</div>
			</Box>

			{/* edit field  */}
			<CustomizeEditField />
		</ThemeProvider>
	);
};

export default BenefitCustomize;
