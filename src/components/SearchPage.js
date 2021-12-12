import React from "react";
import useGoogleSearch from "../ownHook/useGoogleSearch";
import "./search.css";
import { useStateValue } from "./StateProvider";
import response from "../response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
} from "@material-ui/icons";

export default function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  const { data } = useGoogleSearch( term );

  //   const data = response;

  console.log(`Helloooo` + data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
            className="searchPage__logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hidebuttons  />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <Description />
                <Link to="/all">Description</Link>
              </div>
              <div className="searchPage__option">
                <Image />
                <Link to="/all">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOffer />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <Room />
                <Link to="/all">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVert />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/more">More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results in (
            {data?.searchInformation.searchTime}) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link} className="searchPage__resultTitle">{item.title}</a>
              <br />
              <a href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                      <img src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" className="searchPage__image"/>
                  )}
                  {item.displayLink}
              </a>
              
              
              <p className="seachPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
      }

