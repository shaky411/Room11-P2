import { useEffect, useState } from "react";
import Carousel from "./Carousel";

export default function Hero() {
  const [events, setEvents] = useState([]);
  // const [imageUrl,setimageUrl]=useState('');
  // const [eventName,seteventName]=useState('');

  useEffect(() => {
    const api = process.env.REACT_APP_API_KEY;
    fetch(
      `https://app.ticketmaster.com/discovery/v2/suggest?apikey=${api}&locale=*&size=5`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data._embedded.events);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
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

    <div><div>{eventList && <Carousel slides={eventList} />}</div></div>
   

    
  );
}
