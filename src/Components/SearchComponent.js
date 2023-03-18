import React, { useState } from "react";
import axios from "axios";

function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(" events");
  const [venues, setVenues] = useState([]);
  const api = "46iF2Ih3nFmhNcqtnKSe4WaDmAms5AP6";

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/${selectedOption}?keyword=${searchQuery}&apikey=${api}&size=6`
      )
      .then((response) => {
        if (selectedOption === "venues") {
          setVenues(response.data._embedded.venues);
        } else {
          console.log(response.data._embedded.events);
        }
      });
  };

  return (
    <div>
      <div className="p-[30px] bg-slate-700">
        <div className="max-w-[450px] mx-auto">
          <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="flex items-center border-b border-b-2 border-gray-200 py-2">
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="mr-3 py-[6px] px-[5px] rounded bg-gray-500 text-center border-solid border-2 border-white-900 text-white "
                >
                  <option disabled value=" events">
                    Select
                  </option>
                  <option value="events">Events</option>
                  <option value="venues">Venues</option>
                  <option value="attractions">Attractions</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter search criteria"
                  value={searchQuery}
                  onChange={handleInputChange}
                  className="placeholder-gray-500 placeholder-lowercase focus:placeholder-transparent uppercase text-center appearance-none bg-white-900 border-solid border-2 border-white-900 w-full text-gray-700 mr-3 py-[6px] rounded leading-tight focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-slate-700 hover:bg-gray-500 tracking-[1.5px] font-bold border-white hover:border-white text-sm border-solid border-2 text-white py-[6px] px-[5px] rounded"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {venues.length > 0 && (
        <div className="venue-display-area grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {venues.map((venue) => (
            <div className="card" key={venue.id}>
              <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <h2>{venue.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
