import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "../reducer";

export default function Search({ hidebuttons = false }) {
  const [{  }, dispatch] = useStateValue()
  const history = useHistory();
  const [input, setInput] = useState("");
  const search = (e) => {
    e.preventDefault();
    if(input.length){
        history.push("/search");
    }
    // do something with input later

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    })
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" onClick={search}/>
        <input value={input} onChange={(e) => setInput(e.target.value)} className="search__inputBig"/>
        <MicIcon className="search__inputIcon"/>
      </div>
      {!hidebuttons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button className="search__buttonsHidden" type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">I'm feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}
