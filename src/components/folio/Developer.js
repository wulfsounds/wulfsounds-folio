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
import EmpTrk from "./develop/EmpTrk";

const Developer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState("bottom");
	const [size, setSize] = React.useState("full");
	return (
		<>
			<Button
				className="btn"
				onClick={onOpen}
				aria-label="Options"
			>
            <a className="link">DEVELOP</a>
			</Button>
			<Drawer
				placement={placement}
				onClose={onClose}
				isOpen={isOpen}
				size={size}
			>
				<DrawerOverlay />
				<EmpTrk />
			</Drawer>
		</>
	);
};

export default Developer;
