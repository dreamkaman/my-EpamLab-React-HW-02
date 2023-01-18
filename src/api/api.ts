import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		'Content-Type': 'application/json',
	},
});

type IResponse = {
	name: string;
	email: string;
	password: string;
};

export const signUpUser = async ({ name, email, password }: IResponse) => {
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
