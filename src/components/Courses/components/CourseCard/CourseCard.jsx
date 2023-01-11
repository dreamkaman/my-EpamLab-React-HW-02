import Button from 'common/Button';

import s from './CourseCard.module.css';

const CourseCard = ({ id, title, description, authors, duration, created }) => {
	const onShowCourseClickHandle = (e) => {
		console.log(e.target);
	};
	return (
		<li className={s.courseCard}>
			<div className={s.courseCardLeftSide}>
				<h3 className={s.title}>{title}</h3>
				<p className={s.description}>{description}</p>
			</div>
			<div className={s.courseCardRightSide}>
				<p>
					<span>Author: </span>
					{authors}
				</p>
				<p>
					<span>Duration: </span>
					{duration} hours
				</p>
				<p>
					<span>Created: </span>
					{created}
				</p>
				<Button
					id={id}
					btnText='Show course'
					onClick={onShowCourseClickHandle}
				/>
			</div>
		</li>
	);
};

export default CourseCard;
