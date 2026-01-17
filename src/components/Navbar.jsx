const Navbar = () => {
  return (
    <nav className="w-screen p-4 mb-6 border-4 fixed top-0 left-0 z-10">
      <div className="flex items-center justify-center">
        <h1 className=" text-2xl font-bold ">
          Movie Recommender Assistant
        </h1>
        <p className="text-marquee-teal ml-4">🍿 Developed by Jack Aguilera</p>
      </div>
    </nav>
  );
};

export default Navbar;
