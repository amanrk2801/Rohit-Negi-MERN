import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <>
      <div id="heading">
        <h1>Github Profile Viewer</h1>
      </div>
    </>
  );
};

const Body = () => {
  const [Profile, setProfile] = useState([]);
  const [numberOfProfile, setNumberOfProfile] = useState("");

  async function generateProfile(count) {
    const res = await fetch(`https://api.github.com/users?per_page=${count}`);
    const data = await res.json();
    setProfile(data);
    console.log(data);
  }

  useEffect(() => {
    generateProfile(5);
  }, []);

  return (
    <div>
      <div className="search-bar">
        <input type="number" value={numberOfProfile} onChange={(e)=>setNumberOfProfile(e.target.value)}></input>
        <button onClick={()=>generateProfile(Number(numberOfProfile))}>Search Profile</button>
      </div>
      <div className="profile">
        {Profile.map((profile, index) => (
          <div key={profile.id} className="cards">
            <img src={profile.avatar_url} alt="Profile Avatar" />
            <h2>{profile.login}</h2>
            <a href={profile.html_url} target="_blank">
              Github
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

function GithubProfile() {
  return (
    <>
      <Header></Header>
      <Body></Body>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile />);
