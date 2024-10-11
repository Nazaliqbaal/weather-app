import React from "react";
import { useRef, useEffect, useState } from "react";

const LocationList = ({ locations, setSelectedLocation }) => {
  console.log("locations arew", locations);

  const dropdownRef = useRef(null);
  const [showLocationList, setShowLocationList] = useState(true);
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLocationList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="text-white bg-[#2a2a2f] w-full p-4 my-5 rounded-md absolute"
    >
      <ul>
        {!locations && (
          <li key={1} className="text-sm py-3 px-4 flex gap-2 items-center">
            No Results found!
          </li>
        )}
        {locations?.map((location) => {
          return (
            <>
              <li
                key={location.id}
                className="text-sm py-3 px-4 flex gap-2 items-center"
                onClick={() => handleLocationSelect(location.name)}
              >
                <span className="flex-4">
                  {location.name}, {location.region}, {location.country}
                </span>
              </li>
              <hr className="h-px bg-[#3d3d46] border-0 " />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default LocationList;
