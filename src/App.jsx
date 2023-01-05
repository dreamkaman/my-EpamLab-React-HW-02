import { useState } from 'react';
import { Route, Routes } from 'react-router';

import Header from 'components/Header';
import Courses from 'components/Courses';
import CourseInfo from 'components/CourseInfo';
import Registration from 'components/Registration';
import Login from 'components/Login';

import { Context } from './Context';

import * as db from 'helpers/mockedDataBase';

const App = () => {
	const [isLoggined, setIsLoggined] = useState(false);

	const onClickHandle = (value) => {
		setIsLoggined(value);
	};
	return (
		<>
			<Context.Provider value={{ isLoggined, onClickHandle }}>
				<Header />
			</Context.Provider>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route
					path='/courses'
					element={<Courses courses={db.mockedCoursesList} />}
				/>
				<Route path='/courses/:courseId' element={<CourseInfo />} />
			</Routes>
		</>
	);
};

export default App;
