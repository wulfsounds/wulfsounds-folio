// Button Ecosystem for the Designer Folio

import React from "react";
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
	Flex,
} from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import Readme from "../../develop/Readme";

const DayLeft = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState("left");
	const [size, setSize] = React.useState("full");

	return (
		<>
			<IconButton
				onClick={onOpen}
				as="ctrlBtns"
				variant="outline"
				colorScheme="black"
				aria-label="Back"
				icon={<ArrowLeftIcon />}
			/>
			<Drawer
				placement={placement}
				onClose={onClose}
				isOpen={isOpen}
				size={size}
			>
				<DrawerOverlay />
				<Readme />
			</Drawer>
		</>
	);
};

export default DayLeft;
