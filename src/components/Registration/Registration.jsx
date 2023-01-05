import { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from 'common/Input';
import Button from 'common/Button';

import s from './Registration.module.css';

const Registration = () => {
	const [nameValue, setNameValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');

	const onChangeNameHandle = (e) => {
		setNameValue(e.target.value);
	};

	const onChangeEmailHandle = (e) => {
		setEmailValue(e.target.value);
	};

	const onChangePasswordHandle = (e) => {
		setPasswordValue(e.target.value);
	};

	const onSubmitHandle = (e) => {
		e.preventDefault();

		const newUser = {
			name: nameValue,
			email: emailValue,
			password: passwordValue,
		};

		console.log(newUser);
	};
	return (
		<form className={s.registrationForm} onSubmit={onSubmitHandle}>
			<h2>Registration</h2>
			<Input
				placeholder='Enter name'
				labelTxt='Name'
				width='350'
				value={nameValue}
				onChange={onChangeNameHandle}
			/>
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
				<Link to='/login' className={s.loginLink}>
					Login
				</Link>
			</p>
		</form>
	);
};

export default Registration;
