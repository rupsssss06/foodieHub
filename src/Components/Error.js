import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-page">
      <div className="error-content">
        <div className="error-icon">🍽️</div>

        <h1>Oops! Something went wrong.</h1>

        <p>
          We couldn't find the page you're looking for.
          <br />
          Don't worry, let's get you back to something delicious!
        </p>

        <h3>
          {err.status} {err.statusText}
        </h3>

        <button onClick={() => (window.location.href = "/")}>
          🏠 Back to Home
        </button>
      </div>
    </div>
  );
};
export default Error;
