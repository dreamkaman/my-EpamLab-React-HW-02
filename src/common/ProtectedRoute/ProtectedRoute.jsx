import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggined, children }) => {
	if (isLoggined) {
		return children;
	}
	return <Navigate to='/registration' replace />;
};

export default ProtectedRoute;
