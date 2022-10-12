import * as React from "react";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";
import useDebouncedInput from "./hooks/useDebounceInput";

const title = "Favorite Movie Directory";

function App() {
  const [moviesList, setMoviesList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  // Efficient when making API requests
  const debouncedSearchTerm = useDebouncedInput(searchTerm, 1000);

  const searchResults = moviesList.filter((movie) =>
    movie.name.toLowerCase().includes(debouncedSearchTerm)
  );

  const handleFormSubmit = (movie) => {
    if (typeof movie !== "object") return;
    setMoviesList([...moviesList, movie]);
  };

  return (
    <div>
      <h8k-navbar header={title} />

      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform onSubmit={handleFormSubmit} />
        </div>

        <div className="layout-column w-30">
          <Search onChange={(e) => setSearchTerm(e.target.value)} />

          <Movieslist movies={searchResults} />

          {moviesList.length < 1 && (
            <div data-testid="noResult">
              <h3 className="text-center">No Movies Added</h3>
            </div>
          )}

          {searchTerm.length > 0 && searchResults.length < 1 && (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
