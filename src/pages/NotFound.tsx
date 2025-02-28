import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-800 text-white p-3 rounded-lg">
            <FileText size={32} />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default NotFound;