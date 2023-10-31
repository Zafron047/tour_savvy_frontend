import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPackages } from '../redux/packages/packagesSlice';

const PackageDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isPackageFetched = useSelector((state) => state.packages.isPackageFetched);
  const allPackages = useSelector((state) => state.packages.allPackages);

  const [selectedPackageType, setSelectedPackageType] = useState('');

  useEffect(() => {
    if (!isPackageFetched || !allPackages.find((pkg) => pkg.id === id)) {
      dispatch(fetchPackages());
    }
  }, [dispatch, isPackageFetched, id, allPackages.length]);

  // eslint-disable-next-line eqeqeq
  const selected = useSelector((state) => state.packages.allPackages.find((pkg) => pkg.id == id));

  const handlePackageTypeChange = (e) => {
    setSelectedPackageType(e.target.value);
  };

  if (!isPackageFetched || !selected) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>PACKAGE DETAILS</h1>
      <div>
        <img src={selected.image} alt="location" />
        <h2>{selected.name}</h2>
        <p>{selected.description}</p>

        <select value={selectedPackageType} onChange={handlePackageTypeChange}>
          <option value="">Select a package type</option>
          {selected.package_type.map((packageType) => (
            <option key={packageType.name} value={packageType.name}>
              {packageType.name}
            </option>
          ))}
        </select>

        {selectedPackageType && (
          <div>
            <h3>
              Selected Package Type:
              {selectedPackageType}
            </h3>
            {selected.package_type.map((packageType) => {
              if (packageType.name === selectedPackageType) {
                return (
                  <div key={packageType.name}>
                    <h4>
                      Price:
                      {packageType.price}
                    </h4>
                    <p>
                      Description:
                      {packageType.description}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageDetails;
