import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Context } from 'Context';

import { durationTransform } from 'helpers/pipeDuration';
import { dateTransform } from 'helpers/dateGenerator';

import s from './CourseInfo.module.css';

const CourseInfo = () => {
	const { courseId } = useParams();
	console.log(courseId);

	const context = useContext(Context);

	console.log(context);

	const course = context.courses.find((course) => course.id === courseId);

	return (
		<section>
			<Link to='/courses'>{'< Back to courses'}</Link>
			<h2>{course?.title}</h2>
			<div className={s.wrapper}>
				<p className={s.description}>{course?.description}</p>
				<div className={s.courseAbout}>
					<p className={s.courseId}>
						<span>ID: </span> {course.id}
					</p>
					<p className={s.duration}>
						<span>Duration: </span>
						{durationTransform(course?.duration)} hours
					</p>
					<p className={s.created}>
						<span>Created: </span>
						{dateTransform(course?.creationDate)}
					</p>
					<p className={s.authors}>
						<span>Authors:</span>
						{course?.authors}
					</p>
				</div>
			</div>
		</section>
	);
};

export default CourseInfo;
