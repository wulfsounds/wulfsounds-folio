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
import DaytripLogo from "../../images/daytripper-logo.png";
import Footer from "../../Footer";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import DNDYLeft from "../engine/DNDYCtrl/DndyLeft";
import ThymeRight from "../engine/ThymeCtrl/ThymeRight";

const Daytrip = () => {
	return (
		<>
			<DrawerContent>
				<DrawerBody className="drawer drawer-body daytrip">
					{/* <Box backgroundImage={DNDY} /> */}
					<header>
						<h2 className="menu folio-head">DESIGNER</h2>
						<MenuDeck />
					</header>
					<main className="drawer-main">
						<div className="btnContainer">
							{/* Button Control */}
							<DNDYLeft />
							<ThymeRight />
						</div>
						<p className="para daytrip-para">
							Daytripper is a single-day scheduler that stores
							inputed save data locally. It’s design and name is
							inspired by the Beatles tune when the world started
							to live in color.
							<br></br>
							<br></br>
							Created using Semantic HTML, CSS, Moment.js and
							jQuery.
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

export default Daytrip;
