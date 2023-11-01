import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Reservations() {
  const current_user = JSON.parse(localStorage.getItem('user'));
  if (!current_user) {
    return <div>Please log in to see reservations.</div>;
  }
  
  const isLoading = useSelector((store) => store.reservations.isLoading);
  const user = JSON.parse(localStorage.getItem('user'));
  const res = useSelector((s) => s.reservations.reservations).filter((i) => i.user_id === user.id);

  if (isLoading) {
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
      {res.map((reservation) => (
        <Link to="/reservation" key={reservation.id} state={{ prop_package_id: reservation.package_id, prop_reservation_id: reservation.id }}>
          <div className="reservation" key={reservation.id}>
            <h2>
              Location:
              {reservation.city_name}
            </h2>
            <h3>
              Date:
              {reservation.reservation_date}
            </h3>
            <h3>
              Package:
              {reservation.package_type}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Reservations;
