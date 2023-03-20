import { useEffect, useState } from "react";
import axios from "axios";
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
    // <div>
    //   <div className="flex flex-col md:flex-row">
    //     {/* <img src={heroImage} alt="" /> */}
    //     {events.map((event) => (
    //       <div key={event.id}>
    //         <h2>{event.name}</h2>
    //         {/* rending the largest image from the events->images array comparing the width of the current img ot the previous and return the ur of the largest one  */}
    //         <img
    //           className="hover:scale-125 transition-scale duration-700 shadow-lg"
    //           src={
    //             event.images.reduce((max, img) =>
    //               img.width > max.width ? img : max
    //             ).url
    //           }
    //           alt=""
    //         />
    //       </div>
    //     ))}
    //   </div>
      
    // </div>
  );
}
