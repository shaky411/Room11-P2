import React, { useState } from "react";
import axios from "axios";
import "./search-component-custom.css"

function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(" events");
  const [venues, setVenues] = useState([]);
  const [events, setEvents] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const api = "9hXnfPAAHbB5UPYZbISFo84dHxVfHL8o";

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEvents([]);
setVenues([]);
setAttractions([]);
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/${selectedOption}?keyword=${searchQuery}&apikey=${api}&size=7`
      )
      .then((response) => {
        if (selectedOption === "venues") {
          setVenues(response.data._embedded.venues);
          console.log(response.data._embedded.venues);
        }
        else if (selectedOption === "attractions") {
          setAttractions(response.data._embedded.attractions);
          console.log(response.data._embedded.attractions);
        }
        else  {
          setEvents(response.data._embedded.events);
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

{/* Above search button area, below search return areas */}

{/* Events search return */}
      {events.length > 0 && (
            <div className="content-width">
              <section className="event-feature-display-area">
                
                <h2 className="feature-title">UP NEXT!</h2>

                
                <div className="featured-flex-container" key={events[0].id}>
      
        <div className="feature-image"><img className="w-[100%]" src={events[0].images[1].url} alt={events[0].name}/>        
        </div>
        <div className="feature-text-area">
        <h2>{events[0].name}</h2>
        <h3>{events[0].dates.start.localDate}</h3>
        <h4>{events[0]._embedded.venues[0].name}</h4>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href={events[0].url} target="_blank" rel="noopener noreferrer">FIND TICKETS</a>
      </button>
      </div>
      </div>
  </section>
  <section>
  <h2 className="more-to-come">More to come....</h2>
    <div className="event-display-area grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-[50px]">
  
    {events.slice(1).map((event) => (
      <div className="card" key={event.id}>
        <div className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
          <div className="relative"><img className="w-[100%] rounded-t-[20px]" src={event.images[1].url} alt={event.name}/>
          <div className="absolute bottom-0 w-[100%] bg-slate-700 bg-opacity-80">
          <h2 className=" bg-opacity-100 text-white uppercase text-[20px]">{event.name}</h2>
          </div>
          </div>
          <h2>{event.dates.start.localDate}</h2>
          <h3>{event._embedded.venues[0].name}</h3>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href={event.url} target="_blank" rel="noopener noreferrer">FIND TICKETS</a>
</button>
        </div>
      </div>
    ))}
    </div>
  </section>
  </div>
)}

{/* Venues search return */}
{venues.length > 0 && (
  <div className="content-width">
    <section className="venue-feature-display-area">
      <h2 className="feature-title">FEATURED VENUE</h2>
      <div className="featured-flex-container" key={venues[0].id}>
        <div className="feature-image">
          <img className="w-[100%]" src={venues[0].images[0].url} alt={venues[0].name} />
        </div>
        <div className="feature-text-area">
          <h2>{venues[0].name}</h2>
          <p>{venues[0].address.line1}</p>
          <p>{venues[0].city.name}, {venues[0].state.stateCode} {venues[0].postalCode}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href={venues[0].url} target="_blank" rel="noopener noreferrer">MORE INFO</a>
          </button>
        </div>
      </div>
    </section>
    <section>
      <h2 className="more-to-come">More venues to come....</h2>
      <div className="venue-display-area grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-[50px]">
        {venues.slice(1).map((venue) => (
          <div className="card" key={venue.id}>
            <div className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
              <div className="relative">
                {/* <img className="w-[100%] rounded-t-[20px]" src={images[0].url} alt="test" /> */}
                <div className="absolute bottom-0 w-[100%] bg-slate-700 bg-opacity-80">
                  <h2 className="bg-opacity-100 text-white uppercase text-[20px]">{venue.name}</h2>
                </div>
              </div>
              <p>{venue.id}</p>
              {/* <p>{venue.city.name}, {venue.state.stateCode} {venue.postalCode}</p> */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {/* <a href={venue.url} target="_blank" rel="noopener noreferrer">MORE INFO</a> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
)}





    </div>
  );
}

export default SearchComponent;
