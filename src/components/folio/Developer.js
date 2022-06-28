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

const Developer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState("bottom");
	const [size, setSize] = React.useState("full");
	return (
		<>
			<Button>
				<a className="link" href="/">
					DEVELOPER
				</a>
			</Button>
			<Drawer
			// placement={placement}
			// onClose={onClose}
			// isOpen={isOpen}
			// size={size}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerBody className="drawer drawer-body">
						{/* Developer Content Goes Here... */}
						<main className="drawer-main">
							{/* Accordion Menu */}
						</main>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Developer;
