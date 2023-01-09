import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import Header from 'components/Header';
import Courses from 'components/Courses';
import CourseInfo from 'components/CourseInfo';
import Registration from 'components/Registration';
import Login from 'components/Login';

import { Context } from './Context';

import * as db from 'helpers/mockedDataBase';

const initialCoursesSet = db.mockedCoursesList;
const authorsInitial = db.mockedAuthorsList;

const App = () => {
	const [isLoggined, setIsLoggined] = useState(false);
	const [courses, setCourses] = useState(initialCoursesSet);
	const [filter, setFilter] = useState('');
	const [authors, setAuthors] = useState(authorsInitial);

	useEffect(() => {
		if (!filter) {
			setCourses(initialCoursesSet);
		}
	}, [filter]);

	const onClickHandle = (value) => {
		setIsLoggined(value);
	};
	return (
		<>
			<Context.Provider
				value={{
					isLoggined,
					onClickHandle,
					filter,
					setFilter,
					courses,
					setCourses,
					authors,
					setAuthors,
				}}
			>
				<Header />
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/courses' element={<Courses />} />
					<Route path='/courses/:courseId' element={<CourseInfo />} />
				</Routes>
			</Context.Provider>
		</>
	);
};

export default App;
