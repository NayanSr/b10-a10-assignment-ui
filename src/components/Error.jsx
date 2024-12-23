import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
          <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary">
            Go Back to Home
          </Link>
        </div>
      );
};

export default Error;