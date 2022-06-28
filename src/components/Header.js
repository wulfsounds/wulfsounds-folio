import React from "react";
import { Link } from "react-router-dom";
import {
	Heading,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from "@chakra-ui/react";

import MenuDeck from "./menu/MenuDeck"

const Header = () => {
	return (
		<>
			<header>
				<h1 id="title-header">DEV WULF</h1>
                <MenuDeck />
			</header>
		</>
	);
};

export default Header;
