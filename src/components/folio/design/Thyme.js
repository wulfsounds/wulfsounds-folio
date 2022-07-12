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

// Button Control Eco
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

const Thyme = () => {
	return (
		<>
			<DrawerContent>
				<DrawerBody className="drawer drawer-body thyme">
					{/* <Box backgroundImage={DNDY} /> */}
					<header>
						<h2 className="menu folio-head">DESIGNER</h2>
						<MenuDeck />
					</header>
					<main className="drawer-main">
						<div className="btnContainer">
						{/* Button Control */}
						<IconButton
							as="ctrlBtns"
							variant="outline"
							colorScheme="black"
							aria-label="Next"
							icon={<ArrowLeftIcon />}
						/>
						<IconButton
						as="ctrlBtns"
							variant="outline"
							colorScheme="black"
							aria-label="Next"
							icon={<ArrowRightIcon />}
						/>
						</div>
						<p className="para thyme-para">
							Thyme is a conceptual note-taking application
							designed with an incredible all-female cast with the
							exception of myself included. The future is indeed
							female.
							<br></br>
							<br></br>
							Created using Express, Node, CSS, HTML, and jQuery.
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

export default Thyme;
