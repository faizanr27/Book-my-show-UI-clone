import React from 'react';
import { Link } from 'react-router-dom';

function BottomNavBar() {
  return (
    <div className="fixed bottom-0 w-full bg-white shadow-lg md:hidden block">
      <div className="flex justify-around py-2">
        <div className="flex flex-col items-center">
          <Link to="/">
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/home-selected-collection-202302270255.png" alt="Home" className="object-cover w-8 h-8" />
          <span className="text-red-500 text-xs">Home</span>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/movies">
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/movies-default-collection-202303031120.png" alt="Movies" className="object-cover w-8 h-8" />
          <span className="text-gray-500 text-xs">Movies</span>
        </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/events">
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/le-icon-grey-collection-202405100122.png" alt="Live Events" className="object-cover w-8 h-8" />
          <span className="text-gray-500 text-xs">Live Events</span>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/profile-default-collection-202302270255.png" alt="Profile" className="object-cover w-8 h-8" />
          <span className="text-gray-500 text-xs">Profile</span>
        </div>
      </div>
    </div>
  );
}

export default BottomNavBar;
