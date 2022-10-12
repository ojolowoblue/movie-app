import * as React from "react";

function Search({ onChange }) {
  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        onChange={onChange}
        type="text"
        placeholder="Search for movie by name"
        className="w-75 py-2"
        data-testid="search"
      />
    </section>
  );
}

export default Search;
