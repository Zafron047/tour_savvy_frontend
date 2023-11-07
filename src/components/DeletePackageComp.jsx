import PropTypes from 'prop-types';
import React from 'react';
import '../stylesheets/delete_package.css';

const DeletePackageComp = ({ p }) => {
  const { name, image } = p;
  return (
    <div className="card-header">
      <img
        src={image}
        alt="avatar"
        className="img"
      />
      <h5>{name}</h5>
    </div>
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
