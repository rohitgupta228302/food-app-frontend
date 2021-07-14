import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import room1 from "./images/hotelImages/room-1.jpeg";
import room2 from "./images/hotelImages/room-2.jpeg";
import room3 from "./images/hotelImages/room-3.jpeg";
import room4 from "./images/hotelImages/room-4.jpeg";
import room5 from "./images/hotelImages/room-5.jpeg";

const BookAHotel = () => {
  return (
    <>
      <div class="card-deck">
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={room1} alt="room1" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">HOTEL 1</p>
            <Link className="btn btn-primary" to="/ConfirmBooking">
              Book Now
            </Link>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={room2} alt="room2" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">HOTEL 2</p>
            <Link className="btn btn-primary" to="/ConfirmBooking">
              Book Now
            </Link>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={room3} alt="room3" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">HOTEL 3</p>
            <Link className="btn btn-primary" to="/ConfirmBooking">
              Book Now
            </Link>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={room4} alt="room4" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">HOTEL 4</p>
            <Link className="btn btn-primary" to="/ConfirmBooking">
              Book Now
            </Link>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={room5} alt="room5" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">HOTEL 5</p>
            <Link className="btn btn-primary" to="/ConfirmBooking">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookAHotel;
