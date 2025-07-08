import { useEffect } from "react";
import { useState } from "react";

const Search = ({ onResult }) => {
  const [query, setQuery] = useState("");
  const [state, setState] = useState("idle");

  const fetchUserInfo = (username) => {
    setState("pending");
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          console.log("error");
        }
        return response.json();
      })
      .then((result) => {
        onResult(result);
        setState("finished");
      });
  };

  useEffect(() => {
    if (!query.length) {
      setState("idle");
      onResult(null);
      return;
    }
    setState("typing");
    console.log("current Query", query);
    // debounce
    const timer = setTimeout(() => {
      console.log("search for ", query);
      fetchUserInfo(query);
    }, 1000);
    return () => {
      console.log("cancel search");
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={state === "pending"}
      />
      <button
        onClick={() => fetchUserInfo(query)}
        disabled={state === "pending"}
      >
        Search
      </button>
      {state === "pending" && <small>Loading ...</small>}
      {state === "typing" && <small>Typing ...</small>}
    </div>
  );
};

const Result = ({ user }) => {
  return (
    <div>
      {!!user && (
        <div>
          <div>result:</div>
          <img
            src={user.avatar_url}
            alt={`${user.name} github profile picture`}
            width={200}
            height={200}
          />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <a
            href={user.html_url}
            title={`checkout ${user.name} profile on github`}
            target="_blank"
          >
            {user.login}
          </a>
        </div>
      )}
    </div>
  );
};

const GithubUserSearch = () => {
  const [user, setUser] = useState();
  return (
    <div>
      <Search onResult={setUser} />
      <Result user={user} />
    </div>
  );
};

export default GithubUserSearch;
