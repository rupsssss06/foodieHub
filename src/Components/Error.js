import { useRouteError, Link } from "react-router-dom";
const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fffdf8] px-5 py-10 text-[#292524]">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg sm:p-12">
        <div className="mb-5 text-6xl">🍽️</div>

        <h1 className="mb-4 text-2xl font-bold sm:text-3xl">
          Oops! Something went wrong.
        </h1>

        <p className="mb-6 text-base leading-7 text-[#666]">
          We couldn't find the page you're looking for.
          <br />
          Don't worry, let's get you back to something delicious!
        </p>

        <h3 className="mb-6 text-lg font-semibold text-[#ff5200]">
          {err.status} {err.statusText}
        </h3>
        <Link
          to="/"
          className="inline-block rounded-full bg-[#ff5200] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#e64600]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};
export default Error;
