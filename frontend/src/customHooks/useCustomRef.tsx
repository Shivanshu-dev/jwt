import { useEffect, useRef } from 'react';

export const useCustomRef = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);
	return inputRef;
};
