import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPackage } from '../redux/packages/packagesSlice';

const PackageForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [packageTypes, setPackageTypes] = useState([{ name: '', price: '', description: '' }]);

  const addPackageType = () => {
    setPackageTypes([...packageTypes, { name: '', price: '', description: '' }]);
  };

  const handlePackageTypeChange = (index, e) => {
    const updatedPackageTypes = [...packageTypes];
    updatedPackageTypes[index][e.target.name] = e.target.value;
    setPackageTypes(updatedPackageTypes);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPackage = {
      name,
      description,
      image,
      package_type: packageTypes,
    };

    dispatch(createPackage(newPackage));

    setName('');
    setDescription('');
    setImage('');
    setPackageTypes([{ name: '', price: '', description: '' }]);
  };

  return (
    <div>
      <h2>Create a New Package</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        {packageTypes.map((packageType, index) => (
          <div key={index}>
            <h3>Package Type {index + 1}</h3>
            <div>
              <label>Package Type Name:</label>
              <input
                type="text"
                name="name"
                value={packageType.name}
                onChange={(e) => handlePackageTypeChange(index, e)}
                required
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={packageType.price}
                onChange={(e) => handlePackageTypeChange(index, e)}
                required
              />
            </div>
            <div>
              <label>Package Type Description:</label>
              <textarea
                name="description"
                value={packageType.description}
                onChange={(e) => handlePackageTypeChange(index, e)}
                required
              />
            </div>
          </div>
        ))}
        <button type="button" onClick={addPackageType}>
          Add Package Type
        </button>
        <button type="submit">Create Package</button>
      </form>
    </div>
  );
};

export default PackageForm;
