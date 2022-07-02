import React from "react";
import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./Jumbotron.js";
import { Card } from "./Card.js";
import { Footer } from "./Footer.js";

//create your first Landing Page on React
const Home = () => {
	return (
		<div className="container-flex">
			<div className="container-flex">
			<Navbar />
			</div>
			<div className="container-flex">
			<Jumbotron />
			</div>
			<div className="container-flex">
			<Card />
			</div>
			<div className="container-flex">
			<Footer />
			</div>
		</div>


	);
};

export default Home;
