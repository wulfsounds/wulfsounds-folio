// Chakra Accordion Package
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
import Designer from "../folio/Designer";
import Developer from "../folio/Developer";

const MenuItems = () => {
	return (
		<section className="menu-section">
			<Accordion allowToggle>
				{/* Folio */}
				<AccordionItem>
					<AccordionButton className="acc-btn">
						<Box flex="1" textAlign="left">
							<h2 className="menu-item folio" trigger="0">FOLIO </h2>
						</Box>
					</AccordionButton>
					<AccordionPanel pb={4}>
						<div className="menu-links">
							<Designer />
							<Developer />
						</div>
					</AccordionPanel>
				</AccordionItem>
				{/* Contact */}
				<AccordionItem>
					<AccordionButton className="acc-btn">
						<Box flex="1" textAlign="left">
							<h2 className="menu-item">CONTACT</h2>
						</Box>
					</AccordionButton>
					<AccordionPanel pb={4}>
						<div className="menu-links">
							<a className="link" href="*">
								EMAIL
							</a>
						</div>
					</AccordionPanel>
				</AccordionItem>
				{/* Socials */}
				<AccordionItem>
					<AccordionButton className="acc-btn">
						<Box flex="1" textAlign="left">
							<h2 className="menu-item">SOCIALS</h2>
						</Box>
					</AccordionButton>
					<AccordionPanel pb={4}>
						<div className="menu-links">
							<a className="link" href="*">
								LINKEDIN
							</a>
							<a className="link" href="*">
								INSTAGRAM
							</a>
							<a className="link" href="*">
								GITHUB
							</a>
							<a className="link" href="*">
								DRIBBBLE
							</a>
						</div>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</section>
	);
};

export default MenuItems;