import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from 'common/Input';
import Button from 'common/Button';

import { loginUser } from 'api/api';

import s from './Login.module.css';

const Login = () => {
	const navigate = useNavigate();

	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');

	const onChangeEmailHandle = (e) => {
		setEmailValue(e.target.value);
	};

	const onChangePasswordHandle = (e) => {
		setPasswordValue(e.target.value);
	};

	const onSubmitHandle = async (e) => {
		e.preventDefault();

		const reqUser = { email: emailValue, password: passwordValue };

		const response = await loginUser(reqUser);

		console.log(response);

		if (response?.status === 201) {
			const token = response?.data?.result.split(' ')[1];

			console.log(token);

			localStorage.setItem('token', token);

			navigate('/courses');
		}
	};

	return (
		<form className={s.loginForm} onSubmit={onSubmitHandle}>
			<h2>Login</h2>
			<Input
				placeholder='Enter email'
				labelTxt='Email'
				value={emailValue}
				onChange={onChangeEmailHandle}
			/>
			<Input
				placeholder='Enter password'
				labelTxt='Password'
				value={passwordValue}
				type='password'
				onChange={onChangePasswordHandle}
			/>
			<Button btnText='Registration' type='submit' />
			<p className={s.warning}>
				If you have an account you can{' '}
				<Link to='/registration' className={s.registrationLink}>
					Login
				</Link>
			</p>
		</form>
	);
};

export default Login;
