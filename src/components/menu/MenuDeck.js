import React, { useContext, Link } from "react";
import {
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
import { MdSettings } from "react-icons/md";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import MenuItems from "./MenuItems";

function MenuDeck() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState("bottom");
	const [size, setSize] = React.useState("full");

	return (
		<>
			<Button
				className="btn main"
				onClick={onOpen}
				as={HamburgerIcon}
				aria-label="Options"
				w={75}
				h={75}
				icon={
					<HamburgerIcon
						as={MdSettings}
						w={100}
						h={100}
						color="red.500"
					/>
				}
			></Button>
			<Drawer
				placement={placement}
				onClose={onClose}
				isOpen={isOpen}
				size={size}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerBody className="drawer drawer-body">
						<header className="menu-header">
							<h1 className="menu">MENU</h1>
						</header>
						<main className="drawer-main">
							{/* Accordion Menu */}
							<MenuItems />
						</main>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default MenuDeck;
