import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-[#fffdf8] px-[6%] py-10 text-[#292524]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-between gap-6 py-10 pb-[70px] md:flex-row md:gap-[50px]">
        <div className="flex-1">
          <p className="text-sm font-bold tracking-[2px] text-[#e4773e]">
            GOOD FOOD, GOOD MOOD
          </p>

          <h1 className="my-[18px] text-4xl font-bold leading-[1.15] md:text-5xl">
            Your cravings, our priority.
          </h1>

          <p className="mb-[30px] max-w-[500px] text-[17px] leading-[1.8] text-[#6b625d]">
            Discover delicious food from restaurants around you. Explore menus,
            find your favourites, and make your next meal special.
          </p>

          <Link
            to="/"
            className="inline-block rounded-lg bg-[#e4773e] px-6 py-3.5 font-semibold text-white no-underline transition-colors duration-200 hover:bg-[#c95d29]"
          >
            Explore Restaurants
          </Link>
        </div>

        <div className="w-full flex-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-ZTstUk7UO6aJe2URdYZh-u4Ce3QnPsORvwmR2DWTutiSYOSdALirOw&s=10"
            alt="Food served"
            className="h-[280px] w-full rounded-[22px] object-cover md:h-[370px]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-[50px] text-center">
        <h2 className="mb-3 text-[27px] font-bold md:text-[32px]">
          What Makes Us Special?
        </h2>

        <p className="mb-[35px] text-[#78716c]">
          Everything you need to discover your next favourite meal.
        </p>

        <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-2xl border border-[#f0e8de] bg-white px-6 py-7 transition duration-200 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_#0000000d]">
            <span className="text-[30px]">🍽️</span>
            <h3 className="my-4 mb-2.5 text-xl font-bold">
              Explore Restaurants
            </h3>
            <p className="leading-[1.7] text-[#78716c]">
              Discover restaurants and explore different cuisines.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl border border-[#f0e8de] bg-white px-6 py-7 transition duration-200 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_#0000000d]">
            <span className="text-[30px]">🔎</span>
            <h3 className="my-4 mb-2.5 text-xl font-bold">Quick Search</h3>
            <p className="leading-[1.7] text-[#78716c]">
              Find restaurants that match your cravings.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl border border-[#f0e8de] bg-white px-6 py-7 transition duration-200 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_#0000000d]">
            <span className="text-[30px]">⭐</span>
            <h3 className="my-4 mb-2.5 text-xl font-bold">Top Rated Picks</h3>
            <p className="leading-[1.7] text-[#78716c]">
              Discover highly rated places to eat.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto my-10 max-w-[750px] px-5 py-10 text-center">
        <h2 className="mb-3 text-[27px] font-bold md:text-[32px]">
          Our Mission
        </h2>

        <p className="text-[17px] leading-[1.8] text-[#6b625d]">
          We believe finding your next favourite meal should be simple,
          enjoyable, and exciting. We're here to make exploring food a
          delightful experience.
        </p>
      </section>

      {/* Developer Section */}
      <section className="px-3 py-10 text-center md:px-5 md:pb-[65px]">
        <p className="mb-[18px] inline-block rounded-full bg-[#fff0e5] px-3 py-1.5 text-[11px] font-bold tracking-[1.5px] text-[#c95d29]">
          THE CREATOR
        </p>

        <div className="mx-auto max-w-[420px] rounded-[20px] border border-[#f0e8de] bg-white px-[18px] py-7 shadow-[0_8px_24px_rgba(70,45,25,0.06)] transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_14px_32px_rgba(70,45,25,0.1)] md:px-7 md:py-8">
          <img
            className="mx-auto h-[105px] w-[105px] rounded-full border-4 border-[#fff0e5] bg-[#e4773e] object-cover p-[3px]"
            src="https://github.com/rupsssss06.png"
            alt="Rupa's profile"
          />

          <h3 className="mt-[18px] mb-1.5 text-2xl font-bold">Rupa Kumari</h3>

          <p className="mb-3.5 text-sm font-semibold text-[#e4773e]">
            Developer of FoodieHub
          </p>

          <p className="mx-auto max-w-[320px] text-sm leading-[1.8] text-[#78716c]">
            Passionate about web development, learning new technologies, and
            building user-friendly experiences.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            <a
              href="https://github.com/rupsssss06"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#f0e0d3] bg-[#fffaf5] px-[15px] py-2.5 text-[13px] font-semibold text-[#51443b] transition-colors duration-200 hover:border-[#e4773e] hover:bg-[#e4773e] hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rupa-kumari-6b21182a6/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#f0e0d3] bg-[#fffaf5] px-[15px] py-2.5 text-[13px] font-semibold text-[#51443b] transition-colors duration-200 hover:border-[#e4773e] hover:bg-[#e4773e] hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rupakumari18105@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#f0e0d3] bg-[#fffaf5] px-[15px] py-2.5 text-[13px] font-semibold text-[#51443b] transition-colors duration-200 hover:border-[#e4773e] hover:bg-[#e4773e] hover:text-white"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t border-[#f0e8de] px-4 py-6 text-center text-sm text-[#78716c]">
        <p>
          Created with <span className="text-[#e4773e]">❤️</span> by Rupa © 2026
          FoodieHub
        </p>
      </footer>
    </div>
  );
};

export default About;
