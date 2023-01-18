import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'common/Button';
import { Context } from 'Context';

import s from './LogOut.module.css';

const LogOut = ({ userName = 'Anonymous' }) => {
	const navigate = useNavigate();
	const context = useContext(Context);

	const onClickHandler = () => {
		localStorage.setItem('token', '');
		context.setIsLoggined(false);
		navigate('/login');
	};

	return (
		<div className={s.wrapper}>
			<p className={s.userName}>{userName}</p>
			<Button btnText='Logout' onClick={onClickHandler} />
		</div>
	);
};

export default LogOut;
