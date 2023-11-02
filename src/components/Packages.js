import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Package from './Package';
import css from '../stylesheets/packages.module.css';
const Packages = () => {
  const packages = useSelector((state) => state.packages.allPackages);
  const loading = useSelector((state) => state.packages.loading);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  if (loading) {
    return (
      <>
        <div>
          <h2>Loading...</h2>
        </div>
      </>
    );
  }
  const filteredPackages = packages.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className={css.container}>
      <h1 className={css.headline}>TOUR PACKAGES</h1>
      <p className={css.desc}>please select a tour package</p>
      <input
        type="text"
        placeholder="Search by package name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      { filteredPackages.map((p) => (
        <Package key={p.id} p={p} />
      ))}
    </div>
  );
};
export default Packages;
