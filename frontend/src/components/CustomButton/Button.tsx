import React from 'react';

type Props = {
	type: 'submit' | 'button';
	text: string;
	disabled: boolean;
};

const Button: React.FunctionComponent<Props> = ({
	type,
	text,
	disabled,
}: Props): React.JSX.Element => {
	return (
		<button
			style={{
				height: '42px',
				width: '82px',
				backgroundColor: 'ButtonShadow',
				border: disabled ? 'none' : '2px solid black',
			}}
			disabled={disabled}
			type={type}
		>
			{text}
		</button>
	);
};

export default React.memo(Button);
