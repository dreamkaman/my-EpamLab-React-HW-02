import { useParams } from 'react-router-dom';

const CourseInfo = () => {
	const params = useParams();
	console.log(params);

	return <p>Hello!</p>;
};

export default CourseInfo;
