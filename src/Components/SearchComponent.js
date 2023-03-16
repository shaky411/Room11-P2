
import React,{ useState } from 'react';
import axios from 'axios';

function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const api = "46iF2Ih3nFmhNcqtnKSe4WaDmAms5AP6";

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g. call API with searchQuerynpm 
    axios.get(`https://app.ticketmaster.com/discovery/v2/events?keyword=${searchQuery}&apikey=${api}&size=5`)
    .then(response => {
      // handle API response data here
      console.log(response.data._embedded.events);
    })
    // .catch(error => {
    //   // handle API error here
    // });
};

  return (
    <div className="p-[30px] bg-slate-700">
    <div className="max-w-[300px] mx-auto">
<div className="flex justify-center" >
  <form  onSubmit={handleSubmit} className="w-full max-w-md">
    <div className="flex items-center border-b border-b-2 border-gray-200 py-2">
      <input type="text" value={searchQuery} onChange={handleInputChange} className="appearance-none bg-white-900 border-solid border-2 border-white-900 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"></input>
      <button type="submit" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
        Submit
      </button>
    </div>
  </form>
  </div>
  </div>
  </div>

  );
}

export default SearchComponent;