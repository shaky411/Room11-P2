import { useEffect, useState } from "react";

export default function GitWidget3() {
  const [githubData, setGithubData] = useState([]);
  const [githubData2, setGithubData2] = useState([]);
  const [githubData3, setGithubData3] = useState([]);
  // const [githubUser, setGithubUser] = useState("");

  // API Call
  const getUser1 = async () => {
    const response = await fetch(`https://api.github.com/users/shaky411`);
    const data = await response.json();
    return setGithubData(data);
    // console.log(data)
  };

  const getUser2 = async () => {
    const response = await fetch(`https://api.github.com/users/leedvine`);
    const data = await response.json();
    return setGithubData2(data);
    // console.log(data)
  };

  const getUser3 = async () => {
    const response = await fetch(`https://api.github.com/users/rezan5910`);
    const data = await response.json();
    return setGithubData3(data);
    // console.log(data)
  };

  // Additional end point -> https://api.github.com/users/timmywheels/repos

  // eslint-disable-next-line
  let twitterLink = `https://twitter.com/ ${githubData.twitter_username}`;
  let twitterLink2 = `https://twitter.com/ ${githubData2.twitter_username}`;
  let twitterLink3 = `https://twitter.com/ ${githubData2.twitter_username}`;

  // Add API call to use effect
  useEffect(() => {
    getUser1();
    getUser2();
    getUser3();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="flex flex-col text-center items-center justify-center mt-6">
        <i class="fa-solid fa-sitemap mt-10 text-slate-500 text-5xl"></i>
        <h1 className="text-4xl mt-2 text-slate-500">Meet the Team</h1>
          <p className="text-[1.2rem] w-4/5 md:w-3/5 lg:w-1/2 mt-4">
            We are a group of highly dedicated and skilled
          individuals who are passionate about delivering exceptional results to
          our clients.</p> 
          <p className="text-[1.2rem] w-4/5 md:w-3/5 lg:w-1/2 mt-4">
            Our team consists of professionals from diverse
          backgrounds, bringing a wealth of knowledge and expertise to every
          project we undertake.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-start items-center mx-2 justify-center mt-10 mb-20">
        <div className="w-full max-w-sm mx-2 my-2 bg-slate-700 rounded-2xl shadow-xl hover:shadow-pink-500 transition-shadow duration-700">
          <div className="flex flex-col items-center bg-gradient-to-r from-sky-500 to-indigo-500 rounded-t-xl">
            <img
              className="w-24 h-24 mb-5 mt-10 rounded-lg shadow-lg hover:scale-125 transition-scale duration-500"
              src={githubData.avatar_url}
              alt="Profile"
            />
            <h5 className="mb-1 text-xl font-medium text-white">
              {githubData.name}
            </h5>
            <span className="text-sm text-gray-400 mb-6">
              {githubData.type}
            </span>
          </div>

          <div className="flex flex-col justify-center items-center m-5 space-y-2">
            <div>
              <i className="fa-brands fa-github mr-1 text-white text-2xl"></i>
              <a
                className="text-2xl font-bold text-pink-500 hover:text-green-500"
                href={githubData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {githubData.login}
              </a>
            </div>
            <div>
              <i className="fa-solid fa-location-dot mr-1 text-green-500"></i>
              <span className="text-sm text-white">{githubData.location}</span>
            </div>

            <div className="text-sm text-green-400 hover:text-pink-500 mt-2">
              <i className="fa-brands fa-twitter mr-1 text-blue-500"></i>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                {githubData.twitter_username}
              </a>
            </div>

            <div className="flex flex-row">
              <span className="text-sm text-gray-400 mr-2">Followers:</span>
              <p className="text-violet-500 font-semibold">
                {githubData.followers}
              </p>
            </div>

            <div className="flex flex-row">
              <span className="text-sm text-gray-400 mr-2">Public Repos:</span>
              <p className="text-orange-500 font-semibold">
                {githubData.public_repos}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm mx-2 my-2 bg-slate-700 rounded-2xl shadow-xl hover:shadow-violet-500 transition-shadow duration-700">
          <div className="flex flex-col items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl">
            <img
              className="w-24 h-24 mb-5 mt-10 rounded-lg shadow-lg hover:scale-125 transition-scale duration-500"
              src={githubData2.avatar_url}
              alt="Profile"
            />
            <h5 className="mb-1 text-xl font-medium text-white">
              {githubData2.name}
            </h5>
            <span className="text-sm text-gray-400 mb-6">
              {githubData2.type}
            </span>
          </div>

          <div className="flex flex-col items-center m-5 space-y-2">
            <div>
              <i className="fa-brands fa-github mr-1 text-white text-2xl"></i>
              <a
                className="text-2xl font-bold text-violet-500 hover:text-green-500"
                href={githubData2.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {githubData2.login}
              </a>
            </div>
            <div>
              <i className="fa-solid fa-location-dot mr-1 text-green-500"></i>
              <span className="text-sm text-white">{githubData2.location}</span>
            </div>

            <div className="text-sm text-green-400 hover:text-pink-500 mt-2">
              <i className="fa-brands fa-twitter mr-1 text-blue-500"></i>
              <a href={twitterLink2} target="_blank" rel="noopener noreferrer">
                {githubData2.twitter_username}
              </a>
            </div>

            <div className="flex flex-row">
              <span className="text-sm text-gray-400 mr-2">Followers:</span>
              <p className="text-violet-500 font-semibold">
                {githubData2.followers}
              </p>
            </div>

            <div className="flex flex-row">
              <span className="text-sm text-gray-400 mr-2">Public Repos:</span>
              <p className="text-orange-500 font-semibold">
                {githubData2.public_repos}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm mx-2 my-2 bg-slate-700 rounded-2xl shadow-xl hover:shadow-cyan-500 transition-shadow duration-700">
          <div className="flex flex-col items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t-xl">
            <img
              className="w-24 h-24 mb-5 mt-10 rounded-lg shadow-lg hover:scale-125 transition-scale duration-500"
              src={githubData3.avatar_url}
              alt="Profile"
            />
            <h5 className="mb-1 text-xl font-medium text-white">
              {githubData3.name}
            </h5>
            <span className="text-sm text-gray-400 mb-6">
              {githubData3.type}
            </span>
          </div>

          <div className="flex flex-col items-center m-5 space-y-2">
            <div>
              <i className="fa-brands fa-github mr-1 text-white text-2xl"></i>
              <a
                className="text-2xl font-bold text-cyan-500 hover:text-green-500"
                href={githubData3.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {githubData3.login}
              </a>
            </div>
            <div>
              <i className="fa-solid fa-location-dot mr-1 text-green-500"></i>
              <span className="text-sm text-white">{githubData3.location}</span>
            </div>

            <div className="text-sm text-green-400 hover:text-pink-500 mt-2">
              <i className="fa-brands fa-twitter mr-1 text-blue-500"></i>
              <a href={twitterLink3} target="_blank" rel="noopener noreferrer">
                {githubData3.twitter_username}
              </a>
            </div>

            <div className="flex flex-row">
              <span className="text-sm text-gray-400 mr-2">Followers:</span>
              <p className="text-violet-500 font-semibold">
                {githubData3.followers}
              </p>
            </div>

            <div className="flex flex-row">
              <span className="text-sm text-gray-400 mr-2">Public Repos:</span>
              <p className="text-orange-500 font-semibold">
                {githubData3.public_repos}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
