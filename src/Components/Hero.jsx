import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";
// import logo1 from "../assets/images/gig11-logo2.png"

export default function Hero() {
  // state intitalisation for 'events' and 'heroImage' variable using 'useState'
  const [events, setEvents] = useState([]);

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
        console.log(error);
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
      eventUrl: event.url,
    };
  });
  console.log(eventList);
  console.log(eventList.eventUrl);

  return (
    <section id="hero">
      <div>
        {/* add logo here */}
        {/* <img
          className="w-1/5"
          src={logo1}
          alt="logo"
        /> */}

        <div className="container flex flex-col px-[10px] py-[30px] text-center md:text-center lg:text-left md:flex-col lg:flex-row justify-center lg:space-x-10 items-center max-w-7xl mx-auto md:px-[30px] md:py-[50px]">
          <div className="max-w-lg md:mt-[32px] md:mb-[0px] lg:mt-[-30px] lg:mb-[0px] p-4 font-sans text-4xl text-white uppercase md:mx-0 md:text-6xl">
            Impressive Experiences that deliver
          </div>

          <div className="md:mt-20 md:mt-[32px] md:mb-[32px] lg:mt-[32px] lg:mb-[0px]">{!!eventList.length && <Carousel slides={eventList} />}</div>
        </div>
      </div>
    </section>
  );
}
