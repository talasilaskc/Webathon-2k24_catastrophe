import React, { useEffect } from 'react';
import { useNavigate ,Link} from 'react-router-dom';

const HomePage = ({ userType }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userType === 'student') {
      navigate('/dashboard');
    } else if (userType === 'alumni') {
      navigate('/registration');
    }
  }, [userType, navigate]);

  return (
    <div className=' mt-5'>
      <h3 className='justify-content-center'>Home</h3>
      {/* <p>Navigating...</p> */}
      <h4>Are you a Student?</h4>
      <i>click <Link to="/dashboard">here</Link>for student dashboard</i>
      <h4>Are you an alumini ?</h4>
      <i>click <Link to="/signup">here</Link>for alumini  register!</i>
    </div>
  );
};

export default HomePage;