import axios from 'axios';
const instance = axios.create({
	baseURL: 'http://localhost:4000',
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
