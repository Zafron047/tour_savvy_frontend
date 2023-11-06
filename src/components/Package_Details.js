import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { fetchPackages } from '../redux/packages/packagesSlice';
import '../stylesheets/package_details.css';

const PackageDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isPackageFetched = useSelector(
    (state) => state.packages.isPackageFetched,
  );
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
    <div className="d-flex details-wrap flex-md-row flex-column">
      <div className="col-md-8 img-wrap">
        <img
          src={selected.image}
          alt="location"
          className="loc-img img-fluid"
        />
        <div className="back-btn">
          <NavLink to="/packages">
            <button type="button" className="btn btn-lg" aria-label="Go Back">
              <IoIosArrowDropleft className="back-btn-icon text-white" />
            </button>
          </NavLink>
        </div>
      </div>
      <div className="col-md-4 details-info">
        <h2 className="headline">{selected.name}</h2>
        <p className="headline-desc">{selected.description}</p>
        <div className="select-option">
          <select
            value={selectedPackageType}
            onChange={handlePackageTypeChange}
            className="form-select mb-3"
          >
            <option value="">Package</option>
            {selected.package_type.map((packageType) => (
              <option key={packageType.name} value={packageType.name}>
                {packageType.name}
              </option>
            ))}
          </select>
        </div>
        {selectedPackageType && (
          <div className="slected">
            <div className="slected-pkg">
              <div className="row">
                <div className="col-md-5">
                  <p className="type-tag">Package</p>
                </div>
                <div className="col-md-7 type">
                  <p>{selectedPackageType}</p>
                </div>
              </div>
            </div>
            {selected.package_type.map((packageType) => {
              if (packageType.name === selectedPackageType) {
                return (
                  <>
                    <div className="pkg-price" key={packageType.name}>
                      <div className="row">
                        <div className="col-md-6">
                          <p className="price-tag">Price</p>
                        </div>
                        <div className="col-md-6 price">
                          <p>{packageType.price}</p>
                        </div>
                      </div>
                    </div>
                    <div className="pkg-desc" key={packageType.name}>
                      <div className="row">
                        <div className="col-md-4">
                          <p className="plan">Plan</p>
                        </div>
                        <div className="col-md-8 desc">
                          <p>{packageType.description}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
              return null;
            })}
          </div>
        )}
        <div className="pkg-btn">
          <NavLink to="/add_reservations">
            <button type="button" className="btn btn-lg">
              Book
              <IoIosArrowDropright className="btn-icon text-white" />
            </button>
          </NavLink>
        </div>
        <div className="back-btn-sm">
          <NavLink to="/packages">
            <button type="button" className="btn btn-lg" aria-label="Go Back">
              <span className="visually-hidden">Go Back</span>
              <IoIosArrowDropleft className="back-btn-icon text-white" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
