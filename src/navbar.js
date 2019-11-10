import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div
          className="collapse navbar-collapse navbar-right"
          id="navbarSupportedContent"
        >
          <form className="form-inline  nav nav-form ml-auto" role="search">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={props.logout}
            >
              Log Out
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;