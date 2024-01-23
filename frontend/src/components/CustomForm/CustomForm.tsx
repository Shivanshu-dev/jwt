import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Button from '../CustomButton/Button.tsx';
import CustomInput from '../CustomInput/CustomInput.tsx';
import { useCustomRef } from '../../customHooks/useCustomRef.tsx';
import { registerUser } from '../../axiosApi/allApi.js';

export type Props = {
	registerPage: boolean;
};

const CustomForm: React.FunctionComponent<Props> = ({ registerPage }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const inputRef = useCustomRef();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const data = registerUser();
		console.log('data return from axios', data);
	};
	const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(e.target.value);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<div>
						<CustomInput
							value={email}
							label='Email'
							type='text'
							placeholder='Enter Email'
							onChange={handleEmailInput}
							forwardedRef={inputRef}
						/>
					</div>
					<div>
						<CustomInput
							label='Enter Password'
							type='password'
							placeholder='Enter Password'
							value={password}
							onChange={handlePasswordChange}
						/>
					</div>
					{registerPage && (
						<div>
							<CustomInput
								label='Confirm Password'
								type='password'
								placeholder='Confirm Password'
								value={confirmPassword}
								onChange={handleConfirmPasswordChange}
							/>
						</div>
					)}
				</div>
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						marginTop: '12px',
					}}
				>
					<Button
						type='submit'
						text='Submit'
						disabled={password.length !== confirmPassword.length}
					/>
				</div>
			</form>
		</div>
	);
};

export default CustomForm;
