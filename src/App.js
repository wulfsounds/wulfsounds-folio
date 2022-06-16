// Standard React Landing Design
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

// Import Components
import Header from "./components/Header";
// import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Design from "./pages/Design";
import Develop from "./pages/Develop";
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
						<Route path="/menu" element={<Menu />} />
						<Route path="/design" element={<Design />} />
						<Route path="/develop" element={<Develop />} />
					</Routes>
					{/* <Footer /> */}
				</Router>
			</div>
		</ChakraProvider>
	);
}

export default App;
