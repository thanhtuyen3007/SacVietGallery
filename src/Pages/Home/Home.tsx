import { Link } from "react-router";
import "./Home.css";

export const Home = () => {
  return (
    <section className="w-screen h-screen lg:relative overflow-hidden flex flex-col ">
      <div className="w-full h-full lg:absolute lg:top-0 lg:right-0 lg:-z-10 flex-1">
        <img
          className="image w-full h-full lg:h-screen object-cover"
          src="https://res.cloudinary.com/djka3a0ah/image/upload/v1757993749/uyen-uong-hy-lien-Le-Pho_rvo3zl.jpg"
          alt="Uyên ương hý liên-Lê Phổ"
        />
      </div>
      <div className="lg:w-1/2 lg:h-screen lg:opacity-90 flex-1 bg-bg-primary flex justify-center items-center pl-20">
        <div className="w-5/6">
          <h1 className="font-h1">the soul of vietnam</h1>
          <p className=" font-subtext py-10">
            The hues of past and present intertwine, whispering tales of
            villages, cities, and the human spirit. Within the light of the
            exhibition, each painting becomes a gentle voice—inviting you to
            listen, to feel, and to discover Vietnam’s soul within yourself.
          </p>
          <Link to="/" className="font-link-collections">
            Explore the Collections
          </Link>
        </div>
      </div>
    </section>
  );
};
