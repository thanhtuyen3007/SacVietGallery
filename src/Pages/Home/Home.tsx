export const Home = () => {
  return (
    <article className="home-container w-screen lg:h-screen">
      <div className="lg:w-1/2 lg:h-screen bg-bg-primary z-99 lg:flex lg:flex-col lg:justify-center lg:items-center pl-20">
       <div className="lg:w-5/6">
          <h1 className="font-h1">the soul of vietnam</h1>
          <p className="font-text py-10">
            The hues of past and present intertwine, whispering tales of villages,
            cities, and the human spirit. Within the light of the exhibition,
            each painting becomes a gentle voice—inviting you to listen, to feel,
            and to discover Vietnam’s soul within yourself.
          </p>
       </div>
      </div>
      <div className="lg:h-screen fixed top-0 left-0 right-0 -z-10">
        <img
          className="w-full lg:h-screen object-cover"
          src="https://cdn.tienphong.vn/images/814b5533c866dc3540018a126103e935edf238dc5fe842100151164d2dd56f9f2c23f514b1f5421c59034ed436d6852de16714df91696f3a170efad8e92b660b/img-5579-6733.jpeg"
          alt="Uyên ương hý liên-Lê Phổ"
        />
      </div>
    </article>
  );
};
