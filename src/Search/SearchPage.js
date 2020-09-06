import React from "react";
import { useStateValue } from "../StateProvider";
import Search from "../pages/Search";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "@material-ui/core";
import "./SearchPage.css";
import SearchIcon from "@material-ui/icons/Search";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //   const { data } = useGoogleSearch(term);
  const data = Response;
  console.log(data, "this si the global state");
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          ></img>
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons={true} />
        </div>
      </div>
      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            Abouut {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>{item.displayLink}</a>
              <a className="searchPage__resultTitle" href={item.Link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet" href={item.Link}>
                <h2>{item.snippet}</h2>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
