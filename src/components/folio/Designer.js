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
import DNDY from "./design/DNDY";
import Daytrip from "./design/Daytrip";
import Thyme from "./design/Thyme";
import Footer from "../Footer";

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
				<Thyme />
			</Drawer>
		</>
	);
};

export default Designer;
