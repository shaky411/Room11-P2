import React, { useState, useEffect } from "react";
import axios from "axios";
import "./search-component-custom.css"

function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(" events");
  const [events, setEvents] = useState([]);
  const api = process.env.REACT_APP_API_KEY;

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEvents([]);
    let category = "";
    if (selectedOption === "events") {
      category = "music";
    }
    else if (selectedOption) {
      category = "sport";
    }

    axios
      .get(
        // Using category eg music
        // `https://app.ticketmaster.com/discovery/v2/${selectedOption}.json?classificationName=music&keyword="${searchQuery} tour"&apikey=${api}&size=37&sort=date,asc`
        // `https://app.ticketmaster.com/discovery/v2/${selectedOption}.json?keyword=${searchQuery}&apikey=${api}&size=37&sort=date,asc`
        `https://app.ticketmaster.com/discovery/v2/events?classificationName=${category}&keyword=${searchQuery}&apikey=${api}&size=37&sort=date,asc`
        // `https://app.ticketmaster.com/discovery/v2/${selectedOption}.json?keyword=${searchQuery}&apikey=${api}&size=37`

      )

      .then((response) => {

        setEvents(response.data._embedded.events);


      });
  };
  useEffect(() => {
    axios
    .get(
      // Using category eg music
      // `https://app.ticketmaster.com/discovery/v2/${selectedOption}.json?classificationName=music&keyword="${searchQuery} tour"&apikey=${api}&size=37&sort=date,asc`
      // `https://app.ticketmaster.com/discovery/v2/${selectedOption}.json?keyword=${searchQuery}&apikey=${api}&size=37&sort=date,asc`
      `https://app.ticketmaster.com/discovery/v2/events?classificationName=sport&apikey=${api}&size=37&sort=date,asc`
      // `https://app.ticketmaster.com/discovery/v2/${selectedOption}.json?keyword=${searchQuery}&apikey=${api}&size=37`

    )

    .then((response) => {
      setEvents(response.data._embedded.events);
      // console.log(response.data._embedded.events);

    });

     // eslint-disable-next-line
   }, []);

  const getLargestImage = (event) => {
    const maxImage = event.images.reduce((max, img) =>
      img.width > max.width ? img : max
    );
    return maxImage.url
}


 

   


  return (
    <div>
      <div className="p-[30px] bg-[#3e4f60] text-white">
        <div className="section-header"><h2>SEE WHATS ON!</h2></div>
        <form onSubmit={handleSubmit} className="search-form">
          <div className="inline-block">
            <select
              className="search-select"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option disabled value=" events">
                Select
              </option>
              <option value="events">Music</option>
              <option value="sport">Sport</option>
            </select>
            <input
              type="text"
              placeholder="Enter search criteria"
              value={searchQuery}
              onChange={handleInputChange}
              className="search-input"
            />
            <button
              type="submit"
              className="search-button"
            >
              SUBMIT
            </button>
          </div>
        </form>

      </div>



      {events.length > 0 && (
        <div className="content-width">
          <section className="event-feature-display-area">

                
                <div className="featured-flex-container" key={events[0].id}>
      
        <div className="feature-image"><img className="w-[100%]" src={getLargestImage(events[0])} alt={events[0].name}/>        
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
    <div className="event-display-area grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-[50px]">
  
    {events.slice(1).map((event) => (
      <div className="card" key={event.id}>
        <div className="block rounded-lg bg-white p-6 shadow-lg">
          <div className="relative"><img className="w-[100%] rounded-t-[20px]" src={getLargestImage(event)} alt={event.name}/>
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





    </div>
  );
}

export default SearchComponent;