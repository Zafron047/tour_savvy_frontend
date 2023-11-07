import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import Package from './Package';
import '../stylesheets/packages.css';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

const Packages = () => {
  const packages = useSelector((state) => state.packages.allPackages);
  const loading = useSelector((state) => state.packages.loading);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const swiperRef = useRef(null);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
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
  const filter = packages.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <div className="packages d-flex flex-column justify-content-center align-items-center">
      <div className="flex-column justify-content-center align-items-center">
        <h1 className="packages-heading">TOUR PACKAGES</h1>
        <p className="packages-sub-heading">Please select a tour package</p>
        <p className="packages-line">------------------------</p>
        <div className="input-container">
          <input
            className="packages-search"
            type="text"
            placeholder="Search by package name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="packages-list">
        <button type="button" className="swipe-btn-1" onClick={handlePrevSlide}>
          <img
            className="slide-button"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP5JREFUSEu1lt0RgkAMhHc7sRSpRK1ErEQ7kVLsJM4yd048TwZyBy+8MPk2mz+InR/uHB/NADM7ALhLKMmhFNwEMLMrgDEHJfkTLwRwqo9ecRdAofoF4ALgmSyKZ1BR/SCp4DAzawKYmayYVQKYVZOcsj1hQFKtQp5TsKnWKSFAoVrxR5K32txsBlQKOZCUNdVnE8DM5HVuv7+qPSkKkGJ1StWWFoBG/+QmVKB+FrnWE0h26b2YzSaLitTLbNT7moGvgocBLhvNgeahmk0zIK2DMptPh3UBuGz8iu637Cq10ZHpv66LLvPtrIsWX9cLa2K/k7nmhyF0MtcEzt+8AYK6lxmyTtQQAAAAAElFTkSuQmCC"
            alt="slide"
          />
        </button>
        <Swiper
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => {
            console.log(swiper);
            swiperRef.current = swiper;
          }}
        >
          {filter.map((p) => (
            <SwiperSlide key={p.id}>
              <Package key={p.id} p={p} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button type="button" className="swipe-btn-2" onClick={handleNextSlide}>
          <img
            className="slide-button"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAO9JREFUSEu1ltENwjAQQ+1NYBOYBDoJZRLYhI7STYwsJShSmyZNyX2icu9sX08lOhc798cqQNILwAXAleR8ZIgcQKGpm79JPlshJUDsa1CTmhLgDOAD4ASgSc0mgCQlufkNwBjkTACG2myKgOiRpDuAx1411QCDVtSMpQXYBUjUWEm0zNnYMlu3qCZAoia+L/5pVU0zIGPZTNKb96tDgABJ7ZpIXv8CCIH3sUhSn5BXpvadGrbuVHUGknxdfTZcm6u5K4MwtS3xm+xaBNmswBc0mTq760cA3c9109Q1GcT9zt6YLVuKgNo/1zzX/aviCyWOnxkFdwrCAAAAAElFTkSuQmCC"
            alt="slide"
          />
        </button>
      </div>
    </div>
  );
};

export default Packages;
