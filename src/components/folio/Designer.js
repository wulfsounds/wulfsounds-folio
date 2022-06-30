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
import MenuDeck from "../../components/menu/MenuDeck";
import DNDY from "../images/DNDYlogo.png";
import Footer from "../Footer"

const Designer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState("bottom");
	const [size, setSize] = React.useState("full");
	return (
		<>
			<Button className="btn" onClick={onOpen} aria-label="Options">
				<a className="link">DESIGN</a>
			</Button>
			<Drawer
				placement={placement}
				onClose={onClose}
				isOpen={isOpen}
				size={size}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerBody className="drawer drawer-body designer">
						{/* <Box backgroundImage={DNDY} /> */}
						<header>
							<h2 className="menu folio-head">DESIGNER</h2>
							<MenuDeck />
						</header>
						<main className="drawer-main">
							<p className="para dndy-para">
								DNDY is a project I operated as a front-end
								designer with a handful of really cool dudes
								during my time as a full-stack web dev student.
                                <br></br>
                                <br></br>
								It’s a web based, full stack application that
								utilizes GraphQL, and a collection of various
								React packages such as Chakra and Parallax.{" "}
							</p>
                            <section className="project-links">
                                <h2 className="repo-link">GITHUB</h2>
                                <h2 className="repo-link">DEPLOY</h2>
                            </section>
						</main>
                        {/* <Footer /> */}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}; 

export default Designer;
