import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import Missingpage from './pages/missing/Missingpage';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" index element={<Homepage />} />
				<Route path="*" element={<Missingpage />} />
			</Routes>
		</Router>
	);
};

export default App;
