import * as React from "react";

const timePattern = /^([0-9]+([.][0-9]+)?[hm])/;

function Movieform({ onSubmit }) {
  const nameRef = React.useRef();
  const ratingRef = React.useRef();
  const durationRef = React.useRef();

  const [isTimeError, setIsTimeError] = React.useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsTimeError((prev) => (prev = false));

    if (!timePattern.test(durationRef.current.value)) {
      setIsTimeError((prev) => (prev = true));
      return;
    }

    onSubmit({
      name: nameRef.current.value,
      rating: ratingRef.current.value,
      duration: durationRef.current.value,
    });

    nameRef.current.value = "";
    ratingRef.current.value = "";
    durationRef.current.value = "";
  };

  return (
    <section>
      <div className="card pa-30">
        <form onSubmit={handleFormSubmit}>
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Movie Name
            </label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              required
              placeholder="Enter Movie Name"
              data-testid="nameInput"
            />
          </div>

          <div className="layout-column mb-15">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
              ref={ratingRef}
              type="number"
              id="ratings"
              required
              max={100}
              placeholder="Enter Rating on a scale of 1 to 100"
              data-testid="ratingsInput"
            />
          </div>

          <div className="layout-column mb-30">
            <label htmlFor="duration" className="mb-3">
              Duration
            </label>
            <input
              ref={durationRef}
              type="text"
              id="duration"
              required
              placeholder="Enter duration in hours or minutes"
              data-testid="durationInput"
            />
          </div>

          {isTimeError && (
            <div className="alert error mb-30" data-testid="alert">
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          )}

          <div className="layout-row justify-content-end">
            <button type="submit" className="mx-0" data-testid="addButton">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;
