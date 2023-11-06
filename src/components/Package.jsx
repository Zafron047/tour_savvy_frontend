import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../stylesheets/package.css';

const Package = ({ p }) => {
  const { name, description } = p;
  const line = Array(name.length + 5).join('-');
  return (
    <Link to={`/details/${p.id}`} className="package-link d-flex flex-column justify-content-center align-items-center">
      <div className="package d-flex flex-column justify-content-center align-items-center">
        <img
          src={p.image}
          alt="avatar"
          className="package-img"
        />
        <h5 className="package-name">{name}</h5>
        <p className="package-line">{line}</p>
        <p className="package-details">
          {description}
        </p>
        <p className="package-socials">
          <span><i className="bx bxl-facebook-circle text-secondary socials-icons" /></span>
          <span><i className="bx bxl-twitter text-secondary socials-icons" /></span>
          <span><i className="bx bxl-instagram text-secondary socials-icons" /></span>
        </p>
      </div>
    </Link>
  );
};

Package.propTypes = {
  p: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Package;
