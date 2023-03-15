import React from "react";

import { useEffect, useState } from "react";
// import {data} from "../../data";

export default function Card() {
  const [ticketData, setTicketData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState();
  const apiKey = "46iF2Ih3nFmhNcqtnKSe4WaDmAms5AP6";
  const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}`;

  // API Call

  const fetchData = async () => {
    // const response = await fetch(apiUrl);
    // const data = await response.json();
    setTicketData(data);  
    setUrl(data._embedded.events[0].url);
    // return setTicketData(data);
    console.log(data._embedded.events[0])
  };

  // Add API call to use effect
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <div className="flex flex-col  items-center mb-5">
      <i class="fa-solid fa-basketball text-5xl text-slate-500 mb-1"></i>
        <h1 className="mb-1 text-slate-500 text-3xl">NBA Events</h1>
      </div>

      <div className="w-full max-w-sm bg-slate-700 rounded-2xl shadow-xl hover:shadow-orange-500 transition-shadow duration-700">
        <div className="flex flex-col items-center bg-slate-500 rounded-t-xl">
          <img className="rounded-t-xl hover:scale-125 transition-scale duration-700 shadow-xl hover:shadow-indigo-500 transition-hover" src={data._embedded.events[0].images[0].url} alt="" />
          <h5 className="mb-1 mt-2 text-xl font-medium text-white">{data._embedded.events[0].name}</h5>
          <span className="text-sm text-gray-400 mb-6">Test</span>
        </div>

        <div className="flex flex-col m-5 space-y-2">
          <div>
            <i className="fa-brands fa-github mr-1 text-white text-2xl"></i>
          </div>
          <div>
            <i className="fa-solid fa-location-dot mr-1 text-green-500"></i>
            <span className="text-sm text-white">test</span>
          </div>

          <div className="text-sm text-green-400 hover:text-pink-500 mt-2">
            <i className="fa-brands fa-twitter mr-1 text-blue-500"></i>
          </div>

          <div className="flex flex-row">
            <span className="text-sm text-gray-400 mr-2">Followers:</span>
            <p className="text-violet-500 font-semibold">test</p>
          </div>

          <div className="flex flex-row">
            <span className="text-sm text-gray-400 mr-2">Public Repos:</span>
            <p className="text-orange-500 font-semibold">test</p>
          </div>
        </div>

        {/* <form
          className="m-5"
          name="user"
          onSubmit={(event) => {
            event.preventDefault();

            setGithubUser(event.target["githubUser"].value);
            event.target.reset();
          }}
        >
          <input
            type="text"
            required
            name="githubUser"
            placeholder="Github UserName"
            className="border p-2 rounded-lg shadow-inner text-sm placeholder:text-gray-300"
          />
          <button className="bg-indigo-500 hover:bg-pink-500 transition-hover duration-300 p-2 px-11 rounded-lg text-white shadow active:bg-green-500 focus:outline-none focus:ring focus:ring-indigo-500 ml-3">
            Search
          </button>
        </form> */}
      </div>
    </div>
  );
}




export const data = {
  "_embedded": {
    "events": [
      {
        "name": "Sacramento Kings vs. Phoenix Suns",
        "type": "event",
        "id": "G5vYZ98KcFtaq",
        "test": false,
        "url": "https://www.ticketmaster.com/sacramento-kings-vs-phoenix-suns-sacramento-california-03-24-2023/event/1C005D04ED22925D",
        "locale": "en-us",
        "images": [
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startDateTime": "2022-08-18T19:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-03-25T03:00:00Z"
          },
          "presales": [
            {
              "startDateTime": "2022-08-17T19:05:00Z",
              "endDateTime": "2022-08-18T18:59:00Z",
              "name": "STM Presale"
            },
            {
              "startDateTime": "2022-08-17T23:00:00Z",
              "endDateTime": "2022-08-18T18:59:00Z",
              "name": "General Presale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-03-24",
            "localTime": "19:00:00",
            "dateTime": "2023-03-25T02:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/Los_Angeles",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nE",
              "name": "Sports"
            },
            "genre": {
              "id": "KnvZfZ7vAde",
              "name": "Basketball"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vFJA",
              "name": "NBA"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7l1",
              "name": "Group"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7vA7d",
              "name": "Team"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "695",
          "name": "NBA REGULAR SEASON",
          "description": "NBA REGULAR SEASON / NTL / USA"
        },
        "promoters": [
          {
            "id": "695",
            "name": "NBA REGULAR SEASON",
            "description": "NBA REGULAR SEASON / NTL / USA"
          }
        ],
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 68.0,
            "max": 1250.0
          }
        ],
        "products": [
          {
            "name": "PARKWHIZ GOLDEN 1 CENTER",
            "id": "G5vYZ9o1C0sW_",
            "url": "https://www.ticketmaster.com/parkwhiz-golden-1-center-sacramento-california-03-24-2023/event/1C005D128E931F59",
            "type": "Upsell",
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7n1",
                  "name": "Miscellaneous"
                },
                "genre": {
                  "id": "KnvZfZ7v7ll",
                  "name": "Undefined"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAv1",
                  "name": "Undefined"
                },
                "type": {
                  "id": "KZAyXgnZfZ7vAva",
                  "name": "Parking"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7vAFe",
                  "name": "Regular"
                },
                "family": false
              }
            ]
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1C005D04ED22925D/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an 8 ticket limit"
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/G5vYZ98KcFtaq?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9171o50?locale=en-us"
            },
            {
              "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpZAEF76A?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Golden 1 Center",
              "type": "venue",
              "id": "KovZpZAEF76A",
              "test": false,
              "url": "https://www.ticketmaster.com/golden-1-center-tickets-sacramento/venue/229976",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/18013v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "95814",
              "timezone": "America/Los_Angeles",
              "city": {
                "name": "Sacramento"
              },
              "state": {
                "name": "California",
                "stateCode": "CA"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "500 David J Stern Walk"
              },
              "location": {
                "longitude": "-121.500231",
                "latitude": "38.580372"
              },
              "markets": [
                {
                  "name": "N. California/N. Nevada",
                  "id": "41"
                }
              ],
              "dmas": [
                {
                  "id": 250
                },
                {
                  "id": 273
                },
                {
                  "id": 282
                },
                {
                  "id": 341
                },
                {
                  "id": 368
                },
                {
                  "id": 374
                },
                {
                  "id": 382
                }
              ],
              "boxOfficeInfo": {
                "phoneNumberDetail": "(916) 701-5401",
                "openHoursDetail": "Monday thru Friday 10am to 5pm Saturday & Sunday Closed Saturday and Sunday Event Day Hours 12pm to Event Time",
                "acceptedPaymentDetail": "The Box Office is now cashless. ONLY accept Mastercard, Visa, American Express, Discover, Apple Pay and Samsung Pay",
                "willCallDetail": "Will Call tickets may be picked-up at the Golden 1 Center box office if a valid government issued photo I.D. that matches the name on the order, the credit card used to make the purchase, and the confirmation number given at the time of purchase are provided. VIP PACKAGES are subject to the package providers rules for pick up. Once the Will Call window closes, unclaimed tickets will be available through the end of the show at the Guest Services Booth at Section 109, please enter at the Media entrance near the box office. For the box office to release tickets not in your name you need to submit a written letter of authorization along with a copy of the driver’s license of the party whose name is on the account. Tickets are not accepted for Will Call from patrons wishing to leave tickets for others."
              },
              "parkingDetail": "Parking available in downtown parking lots and surface street parking. Please visit https://reserve.sacpark.org/ for additional information.",
              "accessibleSeatingDetail": "Accessible seating is available online through Ticketmaster.com, by calling Ticketmaster phone agents or coming to the Golden 1 Center Box Office. Interpreters are available by request and are dependent upon availability. Please e-mail ADAservices@kings.com for assistance with any ADA related questions. Interpreters need to be reserved a minimum of 10 days in advance of the show. Service dogs are allowed at the Golden 1 Center.",
              "generalInfo": {
                "generalRule": "No Food or Beverages (including waters) No Video Cameras. Nonprofessional cameras are allowed for some events, but guests should call Golden 1 Center to verify. Golden 1 Center and DOCO are smoke free areas.",
                "childRule": "Children two (2) years and older MUST have a ticket. Please check specific shows for age restrictions."
              },
              "upcomingEvents": {
                "_total": 49,
                "tmr": 1,
                "ticketmaster": 48,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpZAEF76A?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Sacramento Kings",
              "type": "attraction",
              "id": "K8vZ9171o50",
              "test": false,
              "url": "https://www.ticketmaster.com/sacramento-kings-tickets/artist/806010",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/SacramentoKings"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Sacramento_Kings"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/sacramentokings/"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/sacramentokings/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/kings/"
                  }
                ]
              },
              "images": [
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 15,
                "tmr": 2,
                "ticketmaster": 13,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171o50?locale=en-us"
                }
              }
            },
            {
              "name": "Phoenix Suns",
              "type": "attraction",
              "id": "K8vZ9171oZf",
              "test": false,
              "url": "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/Suns"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Phoenix_Suns"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/suns/"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/suns/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/suns/"
                  }
                ]
              },
              "aliases": [
                "phoenix",
                "suns",
                "phoenix suns exchange",
                "phoenix suns team exchange",
                "phoenix suns season ticket holders",
                "phoenix suns season tix holders",
                "phoenix suns ticket exchange",
                "suns exchange",
                "suns season ticket holders",
                "suns season tix holders",
                "suns team exchange",
                "suns ticket exchange"
              ],
              "images": [
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 13,
                "ticketmaster": 13,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "Phoenix Suns vs. Orlando Magic",
        "type": "event",
        "id": "G5v0Z98m2qs3I",
        "test": false,
        "url": "https://www.ticketmaster.com/phoenix-suns-vs-orlando-magic-phoenix-arizona-03-16-2023/event/19005D0B8F7714A8",
        "locale": "en-us",
        "images": [
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startDateTime": "2022-08-29T20:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-03-17T04:00:00Z"
          },
          "presales": [
            {
              "startDateTime": "2022-08-17T19:30:00Z",
              "endDateTime": "2022-08-29T20:00:00Z",
              "name": "Resale Onsale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-03-16",
            "localTime": "19:00:00",
            "dateTime": "2023-03-17T02:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/Phoenix",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nE",
              "name": "Sports"
            },
            "genre": {
              "id": "KnvZfZ7vAde",
              "name": "Basketball"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vFJA",
              "name": "NBA"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7l1",
              "name": "Group"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7vA7d",
              "name": "Team"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "695",
          "name": "NBA REGULAR SEASON",
          "description": "NBA REGULAR SEASON / NTL / USA"
        },
        "promoters": [
          {
            "id": "695",
            "name": "NBA REGULAR SEASON",
            "description": "NBA REGULAR SEASON / NTL / USA"
          }
        ],
        "info": "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will now be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. There is a 6 ticket limit. To purchase more than 6 tickets, please call 602.379.SUNS to find out about group tickets.",
        "pleaseNote": "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will now be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. There is a 6 ticket limit. To purchase more than 6 tickets, please call 602.379.SUNS to find out about group tickets.",
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 79.0,
            "max": 3750.0
          }
        ],
        "products": [
          {
            "name": "PARKWHIZ FOOTPRINT CENTER",
            "id": "G5v0Z9o5QyP_y",
            "url": "https://www.ticketmaster.com/parkwhiz-footprint-center-phoenix-arizona-03-16-2023/event/19005D12DAE65679",
            "type": "Upsell",
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7n1",
                  "name": "Miscellaneous"
                },
                "genre": {
                  "id": "KnvZfZ7v7ll",
                  "name": "Undefined"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAv1",
                  "name": "Undefined"
                },
                "type": {
                  "id": "KZAyXgnZfZ7vAva",
                  "name": "Parking"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7vAFe",
                  "name": "Regular"
                },
                "family": false
              }
            ]
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/19005D0B8F7714A8/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an overall 6 ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/G5v0Z98m2qs3I?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
            },
            {
              "href": "/discovery/v2/attractions/K8vZ9171ov7?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Footprint Center",
              "type": "venue",
              "id": "KovZpZAE617A",
              "test": false,
              "url": "https://www.ticketmaster.com/footprint-center-tickets-phoenix/venue/205079",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/22218v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "85004",
              "timezone": "America/Phoenix",
              "city": {
                "name": "Phoenix"
              },
              "state": {
                "name": "Arizona",
                "stateCode": "AZ"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "201 East Jefferson Street"
              },
              "location": {
                "longitude": "-112.071313",
                "latitude": "33.445899"
              },
              "markets": [
                {
                  "name": "Phoenix and Tucson",
                  "id": "36"
                }
              ],
              "dmas": [
                {
                  "id": 359
                },
                {
                  "id": 402
                },
                {
                  "id": 420
                }
              ],
              "boxOfficeInfo": {
                "phoneNumberDetail": "Northwest side of Footprint Center in the Pavilion.(602)379-7800 Suns Game Nights call (602)379-7867",
                "openHoursDetail": "Monday - Friday: 10:00am - 5:00pm Saturday - Sunday: closed except on event days and special on sales.",
                "acceptedPaymentDetail": "The Footprint Center accepts the following methods of payment at the Box Office:VISA MASTERCARD DISCOVER AMERICAN EXPRESS CASH, PHX ARENA NO LONGER ACCEPTS CHECKS",
                "willCallDetail": "The WILL CALL windows open two hours prior to events and are located on the Northwest side of the building in the Pavilion. WILL CALL PICK-UP: The Footprint Center requires that customers picking up WILL CALL tickets furnish the following: 1) PICTURE IDENTIFICATION THAT MATCHES THE PICK-UP NAME 2) CONFIRMATION NUMBER THAT MATCHES THE CUSTOMER ACCOUNT ALTERNATE WILL CALL PICK-UP: If another person, other than the person ordering and paying for the tickets, is picking up a WILL CALL order, the ALTERNATE PICK-UP name MUST be on the account. To get the alternate pick-up name noted on the account, the original purchaser MUST contact Ticketmaster at (1-800-745-3000), ask for customer service to verify account information and request alternate pick-up."
              },
              "parkingDetail": "Adjacent parking structure at 1st and Madison. Many other parking lots and structures within a 10 minute walk of Footprint Center. Prices vary by event. Parking and Direction hotline (602)514-8472",
              "accessibleSeatingDetail": "PHOENIX SUNS: To purchase Phoenix Suns tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7867 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARIZONA RATTLERS: To purchase Arizona Rattlers tickets for people with disabilities, Subject to availability, please call Footprint Center at (602)379-7800 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. PHOENIX MERCURY: To purchase Phoenix Mercury tickets for people with disabilities, subject to availability, please call Footprint Center at (602)252-9622 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARENA CONCERTS AND OTHER EVENTS: To purchase concert or other event tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7800 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com.",
              "generalInfo": {
                "generalRule": "New security procedures have been implemented at Footprint Center. No backpacks or large purses will be allowed. Small purses and fanny packs will be subject to search. Every individual entering the arena will be subject to search. Every vehicle entering the building will be subject to search. Sealed water bottles (1 litre or smaller) allowed in building. No other outside concessions allowed. No pets other than \"assisting\" animals. Smoking in Facility: Footprint Center is a non-smoking facility. Smoking areas outside building are available, depending on event. NON professional cameras only (depending on event) No Laser Pointers allowed No Video Cameras allowed No Recorders allowed",
                "childRule": "Please contact the Footprint Center ticket office at (602)379-7800, for information. Child policy Varies by event. Children age three (3) and above require a ticket for Phoenix Suns, Phoenix Mercury, and Arizona Rattlers games."
              },
              "upcomingEvents": {
                "_total": 64,
                "ticketmaster": 64,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Phoenix Suns",
              "type": "attraction",
              "id": "K8vZ9171oZf",
              "test": false,
              "url": "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/Suns"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Phoenix_Suns"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/suns/"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/suns/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/suns/"
                  }
                ]
              },
              "aliases": [
                "phoenix",
                "suns",
                "phoenix suns exchange",
                "phoenix suns team exchange",
                "phoenix suns season ticket holders",
                "phoenix suns season tix holders",
                "phoenix suns ticket exchange",
                "suns exchange",
                "suns season ticket holders",
                "suns season tix holders",
                "suns team exchange",
                "suns ticket exchange"
              ],
              "images": [
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 13,
                "ticketmaster": 13,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                }
              }
            },
            {
              "name": "Orlando Magic",
              "type": "attraction",
              "id": "K8vZ9171ov7",
              "test": false,
              "url": "https://www.ticketmaster.com/orlando-magic-tickets/artist/805995",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/OrlandoMagic"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Orlando_Magic"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/OrlandoMagic"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/orlandomagic/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/magic/"
                  }
                ]
              },
              "images": [
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/512/fb748312-e0a4-455f-95e1-6fda0c1c1512_1339851_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/512/fb748312-e0a4-455f-95e1-6fda0c1c1512_1339851_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/512/fb748312-e0a4-455f-95e1-6fda0c1c1512_1339851_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/512/fb748312-e0a4-455f-95e1-6fda0c1c1512_1339851_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/512/fb748312-e0a4-455f-95e1-6fda0c1c1512_1339851_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/512/fb748312-e0a4-455f-95e1-6fda0c1c1512_1339851_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/512/fb748312-e0a4-455f-95e1-6fda0c1c1512_1339851_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/512/fb748312-e0a4-455f-95e1-6fda0c1c1512_1339851_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/512/fb748312-e0a4-455f-95e1-6fda0c1c1512_1339851_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/512/fb748312-e0a4-455f-95e1-6fda0c1c1512_1339851_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 13,
                "tmr": 2,
                "ticketmaster": 11,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171ov7?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "Oklahoma City Thunder vs. Phoenix Suns",
        "type": "event",
        "id": "vvG1YZ9odxz7yX",
        "test": false,
        "url": "https://www.ticketmaster.com/oklahoma-city-thunder-vs-phoenix-suns-oklahoma-city-oklahoma-03-19-2023/event/0C005D10E2E04E7E",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startDateTime": "2022-11-25T16:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-03-19T20:30:00Z"
          },
          "presales": [
            {
              "startDateTime": "2022-08-19T15:00:00Z",
              "endDateTime": "2023-03-19T20:30:00Z",
              "name": "Resale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-03-19",
            "localTime": "14:30:00",
            "dateTime": "2023-03-19T19:30:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/Chicago",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nE",
              "name": "Sports"
            },
            "genre": {
              "id": "KnvZfZ7vAde",
              "name": "Basketball"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vFJA",
              "name": "NBA"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7l1",
              "name": "Group"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7vA7d",
              "name": "Team"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "695",
          "name": "NBA REGULAR SEASON",
          "description": "NBA REGULAR SEASON / NTL / USA"
        },
        "promoters": [
          {
            "id": "695",
            "name": "NBA REGULAR SEASON",
            "description": "NBA REGULAR SEASON / NTL / USA"
          }
        ],
        "info": "Full contactless mobile ticketing has been implemented for guests to use self-serve ticket scanners at all arena entrances, reducing points of contact with staff. Mobile tickets for Thunder games can be seamlessly accessed or transferred via the Thunder App or mythunderaccount.com. Tickets for the 2022-23 season for games after December 31, 2022, are currently available directly from the team. You can purchase tickets from other fans and prices are determined by the seller and not the team. A 20% service fee for all resale tickets will be added to the cost of each ticket at checkout. Children 3 years and older require a ticket for admission.",
        "pleaseNote": "Full contactless mobile ticketing has been implemented for guests to use self-serve ticket scanners at all arena entrances, reducing points of contact with staff. Mobile tickets for Thunder games can be seamlessly accessed or transferred via the Thunder App or mythunderaccount.com. Tickets for the 2022-23 season for games after December 31, 2022, are currently available directly from the team. You can purchase tickets from other fans and prices are determined by the seller and not the team. A 20% service fee for all resale tickets will be added to the cost of each ticket at checkout. Children 3 years and older require a ticket for admission.",
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 39.0,
            "max": 2052.0
          }
        ],
        "products": [
          {
            "name": "Thunder Parking",
            "id": "vvG1YZ9oZP89LT",
            "url": "https://www.ticketmaster.com/thunder-parking-oklahoma-city-oklahoma-03-19-2023/event/0C005D10254177FF",
            "type": "Upsell",
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7n1",
                  "name": "Miscellaneous"
                },
                "genre": {
                  "id": "KnvZfZ7v7ll",
                  "name": "Undefined"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAv1",
                  "name": "Undefined"
                },
                "type": {
                  "id": "KZAyXgnZfZ7vAva",
                  "name": "Parking"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7vAFe",
                  "name": "Regular"
                },
                "family": false
              }
            ]
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0C005D10E2E04E7E/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "info": "ADA Wheelchair and Companion seating is limited to 6 tickets. ADA ENHANCEMENTS ACTIVE",
          "ticketLimit": 6
        },
        "ticketLimit": {
          "info": "There is an overall 10 ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/vvG1YZ9odxz7yX?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ917GCg7?locale=en-us"
            },
            {
              "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpa2Wre?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Paycom Center",
              "type": "venue",
              "id": "KovZpa2Wre",
              "test": false,
              "url": "https://www.ticketmaster.com/paycom-center-tickets-oklahoma-city/venue/98958",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/22211v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "73102",
              "timezone": "America/Chicago",
              "city": {
                "name": "Oklahoma City"
              },
              "state": {
                "name": "Oklahoma",
                "stateCode": "OK"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "100 West Reno"
              },
              "location": {
                "longitude": "-97.514594",
                "latitude": "35.463391"
              },
              "markets": [
                {
                  "name": "Oklahoma",
                  "id": "125"
                }
              ],
              "dmas": [
                {
                  "id": 349
                },
                {
                  "id": 403
                }
              ],
              "boxOfficeInfo": {
                "phoneNumberDetail": "Arena: 405-602-8700 Thunder Ticket Office: 405.208.HOOP (4667)",
                "openHoursDetail": "Paycom Center's Box Office is located just off West Reno between the two main entrances on the north side of the arena. Currently, it is temporarily closed on non-event days. On event days, the Box Office is open at 12pm (noon) on Mondays-Saturdays, or four hours prior to the event time on Sundays. Some events may have additional hours.",
                "acceptedPaymentDetail": "Paycom Center is a cashless venue. The Box Office accepts, Visa, MasterCard, American Express and Discover cards, as well as mobile wallet (Apple Pay, Google Pay) payments.",
                "willCallDetail": "When purchasing tickets by phone or online, you may choose to pick them up at the Box Office Will Call window on the day of the show. Please be prepared to present the credit card used to purchase the tickets, as well as a photo I.D. Press and VIP tickets, or tickets left by a third party, may also be picked up at Will Call on the day of the event. A photo I.D. is required."
              },
              "parkingDetail": "Parking is available just across the street from Paycom Center in the underground parking garage at the neighboring Prairie Surf Studios, which is managed by Republic Parking Systems. Parking garage entrances are located on the east side on E.K. Gaylord and the west side on N. Robinson. Parking spaces for disabled guests driving properly licensed or tagged vehicles and are located near all four elevator entrances. Additional parking is available throughout Downtown and Bricktown. There are more than 18,000 parking spaces including approximately 1,300 parking meters. For further information on Oklahoma City parking facilities, you may call (405) 235-PARK or visit www.parkingokc.com.",
              "accessibleSeatingDetail": "Paycom Center meets or exceeds all structural and service requirements as stipulated by the Americans with Disabilities Act. Restrooms, drinking fountains, and concession counters are accessible to guests with disabilities. Additional services are listed below. Accessible Tickets/Seating: Wheelchair accessible seats are available in all price levels. Up to three companion tickets may be purchased with each wheelchair accessible ticket. Please indicate at the time of purchase if you require accessible seating. Accessible Drop-off: Passengers may be dropped off at Reno and Robinson near the northwest entrance to Paycom Center. Elevators: Elevators are located throughout the facility for wheelchair access to all levels. The elevators near Section 101, just inside the northwest entrance, provide access to the arena floor. Elevator on club level nearest Section 205. See the maps at the center of this guide for exact locations. Emergency Evacuation: Paycom Center staff members have been trained in emergency preparedness and evacuation procedures. Key employees are assigned to assist patrons with disabilities to safety. Listening Devices: Listening devices may be rented free of charge at the Guest Relations Desks located at each of the main entrances. A credit card or check deposit, as well as a valid I.D., are required to ensure the return of equipment. Parking: Accessible parking is available in the parking lots on the south side of Paycom Center. Entrances are available on S.W. 3rd Street, east of Robinson. Accessible parking spaces are also available in the underground parking garage at the neighboring Prairie Surf Studios. See Parking for additional information. Service Animals: Trained guide dogs or service animals are permitted to assist guests inside the arena. If special accommodations are required for your service animal, please notify us at the time of your ticket purchase. All other animals are prohibited. Sign Interpreters: Guests who require interpreting services during an event, should contact the Guest Relations Manager by calling (405) 602-8700 within three weeks of the event. Telephones: Telephones are provided at Guest Relations locations and throughout Paycom Center, courtesy of Cox Communications. TDD machines and volume-enhanced phones are available. Wheelchair Assistance: Paycom Center offers wheelchair service for guests who may need assistance to and from their seats. Please contact a Guest Relations representative for assistance. Wheelchair assistance is provided on a first-come, first-served basis. Due to the limited number of wheelchairs available, they may not be borrowed or rented as seating during the event. If wheelchair assistance becomes necessary during an event, please notify the nearest staff member.",
              "generalInfo": {
                "generalRule": "For your safety, once a person exits Paycom Center, re-entry is strictly prohibited. For safety reasons, prohibited items include but are not limited to: - Alcohol, illegal drugs or any paraphernalia associated with drug use - Cans, bottles, coolers or other similar containers - Fireworks - Flags/Signs with poles - Laser pens/pointers of any type - Noisemakers such as air horns - Outside food or drinks - Oversized bags, including backpacks, duffel bags or diaper bags - Weapons of any type, including chains, knives and firearms - Any other item deemed unacceptable by event or building management For safety reasons, prohibited items include but are not limited to: - Alcohol, illegal drugs or any paraphernalia associated with drug use - Cans, bottles, coolers or other similar containers - Fireworks - Flags/Signs with poles - Laser pens/pointers of any type - Noisemakers such as air horns - Outside food or drinks - Oversized bags, including backpacks, duffel bags or diaper bags - Weapons of any type, including chains, knives and firearms - Any other item deemed unacceptable by event or building management",
                "childRule": "Most events do not require a ticket for children under the age of two. However, in order for a child to have his or her own seat, a ticket is required. Some shows intended for young children do require children over the age of one to have a ticket. Please call (405) 602-8700 in advance to verify the policy for a specific event."
              },
              "upcomingEvents": {
                "_total": 39,
                "tmr": 1,
                "ticketmaster": 38,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpa2Wre?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Oklahoma City Thunder",
              "type": "attraction",
              "id": "K8vZ917GCg7",
              "test": false,
              "url": "https://www.ticketmaster.com/oklahoma-city-thunder-tickets/artist/1250512",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/okcthunder"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Oklahoma_City_Thunder"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/OKCThunder"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/okcthunder/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/thunder/"
                  }
                ]
              },
              "aliases": ["OKC Thunder"],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 13,
                "tmr": 2,
                "ticketmaster": 11,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ917GCg7?locale=en-us"
                }
              }
            },
            {
              "name": "Phoenix Suns",
              "type": "attraction",
              "id": "K8vZ9171oZf",
              "test": false,
              "url": "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/Suns"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Phoenix_Suns"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/suns/"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/suns/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/suns/"
                  }
                ]
              },
              "aliases": [
                "phoenix",
                "suns",
                "phoenix suns exchange",
                "phoenix suns team exchange",
                "phoenix suns season ticket holders",
                "phoenix suns season tix holders",
                "phoenix suns ticket exchange",
                "suns exchange",
                "suns season ticket holders",
                "suns season tix holders",
                "suns team exchange",
                "suns ticket exchange"
              ],
              "images": [
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 13,
                "ticketmaster": 13,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "Phoenix Suns vs. Minnesota Timberwolves",
        "type": "event",
        "id": "G5v0Z98m2Lv3m",
        "test": false,
        "url": "https://www.ticketmaster.com/phoenix-suns-vs-minnesota-timberwolves-phoenix-arizona-03-29-2023/event/19005D0B8F7C14AE",
        "locale": "en-us",
        "images": [
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startDateTime": "2022-08-29T20:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-03-30T04:00:00Z"
          },
          "presales": [
            {
              "startDateTime": "2022-08-17T19:30:00Z",
              "endDateTime": "2022-08-29T20:00:00Z",
              "name": "Resale Onsale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-03-29",
            "localTime": "19:00:00",
            "dateTime": "2023-03-30T02:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/Phoenix",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nE",
              "name": "Sports"
            },
            "genre": {
              "id": "KnvZfZ7vAde",
              "name": "Basketball"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vFJA",
              "name": "NBA"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7l1",
              "name": "Group"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7vA7d",
              "name": "Team"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "695",
          "name": "NBA REGULAR SEASON",
          "description": "NBA REGULAR SEASON / NTL / USA"
        },
        "promoters": [
          {
            "id": "695",
            "name": "NBA REGULAR SEASON",
            "description": "NBA REGULAR SEASON / NTL / USA"
          }
        ],
        "info": "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will now be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. There is a 6 ticket limit. To purchase more than 6 tickets, please call 602.379.SUNS to find out about group tickets.",
        "pleaseNote": "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will now be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. There is a 6 ticket limit. To purchase more than 6 tickets, please call 602.379.SUNS to find out about group tickets.",
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 85.0,
            "max": 3750.0
          }
        ],
        "products": [
          {
            "name": "PARKWHIZ FOOTPRINT CENTER",
            "id": "G5v0Z9o5QyP_X",
            "url": "https://www.ticketmaster.com/parkwhiz-footprint-center-phoenix-arizona-03-29-2023/event/19005D12DAE6567E",
            "type": "Upsell",
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7n1",
                  "name": "Miscellaneous"
                },
                "genre": {
                  "id": "KnvZfZ7v7ll",
                  "name": "Undefined"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAv1",
                  "name": "Undefined"
                },
                "type": {
                  "id": "KZAyXgnZfZ7vAva",
                  "name": "Parking"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7vAFe",
                  "name": "Regular"
                },
                "family": false
              }
            ]
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/19005D0B8F7C14AE/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an overall 6 ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/G5v0Z98m2Lv3m?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
            },
            {
              "href": "/discovery/v2/attractions/K8vZ9171o10?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Footprint Center",
              "type": "venue",
              "id": "KovZpZAE617A",
              "test": false,
              "url": "https://www.ticketmaster.com/footprint-center-tickets-phoenix/venue/205079",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/22218v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "85004",
              "timezone": "America/Phoenix",
              "city": {
                "name": "Phoenix"
              },
              "state": {
                "name": "Arizona",
                "stateCode": "AZ"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "201 East Jefferson Street"
              },
              "location": {
                "longitude": "-112.071313",
                "latitude": "33.445899"
              },
              "markets": [
                {
                  "name": "Phoenix and Tucson",
                  "id": "36"
                }
              ],
              "dmas": [
                {
                  "id": 359
                },
                {
                  "id": 402
                },
                {
                  "id": 420
                }
              ],
              "boxOfficeInfo": {
                "phoneNumberDetail": "Northwest side of Footprint Center in the Pavilion.(602)379-7800 Suns Game Nights call (602)379-7867",
                "openHoursDetail": "Monday - Friday: 10:00am - 5:00pm Saturday - Sunday: closed except on event days and special on sales.",
                "acceptedPaymentDetail": "The Footprint Center accepts the following methods of payment at the Box Office:VISA MASTERCARD DISCOVER AMERICAN EXPRESS CASH, PHX ARENA NO LONGER ACCEPTS CHECKS",
                "willCallDetail": "The WILL CALL windows open two hours prior to events and are located on the Northwest side of the building in the Pavilion. WILL CALL PICK-UP: The Footprint Center requires that customers picking up WILL CALL tickets furnish the following: 1) PICTURE IDENTIFICATION THAT MATCHES THE PICK-UP NAME 2) CONFIRMATION NUMBER THAT MATCHES THE CUSTOMER ACCOUNT ALTERNATE WILL CALL PICK-UP: If another person, other than the person ordering and paying for the tickets, is picking up a WILL CALL order, the ALTERNATE PICK-UP name MUST be on the account. To get the alternate pick-up name noted on the account, the original purchaser MUST contact Ticketmaster at (1-800-745-3000), ask for customer service to verify account information and request alternate pick-up."
              },
              "parkingDetail": "Adjacent parking structure at 1st and Madison. Many other parking lots and structures within a 10 minute walk of Footprint Center. Prices vary by event. Parking and Direction hotline (602)514-8472",
              "accessibleSeatingDetail": "PHOENIX SUNS: To purchase Phoenix Suns tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7867 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARIZONA RATTLERS: To purchase Arizona Rattlers tickets for people with disabilities, Subject to availability, please call Footprint Center at (602)379-7800 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. PHOENIX MERCURY: To purchase Phoenix Mercury tickets for people with disabilities, subject to availability, please call Footprint Center at (602)252-9622 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARENA CONCERTS AND OTHER EVENTS: To purchase concert or other event tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7800 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com.",
              "generalInfo": {
                "generalRule": "New security procedures have been implemented at Footprint Center. No backpacks or large purses will be allowed. Small purses and fanny packs will be subject to search. Every individual entering the arena will be subject to search. Every vehicle entering the building will be subject to search. Sealed water bottles (1 litre or smaller) allowed in building. No other outside concessions allowed. No pets other than \"assisting\" animals. Smoking in Facility: Footprint Center is a non-smoking facility. Smoking areas outside building are available, depending on event. NON professional cameras only (depending on event) No Laser Pointers allowed No Video Cameras allowed No Recorders allowed",
                "childRule": "Please contact the Footprint Center ticket office at (602)379-7800, for information. Child policy Varies by event. Children age three (3) and above require a ticket for Phoenix Suns, Phoenix Mercury, and Arizona Rattlers games."
              },
              "upcomingEvents": {
                "_total": 64,
                "ticketmaster": 64,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Phoenix Suns",
              "type": "attraction",
              "id": "K8vZ9171oZf",
              "test": false,
              "url": "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/Suns"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Phoenix_Suns"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/suns/"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/suns/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/suns/"
                  }
                ]
              },
              "aliases": [
                "phoenix",
                "suns",
                "phoenix suns exchange",
                "phoenix suns team exchange",
                "phoenix suns season ticket holders",
                "phoenix suns season tix holders",
                "phoenix suns ticket exchange",
                "suns exchange",
                "suns season ticket holders",
                "suns season tix holders",
                "suns team exchange",
                "suns ticket exchange"
              ],
              "images": [
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 13,
                "ticketmaster": 13,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                }
              }
            },
            {
              "name": "Minnesota Timberwolves",
              "type": "attraction",
              "id": "K8vZ9171o10",
              "test": false,
              "url": "https://www.ticketmaster.com/minnesota-timberwolves-tickets/artist/805971",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/timberwolves"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Minnesota_Timberwolves"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/MNTimberwolves"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/timberwolves"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/timberwolves/"
                  }
                ]
              },
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 13,
                "tmr": 6,
                "ticketmaster": 7,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171o10?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "Utah Jazz vs. Phoenix Suns",
        "type": "event",
        "id": "G5vzZ98HrkJVr",
        "test": false,
        "url": "https://www.ticketmaster.com/utah-jazz-vs-phoenix-suns-salt-lake-city-utah-03-27-2023/event/1E005D0F1E1A6D1E",
        "locale": "en-us",
        "images": [
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startDateTime": "2022-08-22T16:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-03-28T02:00:00Z"
          },
          "presales": [
            {
              "startDateTime": "2022-08-17T19:00:00Z",
              "endDateTime": "2022-08-22T16:00:00Z",
              "name": "Resale"
            },
            {
              "startDateTime": "2022-08-19T16:00:00Z",
              "endDateTime": "2022-08-21T04:00:00Z",
              "name": "American Express® Early Access"
            },
            {
              "startDateTime": "2022-08-22T16:00:00Z",
              "endDateTime": "2023-03-14T04:00:00Z",
              "name": "American Express® Access"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-03-27",
            "localTime": "19:00:00",
            "dateTime": "2023-03-28T01:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/Denver",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nE",
              "name": "Sports"
            },
            "genre": {
              "id": "KnvZfZ7vAde",
              "name": "Basketball"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vFJA",
              "name": "NBA"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7l1",
              "name": "Group"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7vA7d",
              "name": "Team"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "695",
          "name": "NBA REGULAR SEASON",
          "description": "NBA REGULAR SEASON / NTL / USA"
        },
        "promoters": [
          {
            "id": "695",
            "name": "NBA REGULAR SEASON",
            "description": "NBA REGULAR SEASON / NTL / USA"
          }
        ],
        "pleaseNote": "To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.",
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 28.0,
            "max": 2000.0
          }
        ],
        "products": [
          {
            "name": "PARKWHIZ VIVINT ARENA",
            "id": "G5vzZ9o7aZgUa",
            "url": "https://www.ticketmaster.com/parkwhiz-vivint-arena-salt-lake-city-utah-03-27-2023/event/1E005D1109035D89",
            "type": "Upsell",
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7n1",
                  "name": "Miscellaneous"
                },
                "genre": {
                  "id": "KnvZfZ7v7ll",
                  "name": "Undefined"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAv1",
                  "name": "Undefined"
                },
                "type": {
                  "id": "KZAyXgnZfZ7vAva",
                  "name": "Parking"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7vAFe",
                  "name": "Regular"
                },
                "family": false
              }
            ]
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1E005D0F1E1A6D1E/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an 8 ticket limit"
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/G5vzZ98HrkJVr?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9171o5V?locale=en-us"
            },
            {
              "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpZAdEtkA?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Vivint Arena",
              "type": "venue",
              "id": "KovZpZAdEtkA",
              "test": false,
              "url": "https://www.ticketmaster.com/vivint-arena-tickets-salt-lake-city/venue/246072",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/22075v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "84101",
              "timezone": "America/Denver",
              "city": {
                "name": "Salt Lake City"
              },
              "state": {
                "name": "Utah",
                "stateCode": "UT"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "301 West South Temple"
              },
              "location": {
                "longitude": "-111.901096",
                "latitude": "40.767798"
              },
              "markets": [
                {
                  "name": " Montana & Idaho\"",
                  "id": "45"
                },
                {
                  "name": "All of US",
                  "id": "51"
                }
              ],
              "dmas": [
                {
                  "id": 200
                },
                {
                  "id": 378
                }
              ],
              "social": {
                "twitter": {
                  "handle": "@vivintarena"
                }
              },
              "boxOfficeInfo": {
                "phoneNumberDetail": "Vivint Arena (801) 325-2000 Utah Jazz (801) 325-2500",
                "openHoursDetail": "The box office opens at 1:00pm on the day of any scheduled event. Located on the Northeast side of Arena (plaza level). All tickets are now digital. Download the Utah Jazz + Vivint Arena app to easily view, purchase, transfer and sell tickets. Doors open for most events 1 1/2 hours prior.",
                "acceptedPaymentDetail": "Visa, MC, AMEX and Discover.",
                "willCallDetail": "All tickets are digital- Mobile only."
              },
              "parkingDetail": "Park Place - corner of 300 West and South Temple. Several other parking lots around Vivint Arena. Usually $5 to $20. ** Wheelchair drop-off curb available on North side of arena.",
              "generalInfo": {
                "generalRule": "No bags allowed inside Vivint Arena, exceptions include diaper bags and medical bags no larger than 14 x 14 x 6 inches. No smoking inside the building. No outside food or drink.",
                "childRule": "Children who have had their 2nd birthday must have a ticket. Children under the age of 2 do not need a ticket, but must sit on a lap."
              },
              "upcomingEvents": {
                "_total": 22,
                "tmr": 1,
                "ticketmaster": 21,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpZAdEtkA?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Utah Jazz",
              "type": "attraction",
              "id": "K8vZ9171o5V",
              "test": false,
              "url": "https://www.ticketmaster.com/utah-jazz-tickets/artist/806035",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/utahjazz"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Utah_Jazz"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/utahjazz"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/utahjazz/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/jazz/"
                  }
                ]
              },
              "images": [
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 13,
                "tmr": 1,
                "ticketmaster": 12,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171o5V?locale=en-us"
                }
              }
            },
            {
              "name": "Phoenix Suns",
              "type": "attraction",
              "id": "K8vZ9171oZf",
              "test": false,
              "url": "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/Suns"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Phoenix_Suns"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/suns/"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/suns/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/suns/"
                  }
                ]
              },
              "aliases": [
                "phoenix",
                "suns",
                "phoenix suns exchange",
                "phoenix suns team exchange",
                "phoenix suns season ticket holders",
                "phoenix suns season tix holders",
                "phoenix suns ticket exchange",
                "suns exchange",
                "suns season ticket holders",
                "suns season tix holders",
                "suns team exchange",
                "suns ticket exchange"
              ],
              "images": [
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 13,
                "ticketmaster": 13,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "Phoenix Suns vs. San Antonio Spurs",
        "type": "event",
        "id": "G5v0Z98m2Oo3g",
        "test": false,
        "url": "https://www.ticketmaster.com/phoenix-suns-vs-san-antonio-spurs-phoenix-arizona-04-04-2023/event/19005D0B8F8114B5",
        "locale": "en-us",
        "images": [
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startDateTime": "2022-08-29T20:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-04-05T04:00:00Z"
          },
          "presales": [
            {
              "startDateTime": "2022-08-17T19:30:00Z",
              "endDateTime": "2022-08-29T20:00:00Z",
              "name": "Resale Onsale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-04-04",
            "localTime": "19:00:00",
            "dateTime": "2023-04-05T02:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/Phoenix",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nE",
              "name": "Sports"
            },
            "genre": {
              "id": "KnvZfZ7vAde",
              "name": "Basketball"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vFJA",
              "name": "NBA"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7l1",
              "name": "Group"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7vA7d",
              "name": "Team"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "695",
          "name": "NBA REGULAR SEASON",
          "description": "NBA REGULAR SEASON / NTL / USA"
        },
        "promoters": [
          {
            "id": "695",
            "name": "NBA REGULAR SEASON",
            "description": "NBA REGULAR SEASON / NTL / USA"
          }
        ],
        "info": "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will now be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. There is a 6 ticket limit. To purchase more than 6 tickets, please call 602.379.SUNS to find out about group tickets.",
        "pleaseNote": "Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Don't have a credit/debit card? Convert cash into a preloaded Mastercard by visiting one of our reverse ATMs located near the Ticket Office or Section 218! When you purchase a ticket to a Footprint Center event, you can ride the Valley Metro Light Rail at no cost for four (4) hours prior to the event through the end of the transit day. With an increased focus on secure, contactless entry, mobile tickets will now be required. All tickets will be delivered electronically with no exceptions, therefore will call is no longer available. All tickets are available via the Ticketmaster app or the Suns-Mercury-Footprint Center app. There is a 6 ticket limit. To purchase more than 6 tickets, please call 602.379.SUNS to find out about group tickets.",
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 89.0,
            "max": 3750.0
          }
        ],
        "products": [
          {
            "name": "PARKWHIZ FOOTPRINT CENTER",
            "id": "G5v0Z9o5QygQe",
            "url": "https://www.ticketmaster.com/parkwhiz-footprint-center-phoenix-arizona-04-04-2023/event/19005D12DAE75682",
            "type": "Upsell",
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7n1",
                  "name": "Miscellaneous"
                },
                "genre": {
                  "id": "KnvZfZ7v7ll",
                  "name": "Undefined"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAv1",
                  "name": "Undefined"
                },
                "type": {
                  "id": "KZAyXgnZfZ7vAva",
                  "name": "Parking"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7vAFe",
                  "name": "Regular"
                },
                "family": false
              }
            ]
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/19005D0B8F8114B5/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an overall 6 ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/G5v0Z98m2Oo3g?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
            },
            {
              "href": "/discovery/v2/attractions/K8vZ9171ov0?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Footprint Center",
              "type": "venue",
              "id": "KovZpZAE617A",
              "test": false,
              "url": "https://www.ticketmaster.com/footprint-center-tickets-phoenix/venue/205079",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/22218v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "85004",
              "timezone": "America/Phoenix",
              "city": {
                "name": "Phoenix"
              },
              "state": {
                "name": "Arizona",
                "stateCode": "AZ"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "201 East Jefferson Street"
              },
              "location": {
                "longitude": "-112.071313",
                "latitude": "33.445899"
              },
              "markets": [
                {
                  "name": "Phoenix and Tucson",
                  "id": "36"
                }
              ],
              "dmas": [
                {
                  "id": 359
                },
                {
                  "id": 402
                },
                {
                  "id": 420
                }
              ],
              "boxOfficeInfo": {
                "phoneNumberDetail": "Northwest side of Footprint Center in the Pavilion.(602)379-7800 Suns Game Nights call (602)379-7867",
                "openHoursDetail": "Monday - Friday: 10:00am - 5:00pm Saturday - Sunday: closed except on event days and special on sales.",
                "acceptedPaymentDetail": "The Footprint Center accepts the following methods of payment at the Box Office:VISA MASTERCARD DISCOVER AMERICAN EXPRESS CASH, PHX ARENA NO LONGER ACCEPTS CHECKS",
                "willCallDetail": "The WILL CALL windows open two hours prior to events and are located on the Northwest side of the building in the Pavilion. WILL CALL PICK-UP: The Footprint Center requires that customers picking up WILL CALL tickets furnish the following: 1) PICTURE IDENTIFICATION THAT MATCHES THE PICK-UP NAME 2) CONFIRMATION NUMBER THAT MATCHES THE CUSTOMER ACCOUNT ALTERNATE WILL CALL PICK-UP: If another person, other than the person ordering and paying for the tickets, is picking up a WILL CALL order, the ALTERNATE PICK-UP name MUST be on the account. To get the alternate pick-up name noted on the account, the original purchaser MUST contact Ticketmaster at (1-800-745-3000), ask for customer service to verify account information and request alternate pick-up."
              },
              "parkingDetail": "Adjacent parking structure at 1st and Madison. Many other parking lots and structures within a 10 minute walk of Footprint Center. Prices vary by event. Parking and Direction hotline (602)514-8472",
              "accessibleSeatingDetail": "PHOENIX SUNS: To purchase Phoenix Suns tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7867 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARIZONA RATTLERS: To purchase Arizona Rattlers tickets for people with disabilities, Subject to availability, please call Footprint Center at (602)379-7800 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. PHOENIX MERCURY: To purchase Phoenix Mercury tickets for people with disabilities, subject to availability, please call Footprint Center at (602)252-9622 or visit the Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com. ARENA CONCERTS AND OTHER EVENTS: To purchase concert or other event tickets for people with disabilities, subject to availability, please call Footprint Center at (602)379-7800 or visit Footprint Center ticket office. Accessible tickets can also be purchased at all Ticketmaster locations, by calling (800)745-3000 or online at ticketmaster.com.",
              "generalInfo": {
                "generalRule": "New security procedures have been implemented at Footprint Center. No backpacks or large purses will be allowed. Small purses and fanny packs will be subject to search. Every individual entering the arena will be subject to search. Every vehicle entering the building will be subject to search. Sealed water bottles (1 litre or smaller) allowed in building. No other outside concessions allowed. No pets other than \"assisting\" animals. Smoking in Facility: Footprint Center is a non-smoking facility. Smoking areas outside building are available, depending on event. NON professional cameras only (depending on event) No Laser Pointers allowed No Video Cameras allowed No Recorders allowed",
                "childRule": "Please contact the Footprint Center ticket office at (602)379-7800, for information. Child policy Varies by event. Children age three (3) and above require a ticket for Phoenix Suns, Phoenix Mercury, and Arizona Rattlers games."
              },
              "upcomingEvents": {
                "_total": 64,
                "ticketmaster": 64,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpZAE617A?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Phoenix Suns",
              "type": "attraction",
              "id": "K8vZ9171oZf",
              "test": false,
              "url": "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/Suns"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Phoenix_Suns"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/suns/"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/suns/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/suns/"
                  }
                ]
              },
              "aliases": [
                "phoenix",
                "suns",
                "phoenix suns exchange",
                "phoenix suns team exchange",
                "phoenix suns season ticket holders",
                "phoenix suns season tix holders",
                "phoenix suns ticket exchange",
                "suns exchange",
                "suns season ticket holders",
                "suns season tix holders",
                "suns team exchange",
                "suns ticket exchange"
              ],
              "images": [
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 13,
                "ticketmaster": 13,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                }
              }
            },
            {
              "name": "San Antonio Spurs",
              "type": "attraction",
              "id": "K8vZ9171ov0",
              "test": false,
              "url": "https://www.ticketmaster.com/san-antonio-spurs-tickets/artist/806012",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/spurs"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/San_Antonio_Spurs"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/Spurs"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/spurs/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/spurs/"
                  }
                ]
              },
              "aliases": [
                "san antonio spurs ticket exchange",
                "spurs exchange",
                "spurs ticket exchange"
              ],
              "images": [
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/bfc/117154dc-fc3e-4b62-b50f-eb13c1114bfc_1763711_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false,
                  "attribution": "CCD Approval by Scott Wampold for the 50th Anniversary edition logo, client has been made aware this needs to be updated before 23-24 season."
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/bfc/117154dc-fc3e-4b62-b50f-eb13c1114bfc_1763711_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false,
                  "attribution": "CCD Approval by Scott Wampold for the 50th Anniversary edition logo, client has been made aware this needs to be updated before 23-24 season."
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/bfc/117154dc-fc3e-4b62-b50f-eb13c1114bfc_1763711_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false,
                  "attribution": "CCD Approval by Scott Wampold for the 50th Anniversary edition logo, client has been made aware this needs to be updated before 23-24 season."
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/bfc/117154dc-fc3e-4b62-b50f-eb13c1114bfc_1763711_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false,
                  "attribution": "CCD Approval by Scott Wampold for the 50th Anniversary edition logo, client has been made aware this needs to be updated before 23-24 season."
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/bfc/117154dc-fc3e-4b62-b50f-eb13c1114bfc_1763711_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false,
                  "attribution": "CCD Approval by Scott Wampold for the 50th Anniversary edition logo, client has been made aware this needs to be updated before 23-24 season."
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/bfc/117154dc-fc3e-4b62-b50f-eb13c1114bfc_1763711_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false,
                  "attribution": "CCD Approval by Scott Wampold for the 50th Anniversary edition logo, client has been made aware this needs to be updated before 23-24 season."
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/bfc/117154dc-fc3e-4b62-b50f-eb13c1114bfc_1763711_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false,
                  "attribution": "CCD Approval by Scott Wampold for the 50th Anniversary edition logo, client has been made aware this needs to be updated before 23-24 season."
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/bfc/117154dc-fc3e-4b62-b50f-eb13c1114bfc_1763711_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false,
                  "attribution": "CCD Approval by Scott Wampold for the 50th Anniversary edition logo, client has been made aware this needs to be updated before 23-24 season."
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/bfc/117154dc-fc3e-4b62-b50f-eb13c1114bfc_1763711_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false,
                  "attribution": "CCD Approval by Scott Wampold for the 50th Anniversary edition logo, client has been made aware this needs to be updated before 23-24 season."
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/bfc/117154dc-fc3e-4b62-b50f-eb13c1114bfc_1763711_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false,
                  "attribution": "CCD Approval by Scott Wampold for the 50th Anniversary edition logo, client has been made aware this needs to be updated before 23-24 season."
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 14,
                "tmr": 1,
                "ticketmaster": 13,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171ov0?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "Oklahoma City Thunder vs. Phoenix Suns",
        "type": "event",
        "id": "vvG1YZ9odxB0DX",
        "test": false,
        "url": "https://www.ticketmaster.com/oklahoma-city-thunder-vs-phoenix-suns-oklahoma-city-oklahoma-04-02-2023/event/0C005D10E2EA4EFE",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startDateTime": "2022-11-25T16:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-04-03T00:00:00Z"
          },
          "presales": [
            {
              "startDateTime": "2022-08-19T15:00:00Z",
              "endDateTime": "2023-04-03T00:00:00Z",
              "name": "Resale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-04-02",
            "localTime": "18:00:00",
            "dateTime": "2023-04-02T23:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/Chicago",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nE",
              "name": "Sports"
            },
            "genre": {
              "id": "KnvZfZ7vAde",
              "name": "Basketball"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vFJA",
              "name": "NBA"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7l1",
              "name": "Group"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7vA7d",
              "name": "Team"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "695",
          "name": "NBA REGULAR SEASON",
          "description": "NBA REGULAR SEASON / NTL / USA"
        },
        "promoters": [
          {
            "id": "695",
            "name": "NBA REGULAR SEASON",
            "description": "NBA REGULAR SEASON / NTL / USA"
          }
        ],
        "info": "Full contactless mobile ticketing has been implemented for guests to use self-serve ticket scanners at all arena entrances, reducing points of contact with staff. Mobile tickets for Thunder games can be seamlessly accessed or transferred via the Thunder App or mythunderaccount.com. Tickets for the 2022-23 season for games after December 31, 2022, are currently available directly from the team. You can purchase tickets from other fans and prices are determined by the seller and not the team. A 20% service fee for all resale tickets will be added to the cost of each ticket at checkout. Children 3 years and older require a ticket for admission.",
        "pleaseNote": "Full contactless mobile ticketing has been implemented for guests to use self-serve ticket scanners at all arena entrances, reducing points of contact with staff. Mobile tickets for Thunder games can be seamlessly accessed or transferred via the Thunder App or mythunderaccount.com. Tickets for the 2022-23 season for games after December 31, 2022, are currently available directly from the team. You can purchase tickets from other fans and prices are determined by the seller and not the team. A 20% service fee for all resale tickets will be added to the cost of each ticket at checkout. Children 3 years and older require a ticket for admission.",
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 16.0,
            "max": 2052.0
          }
        ],
        "products": [
          {
            "name": "Thunder Parking",
            "id": "vvG1YZ9oZP39OG",
            "url": "https://www.ticketmaster.com/thunder-parking-oklahoma-city-oklahoma-04-02-2023/event/0C005D102549780C",
            "type": "Upsell",
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7n1",
                  "name": "Miscellaneous"
                },
                "genre": {
                  "id": "KnvZfZ7v7ll",
                  "name": "Undefined"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAv1",
                  "name": "Undefined"
                },
                "type": {
                  "id": "KZAyXgnZfZ7vAva",
                  "name": "Parking"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7vAFe",
                  "name": "Regular"
                },
                "family": false
              }
            ]
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0C005D10E2EA4EFE/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "info": "ADA Wheelchair and Companion seating is limited to 6 tickets. ADA ENHANCEMENTS ACTIVE",
          "ticketLimit": 6
        },
        "ticketLimit": {
          "info": "There is an overall 10 ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/vvG1YZ9odxB0DX?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ917GCg7?locale=en-us"
            },
            {
              "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpa2Wre?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Paycom Center",
              "type": "venue",
              "id": "KovZpa2Wre",
              "test": false,
              "url": "https://www.ticketmaster.com/paycom-center-tickets-oklahoma-city/venue/98958",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/22211v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "73102",
              "timezone": "America/Chicago",
              "city": {
                "name": "Oklahoma City"
              },
              "state": {
                "name": "Oklahoma",
                "stateCode": "OK"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "100 West Reno"
              },
              "location": {
                "longitude": "-97.514594",
                "latitude": "35.463391"
              },
              "markets": [
                {
                  "name": "Oklahoma",
                  "id": "125"
                }
              ],
              "dmas": [
                {
                  "id": 349
                },
                {
                  "id": 403
                }
              ],
              "boxOfficeInfo": {
                "phoneNumberDetail": "Arena: 405-602-8700 Thunder Ticket Office: 405.208.HOOP (4667)",
                "openHoursDetail": "Paycom Center's Box Office is located just off West Reno between the two main entrances on the north side of the arena. Currently, it is temporarily closed on non-event days. On event days, the Box Office is open at 12pm (noon) on Mondays-Saturdays, or four hours prior to the event time on Sundays. Some events may have additional hours.",
                "acceptedPaymentDetail": "Paycom Center is a cashless venue. The Box Office accepts, Visa, MasterCard, American Express and Discover cards, as well as mobile wallet (Apple Pay, Google Pay) payments.",
                "willCallDetail": "When purchasing tickets by phone or online, you may choose to pick them up at the Box Office Will Call window on the day of the show. Please be prepared to present the credit card used to purchase the tickets, as well as a photo I.D. Press and VIP tickets, or tickets left by a third party, may also be picked up at Will Call on the day of the event. A photo I.D. is required."
              },
              "parkingDetail": "Parking is available just across the street from Paycom Center in the underground parking garage at the neighboring Prairie Surf Studios, which is managed by Republic Parking Systems. Parking garage entrances are located on the east side on E.K. Gaylord and the west side on N. Robinson. Parking spaces for disabled guests driving properly licensed or tagged vehicles and are located near all four elevator entrances. Additional parking is available throughout Downtown and Bricktown. There are more than 18,000 parking spaces including approximately 1,300 parking meters. For further information on Oklahoma City parking facilities, you may call (405) 235-PARK or visit www.parkingokc.com.",
              "accessibleSeatingDetail": "Paycom Center meets or exceeds all structural and service requirements as stipulated by the Americans with Disabilities Act. Restrooms, drinking fountains, and concession counters are accessible to guests with disabilities. Additional services are listed below. Accessible Tickets/Seating: Wheelchair accessible seats are available in all price levels. Up to three companion tickets may be purchased with each wheelchair accessible ticket. Please indicate at the time of purchase if you require accessible seating. Accessible Drop-off: Passengers may be dropped off at Reno and Robinson near the northwest entrance to Paycom Center. Elevators: Elevators are located throughout the facility for wheelchair access to all levels. The elevators near Section 101, just inside the northwest entrance, provide access to the arena floor. Elevator on club level nearest Section 205. See the maps at the center of this guide for exact locations. Emergency Evacuation: Paycom Center staff members have been trained in emergency preparedness and evacuation procedures. Key employees are assigned to assist patrons with disabilities to safety. Listening Devices: Listening devices may be rented free of charge at the Guest Relations Desks located at each of the main entrances. A credit card or check deposit, as well as a valid I.D., are required to ensure the return of equipment. Parking: Accessible parking is available in the parking lots on the south side of Paycom Center. Entrances are available on S.W. 3rd Street, east of Robinson. Accessible parking spaces are also available in the underground parking garage at the neighboring Prairie Surf Studios. See Parking for additional information. Service Animals: Trained guide dogs or service animals are permitted to assist guests inside the arena. If special accommodations are required for your service animal, please notify us at the time of your ticket purchase. All other animals are prohibited. Sign Interpreters: Guests who require interpreting services during an event, should contact the Guest Relations Manager by calling (405) 602-8700 within three weeks of the event. Telephones: Telephones are provided at Guest Relations locations and throughout Paycom Center, courtesy of Cox Communications. TDD machines and volume-enhanced phones are available. Wheelchair Assistance: Paycom Center offers wheelchair service for guests who may need assistance to and from their seats. Please contact a Guest Relations representative for assistance. Wheelchair assistance is provided on a first-come, first-served basis. Due to the limited number of wheelchairs available, they may not be borrowed or rented as seating during the event. If wheelchair assistance becomes necessary during an event, please notify the nearest staff member.",
              "generalInfo": {
                "generalRule": "For your safety, once a person exits Paycom Center, re-entry is strictly prohibited. For safety reasons, prohibited items include but are not limited to: - Alcohol, illegal drugs or any paraphernalia associated with drug use - Cans, bottles, coolers or other similar containers - Fireworks - Flags/Signs with poles - Laser pens/pointers of any type - Noisemakers such as air horns - Outside food or drinks - Oversized bags, including backpacks, duffel bags or diaper bags - Weapons of any type, including chains, knives and firearms - Any other item deemed unacceptable by event or building management For safety reasons, prohibited items include but are not limited to: - Alcohol, illegal drugs or any paraphernalia associated with drug use - Cans, bottles, coolers or other similar containers - Fireworks - Flags/Signs with poles - Laser pens/pointers of any type - Noisemakers such as air horns - Outside food or drinks - Oversized bags, including backpacks, duffel bags or diaper bags - Weapons of any type, including chains, knives and firearms - Any other item deemed unacceptable by event or building management",
                "childRule": "Most events do not require a ticket for children under the age of two. However, in order for a child to have his or her own seat, a ticket is required. Some shows intended for young children do require children over the age of one to have a ticket. Please call (405) 602-8700 in advance to verify the policy for a specific event."
              },
              "upcomingEvents": {
                "_total": 39,
                "tmr": 1,
                "ticketmaster": 38,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpa2Wre?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Oklahoma City Thunder",
              "type": "attraction",
              "id": "K8vZ917GCg7",
              "test": false,
              "url": "https://www.ticketmaster.com/oklahoma-city-thunder-tickets/artist/1250512",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/okcthunder"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Oklahoma_City_Thunder"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/OKCThunder"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/okcthunder/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/thunder/"
                  }
                ]
              },
              "aliases": ["OKC Thunder"],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/64d/149d3f0b-cd16-4b25-9567-373cbf96b64d_1339861_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 13,
                "tmr": 2,
                "ticketmaster": 11,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ917GCg7?locale=en-us"
                }
              }
            },
            {
              "name": "Phoenix Suns",
              "type": "attraction",
              "id": "K8vZ9171oZf",
              "test": false,
              "url": "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/Suns"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Phoenix_Suns"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/suns/"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/suns/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/suns/"
                  }
                ]
              },
              "aliases": [
                "phoenix",
                "suns",
                "phoenix suns exchange",
                "phoenix suns team exchange",
                "phoenix suns season ticket holders",
                "phoenix suns season tix holders",
                "phoenix suns ticket exchange",
                "suns exchange",
                "suns season ticket holders",
                "suns season tix holders",
                "suns team exchange",
                "suns ticket exchange"
              ],
              "images": [
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 13,
                "ticketmaster": 13,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "BEYONCÉ - RENAISSANCE WORLD TOUR",
        "type": "event",
        "id": "k7vGF9NR0W64e",
        "test": false,
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-east-rutherford-new-jersey-07-29-2023/event/00005E3BE4F47542",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
            "width": 2426,
            "height": 1365,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startTBD": false,
            "startTBA": false
          },
          "presales": [
            {
              "startDateTime": "2023-02-06T19:00:00Z",
              "endDateTime": "2023-02-07T03:00:00Z",
              "name": "BeyHive Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-07T19:00:00Z",
              "endDateTime": "2023-02-09T03:00:00Z",
              "name": "Citi Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-11T19:00:00Z",
              "endDateTime": "2023-02-12T03:00:00Z",
              "name": "Verified Fan Onsale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-07-29",
            "localTime": "19:00:00",
            "dateTime": "2023-07-29T23:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/New_York",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nJ",
              "name": "Music"
            },
            "genre": {
              "id": "KnvZfZ7vAee",
              "name": "R&B"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vkIt",
              "name": "R&B"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7nI",
              "name": "Undefined"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7v7lJ",
              "name": "Undefined"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "4018",
          "name": "LIVE NATION - NO LN CONCERTS BRANDING",
          "description": "LIVE NATION - NO LN CONCERTS BRANDING / NTL / USA"
        },
        "promoters": [
          {
            "id": "4018",
            "name": "LIVE NATION - NO LN CONCERTS BRANDING",
            "description": "LIVE NATION - NO LN CONCERTS BRANDING / NTL / USA"
          }
        ],
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 62.0,
            "max": 757.0
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/00005E3BE4F47542/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an overall (4) four ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/k7vGF9NR0W64e?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpakS7e?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "MetLife Stadium",
              "type": "venue",
              "id": "KovZpakS7e",
              "test": false,
              "url": "https://www.ticketmaster.com/metlife-stadium-tickets-east-rutherford/venue/1233",
              "locale": "en-us",
              "aliases": ["new york jets parking", "new york jets", "ny jets"],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/12804v.",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "07073",
              "timezone": "America/New_York",
              "city": {
                "name": "East Rutherford"
              },
              "state": {
                "name": "New Jersey",
                "stateCode": "NJ"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "One MetLife Stadium Drive"
              },
              "location": {
                "longitude": "-74.074493",
                "latitude": "40.81359"
              },
              "markets": [
                {
                  "name": "New York/Tri-State Area",
                  "id": "35"
                },
                {
                  "name": "Northern New Jersey",
                  "id": "55"
                },
                {
                  "name": "Connecticut",
                  "id": "124"
                }
              ],
              "dmas": [
                {
                  "id": 296
                },
                {
                  "id": 345
                },
                {
                  "id": 422
                }
              ],
              "social": {
                "twitter": {
                  "handle": "@MetLifeStadium"
                }
              },
              "boxOfficeInfo": {
                "phoneNumberDetail": "Box Office: 201.559.1300, tickets@metlifestadium.com - General Ticket Inquiries - ADA Ticket Inquiries Guest Services: 201.559.1515, info@metlifestadium.com",
                "openHoursDetail": "MetLife Stadium Box Office is open Monday through Friday 11am through 5pm. The Box Office is located in the West VIP lobby. Please park in Lot G, enter through MetLife Gate and into the large glass doors labeled West VIP.",
                "acceptedPaymentDetail": "The MetLife Stadium Box Office will accept cash, Visa, Mastercard, Discover, and American Express. Personal checks will not be accepted.",
                "willCallDetail": "Ticketmaster Will Call may be picked up at any open ticket window. For all events, non-Ticketmaster will call orders may be picked up at the designated will call window. Will call tickets will be available beginning at least 2 hours prior to the scheduled start time for the event."
              },
              "parkingDetail": "General Parking Information: * MetLife Stadium Parking Availability: There are approximately 23,000 parking spaces available that are distributed among 14 lots. * There is no street parking available near the stadium. * Parking fees will vary by event. * Accessible parking is available in Lots E, F, & G. Accessible parking is available on a first come / first serve basis. You must have parking pass and state- issued person with disabilities placard or license plate to park in an accessible parking space. Violators will be subject to citation and possible revocation of season or event parking privileges. *Taxi / Black Car, Limousine, and Guest drop offs will be permitted in Lot C. * Bus and R/V Parking is available in Lot L. * All vehicles parking within the stadiums secured parking perimeter are subject to security inspection before being permitted to park. * Hours of Operation will vary per event. For NFL games, parking lots will open 5 hours prior to kickoff. All other events are subject to vary. * Parking passes are valid only for the event or game noted on the pass and for the specific lot. *Please note, all parking information may be amended based on the nature of the event, please contact the stadium at 201-559-1515 or info@metlifestadium.com with any specific questions not addressed above.",
              "accessibleSeatingDetail": "MetLife Stadium is fully accessible including all concession stand locations, merchandise stands, ATM's and seating areas. Accessible seating for guests with special needs is available on all levels and in all price ranges. Elevators are located in the southeast (HCL Tech), southwest (Verizon), and northwest (Pepsi) corners of the stadium. Ramps are located at the north and south entrances. Seats with removable armrests are located throughout the stadium. A limited number of wheelchairs are located at each of the entrance gates to transport guests with limited mobility to their seating area. Guests may contact the MetLife Stadium at 201-559-1515 or ADAinfo@metlifestadium.com for more information or any additional needs for non-NFL events. MetLife Stadium ADA Ticket Questions call 201-559-1300. New York Giants ADA Ticket Purchases call 201-935-8222. New York Jets ADA Ticket Purchases call 973-549-4585. For wheelchair accessible and limited mobility patrons for non-NFL events, please click on the \"Request Accessible Tickets\" icon on the right side of the page to be taken to a dedicated page for accessible seating purchases. Please request the total number of wheelchair plus companion seats or limited mobility plus companion seats within the same wheelchair dropdown box so you may sit together.",
              "generalInfo": {
                "generalRule": "MetLife Stadium is committed to promoting a memorable event day experience for all fans. With that goal in mind, we have developed our Guest Code of Conduct to which we strongly encourage all guests to adhere. Keeping MetLife Stadium and Plaza SMOKE-FREE",
                "childRule": "For non-NFL events, children under 34 inches height do not require a ticket of their own but must share a seat with an accompanying adult. All children taller than 34 inches require a ticket of their own. For New York Jets games this 34\" rule applies For New York Giants games all guest need a ticket regardless of age. Please contact the stadium directly regarding the suitability of an event for children."
              },
              "upcomingEvents": {
                "_total": 21,
                "tmr": 1,
                "ticketmaster": 20,
                "_filtered": 0
              },
              "ada": {
                "adaPhones": "For NFL New York Giants: 201-935-8222\n             \nFor NFL New York Jets: 973-549-4585               \n            \nFor NON-NFL Events: 1-800-877-7575\n\n",
                "adaCustomCopy": "For NFL New York Giants: 201-935-8222\n             \nFor NFL New York Jets: 973-549-4585                \n\nFor NON-NFL Events: 1-800-877-7575",
                "adaHours": "See Above"
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpakS7e?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Beyoncé",
              "type": "attraction",
              "id": "K8vZ9175rX7",
              "test": false,
              "url": "https://www.ticketmaster.com/beyonce-tickets/artist/894191",
              "locale": "en-us",
              "externalLinks": {
                "youtube": [
                  {
                    "url": "https://www.youtube.com/user/beyonce"
                  },
                  {
                    "url": "https://www.youtube.com/user/beyonceVEVO"
                  }
                ],
                "twitter": [
                  {
                    "url": "https://twitter.com/Beyonce"
                  }
                ],
                "itunes": [
                  {
                    "url": "https://itunes.apple.com/artist/id1419227"
                  }
                ],
                "lastfm": [
                  {
                    "url": "http://www.last.fm/music/Beyonc%C3%A9"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/beyonce"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Beyonc%C3%A9"
                  }
                ],
                "spotify": [
                  {
                    "url": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/beyonce/"
                  }
                ],
                "musicbrainz": [
                  {
                    "id": "859d0860-d480-4efd-970c-c05d5f1776b8"
                  }
                ],
                "homepage": [
                  {
                    "url": "http://www.beyonce.com/"
                  }
                ]
              },
              "aliases": [
                "beonce",
                "beyonce",
                "beyonce knowles",
                "beyounce",
                "byonce",
                "betonc"
              ],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
                  "width": 2426,
                  "height": 1365,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkIt",
                    "name": "R&B"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7la",
                    "name": "Individual"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vAd7",
                    "name": "Musician"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 97,
                "mfx-nl": 13,
                "tmr": 2,
                "mfx-de": 22,
                "mfx-es": 7,
                "ticketmaster": 44,
                "mfx-be": 1,
                "_filtered": 0,
                "mfx-pl": 4,
                "mfx-se": 4
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "BEYONCÉ - RENAISSANCE WORLD TOUR",
        "type": "event",
        "id": "vvG1FZ9N9wtgK1",
        "test": false,
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-philadelphia-pennsylvania-07-12-2023/event/02005E35F2A754CA",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
            "width": 2426,
            "height": 1365,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startTBD": false,
            "startTBA": false
          },
          "presales": [
            {
              "startDateTime": "2023-02-20T19:00:00Z",
              "endDateTime": "2023-02-21T03:00:00Z",
              "name": "BeyHive Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-21T19:00:00Z",
              "endDateTime": "2023-02-23T03:00:00Z",
              "name": "Citi Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-25T19:00:00Z",
              "endDateTime": "2023-02-26T03:00:00Z",
              "name": "Verified Fan Onsale"
            },
            {
              "startDateTime": "2023-02-23T19:00:00Z",
              "endDateTime": "2023-02-25T03:00:00Z",
              "name": "Verizon Up Presale Tickets"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-07-12",
            "localTime": "19:00:00",
            "dateTime": "2023-07-12T23:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/New_York",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nJ",
              "name": "Music"
            },
            "genre": {
              "id": "KnvZfZ7vAee",
              "name": "R&B"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vkIt",
              "name": "R&B"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7nI",
              "name": "Undefined"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7v7lJ",
              "name": "Undefined"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        },
        "promoters": [
          {
            "id": "653",
            "name": "LIVE NATION MUSIC",
            "description": "LIVE NATION MUSIC / NTL / USA"
          },
          {
            "id": "494",
            "name": "PROMOTED BY VENUE",
            "description": "PROMOTED BY VENUE / NTL / USA"
          }
        ],
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 51.5,
            "max": 501.0
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/02005E35F2A754CA/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an overall 4 ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/vvG1FZ9N9wtgK1?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpa2yme?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Lincoln Financial Field",
              "type": "venue",
              "id": "KovZpa2yme",
              "test": false,
              "url": "https://www.ticketmaster.com/lincoln-financial-field-tickets-philadelphia/venue/16752",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/22350v.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                }
              ],
              "postalCode": "19148",
              "timezone": "America/New_York",
              "city": {
                "name": "Philadelphia"
              },
              "state": {
                "name": "Pennsylvania",
                "stateCode": "PA"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "One Lincoln Financial Way"
              },
              "location": {
                "longitude": "-75.167406",
                "latitude": "39.900706"
              },
              "markets": [
                {
                  "name": "Philadelphia",
                  "id": "18"
                }
              ],
              "dmas": [
                {
                  "id": 358
                }
              ],
              "boxOfficeInfo": {
                "phoneNumberDetail": "General Info - 215.463.2500 Ticket Office - 215.463.5500 Accessible Seating - 215.463.5500",
                "openHoursDetail": "Monday - Friday 9am - 5pm Event Day - Remote ticket booth located 11th st. side of main parking lot. Non event day:Headhouse",
                "acceptedPaymentDetail": "MasterCard, Visa, Discover, Traveler's Checks, Cash, & American Express.",
                "willCallDetail": "Pick up tickets one hour prior to show. Customer must present actual credit card used to place the order, the confirmation number and a photo I.D. Doors and plaza gates open 3 hours prior to event - seating gates - 2 hours prior to event. For non Eagles events - Will Call is on 11th St. facing the Wachovia Ctr. Will Call for the Lacrosse Event, May 28 - May 30, 2005 will be at the Chrysler Jeep Entrance/Main Ticket office."
              },
              "parkingDetail": "See map in playbook. There is a charge to park with ample surrounding lots.",
              "accessibleSeatingDetail": "Accessible seating is available in all levels. Limited accessible seating through Ticketmaster. Please call 215.463.5500 for accessible procedures.",
              "generalInfo": {
                "generalRule": "Cameras allowed, smoking in designated areas only, no recording devices. see page 17 of guest playbook.",
                "childRule": "No discounts for Eagles - varies with other events."
              },
              "upcomingEvents": {
                "_total": 8,
                "ticketmaster": 8,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpa2yme?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Beyoncé",
              "type": "attraction",
              "id": "K8vZ9175rX7",
              "test": false,
              "url": "https://www.ticketmaster.com/beyonce-tickets/artist/894191",
              "locale": "en-us",
              "externalLinks": {
                "youtube": [
                  {
                    "url": "https://www.youtube.com/user/beyonce"
                  },
                  {
                    "url": "https://www.youtube.com/user/beyonceVEVO"
                  }
                ],
                "twitter": [
                  {
                    "url": "https://twitter.com/Beyonce"
                  }
                ],
                "itunes": [
                  {
                    "url": "https://itunes.apple.com/artist/id1419227"
                  }
                ],
                "lastfm": [
                  {
                    "url": "http://www.last.fm/music/Beyonc%C3%A9"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/beyonce"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Beyonc%C3%A9"
                  }
                ],
                "spotify": [
                  {
                    "url": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/beyonce/"
                  }
                ],
                "musicbrainz": [
                  {
                    "id": "859d0860-d480-4efd-970c-c05d5f1776b8"
                  }
                ],
                "homepage": [
                  {
                    "url": "http://www.beyonce.com/"
                  }
                ]
              },
              "aliases": [
                "beonce",
                "beyonce",
                "beyonce knowles",
                "beyounce",
                "byonce",
                "betonc"
              ],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
                  "width": 2426,
                  "height": 1365,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkIt",
                    "name": "R&B"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7la",
                    "name": "Individual"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vAd7",
                    "name": "Musician"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 97,
                "mfx-nl": 13,
                "tmr": 2,
                "mfx-de": 22,
                "mfx-es": 7,
                "ticketmaster": 44,
                "mfx-be": 1,
                "_filtered": 0,
                "mfx-pl": 4,
                "mfx-se": 4
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "BEYONCÉ - RENAISSANCE WORLD TOUR",
        "type": "event",
        "id": "vvG1zZ9Nz6YgnK",
        "test": false,
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-atlanta-georgia-08-11-2023/event/0E005E3E07C35A93",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
            "width": 2426,
            "height": 1365,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startDateTime": "2023-02-11T19:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-08-12T01:00:00Z"
          },
          "presales": [
            {
              "startDateTime": "2023-02-06T19:00:00Z",
              "endDateTime": "2023-02-07T03:00:00Z",
              "name": "BeyHive Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-07T19:00:00Z",
              "endDateTime": "2023-02-09T03:00:00Z",
              "name": "Citi Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-11T19:00:00Z",
              "endDateTime": "2023-02-12T03:00:00Z",
              "name": "Verified Fan Onsale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-08-11",
            "localTime": "19:00:00",
            "dateTime": "2023-08-11T23:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/New_York",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nJ",
              "name": "Music"
            },
            "genre": {
              "id": "KnvZfZ7vAee",
              "name": "R&B"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vkIt",
              "name": "R&B"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7nI",
              "name": "Undefined"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7v7lJ",
              "name": "Undefined"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        },
        "promoters": [
          {
            "id": "653",
            "name": "LIVE NATION MUSIC",
            "description": "LIVE NATION MUSIC / NTL / USA"
          }
        ],
        "info": "For quickest entry into the stadium, we strongly recommend that you do not bring a bag on event day. If a bag is necessary, the bag must meet the following criteria in order to enter the stadium: - Bags must be CLEAR plastic, vinyl or PVC and not exceed 12 x 6 x 12 inches. Bags cannot be tinted with color or include oversized content that prevents visibility into the clear bag. - Only non-clear bags that are smaller than 4.5 x 6.5 in will be permitted into the stadium. - Any type of non-clear bag exceeding 4.5 x 6.5 in size will not be permitted. Exceptions will only be made for medically necessary items after proper inspection by security personnel. Please ask for assistance at the gate.",
        "pleaseNote": "For quickest entry into the stadium, we strongly recommend that you do not bring a bag on event day. If a bag is necessary, the bag must meet the following criteria in order to enter the stadium: - Bags must be CLEAR plastic, vinyl or PVC and not exceed 12 x 6 x 12 inches. Bags cannot be tinted with color or include oversized content that prevents visibility into the clear bag. - Only non-clear bags that are smaller than 4.5 x 6.5 in will be permitted into the stadium. - Any type of non-clear bag exceeding 4.5 x 6.5 in size will not be permitted. Exceptions will only be made for medically necessary items after proper inspection by security personnel. Please ask for assistance at the gate.",
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 50.5,
            "max": 501.0
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0E005E3E07C35A93/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is a 4 ticket limit on this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/vvG1zZ9Nz6YgnK?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpZAEdJaA?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Mercedes-Benz Stadium",
              "type": "venue",
              "id": "KovZpZAEdJaA",
              "test": false,
              "url": "https://www.ticketmaster.com/mercedesbenz-stadium-tickets-atlanta/venue/115751",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/21772v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "30313",
              "timezone": "America/New_York",
              "city": {
                "name": "Atlanta"
              },
              "state": {
                "name": "Georgia",
                "stateCode": "GA"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "1 AMB Drive NW"
              },
              "location": {
                "longitude": "-84.400823",
                "latitude": "33.755389"
              },
              "markets": [
                {
                  "name": "Atlanta",
                  "id": "10"
                }
              ],
              "dmas": [
                {
                  "id": 220
                },
                {
                  "id": 221
                },
                {
                  "id": 258
                },
                {
                  "id": 327
                },
                {
                  "id": 384
                }
              ],
              "upcomingEvents": {
                "_total": 26,
                "ticketmaster": 26,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpZAEdJaA?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Beyoncé",
              "type": "attraction",
              "id": "K8vZ9175rX7",
              "test": false,
              "url": "https://www.ticketmaster.com/beyonce-tickets/artist/894191",
              "locale": "en-us",
              "externalLinks": {
                "youtube": [
                  {
                    "url": "https://www.youtube.com/user/beyonce"
                  },
                  {
                    "url": "https://www.youtube.com/user/beyonceVEVO"
                  }
                ],
                "twitter": [
                  {
                    "url": "https://twitter.com/Beyonce"
                  }
                ],
                "itunes": [
                  {
                    "url": "https://itunes.apple.com/artist/id1419227"
                  }
                ],
                "lastfm": [
                  {
                    "url": "http://www.last.fm/music/Beyonc%C3%A9"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/beyonce"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Beyonc%C3%A9"
                  }
                ],
                "spotify": [
                  {
                    "url": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/beyonce/"
                  }
                ],
                "musicbrainz": [
                  {
                    "id": "859d0860-d480-4efd-970c-c05d5f1776b8"
                  }
                ],
                "homepage": [
                  {
                    "url": "http://www.beyonce.com/"
                  }
                ]
              },
              "aliases": [
                "beonce",
                "beyonce",
                "beyonce knowles",
                "beyounce",
                "byonce",
                "betonc"
              ],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
                  "width": 2426,
                  "height": 1365,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkIt",
                    "name": "R&B"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7la",
                    "name": "Individual"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vAd7",
                    "name": "Musician"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 97,
                "mfx-nl": 13,
                "tmr": 2,
                "mfx-de": 22,
                "mfx-es": 7,
                "ticketmaster": 44,
                "mfx-be": 1,
                "_filtered": 0,
                "mfx-pl": 4,
                "mfx-se": 4
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "BEYONCÉ - RENAISSANCE WORLD TOUR",
        "type": "event",
        "id": "G5eVZ9NYtrtoj",
        "test": false,
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-charlotte-north-carolina-08-09-2023/event/2D005E3C297A945C",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
            "width": 2426,
            "height": 1365,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startDateTime": "2023-02-26T03:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-08-10T00:00:00Z"
          },
          "presales": [
            {
              "startDateTime": "2023-02-20T20:00:00Z",
              "endDateTime": "2023-02-21T03:00:00Z",
              "name": "BeyHive Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-21T20:00:00Z",
              "endDateTime": "2023-02-23T03:00:00Z",
              "name": "Citi Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-25T20:00:00Z",
              "endDateTime": "2023-02-26T03:00:00Z",
              "name": "Verified Fan Onsale"
            },
            {
              "startDateTime": "2023-02-23T20:00:00Z",
              "endDateTime": "2023-02-25T03:00:00Z",
              "name": "Verizon Up Presale Tickets"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-08-09",
            "localTime": "19:00:00",
            "dateTime": "2023-08-09T23:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/New_York",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nJ",
              "name": "Music"
            },
            "genre": {
              "id": "KnvZfZ7vAee",
              "name": "R&B"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vkIt",
              "name": "R&B"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7nI",
              "name": "Undefined"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7v7lJ",
              "name": "Undefined"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        },
        "promoters": [
          {
            "id": "653",
            "name": "LIVE NATION MUSIC",
            "description": "LIVE NATION MUSIC / NTL / USA"
          }
        ],
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 50.5,
            "max": 501.0
          }
        ],
        "products": [
          {
            "name": "PARKWHIZ BANK OF AMERICA STADIUM",
            "id": "G5eVZ90CzxpQB",
            "url": "https://www.ticketmaster.com/parkwhiz-bank-of-america-stadium-charlotte-north-carolina-08-09-2023/event/2D005E43B88966BA",
            "type": "Upsell",
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7n1",
                  "name": "Miscellaneous"
                },
                "genre": {
                  "id": "KnvZfZ7v7ll",
                  "name": "Undefined"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAv1",
                  "name": "Undefined"
                },
                "type": {
                  "id": "KZAyXgnZfZ7vAva",
                  "name": "Parking"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7vAFe",
                  "name": "Regular"
                },
                "family": false
              }
            ]
          },
          {
            "name": "Beyoncé Parking - Blackmon Lot",
            "id": "G5eVZ9xlLZVYk",
            "url": "https://www.ticketmaster.com/beyonce-parking-blackmon-lot-charlotte-north-carolina-08-09-2023/event/2D005E2ADF034C06",
            "type": "Parking",
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAee",
                  "name": "R&B"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vkIt",
                  "name": "R&B"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ]
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/2D005E3C297A945C/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "info": "Wheelchair Seating: Located in mulitple sections around the stadium",
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an overall 4 ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/G5eVZ9NYtrtoj?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpa3hje?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Bank of America Stadium",
              "type": "venue",
              "id": "KovZpa3hje",
              "test": false,
              "url": "https://www.ticketmaster.com/bank-of-america-stadium-tickets-charlotte/venue/368876",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/22383v.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                }
              ],
              "postalCode": "28202",
              "timezone": "America/New_York",
              "city": {
                "name": "Charlotte"
              },
              "state": {
                "name": "North Carolina",
                "stateCode": "NC"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "800 South Mint Street"
              },
              "location": {
                "longitude": "-80.852829",
                "latitude": "35.225789"
              },
              "markets": [
                {
                  "name": "Charlotte",
                  "id": "2"
                },
                {
                  "name": "South Carolina",
                  "id": "121"
                }
              ],
              "dmas": [
                {
                  "id": 243
                },
                {
                  "id": 245
                },
                {
                  "id": 256
                },
                {
                  "id": 291
                },
                {
                  "id": 292
                }
              ],
              "boxOfficeInfo": {
                "phoneNumberDetail": "Carolina Panthers box office - (704) 358-7800",
                "openHoursDetail": "Open Mon-Fri 8:30am-5:30pm Opens 2 Hours Prior To Game Time Located at the Southeast corner between South and East Gates",
                "acceptedPaymentDetail": "Advance sales - Cash, Visa, MCGame days - Cash only",
                "willCallDetail": "Open 4 hours prior to game time. Located at box office-southeast corner PLEASE BRING A PICTURE ID, THE ACTUAL CREDIT CARD USED TO PURCHASE THE TICKETS, AND YOUR ORDER NUMBER."
              },
              "parkingDetail": "Public and private parking available throughout the uptown Charlotte area. Rates vary according to proximity to the stadium.",
              "accessibleSeatingDetail": "This venue is accessible.",
              "generalInfo": {
                "generalRule": "-NO Weapons (weapons with permits are not allowed) -NO Illegal Drugs -NO Alcoholic Beverages -NO Food or Beverages -NO Fireworks or Explosives -NO Pets - except service animals assisting those with disabilities -NO Folding chairs -NO Noise makers, horns, helium balloons and beach balls -NO Laser pointers -NO Coolers -NO Umbrellas -NO Videocameras -NO Backpacks -NO Baby Strollers -NO Dufflebags",
                "childRule": "Chilren age one year (12 months) and up must have a ticket"
              },
              "upcomingEvents": {
                "_total": 18,
                "ticketmaster": 18,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpa3hje?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Beyoncé",
              "type": "attraction",
              "id": "K8vZ9175rX7",
              "test": false,
              "url": "https://www.ticketmaster.com/beyonce-tickets/artist/894191",
              "locale": "en-us",
              "externalLinks": {
                "youtube": [
                  {
                    "url": "https://www.youtube.com/user/beyonce"
                  },
                  {
                    "url": "https://www.youtube.com/user/beyonceVEVO"
                  }
                ],
                "twitter": [
                  {
                    "url": "https://twitter.com/Beyonce"
                  }
                ],
                "itunes": [
                  {
                    "url": "https://itunes.apple.com/artist/id1419227"
                  }
                ],
                "lastfm": [
                  {
                    "url": "http://www.last.fm/music/Beyonc%C3%A9"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/beyonce"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Beyonc%C3%A9"
                  }
                ],
                "spotify": [
                  {
                    "url": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/beyonce/"
                  }
                ],
                "musicbrainz": [
                  {
                    "id": "859d0860-d480-4efd-970c-c05d5f1776b8"
                  }
                ],
                "homepage": [
                  {
                    "url": "http://www.beyonce.com/"
                  }
                ]
              },
              "aliases": [
                "beonce",
                "beyonce",
                "beyonce knowles",
                "beyounce",
                "byonce",
                "betonc"
              ],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
                  "width": 2426,
                  "height": 1365,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkIt",
                    "name": "R&B"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7la",
                    "name": "Individual"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vAd7",
                    "name": "Musician"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 97,
                "mfx-nl": 13,
                "tmr": 2,
                "mfx-de": 22,
                "mfx-es": 7,
                "ticketmaster": 44,
                "mfx-be": 1,
                "_filtered": 0,
                "mfx-pl": 4,
                "mfx-se": 4
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "BEYONCÉ - RENAISSANCE WORLD TOUR",
        "type": "event",
        "id": "vvG18Z9NUSqKFf",
        "test": false,
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-chicago-illinois-07-22-2023/event/04005E3DB3753214",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
            "width": 2426,
            "height": 1365,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startTBD": false,
            "startTBA": false
          },
          "presales": [
            {
              "startDateTime": "2023-02-06T20:00:00Z",
              "endDateTime": "2023-02-07T04:00:00Z",
              "name": "BeyHive Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-07T20:00:00Z",
              "endDateTime": "2023-02-09T04:00:00Z",
              "name": "Citi Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-11T20:00:00Z",
              "endDateTime": "2023-02-12T04:00:00Z",
              "name": "Verified Fan Onsale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-07-22",
            "localTime": "19:00:00",
            "dateTime": "2023-07-23T00:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/Chicago",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nJ",
              "name": "Music"
            },
            "genre": {
              "id": "KnvZfZ7vAee",
              "name": "R&B"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vkIt",
              "name": "R&B"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7nI",
              "name": "Undefined"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7v7lJ",
              "name": "Undefined"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        },
        "promoters": [
          {
            "id": "653",
            "name": "LIVE NATION MUSIC",
            "description": "LIVE NATION MUSIC / NTL / USA"
          }
        ],
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 50.5,
            "max": 751.0
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/04005E3DB3753214/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "info": "Accessible seating, mobility, sight & hearing impaired seating  is available in all price levels.  ADA seating locations may vary depending on the type of show and configuration of each event.\r\nIn general, ADA accessible seating is located at the back of seating sections on 100, 200 and 300 Levels of the bowl.  For concerts, a raised ADA platform is provide for accessible seating on the floor.\r\nTicketmaster sales of accessible seating is limited to MAXIUM of (4) tickets. \r\nIf there is a hearing-impaired request or a larger request for accessible seating, please direct the order to Elizabeth Saah at the Soldier Field Box Office at (312) 235-7000 or boxoffice@soldierfield.net.                   \r\nHandicapped accessible elevators are located in the North Parking Garage, the United Club, the South Courtyard, and West Mezzanine.",
          "ticketLimit": 20,
          "url": "http://www.soldierfield.net/content/facility-guide",
          "urlText": "For additional venue information regarding ADA seating click here"
        },
        "ticketLimit": {
          "info": "There is an overall 4 ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "doorsTimes": {
          "localDate": "2023-07-22",
          "localTime": "17:00:00",
          "dateTime": "2023-07-22T22:00:00Z"
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/vvG18Z9NUSqKFf?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpZAF6tIA?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Soldier Field",
              "type": "venue",
              "id": "KovZpZAF6tIA",
              "test": false,
              "url": "https://www.ticketmaster.com/soldier-field-tickets-chicago/venue/32827",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/7047v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "60605",
              "timezone": "America/Chicago",
              "city": {
                "name": "Chicago"
              },
              "state": {
                "name": "Illinois",
                "stateCode": "IL"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "1410 S. Museum Campus Drive"
              },
              "location": {
                "longitude": "-87.61682143",
                "latitude": "41.86205404"
              },
              "markets": [
                {
                  "name": "Chicagoland and Northern Il",
                  "id": "3"
                },
                {
                  "name": "Central Illinois",
                  "id": "54"
                }
              ],
              "dmas": [
                {
                  "id": 242
                },
                {
                  "id": 249
                },
                {
                  "id": 357
                },
                {
                  "id": 373
                }
              ],
              "social": {
                "twitter": {
                  "handle": "@SoldierField"
                }
              },
              "boxOfficeInfo": {
                "phoneNumberDetail": "For non Bears events please call (312) 235-7000",
                "openHoursDetail": "Chicago Bears ticket office is available by phone Monday-Friday 8am-5pm CST. The Soldier Field Box Office is open only on game days, their phone number is (312) 235-7000.",
                "acceptedPaymentDetail": "The Box Office accepts cash only for Chicago Bears games. Soldier Field games accept Visa, Mastercard, American Express, Cash.",
                "willCallDetail": "Chicago Bears events: Tickets may be picked up at the Will Call Window outside of Gate 10, 2 hours before the event. Gate 10 is located on the southeast side of Soldier Field. Customers must have the actual credit card, picture ID and the confirmation number to receive their tickets. Soldier Field events: Will Call is available on the day of the event only. Government issued photo i.d. and the credit card used for the purchase will be required to claim tickets. Typically will call opens 90 minutes to an hour before the scheduled event."
              },
              "parkingDetail": "Chicago Bears Parking Information: All of the spaces in the on-site parking lots near Soldier Field are pre-sold for the entire season to Bears season ticket holders. If you do not have a pre-paid coupon, here are some options for you: If you prefer to tailgate before the Bears games, you can park in the 31st Street McCormick Place Lot. It costs $16 and there are shuttle buses to bring you to the 18th Street Shuttle Turnaround, directly across from the stadium. You can also walk to the stadium from the 31st Street Lot. If you don't want to tailgate, we recommend you park in the East Monroe Street / Millennium Park garages, located at Columbus Drive and Monroe Street. It costs $13 and you can then take the free shuttle directly to the 18th Street Shuttle Turnaround. The shuttle bus takes about 10 minutes because it travels on a specially designed bus way which keeps it out of most Soldier Field traffic. There are over 40 buses continuously shuttling fans beginning five hours prior to kickoff. Lastly, we recommend taking public transportation. The Transportation Center, located northeast of the stadium (at the corner of McFetridge and Museum Campus Drive) is where the CTA, Metra shuttle, and PACE bus services will be available for fans drop-off and pick-up. The CTA's train service for the Red, Orange or Green Lines are available at the Roosevelt Road and State Street Station. For schedule and route information, please contact: RTA (312) 836-7000 or rtachicago.com CTA (888) YOUR-CTA or transitchicago.com",
              "accessibleSeatingDetail": "Accessible Seating Information for Chicago Bears games: For Chicago Bears accessible seating please purchase the best available seating and contact the Chicago Bears at 847-615-2327 for an exchange after purchase is complete. Accessible Seating Information for Other Soldier Field events: Accessible seating is available through Ticketmaster. Do NOT contact the Chicago Bears for accessible seating information on non-Bears events at Soldier Field",
              "generalInfo": {
                "generalRule": "Cameras and recording devices are N O T permitted. No umbrellas, cans, or bottles can be brought into the stadium. Chicago Bears: The Smoke Free Act prohibits smoking in all public venues. In order to be compliant with the Smoke-Free Illinois Act, smoking will be prohibited at all Chicago Bears events at Soldier Field. There will be no designated smoking areas inside or outside of the stadium, and re-entry is prohibited. The smoking policy will be strictly enforced. Violaters are subject to ejection from the stadium; repeated violations can resultin the result in the forfeiting of ticket privileges. Ushers and security officers will be enforcing the new smoke-free policy. First-time violaters of the smoking policy will be asked to exchange their ticket for a \"Smoking Card\". Any patron refusing to exchange thier ticket will be ejected from the stadium. If a patron is then smoking in the stadium for a second time, he or she will be ejected.",
                "childRule": "Our policy is that if your child can walk under the turnstiles (approximately 32 inches) then you should go to Gate 10 on the south east side of Soldier Field on gameday to receive a complimentary lap pass for that day's game for the child. The child will have to sit on a ticketed patron’s lap for the game. The entire party will then be admitted to the stadium at Gate 10. Strollers are not permitted in the stadium."
              },
              "upcomingEvents": {
                "_total": 37,
                "tmr": 1,
                "ticketmaster": 36,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpZAF6tIA?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Beyoncé",
              "type": "attraction",
              "id": "K8vZ9175rX7",
              "test": false,
              "url": "https://www.ticketmaster.com/beyonce-tickets/artist/894191",
              "locale": "en-us",
              "externalLinks": {
                "youtube": [
                  {
                    "url": "https://www.youtube.com/user/beyonce"
                  },
                  {
                    "url": "https://www.youtube.com/user/beyonceVEVO"
                  }
                ],
                "twitter": [
                  {
                    "url": "https://twitter.com/Beyonce"
                  }
                ],
                "itunes": [
                  {
                    "url": "https://itunes.apple.com/artist/id1419227"
                  }
                ],
                "lastfm": [
                  {
                    "url": "http://www.last.fm/music/Beyonc%C3%A9"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/beyonce"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Beyonc%C3%A9"
                  }
                ],
                "spotify": [
                  {
                    "url": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/beyonce/"
                  }
                ],
                "musicbrainz": [
                  {
                    "id": "859d0860-d480-4efd-970c-c05d5f1776b8"
                  }
                ],
                "homepage": [
                  {
                    "url": "http://www.beyonce.com/"
                  }
                ]
              },
              "aliases": [
                "beonce",
                "beyonce",
                "beyonce knowles",
                "beyounce",
                "byonce",
                "betonc"
              ],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
                  "width": 2426,
                  "height": 1365,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkIt",
                    "name": "R&B"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7la",
                    "name": "Individual"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vAd7",
                    "name": "Musician"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 97,
                "mfx-nl": 13,
                "tmr": 2,
                "mfx-de": 22,
                "mfx-es": 7,
                "ticketmaster": 44,
                "mfx-be": 1,
                "_filtered": 0,
                "mfx-pl": 4,
                "mfx-se": 4
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "BEYONCÉ - RENAISSANCE WORLD TOUR",
        "type": "event",
        "id": "G5dIZ9NX30Scs",
        "test": false,
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-houston-texas-09-23-2023/event/3A005E3F92933B71",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
            "width": 2426,
            "height": 1365,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startTBD": false,
            "startTBA": false
          }
        },
        "dates": {
          "start": {
            "localDate": "2023-09-23",
            "localTime": "19:00:00",
            "dateTime": "2023-09-24T00:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/Chicago",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nJ",
              "name": "Music"
            },
            "genre": {
              "id": "KnvZfZ7vAee",
              "name": "R&B"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vkIt",
              "name": "R&B"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7nI",
              "name": "Undefined"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7v7lJ",
              "name": "Undefined"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        },
        "promoters": [
          {
            "id": "653",
            "name": "LIVE NATION MUSIC",
            "description": "LIVE NATION MUSIC / NTL / USA"
          }
        ],
        "info": "The NRG Park clear bag policy will be in effect. www.nrgpark.com/clear-bag",
        "pleaseNote": "COVID-19 is a contagious disease that can lead to illness and death. While NRG Park has taken enhanced health and safety measures as recommended by the CDC, an inherent risk of exposure to COVID-19 exists regardless of precautions taken in any public place. You must comply with posted instructions and government orders related to COVID-19 while at NRG Park. BY PURCHASING TICKETS TO AND OR ATTENDING EVENTS AT NRG PARK, YOU AND ANY GUESTS VOLUNTARILY ASSUME ALL RISK RELATED TO COVID-19 AND OR MUTATIONS THEREOF AND AGREE TO RELEASE, WAIVE AND DISCHARGE HARRIS COUNTY, HARRIS COUNTY SPORTS & CONVENTION CORPORATION, ASM GLOBAL AND THEIR AFFILIATES, OFFICERS, EMPLOYEES, CONTRACTORS AND LICENSEES FROM ANY AND ALL LIABILITY, LOSS OR CLAIM ARISING FROM OR RELATED TO EXPOSURE TO OR CONTRACTION OF A DISEASE, INCLUDING, BUT NOT LIMITED TO COVID-19.",
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 50.5,
            "max": 595.0
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/3A005E3F92933B71/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 8
        },
        "ticketLimit": {
          "info": "There is an overall four (4) ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/G5dIZ9NX30Scs?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpZAEdFeA?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "NRG Stadium",
              "type": "venue",
              "id": "KovZpZAEdFeA",
              "test": false,
              "url": "https://www.ticketmaster.com/nrg-stadium-tickets-houston/venue/475596",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/18743v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "77054",
              "timezone": "America/Chicago",
              "city": {
                "name": "Houston"
              },
              "state": {
                "name": "Texas",
                "stateCode": "TX"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "One NRG Park"
              },
              "location": {
                "longitude": "-95.410875",
                "latitude": "29.684885"
              },
              "markets": [
                {
                  "name": "Houston and More",
                  "id": "22"
                },
                {
                  "name": "All of US",
                  "id": "51"
                },
                {
                  "name": "Beaumont",
                  "id": "123"
                }
              ],
              "dmas": [
                {
                  "id": 200
                },
                {
                  "id": 227
                },
                {
                  "id": 300
                },
                {
                  "id": 408
                }
              ],
              "social": {
                "twitter": {
                  "handle": "@NRGparkfan"
                }
              },
              "boxOfficeInfo": {
                "phoneNumberDetail": "For NRG Stadium information 832-667-1400.",
                "openHoursDetail": "Monday-Friday 10am-5pm Saturday 10am-2pm. Hours subject to change.",
                "acceptedPaymentDetail": "cash, visa, mc, amex & discover - no checks",
                "willCallDetail": "TO PICK UP Will Call -- you must present your confirmation number, a picture ID and the credit card used to purchase your tickets. You must wait 48 hours after ordering to pick up your tickets."
              },
              "parkingDetail": "Price per car varies per event. Buses and oversized vehicles are more.",
              "generalInfo": {
                "generalRule": "No outside items including food or beverages may be brought in. No video cameras or equipment",
                "childRule": "Children ages 2 and older need a ticket."
              },
              "upcomingEvents": {
                "_total": 24,
                "tmr": 6,
                "ticketmaster": 18,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpZAEdFeA?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Beyoncé",
              "type": "attraction",
              "id": "K8vZ9175rX7",
              "test": false,
              "url": "https://www.ticketmaster.com/beyonce-tickets/artist/894191",
              "locale": "en-us",
              "externalLinks": {
                "youtube": [
                  {
                    "url": "https://www.youtube.com/user/beyonce"
                  },
                  {
                    "url": "https://www.youtube.com/user/beyonceVEVO"
                  }
                ],
                "twitter": [
                  {
                    "url": "https://twitter.com/Beyonce"
                  }
                ],
                "itunes": [
                  {
                    "url": "https://itunes.apple.com/artist/id1419227"
                  }
                ],
                "lastfm": [
                  {
                    "url": "http://www.last.fm/music/Beyonc%C3%A9"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/beyonce"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Beyonc%C3%A9"
                  }
                ],
                "spotify": [
                  {
                    "url": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/beyonce/"
                  }
                ],
                "musicbrainz": [
                  {
                    "id": "859d0860-d480-4efd-970c-c05d5f1776b8"
                  }
                ],
                "homepage": [
                  {
                    "url": "http://www.beyonce.com/"
                  }
                ]
              },
              "aliases": [
                "beonce",
                "beyonce",
                "beyonce knowles",
                "beyounce",
                "byonce",
                "betonc"
              ],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
                  "width": 2426,
                  "height": 1365,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkIt",
                    "name": "R&B"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7la",
                    "name": "Individual"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vAd7",
                    "name": "Musician"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 97,
                "mfx-nl": 13,
                "tmr": 2,
                "mfx-de": 22,
                "mfx-es": 7,
                "ticketmaster": 44,
                "mfx-be": 1,
                "_filtered": 0,
                "mfx-pl": 4,
                "mfx-se": 4
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "BEYONCÉ - RENAISSANCE WORLD TOUR",
        "type": "event",
        "id": "G5vfZ9NDiI94V",
        "test": false,
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-landover-maryland-08-05-2023/event/15005E3EECA17574",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
            "width": 2426,
            "height": 1365,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startTBD": false,
            "startTBA": false
          },
          "presales": [
            {
              "startDateTime": "2023-02-06T19:00:00Z",
              "endDateTime": "2023-02-07T03:00:00Z",
              "name": "BeyHive Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-07T19:00:00Z",
              "endDateTime": "2023-02-09T03:00:00Z",
              "name": "Citi Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-11T19:00:00Z",
              "endDateTime": "2023-02-12T03:00:00Z",
              "name": "Verified Fan Onsale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-08-05",
            "localTime": "19:00:00",
            "dateTime": "2023-08-05T23:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/New_York",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nJ",
              "name": "Music"
            },
            "genre": {
              "id": "KnvZfZ7vAee",
              "name": "R&B"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vkIt",
              "name": "R&B"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7nI",
              "name": "Undefined"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7v7lJ",
              "name": "Undefined"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        },
        "promoters": [
          {
            "id": "653",
            "name": "LIVE NATION MUSIC",
            "description": "LIVE NATION MUSIC / NTL / USA"
          }
        ],
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 50.5,
            "max": 585.0
          }
        ],
        "products": [
          {
            "name": "Beyoncé - Renaissance World Tour Parking",
            "id": "G5vfZ90h0PdDl",
            "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-parking-landover-maryland-08-05-2023/event/15005E46E4943EEB",
            "type": "Parking",
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7n1",
                  "name": "Miscellaneous"
                },
                "genre": {
                  "id": "KnvZfZ7v7ll",
                  "name": "Undefined"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAv1",
                  "name": "Undefined"
                },
                "type": {
                  "id": "KZAyXgnZfZ7vAva",
                  "name": "Parking"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7vAFe",
                  "name": "Regular"
                },
                "family": false
              }
            ]
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/15005E3EECA17574/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is a 4 ticket limit on this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/G5vfZ9NDiI94V?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpZAJ6kEA?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "FedExField",
              "type": "venue",
              "id": "KovZpZAJ6kEA",
              "test": false,
              "url": "https://www.ticketmaster.com/fedexfield-tickets-landover/venue/172178",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/22310v.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                }
              ],
              "postalCode": "20785",
              "timezone": "America/New_York",
              "city": {
                "name": "Landover"
              },
              "state": {
                "name": "Maryland",
                "stateCode": "MD"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "1600 FedEx Way"
              },
              "location": {
                "longitude": "-76.864433",
                "latitude": "38.907729"
              },
              "markets": [
                {
                  "name": " DC and Maryland\"",
                  "id": "47"
                }
              ],
              "dmas": [
                {
                  "id": 409
                }
              ],
              "boxOfficeInfo": {
                "phoneNumberDetail": "301-276-6000",
                "openHoursDetail": "Monday thru Friday..... 9am - 5pm Box office will open 3 hours prior to an event",
                "acceptedPaymentDetail": "Cash, Visa, MasterCard, Discover, American Express",
                "willCallDetail": "Will Call will open 3 hours prior to an event."
              },
              "parkingDetail": "Parking for events at FedExField vary by event. Parking lots for Washington Commanders games must be purchased in advance at commanders.com and lots open four (4) hours prior to kickoff. Parking maybe purchased on Washington Commanders gamedays at the Gray Lot. For more information on parking, please visit www.commanders.com/parking or call 301.276.6000 Follow highway signs to parking.",
              "accessibleSeatingDetail": "For Accessible Seating please call (301) 276-6000",
              "generalInfo": {
                "generalRule": "As a Guest of FedExField, your safety and enjoyment is our primary concern. Please note everyone entering FedExField is subject to search by our security staff as a condition of entrance to the stadium. This requires fans to enter through predetermined screening locations, which sometimes results in crowding. We apologize for this necessary inconvenience. Please be aware that the following items are prohibited inside FedExField: • Bags, including: backpacks, gym bags, duffel bags, packages, briefcases, purses, etc. • Food and beverages of any kind • Umbrellas (except in suites) • Bottles, jugs, thermoses, cans, coolers, or any other container • Animals (except for certified guide dogs) • Whistles, horns and other noise makers • Weapons, firearms • Illegal drugs • Seat cushions, folding chairs • Leafletting or distribution of any literature Only clear plastic bags not to exceed 12inches x 6inches x 12 inchess are permitted inside FedExField. Additionally, small clutch bags no larger than the size of a hand may be carried separately or within the clear plastic bag. FedExField cannot provide storage for any prohibited items fans bring to the gate. Items must be returned to a fan’s vehicle or discarded. FedExField is not responsible for any discarded items. Understanding and adhering to these policies will help ensure that all fans enter FedExField in a safe and timely manner. If ticket holder elects not to consent to these searches, ticket holder will be denied entry to the stadium. We appreciate your cooperation with game day security requirements. For more information go to www.NFL.com/AllClear. Date and Time of events are subject to change. No refund will be provided if ticket holder cannot attend any rescheduled event.",
                "childRule": "All fans age 3 and older must have a valid ticket for Washington Commanders games. Policy is subject to change for other events at FedExField. For additional information call 301-276-6000"
              },
              "upcomingEvents": {
                "_total": 4,
                "ticketmaster": 4,
                "_filtered": 0
              },
              "ada": {
                "adaPhones": "Box Office:301-276-6000\n",
                "adaCustomCopy": "Accessible seats may be purchased in advance online for all FedExField events. Additional accommodations to fit your needs may be requested at the event by visiting any box office or guest services booth within FedExField.",
                "adaHours": "Monday thru Friday..... 9am - 5pm \n \nBox office will open 2 hours prior to an event"
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpZAJ6kEA?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Beyoncé",
              "type": "attraction",
              "id": "K8vZ9175rX7",
              "test": false,
              "url": "https://www.ticketmaster.com/beyonce-tickets/artist/894191",
              "locale": "en-us",
              "externalLinks": {
                "youtube": [
                  {
                    "url": "https://www.youtube.com/user/beyonce"
                  },
                  {
                    "url": "https://www.youtube.com/user/beyonceVEVO"
                  }
                ],
                "twitter": [
                  {
                    "url": "https://twitter.com/Beyonce"
                  }
                ],
                "itunes": [
                  {
                    "url": "https://itunes.apple.com/artist/id1419227"
                  }
                ],
                "lastfm": [
                  {
                    "url": "http://www.last.fm/music/Beyonc%C3%A9"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/beyonce"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Beyonc%C3%A9"
                  }
                ],
                "spotify": [
                  {
                    "url": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/beyonce/"
                  }
                ],
                "musicbrainz": [
                  {
                    "id": "859d0860-d480-4efd-970c-c05d5f1776b8"
                  }
                ],
                "homepage": [
                  {
                    "url": "http://www.beyonce.com/"
                  }
                ]
              },
              "aliases": [
                "beonce",
                "beyonce",
                "beyonce knowles",
                "beyounce",
                "byonce",
                "betonc"
              ],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
                  "width": 2426,
                  "height": 1365,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkIt",
                    "name": "R&B"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7la",
                    "name": "Individual"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vAd7",
                    "name": "Musician"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 97,
                "mfx-nl": 13,
                "tmr": 2,
                "mfx-de": 22,
                "mfx-es": 7,
                "ticketmaster": 44,
                "mfx-be": 1,
                "_filtered": 0,
                "mfx-pl": 4,
                "mfx-se": 4
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "BEYONCÉ - RENAISSANCE WORLD TOUR",
        "type": "event",
        "id": "vvG1zZ907WVpRc",
        "test": false,
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-atlanta-georgia-08-12-2023/event/0E005E413DD16BED",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
            "width": 2426,
            "height": 1365,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startDateTime": "2023-02-11T21:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-08-13T01:00:00Z"
          },
          "presales": [
            {
              "startDateTime": "2023-02-06T21:00:00Z",
              "endDateTime": "2023-02-07T03:00:00Z",
              "name": "BeyHive Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-07T21:00:00Z",
              "endDateTime": "2023-02-09T03:00:00Z",
              "name": "Citi Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-11T21:00:00Z",
              "endDateTime": "2023-02-12T03:00:00Z",
              "name": "Verified Fan Onsale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-08-12",
            "localTime": "19:00:00",
            "dateTime": "2023-08-12T23:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/New_York",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nJ",
              "name": "Music"
            },
            "genre": {
              "id": "KnvZfZ7vAee",
              "name": "R&B"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vkIt",
              "name": "R&B"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7nI",
              "name": "Undefined"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7v7lJ",
              "name": "Undefined"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        },
        "promoters": [
          {
            "id": "653",
            "name": "LIVE NATION MUSIC",
            "description": "LIVE NATION MUSIC / NTL / USA"
          }
        ],
        "info": "For quickest entry into the stadium, we strongly recommend that you do not bring a bag on event day. If a bag is necessary, the bag must meet the following criteria in order to enter the stadium: - Bags must be CLEAR plastic, vinyl or PVC and not exceed 12 x 6 x 12 inches. Bags cannot be tinted with color or include oversized content that prevents visibility into the clear bag. - Only non-clear bags that are smaller than 4.5 x 6.5 in will be permitted into the stadium. - Any type of non-clear bag exceeding 4.5 x 6.5 in size will not be permitted. Exceptions will only be made for medically necessary items after proper inspection by security personnel. Please ask for assistance at the gate.",
        "pleaseNote": "For quickest entry into the stadium, we strongly recommend that you do not bring a bag on event day. If a bag is necessary, the bag must meet the following criteria in order to enter the stadium: - Bags must be CLEAR plastic, vinyl or PVC and not exceed 12 x 6 x 12 inches. Bags cannot be tinted with color or include oversized content that prevents visibility into the clear bag. - Only non-clear bags that are smaller than 4.5 x 6.5 in will be permitted into the stadium. - Any type of non-clear bag exceeding 4.5 x 6.5 in size will not be permitted. Exceptions will only be made for medically necessary items after proper inspection by security personnel. Please ask for assistance at the gate.",
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 50.5,
            "max": 585.0
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0E005E413DD16BED/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is a 4 ticket limit on this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/vvG1zZ907WVpRc?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpZAEdJaA?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Mercedes-Benz Stadium",
              "type": "venue",
              "id": "KovZpZAEdJaA",
              "test": false,
              "url": "https://www.ticketmaster.com/mercedesbenz-stadium-tickets-atlanta/venue/115751",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/21772v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "30313",
              "timezone": "America/New_York",
              "city": {
                "name": "Atlanta"
              },
              "state": {
                "name": "Georgia",
                "stateCode": "GA"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "1 AMB Drive NW"
              },
              "location": {
                "longitude": "-84.400823",
                "latitude": "33.755389"
              },
              "markets": [
                {
                  "name": "Atlanta",
                  "id": "10"
                }
              ],
              "dmas": [
                {
                  "id": 220
                },
                {
                  "id": 221
                },
                {
                  "id": 258
                },
                {
                  "id": 327
                },
                {
                  "id": 384
                }
              ],
              "upcomingEvents": {
                "_total": 26,
                "ticketmaster": 26,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpZAEdJaA?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Beyoncé",
              "type": "attraction",
              "id": "K8vZ9175rX7",
              "test": false,
              "url": "https://www.ticketmaster.com/beyonce-tickets/artist/894191",
              "locale": "en-us",
              "externalLinks": {
                "youtube": [
                  {
                    "url": "https://www.youtube.com/user/beyonce"
                  },
                  {
                    "url": "https://www.youtube.com/user/beyonceVEVO"
                  }
                ],
                "twitter": [
                  {
                    "url": "https://twitter.com/Beyonce"
                  }
                ],
                "itunes": [
                  {
                    "url": "https://itunes.apple.com/artist/id1419227"
                  }
                ],
                "lastfm": [
                  {
                    "url": "http://www.last.fm/music/Beyonc%C3%A9"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/beyonce"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Beyonc%C3%A9"
                  }
                ],
                "spotify": [
                  {
                    "url": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/beyonce/"
                  }
                ],
                "musicbrainz": [
                  {
                    "id": "859d0860-d480-4efd-970c-c05d5f1776b8"
                  }
                ],
                "homepage": [
                  {
                    "url": "http://www.beyonce.com/"
                  }
                ]
              },
              "aliases": [
                "beonce",
                "beyonce",
                "beyonce knowles",
                "beyounce",
                "byonce",
                "betonc"
              ],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
                  "width": 2426,
                  "height": 1365,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkIt",
                    "name": "R&B"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7la",
                    "name": "Individual"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vAd7",
                    "name": "Musician"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 97,
                "mfx-nl": 13,
                "tmr": 2,
                "mfx-de": 22,
                "mfx-es": 7,
                "ticketmaster": 44,
                "mfx-be": 1,
                "_filtered": 0,
                "mfx-pl": 4,
                "mfx-se": 4
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "BEYONCÉ - RENAISSANCE WORLD TOUR",
        "type": "event",
        "id": "vvG1VZ9NyE2Bcf",
        "test": false,
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-miami-florida-08-18-2023/event/0D005E3E673FAB54",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
            "width": 2426,
            "height": 1365,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startTBD": false,
            "startTBA": false
          },
          "presales": [
            {
              "startDateTime": "2023-02-13T20:00:00Z",
              "endDateTime": "2023-02-14T03:00:00Z",
              "name": "BeyHive Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-14T20:00:00Z",
              "endDateTime": "2023-02-16T03:00:00Z",
              "name": "Citi Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-18T20:00:00Z",
              "endDateTime": "2023-02-19T03:00:00Z",
              "name": "Verified Fan Onsale"
            },
            {
              "startDateTime": "2023-02-16T20:00:00Z",
              "endDateTime": "2023-02-18T03:00:00Z",
              "name": "Verizon Up Presale Tickets"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-08-18",
            "localTime": "19:00:00",
            "dateTime": "2023-08-18T23:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/New_York",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nJ",
              "name": "Music"
            },
            "genre": {
              "id": "KnvZfZ7vAee",
              "name": "R&B"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vkIt",
              "name": "R&B"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7nI",
              "name": "Undefined"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7v7lJ",
              "name": "Undefined"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        },
        "promoters": [
          {
            "id": "653",
            "name": "LIVE NATION MUSIC",
            "description": "LIVE NATION MUSIC / NTL / USA"
          }
        ],
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 50.0,
            "max": 601.0
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0D005E3E673FAB54/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an overall 4 ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/vvG1VZ9NyE2Bcf?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpZAEkvtA?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Hard Rock Stadium",
              "type": "venue",
              "id": "KovZpZAEkvtA",
              "test": false,
              "url": "https://www.ticketmaster.com/hard-rock-stadium-tickets-miami/venue/106734",
              "locale": "en-us",
              "aliases": ["dolphin stadium"],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/20496v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "33056",
              "timezone": "America/New_York",
              "city": {
                "name": "Miami"
              },
              "state": {
                "name": "Florida",
                "stateCode": "FL"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "347 Don Shula Drive"
              },
              "location": {
                "longitude": "-80.238866",
                "latitude": "25.957928"
              },
              "markets": [
                {
                  "name": "Miami",
                  "id": "15"
                }
              ],
              "dmas": [
                {
                  "id": 334
                },
                {
                  "id": 412
                }
              ],
              "boxOfficeInfo": {
                "phoneNumberDetail": "(888) FINS-TIX for Miami Dolphins and General Events 1-800-GO-CANES for University of Miami Football 305-341-4701 for the Capital One Orange Bowl For Universoul Circus information 1-800-316-7439",
                "openHoursDetail": "GENERAL EVENTS Mon-Fri 8:30am-6:00pm Sat 10:00am-4:00pm University of Miami Football: 8:30am-5:00pm, Monday-Friday at Hurricane Ticket Office located at the BankUnited Center on UM Campus",
                "acceptedPaymentDetail": "GENERAL EVENTS: Cash, Visa, MC, Amex and Discover - UNIVERSOUL CIRCUS: Cash only - HURRICANE FOOTBALL at UM Box Office: Cash, Visa, MC, AMEX ($1 service charge on all tickets)",
                "willCallDetail": "GENERAL EVENTS Location : Gate G Hours : 10am Miami Hurricanes Football : Gate F at the Stadium, 4 hours prior to Kickoff"
              },
              "parkingDetail": "Location: Miami Dolphins Parking: • Parking Lots 11-18 and Walmart open 4hrs prior to kick-off",
              "accessibleSeatingDetail": "This is an accessible venue.",
              "generalInfo": {
                "generalRule": "ITEMS NOT ALLOWED FOR GENERAL EVENTS: - no umbrellas - no alcohol - no cans - no bottles - no zoom lenses - no tripods - no coolers - no backpacks - no large bags - no duffle bags - hard-sided containers ITEMS NOT ALLOWED FOR NFL EXPERIENCE: - no umbrellas - no cameras - no recording devices - no alcohol - no cans - no bottles ALL small bags, including purses, diaper bags and fanny packs, WILL BE INSPECTED before they will be permitted into the stadium. Additionally, umbrellas will no longer be permitted in the facility. Due to these increased security measures, patrons will no longer be able to check prohibited items at the stadium gates. ITEMS ALLOWED FOR GENERAL EVENTS: cameras, recording devices",
                "childRule": "GENERAL EVENTS Ages 0-1 admitted free on ticket holder's lap. If child has celebrated their 2nd birthday, they MUST have a ticket to enter. University of Miami Hurricanes football: Children 2 and under free on adults lap."
              },
              "upcomingEvents": {
                "_total": 59,
                "tmr": 9,
                "ticketmaster": 50,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpZAEkvtA?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Beyoncé",
              "type": "attraction",
              "id": "K8vZ9175rX7",
              "test": false,
              "url": "https://www.ticketmaster.com/beyonce-tickets/artist/894191",
              "locale": "en-us",
              "externalLinks": {
                "youtube": [
                  {
                    "url": "https://www.youtube.com/user/beyonce"
                  },
                  {
                    "url": "https://www.youtube.com/user/beyonceVEVO"
                  }
                ],
                "twitter": [
                  {
                    "url": "https://twitter.com/Beyonce"
                  }
                ],
                "itunes": [
                  {
                    "url": "https://itunes.apple.com/artist/id1419227"
                  }
                ],
                "lastfm": [
                  {
                    "url": "http://www.last.fm/music/Beyonc%C3%A9"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/beyonce"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Beyonc%C3%A9"
                  }
                ],
                "spotify": [
                  {
                    "url": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/beyonce/"
                  }
                ],
                "musicbrainz": [
                  {
                    "id": "859d0860-d480-4efd-970c-c05d5f1776b8"
                  }
                ],
                "homepage": [
                  {
                    "url": "http://www.beyonce.com/"
                  }
                ]
              },
              "aliases": [
                "beonce",
                "beyonce",
                "beyonce knowles",
                "beyounce",
                "byonce",
                "betonc"
              ],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
                  "width": 2426,
                  "height": 1365,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkIt",
                    "name": "R&B"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7la",
                    "name": "Individual"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vAd7",
                    "name": "Musician"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 97,
                "mfx-nl": 13,
                "tmr": 2,
                "mfx-de": 22,
                "mfx-es": 7,
                "ticketmaster": 44,
                "mfx-be": 1,
                "_filtered": 0,
                "mfx-pl": 4,
                "mfx-se": 4
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "BEYONCÉ - RENAISSANCE WORLD TOUR",
        "type": "event",
        "id": "k7vGF901Z5v9O",
        "test": false,
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-east-rutherford-new-jersey-07-30-2023/event/00005E42802C15E0",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
            "width": 2426,
            "height": 1365,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startTBD": false,
            "startTBA": false
          },
          "presales": [
            {
              "startDateTime": "2023-02-06T21:00:00Z",
              "endDateTime": "2023-02-07T03:00:00Z",
              "name": "BeyHive Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-07T21:00:00Z",
              "endDateTime": "2023-02-09T03:00:00Z",
              "name": "Citi Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-11T21:00:00Z",
              "endDateTime": "2023-02-12T03:00:00Z",
              "name": "Verified Fan Onsale"
            },
            {
              "startDateTime": "2023-02-09T21:00:00Z",
              "endDateTime": "2023-02-11T03:00:00Z",
              "name": "Verizon Up Presale Tickets"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-07-30",
            "localTime": "19:00:00",
            "dateTime": "2023-07-30T23:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/New_York",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nJ",
              "name": "Music"
            },
            "genre": {
              "id": "KnvZfZ7vAee",
              "name": "R&B"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vkIt",
              "name": "R&B"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7nI",
              "name": "Undefined"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7v7lJ",
              "name": "Undefined"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "4018",
          "name": "LIVE NATION - NO LN CONCERTS BRANDING",
          "description": "LIVE NATION - NO LN CONCERTS BRANDING / NTL / USA"
        },
        "promoters": [
          {
            "id": "4018",
            "name": "LIVE NATION - NO LN CONCERTS BRANDING",
            "description": "LIVE NATION - NO LN CONCERTS BRANDING / NTL / USA"
          }
        ],
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 62.0,
            "max": 757.0
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/00005E42802C15E0/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an overall (4) four ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/k7vGF901Z5v9O?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpakS7e?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "MetLife Stadium",
              "type": "venue",
              "id": "KovZpakS7e",
              "test": false,
              "url": "https://www.ticketmaster.com/metlife-stadium-tickets-east-rutherford/venue/1233",
              "locale": "en-us",
              "aliases": ["new york jets parking", "new york jets", "ny jets"],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/12804v.",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "07073",
              "timezone": "America/New_York",
              "city": {
                "name": "East Rutherford"
              },
              "state": {
                "name": "New Jersey",
                "stateCode": "NJ"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "One MetLife Stadium Drive"
              },
              "location": {
                "longitude": "-74.074493",
                "latitude": "40.81359"
              },
              "markets": [
                {
                  "name": "New York/Tri-State Area",
                  "id": "35"
                },
                {
                  "name": "Northern New Jersey",
                  "id": "55"
                },
                {
                  "name": "Connecticut",
                  "id": "124"
                }
              ],
              "dmas": [
                {
                  "id": 296
                },
                {
                  "id": 345
                },
                {
                  "id": 422
                }
              ],
              "social": {
                "twitter": {
                  "handle": "@MetLifeStadium"
                }
              },
              "boxOfficeInfo": {
                "phoneNumberDetail": "Box Office: 201.559.1300, tickets@metlifestadium.com - General Ticket Inquiries - ADA Ticket Inquiries Guest Services: 201.559.1515, info@metlifestadium.com",
                "openHoursDetail": "MetLife Stadium Box Office is open Monday through Friday 11am through 5pm. The Box Office is located in the West VIP lobby. Please park in Lot G, enter through MetLife Gate and into the large glass doors labeled West VIP.",
                "acceptedPaymentDetail": "The MetLife Stadium Box Office will accept cash, Visa, Mastercard, Discover, and American Express. Personal checks will not be accepted.",
                "willCallDetail": "Ticketmaster Will Call may be picked up at any open ticket window. For all events, non-Ticketmaster will call orders may be picked up at the designated will call window. Will call tickets will be available beginning at least 2 hours prior to the scheduled start time for the event."
              },
              "parkingDetail": "General Parking Information: * MetLife Stadium Parking Availability: There are approximately 23,000 parking spaces available that are distributed among 14 lots. * There is no street parking available near the stadium. * Parking fees will vary by event. * Accessible parking is available in Lots E, F, & G. Accessible parking is available on a first come / first serve basis. You must have parking pass and state- issued person with disabilities placard or license plate to park in an accessible parking space. Violators will be subject to citation and possible revocation of season or event parking privileges. *Taxi / Black Car, Limousine, and Guest drop offs will be permitted in Lot C. * Bus and R/V Parking is available in Lot L. * All vehicles parking within the stadiums secured parking perimeter are subject to security inspection before being permitted to park. * Hours of Operation will vary per event. For NFL games, parking lots will open 5 hours prior to kickoff. All other events are subject to vary. * Parking passes are valid only for the event or game noted on the pass and for the specific lot. *Please note, all parking information may be amended based on the nature of the event, please contact the stadium at 201-559-1515 or info@metlifestadium.com with any specific questions not addressed above.",
              "accessibleSeatingDetail": "MetLife Stadium is fully accessible including all concession stand locations, merchandise stands, ATM's and seating areas. Accessible seating for guests with special needs is available on all levels and in all price ranges. Elevators are located in the southeast (HCL Tech), southwest (Verizon), and northwest (Pepsi) corners of the stadium. Ramps are located at the north and south entrances. Seats with removable armrests are located throughout the stadium. A limited number of wheelchairs are located at each of the entrance gates to transport guests with limited mobility to their seating area. Guests may contact the MetLife Stadium at 201-559-1515 or ADAinfo@metlifestadium.com for more information or any additional needs for non-NFL events. MetLife Stadium ADA Ticket Questions call 201-559-1300. New York Giants ADA Ticket Purchases call 201-935-8222. New York Jets ADA Ticket Purchases call 973-549-4585. For wheelchair accessible and limited mobility patrons for non-NFL events, please click on the \"Request Accessible Tickets\" icon on the right side of the page to be taken to a dedicated page for accessible seating purchases. Please request the total number of wheelchair plus companion seats or limited mobility plus companion seats within the same wheelchair dropdown box so you may sit together.",
              "generalInfo": {
                "generalRule": "MetLife Stadium is committed to promoting a memorable event day experience for all fans. With that goal in mind, we have developed our Guest Code of Conduct to which we strongly encourage all guests to adhere. Keeping MetLife Stadium and Plaza SMOKE-FREE",
                "childRule": "For non-NFL events, children under 34 inches height do not require a ticket of their own but must share a seat with an accompanying adult. All children taller than 34 inches require a ticket of their own. For New York Jets games this 34\" rule applies For New York Giants games all guest need a ticket regardless of age. Please contact the stadium directly regarding the suitability of an event for children."
              },
              "upcomingEvents": {
                "_total": 21,
                "tmr": 1,
                "ticketmaster": 20,
                "_filtered": 0
              },
              "ada": {
                "adaPhones": "For NFL New York Giants: 201-935-8222\n             \nFor NFL New York Jets: 973-549-4585               \n            \nFor NON-NFL Events: 1-800-877-7575\n\n",
                "adaCustomCopy": "For NFL New York Giants: 201-935-8222\n             \nFor NFL New York Jets: 973-549-4585                \n\nFor NON-NFL Events: 1-800-877-7575",
                "adaHours": "See Above"
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpakS7e?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Beyoncé",
              "type": "attraction",
              "id": "K8vZ9175rX7",
              "test": false,
              "url": "https://www.ticketmaster.com/beyonce-tickets/artist/894191",
              "locale": "en-us",
              "externalLinks": {
                "youtube": [
                  {
                    "url": "https://www.youtube.com/user/beyonce"
                  },
                  {
                    "url": "https://www.youtube.com/user/beyonceVEVO"
                  }
                ],
                "twitter": [
                  {
                    "url": "https://twitter.com/Beyonce"
                  }
                ],
                "itunes": [
                  {
                    "url": "https://itunes.apple.com/artist/id1419227"
                  }
                ],
                "lastfm": [
                  {
                    "url": "http://www.last.fm/music/Beyonc%C3%A9"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/beyonce"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Beyonc%C3%A9"
                  }
                ],
                "spotify": [
                  {
                    "url": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/beyonce/"
                  }
                ],
                "musicbrainz": [
                  {
                    "id": "859d0860-d480-4efd-970c-c05d5f1776b8"
                  }
                ],
                "homepage": [
                  {
                    "url": "http://www.beyonce.com/"
                  }
                ]
              },
              "aliases": [
                "beonce",
                "beyonce",
                "beyonce knowles",
                "beyounce",
                "byonce",
                "betonc"
              ],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
                  "width": 2426,
                  "height": 1365,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkIt",
                    "name": "R&B"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7la",
                    "name": "Individual"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vAd7",
                    "name": "Musician"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 97,
                "mfx-nl": 13,
                "tmr": 2,
                "mfx-de": 22,
                "mfx-es": 7,
                "ticketmaster": 44,
                "mfx-be": 1,
                "_filtered": 0,
                "mfx-pl": 4,
                "mfx-se": 4
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "BEYONCÉ - RENAISSANCE WORLD TOUR",
        "type": "event",
        "id": "vvG1IZ9NBHNNqP",
        "test": false,
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-inglewood-california-09-02-2023/event/0A005E3EBC8E3765",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
            "width": 2426,
            "height": 1365,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startDateTime": "2023-02-11T21:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-09-03T04:00:00Z"
          },
          "presales": [
            {
              "startDateTime": "2023-02-06T21:00:00Z",
              "endDateTime": "2023-02-07T06:00:00Z",
              "name": "BeyHive Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-07T21:00:00Z",
              "endDateTime": "2023-02-09T06:00:00Z",
              "name": "Citi Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-11T21:00:00Z",
              "endDateTime": "2023-02-12T06:00:00Z",
              "name": "Verified Fan Onsale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-09-02",
            "localTime": "19:00:00",
            "dateTime": "2023-09-03T02:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/Los_Angeles",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nJ",
              "name": "Music"
            },
            "genre": {
              "id": "KnvZfZ7vAee",
              "name": "R&B"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vkIt",
              "name": "R&B"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7nI",
              "name": "Undefined"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7v7lJ",
              "name": "Undefined"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        },
        "promoters": [
          {
            "id": "653",
            "name": "LIVE NATION MUSIC",
            "description": "LIVE NATION MUSIC / NTL / USA"
          }
        ],
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 62.0,
            "max": 757.0
          }
        ],
        "products": [
          {
            "name": "PARKWHIZ SOFI STADIUM",
            "id": "vvG1IZ9016a3pO",
            "url": "https://www.ticketmaster.com/parkwhiz-sofi-stadium-inglewood-california-09-02-2023/event/0A005E42872525A0",
            "type": "Upsell",
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7n1",
                  "name": "Miscellaneous"
                },
                "genre": {
                  "id": "KnvZfZ7v7ll",
                  "name": "Undefined"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vAv1",
                  "name": "Undefined"
                },
                "type": {
                  "id": "KZAyXgnZfZ7vAva",
                  "name": "Parking"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7vAFe",
                  "name": "Regular"
                },
                "family": false
              }
            ]
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0A005E3EBC8E3765/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an overall 4 ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/vvG1IZ9NBHNNqP?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZ917ACh0?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "SoFi Stadium",
              "type": "venue",
              "id": "KovZ917ACh0",
              "test": false,
              "url": "https://www.ticketmaster.com/sofi-stadium-tickets-inglewood/venue/82789",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/21790v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "90301",
              "timezone": "America/Los_Angeles",
              "city": {
                "name": "Inglewood"
              },
              "state": {
                "name": "California",
                "stateCode": "CA"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "1001 S. Stadium Dr"
              },
              "location": {
                "longitude": "-118.343767",
                "latitude": "33.950529"
              },
              "markets": [
                {
                  "name": "Los Angeles",
                  "id": "27"
                }
              ],
              "dmas": [
                {
                  "id": 223
                },
                {
                  "id": 324
                },
                {
                  "id": 354
                },
                {
                  "id": 383
                }
              ],
              "upcomingEvents": {
                "_total": 24,
                "tmr": 1,
                "ticketmaster": 23,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZ917ACh0?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Beyoncé",
              "type": "attraction",
              "id": "K8vZ9175rX7",
              "test": false,
              "url": "https://www.ticketmaster.com/beyonce-tickets/artist/894191",
              "locale": "en-us",
              "externalLinks": {
                "youtube": [
                  {
                    "url": "https://www.youtube.com/user/beyonce"
                  },
                  {
                    "url": "https://www.youtube.com/user/beyonceVEVO"
                  }
                ],
                "twitter": [
                  {
                    "url": "https://twitter.com/Beyonce"
                  }
                ],
                "itunes": [
                  {
                    "url": "https://itunes.apple.com/artist/id1419227"
                  }
                ],
                "lastfm": [
                  {
                    "url": "http://www.last.fm/music/Beyonc%C3%A9"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/beyonce"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Beyonc%C3%A9"
                  }
                ],
                "spotify": [
                  {
                    "url": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/beyonce/"
                  }
                ],
                "musicbrainz": [
                  {
                    "id": "859d0860-d480-4efd-970c-c05d5f1776b8"
                  }
                ],
                "homepage": [
                  {
                    "url": "http://www.beyonce.com/"
                  }
                ]
              },
              "aliases": [
                "beonce",
                "beyonce",
                "beyonce knowles",
                "beyounce",
                "byonce",
                "betonc"
              ],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
                  "width": 2426,
                  "height": 1365,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkIt",
                    "name": "R&B"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7la",
                    "name": "Individual"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vAd7",
                    "name": "Musician"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 97,
                "mfx-nl": 13,
                "tmr": 2,
                "mfx-de": 22,
                "mfx-es": 7,
                "ticketmaster": 44,
                "mfx-be": 1,
                "_filtered": 0,
                "mfx-pl": 4,
                "mfx-se": 4
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "LA Clippers vs. Golden State Warriors",
        "type": "event",
        "id": "Z7r9jZ1Ad4sOE",
        "test": false,
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad4sOE",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startDateTime": "1900-01-01T18:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-03-16T02:00:00Z"
          }
        },
        "dates": {
          "start": {
            "localDate": "2023-03-15",
            "localTime": "19:00:00",
            "dateTime": "2023-03-16T02:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nE",
              "name": "Sports"
            },
            "genre": {
              "id": "KnvZfZ7vAde",
              "name": "Basketball"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vFJA",
              "name": "NBA"
            },
            "family": false
          }
        ],
        "outlets": [
          {
            "url": "https://www.ticketmaster.com/la-clippers-vs-golden-state-warriors-los-angeles-california-03-15-2023/event/Zu0FM1R0e5tAz_2",
            "type": "tmMarketPlace"
          }
        ],
        "seatmap": {
          "staticUrl": "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/1604-480-3-0-STAPLESCenter73354.png"
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/Z7r9jZ1Ad4sOE?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9171o1V?locale=en-us"
            },
            {
              "href": "/discovery/v2/attractions/K8vZ9171oa0?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/ZFr9jZe6vA?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "Crypto.com Arena",
              "type": "venue",
              "id": "ZFr9jZe6vA",
              "test": false,
              "locale": "en-us",
              "postalCode": "90017",
              "timezone": "America/Los_Angeles",
              "city": {
                "name": "Los Angeles"
              },
              "state": {
                "name": "California",
                "stateCode": "CA"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "1111 S. Figueroa St."
              },
              "location": {
                "longitude": "-118.2649",
                "latitude": "34.053101"
              },
              "dmas": [
                {
                  "id": 324
                }
              ],
              "upcomingEvents": {
                "_total": 69,
                "tmr": 51,
                "ticketmaster": 18,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/ZFr9jZe6vA?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "LA Clippers",
              "type": "attraction",
              "id": "K8vZ9171o1V",
              "test": false,
              "url": "https://www.ticketmaster.com/la-clippers-tickets/artist/805958",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/LAClippers"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Los_Angeles_Clippers"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/LAClippers/"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/laclippers/"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/clippers/"
                  }
                ]
              },
              "aliases": ["la clippers", "los angeles clippers"],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/518/971b3e12-b253-4f8a-9896-874192c51518_1340071_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 13,
                "tmr": 9,
                "ticketmaster": 4,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171o1V?locale=en-us"
                }
              }
            },
            {
              "name": "Golden State Warriors",
              "type": "attraction",
              "id": "K8vZ9171oa0",
              "test": false,
              "url": "https://www.ticketmaster.com/golden-state-warriors-tickets/artist/805946",
              "locale": "en-us",
              "externalLinks": {
                "twitter": [
                  {
                    "url": "https://twitter.com/warriors"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Golden_State_Warriors"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/warriors"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/warriors"
                  }
                ],
                "homepage": [
                  {
                    "url": "https://www.nba.com/warriors/"
                  }
                ]
              },
              "images": [
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 31,
                "tmr": 2,
                "ticketmaster": 29,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9171oa0?locale=en-us"
                }
              }
            }
          ]
        }
      },
      {
        "name": "BEYONCÉ - RENAISSANCE WORLD TOUR",
        "type": "event",
        "id": "vvG1IZ9074wU4P",
        "test": false,
        "url": "https://www.ticketmaster.com/beyonce-renaissance-world-tour-inglewood-california-09-01-2023/event/0A005E4115CB6565",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
            "width": 2426,
            "height": 1365,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
          },
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
          {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
          },
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
          }
        ],
        "sales": {
          "public": {
            "startDateTime": "2023-02-11T23:00:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-09-02T04:00:00Z"
          },
          "presales": [
            {
              "startDateTime": "2023-02-06T23:00:00Z",
              "endDateTime": "2023-02-07T06:00:00Z",
              "name": "BeyHive Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-07T23:00:00Z",
              "endDateTime": "2023-02-09T06:00:00Z",
              "name": "Citi Presale powered by Verified Fan"
            },
            {
              "startDateTime": "2023-02-11T23:00:00Z",
              "endDateTime": "2023-02-12T06:00:00Z",
              "name": "Verified Fan Onsale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-09-01",
            "localTime": "19:00:00",
            "dateTime": "2023-09-02T02:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/Los_Angeles",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nJ",
              "name": "Music"
            },
            "genre": {
              "id": "KnvZfZ7vAee",
              "name": "R&B"
            },
            "subGenre": {
              "id": "KZazBEonSMnZfZ7vkIt",
              "name": "R&B"
            },
            "type": {
              "id": "KZAyXgnZfZ7v7nI",
              "name": "Undefined"
            },
            "subType": {
              "id": "KZFzBErXgnZfZ7v7lJ",
              "name": "Undefined"
            },
            "family": false
          }
        ],
        "promoter": {
          "id": "653",
          "name": "LIVE NATION MUSIC",
          "description": "LIVE NATION MUSIC / NTL / USA"
        },
        "promoters": [
          {
            "id": "653",
            "name": "LIVE NATION MUSIC",
            "description": "LIVE NATION MUSIC / NTL / USA"
          }
        ],
        "priceRanges": [
          {
            "type": "standard",
            "currency": "USD",
            "min": 62.0,
            "max": 757.0
          }
        ],
        "seatmap": {
          "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0A005E4115CB6565/staticImage?type=png&systemId=HOST"
        },
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an overall 4 ticket limit for this event."
        },
        "ageRestrictions": {
          "legalAgeEnforced": false
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/vvG1IZ9074wU4P?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZ917ACh0?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "SoFi Stadium",
              "type": "venue",
              "id": "KovZ917ACh0",
              "test": false,
              "url": "https://www.ticketmaster.com/sofi-stadium-tickets-inglewood/venue/82789",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/21790v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "90301",
              "timezone": "America/Los_Angeles",
              "city": {
                "name": "Inglewood"
              },
              "state": {
                "name": "California",
                "stateCode": "CA"
              },
              "country": {
                "name": "United States Of America",
                "countryCode": "US"
              },
              "address": {
                "line1": "1001 S. Stadium Dr"
              },
              "location": {
                "longitude": "-118.343767",
                "latitude": "33.950529"
              },
              "markets": [
                {
                  "name": "Los Angeles",
                  "id": "27"
                }
              ],
              "dmas": [
                {
                  "id": 223
                },
                {
                  "id": 324
                },
                {
                  "id": 354
                },
                {
                  "id": 383
                }
              ],
              "upcomingEvents": {
                "_total": 24,
                "tmr": 1,
                "ticketmaster": 23,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZ917ACh0?locale=en-us"
                }
              }
            }
          ],
          "attractions": [
            {
              "name": "Beyoncé",
              "type": "attraction",
              "id": "K8vZ9175rX7",
              "test": false,
              "url": "https://www.ticketmaster.com/beyonce-tickets/artist/894191",
              "locale": "en-us",
              "externalLinks": {
                "youtube": [
                  {
                    "url": "https://www.youtube.com/user/beyonce"
                  },
                  {
                    "url": "https://www.youtube.com/user/beyonceVEVO"
                  }
                ],
                "twitter": [
                  {
                    "url": "https://twitter.com/Beyonce"
                  }
                ],
                "itunes": [
                  {
                    "url": "https://itunes.apple.com/artist/id1419227"
                  }
                ],
                "lastfm": [
                  {
                    "url": "http://www.last.fm/music/Beyonc%C3%A9"
                  }
                ],
                "facebook": [
                  {
                    "url": "https://www.facebook.com/beyonce"
                  }
                ],
                "wiki": [
                  {
                    "url": "https://en.wikipedia.org/wiki/Beyonc%C3%A9"
                  }
                ],
                "spotify": [
                  {
                    "url": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                  }
                ],
                "instagram": [
                  {
                    "url": "https://www.instagram.com/beyonce/"
                  }
                ],
                "musicbrainz": [
                  {
                    "id": "859d0860-d480-4efd-970c-c05d5f1776b8"
                  }
                ],
                "homepage": [
                  {
                    "url": "http://www.beyonce.com/"
                  }
                ]
              },
              "aliases": [
                "beonce",
                "beyonce",
                "beyonce knowles",
                "beyounce",
                "byonce",
                "betonc"
              ],
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_SOURCE",
                  "width": 2426,
                  "height": 1365,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/9ff/750d0e9b-b2c2-4b82-8898-edb3d8dca9ff_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                }
              ],
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkIt",
                    "name": "R&B"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7la",
                    "name": "Individual"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vAd7",
                    "name": "Musician"
                  },
                  "family": false
                }
              ],
              "upcomingEvents": {
                "_total": 97,
                "mfx-nl": 13,
                "tmr": 2,
                "mfx-de": 22,
                "mfx-es": 7,
                "ticketmaster": 44,
                "mfx-be": 1,
                "_filtered": 0,
                "mfx-pl": 4,
                "mfx-se": 4
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/attractions/K8vZ9175rX7?locale=en-us"
                }
              }
            }
          ]
        }
      }
    ]
  },
  "_links": {
    "first": {
      "href": "/discovery/v2/events.json?page=0&size=20"
    },
    "self": {
      "href": "/discovery/v2/events.json"
    },
    "next": {
      "href": "/discovery/v2/events.json?page=1&size=20"
    },
    "last": {
      "href": "/discovery/v2/events.json?page=8470&size=20"
    }
  },
  "page": {
    "size": 20,
    "totalElements": 169417,
    "totalPages": 8471,
    "number": 0
  }
}
