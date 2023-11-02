import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/authentication/userSlice';
import { getReservations } from '../redux/reservations/reservationSlice';

const Login = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(loginUser({ user: { username: formData.username } }));
    console.log(res);
    try {
      if (res) {
        await dispatch(getReservations());
        alert('You are logged in');
        navigate('/packages');
      } else {
        alert('You need to register');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
