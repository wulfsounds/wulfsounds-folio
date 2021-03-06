import React, { useContext } from "react";
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
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function MenuDeck() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState("bottom");
	const [size, setSize] = React.useState("full");

	return (
		<>
			<Button
				className="btn"
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
			>
				<svg></svg>
			</Button>
			<Drawer
				placement={placement}
				onClose={onClose}
				isOpen={isOpen}
				size={size}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerBody className="drawer drawer-body">
						<header>
							<h1 className="menu">MENU</h1>
							<DrawerCloseButton
								className="closeBtn"
								as={CloseIcon}
							/>
						</header>
						<main>
							<p className="menu-item">FOLIO</p>
							<p className="menu-item">CONTACT</p>
							<p className="menu-item">SOCIALS</p>
						</main>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default MenuDeck;
