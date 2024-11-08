import React from "react";

import { JumboTron } from "./jumbotron";

import { BootstrapCard } from "./card";

import { NavBar } from "./navbar";

import { FooterContent } from "./footer";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<NavBar></NavBar>
		<JumboTron></JumboTron>
		<BootstrapCard></BootstrapCard>
		<FooterContent></FooterContent>
		</>
	);
};

export default Home;
