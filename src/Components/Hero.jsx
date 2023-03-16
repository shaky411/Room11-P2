import { useEffect, useState } from "react";
import axios from "axios";

export default function Hero() {
  const [heroImage, setHeroImage] = useState("");
  

  const getHeroImage = () => {
    const api = "2ZsgoAh1HkkAkrDXANDxuq7TdIeDUdYu";

    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/suggest?apikey=${api}&locale=*&size=5`
      )
      .then((response) => {
        // handle API response data here 
        
        setHeroImage(response.data._embedded.attractions[0].images[5].url);
      });}
      
    // .catch(error => {
    //   // handle API error here
    // });
    useEffect(() => {
      getHeroImage();
    }, []);
    return <div><img src={heroImage} alt="" />
    </div>;
  };

