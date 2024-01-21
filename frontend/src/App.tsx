import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/Header.tsx';

const App: React.FunctionComponent = () => {
	const { pathname } = useLocation();
	return (
		<div style={{ height: '100vh', width: '100%', margin: 0, padding: 0 }}>
			<Header path={pathname} />
			<Outlet />
		</div>
	);
};

export default App;
