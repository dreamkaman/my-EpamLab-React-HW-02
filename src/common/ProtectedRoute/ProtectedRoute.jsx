import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isLoggined, children }) => {
	const location = useLocation();

	console.log(location);
	console.log(isLoggined);

	if (!isLoggined) {
		return <Navigate to='/registration' replace />;
	}

	// if (isLoggined && location.pathname === '/') {
	// 	return <Navigate to='/courses' replace />;
	// }

	return children;
};

export default ProtectedRoute;
