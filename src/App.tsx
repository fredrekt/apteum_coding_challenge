import { Spin } from 'antd';
import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const LazyHomepage = lazy(() => import('./pages/home/Homepage'));
const LazyMissingpage = lazy(() => import('./pages/missing/Missingpage'));

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					index
					element={
						<Suspense fallback={<Spin />}>
							<LazyHomepage />
						</Suspense>
					}
				/>
				<Route
					path="*"
					element={
						<Suspense fallback={<Spin />}>
							<LazyMissingpage />
						</Suspense>
					}
				/>
			</Routes>
		</Router>
	);
};

export default App;
