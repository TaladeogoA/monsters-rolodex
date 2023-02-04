import { Component } from "react";
import "./search-box-style.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.searchHandler}
      />
    );
  }
}

export default SearchBox;
