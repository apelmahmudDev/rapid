import React from "react";
import AddBenefits from "./components/AddBenefits/AddBenefits";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import RapidForm from "./components/RapidForm/RapidForm";

const App = () => {
	return (
		<div>
			<Navbar />
			<RapidForm />
			<AddBenefits />
			<Footer />
		</div>
	);
};

export default App;
