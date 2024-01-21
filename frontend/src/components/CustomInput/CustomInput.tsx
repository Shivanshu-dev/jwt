import React, { ChangeEvent } from 'react';

type Props = {
	label: string;
	type: string;
	placeholder: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	forwardedRef?: React.Ref<HTMLInputElement>;
};

const CustomInput: React.FunctionComponent<Props> = ({
	label,
	type,
	placeholder,
	value,
	onChange,
	forwardedRef,
}) => {
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				flexDirection: 'column',
				justifyContent: 'space-between',
				margin: '8px',
			}}
		>
			<label>{label}</label>
			<input
				onChange={onChange}
				value={value}
				type={type}
				placeholder={placeholder}
				autoComplete='true'
				ref={forwardedRef}
			/>
		</div>
	);
};

export default React.memo(CustomInput);
