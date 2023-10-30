import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Package from './Package';
import css from '../stylesheets/packages.module.css';
import { fetchPackages } from '../redux/packages/packagesSlice';

const Packages = () => {
  const packages = useSelector((state) => state.packages.allPackages);
  const loading = useSelector((state) => state.packages.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);

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
    <div className={css.container}>
      <h1 className={css.headline}>TOUR PACKAGES</h1>
      <p className={css.desc}>please select a tour package</p>

      { packages.map((p) => (
        <Package key={p.id} p={p} />
      ))}

    </div>
  );
};

export default Packages;
