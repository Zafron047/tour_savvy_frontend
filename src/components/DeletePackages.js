import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePackage, fetchPackages } from '../redux/packages/packagesSlice';
import { getReservations } from '../redux/reservations/reservationSlice';
import DeletePackageComp from './DeletePackageComp';

const DeletePackages = () => {
  const packages = useSelector((state) => state.packages.allPackages);
  const loading = useSelector((state) => state.packages.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);
  const handleDelete = (packageId) => {
    dispatch(deletePackage(packageId)).then(() => {
      dispatch(getReservations());
    });
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
    <div className="container delete-wrap">
      <div className="bg-layer">
        {packages.map((p) => (
          <div className="card-bg" key={p.id}>
            <div className="card-container" key={p.id}>
              <div className="per-package" key={p.id}>
                <DeletePackageComp key={p.id} p={p} />
                <button type="button" onClick={() => handleDelete(p.id)} className="btn btn-danger">Delete Package</button>
              </div>
              <div className="description" key={p.id}>
                {p.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DeletePackages;
