import { useContext } from 'react';

import Button from 'common/Button';
import { Context } from 'Context';

import s from './LogOut.module.css';

const LogOut = ({ userName = 'Anonymous' }) => {
	const context = useContext(Context);

	const onClickHandler = () => {
		localStorage.setItem('token', '');
		context.setIsLoggined(false);
	};

	return (
		<div className={s.wrapper}>
			<p className={s.userName}>{userName}</p>
			<Button btnText='Logout' onClick={onClickHandler} />
		</div>
	);
};

export default LogOut;
