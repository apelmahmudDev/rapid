import React from "react";
import AddBenefits from "./components/AddBenefits/AddBenefits";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import RapidBanner from "./components/RapidBanner/RapidBanner";
import RapidForm from "./components/RapidForm/RapidForm";
import Main from "./Layout/Main";

const App = () => {
	return (
		<div>
			<Navbar />
			<Main />
			<Footer />

			{/* <RapidBanner />
			<RapidForm />
			<AddBenefits />
			*/}
		</div>
	);
};

export default App;
