import "./Home.css";

export const Home = () => {
  return (
    <article className="w-screen h-screen lg:relative overflow-hidden flex flex-col -z-20">
      <div className="lg:h-screen lg:absolute lg:top-0 lg:right-0 lg:-z-10 flex-1">
        <img
          className="image w-full lg:h-screen object-cover"
          src="https://cdn.tienphong.vn/images/814b5533c866dc3540018a126103e935edf238dc5fe842100151164d2dd56f9f2c23f514b1f5421c59034ed436d6852de16714df91696f3a170efad8e92b660b/img-5579-6733.jpeg"
          alt="Uyên ương hý liên-Lê Phổ"
        />
      </div>
      <div className="lg:w-1/2 lg:h-screen flex-1 bg-bg-primary lg:z-99 flex justify-center items-center pl-20">
        <div className="w-5/6">
          <h1 className="font-h1">the soul of vietnam</h1>
          <p className=" font-text py-10">
            The hues of past and present intertwine, whispering tales of
            villages, cities, and the human spirit. Within the light of the
            exhibition, each painting becomes a gentle voice—inviting you to
            listen, to feel, and to discover Vietnam’s soul within yourself.
          </p>
        </div>
      </div>
    </article>
  );
};
