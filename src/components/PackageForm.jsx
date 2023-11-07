import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPackage, fetchPackages } from '../redux/packages/packagesSlice';
import '../stylesheets/package_form.css';

const PackageForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [packageTypes, setPackageTypes] = useState([{ name: '', price: '', description: '' }]);
  const dispatch = useDispatch();
  const addPackageType = () => {
    setPackageTypes([...packageTypes, { name: '', price: '', description: '' }]);
  };
  const handlePackageTypeChange = (index, e) => {
    const updatedPackageTypes = [...packageTypes];
    updatedPackageTypes[index][e.target.name] = e.target.value;
    setPackageTypes(updatedPackageTypes);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPackage = {
      name,
      description,
      image,
      package_type: packageTypes,
    };
    await dispatch(createPackage(newPackage));
    await dispatch(fetchPackages());
    setName('');
    setDescription('');
    setImage('');
    setPackageTypes([{ name: '', price: '', description: '' }]);
  };
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <div>Please log in to add a package.</div>;
  }
  return (
    <div className="PackageForm">
      <form className="input" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" placeholder="Name" id="nameInput" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Image URL" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        {packageTypes.map((packageType, index) => (
          /* eslint-disable react/no-array-index-key */
          <div key={index} className="mb-4">
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Package"
                className="form-control"
                value={packageType.name}
                onChange={(e) => handlePackageTypeChange(index, e)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="form-control"
                value={packageType.price}
                onChange={(e) => handlePackageTypeChange(index, e)}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="description"
                placeholder="Package Plan"
                className="form-control"
                value={packageType.description}
                onChange={(e) => handlePackageTypeChange(index, e)}
                required
              />
            </div>
          </div>
        ))}
        <div className="pkg-btn-wrap">
          <button type="button" className="btn btn-secondary" onClick={addPackageType}>
            Add Package
          </button>
          <button type="submit" className="btn btn-primary create">Create Package</button>
        </div>
      </form>
    </div>
  );
};
export default PackageForm;
