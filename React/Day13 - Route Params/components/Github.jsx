import React from "react";
import useFetch from "../customHooks/usefetch";

const Github = () => {
  console.log("Before Custom Hook");
  const { userData, loading, error } = useFetch();
  console.log("After Custom Hook");

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <>
      <h1>Github User</h1>
      <div>
        <h2>{userData.name || userData.login}</h2>
        <img
          src={userData.avatar_url}
          alt={`Avatar of ${userData.name || userData.login}`}
          width="150"
          height="150"
        />
        <br />
        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </div>
    </>
  );
};

export default Github;
