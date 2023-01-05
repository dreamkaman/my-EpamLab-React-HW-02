import Input from 'common/Input';
import Button from 'common/Button';
import { Link } from 'react-router-dom';

import s from './Registration.module.css';

const Registration = () => {
	return (
		<form className={s.registrationForm}>
			<h2>Registration</h2>
			<Input placeholder='Enter name' labelTxt='Name' width='350' />
			<Input placeholder='Enter email' labelTxt='Email' />
			<Input placeholder='Enter password' labelTxt='Password' />
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
