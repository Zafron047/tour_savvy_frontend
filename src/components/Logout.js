import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authentication/userSlice';
import '../stylesheets/logout.css';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="logout-bg">
      <button className="logout" type="button" onClick={handleLogout}>Press again to Logout</button>
    </div>
  );
};

export default Logout;
