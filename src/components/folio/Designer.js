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
import { CloseIcon } from "@chakra-ui/icons";
import MenuDeck from "../../components/menu/MenuDeck";
import DNDY from "../images/DNDYlogo.png";

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
						{/* <main className="drawer-main"> */}
							{/* Accordion Menu */}
						{/* </main> */}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Designer;
