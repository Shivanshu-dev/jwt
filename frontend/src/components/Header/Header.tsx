import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
	path: string;
};

const Header: React.FunctionComponent<Props> = ({
	path,
}): React.JSX.Element => {
	return (
		<div
			style={{
				width: '100%',
				height: '10vh',
				top: 0,
				display: 'flex',
				justifyContent: 'space-between',
				position: 'sticky',
				paddingTop: '6px',
			}}
		>
			<div>
				<h4>MERN JWT Capsule Code</h4>
			</div>
			<div>
				<Link to={path === '/' ? '/login' : '/'}>
					Go to {path === '/' ? 'Login' : 'Register'}
				</Link>
			</div>
		</div>
	);
};

export default React.memo(Header);
