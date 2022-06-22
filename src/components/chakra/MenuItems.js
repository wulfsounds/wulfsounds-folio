// Chakra Accordion Package
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

const MenuItems = () => {
    return (
        <Accordion allowToggle>
        {/* Folio */}
        <AccordionItem>
            <AccordionButton
                as="h2"
                className="menu-item"
            >
                <Box flex="1" textAlign="left">
                    FOLIO
                </Box>
                {/* <AccordionIcon /> */}
            </AccordionButton>
            <AccordionPanel pb={4}>
                {/* <Link className="link" to=""> */}
                    DESIGN
                {/* </Link> */}
                {/* <Link className="link" to=""> */}
                    DEVELOP
                {/* </Link> */}
            </AccordionPanel>
        </AccordionItem>
        {/* Contact */}
        <AccordionItem>
            <AccordionButton
                as="h2"
                className="menu-item"
            >
                <Box flex="1" textAlign="left">
                    CONTACT
                </Box>
                {/* <AccordionIcon /> */}
            </AccordionButton>
            <AccordionPanel pb={4}>
                {/* <Link className="link" to=""> */}
                    EMAIL
                {/* </Link> */}
            </AccordionPanel>
        </AccordionItem>
        {/* Socials */}
        <AccordionItem>
            <AccordionButton
                as="h2"
                className="menu-item"
            >
                <Box flex="1" textAlign="left">
                    SOCIALS
                </Box>
                {/* <AccordionIcon /> */}
            </AccordionButton>
            <AccordionPanel pb={4}>
                {/* <Link className="link" to=""> */}
                    LINKEDIN
                {/* </Link> */}
                {/* <Link className="link" to=""> */}
                    INSTAGRAM
                {/* </Link> */}
                {/* <Link className="link" to=""> */}
                    GITHUB
                {/* </Link> */}
                {/* <Link className="link" to=""> */}
                    DRIBBBLE
                {/* </Link> */}
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
    )
}

export default MenuItems;