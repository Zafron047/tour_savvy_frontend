import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from '../stylesheets/package.module.css';

const Package = ({ p }) => {
  const { name, description } = p;

  return (
    <Link to="/details">
      <div className={css.container}>
        <img
          src={p.image}
          alt="avatar"
          className={css.img}
        />
        <h5 className={css.desc}>{name}</h5>
        <p className={css.desc}>------------------------</p>
        <p className={css.desc}>
          {description}
        </p>
        <p className={css.links}>
          <span><i className="bx bxl-facebook-circle text-secondary" /></span>
          <span><i className="bx bxl-twitter text-secondary" /></span>
          <span><i className="bx bxl-instagram text-secondary" /></span>
        </p>
      </div>
    </Link>
  );
};

Package.propTypes = {
  p: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Package;
