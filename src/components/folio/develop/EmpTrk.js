import React, { useContext, Link } from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Button,
	Grid,
	GridItem,
	useDisclosure,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Menu,
	MenuButton,
	IconButton,
	CloseButton,
	Box,
} from "@chakra-ui/react";
import MenuDeck from "../../menu/MenuDeck";
import DndyLogo from "../../images/DNDYlogo.png";
import Footer from "../../Footer";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import ThymeLeft from "../engine/ThymeCtrl/ThymeLeft";
import DayRight from "../engine/DayCtrl/DayRight";

const EmpTrk = () => {
	return (
		<>
			<DrawerContent>
				<DrawerBody className="drawer drawer-body emptrk">
					{/* <Box backgroundImage={EmpTrk} /> */}
					<header>
						<h2 className="menu folio-head">DEVELOPER</h2>
						<MenuDeck />
					</header>
					<main className="drawer-main">
						<div className="btnContainer">
							{/* Button Control */}
						</div>
						<p className="para emptrk-para">
							Employee Tracker is a command-line application built
							using an Express.js server with a content management
							system (CMS) interface. 
                            <br></br>
                            <br></br>
                            The application stores basic
							employee information in a SQL database using a CRUD
							API.
						</p>
						<section className="project-links">
							<h2 className="repo-link">GITHUB</h2>
							<h2 className="repo-link">DEPLOY</h2>
						</section>
					</main>
					{/* <Footer /> */}
				</DrawerBody>
			</DrawerContent>
		</>
	);
};

export default EmpTrk;
