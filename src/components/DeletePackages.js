import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePackage, fetchPackages } from '../redux/packages/packagesSlice';
import DeletePackageComp from './DeletePackageComp';

const DeletePackages = () => {
  const packages = useSelector((state) => state.packages.allPackages);
  const loading = useSelector((state) => state.packages.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);

  const handleDelete = (packageId) => {
    dispatch(deletePackage(packageId));
  };

  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <div>Please log in to delete a package.</div>;
  }

  if (loading) {
    return (
      <>
        <div>
          <h2>Loading...</h2>
        </div>
      </>
    );
  }

  return (
    <div>

      { packages.map((p) => (
        <div key={p.id}>
          <DeletePackageComp key={p.id} p={p} />
          <button type="button" onClick={() => handleDelete(p.id)}>Delete Package</button>
        </div>
      ))}

    </div>
  );
};

export default DeletePackages;
