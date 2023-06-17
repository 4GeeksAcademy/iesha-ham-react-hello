import React from "react";
import {NavBar} from "./Navbar";

 function LandingPage() {
	return (
		<>
		<NavBar />
		<Jumbotron />
		<CardList>
			<Card />
			<Card />
			<Card />
			<Card />
		</CardList>
		<Footer />
		</>
	)
}
export default LandingPage