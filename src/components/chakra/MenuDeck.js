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
import { HamburgerIcon } from "@chakra-ui/icons";

function MenuDeck() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState("bottom");
  const [ size, setSize ] = React.useState('full')

	return (
		<>
			<Button
				onClick={onOpen}
				as={IconButton}
				aria-label="Options"
				icon={<HamburgerIcon />}
				>
			</Button>
			<Drawer placement={placement} onClose={onClose} isOpen={isOpen} size={size}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader borderBottomWidth="1px">
						Menu
            <DrawerCloseButton />
					</DrawerHeader>
					<DrawerBody>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default MenuDeck;
