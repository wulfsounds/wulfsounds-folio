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

const Readme = () => {
	return (
		<>
			<DrawerContent>
				<DrawerBody className="drawer drawer-body readme">
					{/* <Box backgroundImage={EmpTrk} /> */}
					<header>
						<h2 className="menu folio-head">DEVELOPER</h2>
						<MenuDeck />
					</header>
					<main className="drawer-main">
						<div className="btnContainer">
							{/* Button Control */}
						</div>
						<p className="para readme-para">
							JATE is a progressive web-based application (PWA)
							that utilizes IndexedDB for storage and uses a data
							persistence technique that allows the program to run
							offline.
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

export default Readme;
