import { useEffect, useState } from "react";
import axios from "axios";

export default function Hero() {
  // state intitalisation for 'events' and 'heroImage' variable using 'useState'
  const [events, setEvents] = useState([]);
  const [venues, setVenues] = useState([]);
  // const [heroImage, setHeroImage] = useState([]);
  //an asynch func to fethc the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        //storing and hiding api key in api variable
        const api = process.env.REACT_APP_API_KEY;
        const response = await axios.get(
          `https://app.ticketmaster.com/discovery/v2/suggest?apikey=${api}&locale=*&size=5`
        );
        //setting the 'events' state variable tot he event data resposnse
        setEvents(response.data._embedded.events);
        console.log(response.data._embedded.events)
        setVenues(response.data._embedded.venues);
        //setting the 'heriImage' state variable to the event data response
        // setHeroImage(response.data._embedded.events[0].images[0].url);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <img src={heroImage} alt="" /> */}
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          {/* rending the largest image from the events->images array comparing the width of the current img ot the previous and return the ur of the largest one  */}
          <img
            src={
              event.images.reduce((max, img) =>
                img.width > max.width ? img : max
              ).url
            }
            alt=""
          />
        </div>
      ))}
      <div>
        {/* maping the venues by name we can brek it down to show other info also */}
        {venues.map((venue) => (
          <div key={venue.id}>
            <h2>{venue.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}