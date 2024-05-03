import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import apiCall from '../repository/api-call';
import { useNavigate } from 'react-router-dom';
import "../../public/index.css"

const Logout = () => {
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await apiCall.logout();
      localStorage.removeItem("_au");
      localStorage.removeItem("_rf");
      localStorage.removeItem("_user");
      navigate('/');
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Error logging out. Please try again.');
    }
  };


  useEffect(() => {
    logoutUser()
  }, [])


  return (
    <div className="logout-container">
      <div className="logout-animation">
        <div className="spinner"></div>
        <p>Logging out...</p>
      </div>
    </div>
  )
}

export default Logout
