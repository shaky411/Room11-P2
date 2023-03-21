import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";

export default function Hero() {
  // state intitalisation for 'events' and 'heroImage' variable using 'useState'
  const [events, setEvents] = useState([]);
  // const [venues, setVenues] = useState([]);
  // const [heroImage, setHeroImage] = useState([]);
  //an asynch func to fethc the data
  // const [imageUrl,setimageUrl]=useState('');
  // const [eventName,seteventName]=useState('');

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
        console.log(response.data._embedded.events);
        // setVenues(response.data._embedded.venues);
        //setting the 'heriImage' state variable to the event data response
        // setHeroImage(response.data._embedded.events[0].images[0].url);
      } catch (error) {
        //  const api = process.env.REACT_APP_API_KEY;
        //  fetch(
        //    `https://app.ticketmaster.com/discovery/v2/suggest?apikey=${api}&locale=*&size=5`
        //  )
        //    .then((response) => {
        //      if (!response.ok) {
        //        throw new Error(`HTTP error! status: ${response.status}`);
        //      }
        //      return response.json();
        //    })
        //    .then((data) => {
        //      setEvents(data._embedded.events);
        //      console.log(data);
        //    })
        //    .catch((error) => {
        console.log(error);
        //    }
      }
    };
    fetchData();
  }, []);

  const eventList = events.map((event) => {
    const maxImage = event.images.reduce((max, img) =>
      img.width > max.width ? img : max
    );
    return {
      // create state for these and
      name: event.name,
      imageUrl: maxImage.url,
    };
  });
  console.log(eventList);

  //   const slides = eventList.map((event) => {
  //     return {
  //       name: event.name,
  //       url: event.imageUrl
  //     };
  //   });
  //   console.log(slides);

  return (
    <div>
      <div>{!!eventList.length && <Carousel slides={eventList} />}</div>
    </div>
  );
}

