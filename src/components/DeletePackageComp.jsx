import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DeletePackageComp = ({ p }) => {
  const { name, description } = p;

  return (
    <Link to={`/details/${p.id}`}>
      <div>
        <img
          src={p.image}
          alt="avatar"
        />
        <h5 >{name}</h5>
        <p>------------------------</p>
        <p>
          {description}
        </p>
      </div>
    </Link>
  );
};

DeletePackageComp.propTypes = {
  p: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeletePackageComp;
