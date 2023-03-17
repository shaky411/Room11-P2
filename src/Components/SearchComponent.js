import React, { useState } from "react";
import axios from "axios";

function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(" events");
  const api = "46iF2Ih3nFmhNcqtnKSe4WaDmAms5AP6";

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g. call API with searchQuery and selectedOption
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/${selectedOption}?keyword=${searchQuery}&apikey=${api}&size=5`
      )
      .then((response) => {
        // handle API response data here
        // console.log(response.data);
        console.log(selectedOption);

        if (selectedOption === "venues") {
          console.log(response.data._embedded.venues);
        }
        else if (selectedOption === "attractions") {
          console.log(response.data._embedded.attractions);
        } 
        else {
          console.log(response.data._embedded.events);
        }
      });
    // .catch(error => {
    //   // handle API error here
    // });
  };

  return (
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
              ></input>
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
  );
}

export default SearchComponent;
