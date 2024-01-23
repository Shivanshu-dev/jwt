import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: '',
	// timeout: 5000,
	headers: {
		// 'Content-Type': 'Shivanshu',
	},
});

export const registerUser = async (newUserData) => {
	try {
		const data = await axiosInstance.post('/something', { newUserData });
		if (data) {
			console.log('data console');
			return data;
		}
	} catch (error) {
		console.log(error, 'error from api');
		return error;
	}
};
