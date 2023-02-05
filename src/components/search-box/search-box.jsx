import "./search-box-style.css";

const SearchBox = (props) => (
  <input
    className={`search-box ${props.className}`}
    type="search"
    placeholder={props.placeholder}
    onChange={props.searchHandler}
  />
);

export default SearchBox;
