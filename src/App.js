import React from "react";
import AddBenefits from "./components/AddBenefits/AddBenefits";
import Navbar from "./components/Navbar/Navbar";
import RapidForm from "./components/RapidForm/RapidForm";

const App = () => {
	return (
		<div>
			<Navbar />
			<RapidForm />
			<AddBenefits />
		</div>
	);
};

export default App;
