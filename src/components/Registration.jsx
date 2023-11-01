import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registrationUser } from '../redux/authentication/userSlice';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.current_user.loading);
  const error = useSelector((state) => state.current_user.error);
  const [formData, setFormData] = useState({
    username: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registrationUser({ user: { username: formData.username } })).then((response) => {
      if (response.payload && response.payload.username) {
        navigate('/');
      } else {
        alert('You should put a user name');
      }
    }).catch((error) => {
      alert('Error during registration', error.message);
    });
  };

  return (
    <div>
      <h2>Registration</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;