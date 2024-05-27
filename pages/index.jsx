import React, { useState } from "react";

//Pages
import SobreMimPage from "../pages/sobre-mim";
import PortfolioPage from "../pages/portfolio";
import ExperienciaPage from "../pages/experiencia";
import HomePage from "../pages/homepage";
//Components
import ServicesOffer from "@/components/ServicesOffer";
import FooterPage from "@/components/FooterPage";
import CarrouselTechsDivContainer from "@/components/CarrouselTechsDivContainer";
// import ContactMeEmail from "@/components/ContactMeEmail";

export default function Index() {
	return (
		<>
			<HomePage />
			<ServicesOffer />
			<CarrouselTechsDivContainer />
			<SobreMimPage />
			<PortfolioPage />
			<ExperienciaPage />
			{/* <ContactMeEmail /> */}
			<FooterPage />
		</>
	);
}
