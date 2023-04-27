import Navbar from "../navbar/Navbar";

const Layout = ({children, className}) => {

  // Hooks

  // States

  //Effects

  return (
    <div className="">
      <Navbar />
      <div className={`transform transition-all duration-600 w-full h-screen`}>
        {children}
      </div>
    </div>
  );
}

export default Layout;