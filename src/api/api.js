import axios from 'axios';
const instance = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const signUpUser = async ({ name, email, password }) => {
	try {
		const response = await instance.post('/register', {
			name,
			email,
			password,
		});

		return response;
	} catch (error) {
		console.log(error.message);
	}
};

export const loginUser = async ({ email, password }) => {
	try {
		const response = await instance.post('/login', {
			email,
			password,
		});

		return response;
	} catch (error) {
		console.log(error.message);
	}
};
