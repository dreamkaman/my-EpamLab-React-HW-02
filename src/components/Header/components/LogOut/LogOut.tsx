import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'common/Button';
import { Context } from 'Context';

import { logOutUser } from 'api/api';

import s from './LogOut.module.css';

const LogOut = ({ userName = 'Anonymous' }) => {
	const navigate = useNavigate();
	const context = useContext(Context);

	const onClickHandler = async () => {
		const token = localStorage.getItem('token');
		const response = await logOutUser(token);

		console.log(response);

		if (response.status === 200) {
			localStorage.setItem('token', '');
			context.setIsLoggined(false);
			navigate('/login');
		}
	};

	return (
		<div className={s.wrapper}>
			<p className={s.userName}>{userName}</p>
			<Button btnText='Logout' onClick={onClickHandler} />
		</div>
	);
};

export default LogOut;
