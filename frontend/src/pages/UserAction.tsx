import React, { useEffect, useState } from 'react';
import CustomForm, { Props } from '../components/CustomForm/CustomForm.tsx';
import { useLocation } from 'react-router-dom';

const CustomHOCForm = <P extends {}>(
	WrappedComponent: React.ComponentType<P>
) => {
	return (props: P) => {
		return <WrappedComponent {...props} />;
	};
};

const WithHOC = CustomHOCForm<Props>(CustomForm);

const UserAction: React.FunctionComponent = (): React.JSX.Element => {
	const [registerUser, setRegisterUser] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname && pathname === '/') {
			setRegisterUser(true);
		} else {
			setRegisterUser(false);
		}
	}, [pathname]);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: 'auto',
				width: 'auto',
				flexDirection: 'column',
			}}
		>
			<div>
				<h3>Register from here</h3>
			</div>
			<div>
				<WithHOC registerPage={registerUser} />
			</div>
		</div>
	);
};

export default UserAction;
