// Standard React Landing Design
import React from "react";
// import {AnimatePresence, motion} from framer-motion/dist/framer-motion;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import Gateway from "./pages/Gateway"
import { ChakraProvider } from "@chakra-ui/react";

// Import React Packages

function App() {
	return (
		<ChakraProvider>
			<div className="App">
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<Gateway />} />x
					</Routes>
					<Footer />
				</Router>
			</div>
		</ChakraProvider>
	);
}

export default App;
