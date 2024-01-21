import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import Home from './pages/Home.tsx';
import UserAction from './pages/UserAction.tsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} path='/' element={<UserAction />} />
			<Route path='/login' element={<UserAction />} />
			<Route path='/home' element={<Home />} />
			<Route path='*' element={<div>Page Not found please go back</div>} />
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
