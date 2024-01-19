
class Navbar extends Component {
  state = {
    showProfileModal: false,
    showWishlistModal: false,
    showSupportModal: false,
    showCartModal: false,
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light fixed-top">
          <div className="container-fluid mt-0">
            {/* Logo/Brand */}
            <a className="navbar-brand" href="#">
              <img
                src={require("../img/Logo2.png")}
                className="img-fluid"
                alt="logo"
                style={{ width: "150px" }}
              />
            </a>

            {/* Toggle button for mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar items */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <form className="form-inline search-bar me-3">
                    <input
                      className="form-control search-input"
                      type="search"
                      placeholder="ex. Women top"
                      aria-label="Search"
                    />
                    <button id="nav-search" type="submit">
                      Search
                    </button>
                  </form>
                </li>
                  {/* Profile Dropdown */}
                  <li>
          <Dropdown
            show={this.state.showProfileModal}
            onMouseEnter={() => this.setState({ showProfileModal: true })}
            onMouseLeave={() => this.setState({ showProfileModal: false })}
          >
            <Dropdown.Toggle
              variant=" none"
              id="profile-dropdown"
              style={{ color: "none", textDecoration: "none" }}
            >
              <img
                style={{ width: "20px" }}
                src={require("../img/new-profile.png")}
                alt="profile logo"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>My Profile</Dropdown.Item>
              <Dropdown.Item>My Orders</Dropdown.Item>
              <Dropdown.Item>My Message1</Dropdown.Item>
              <Dropdown.Item>My Coupons</Dropdown.Item>
              <Dropdown.Item>My Points</Dropdown.Item>
              <Dropdown.Item>Recently Viewed</Dropdown.Item>
              <Dropdown.Item>More Services</Dropdown.Item>
              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </li>
          {/* Wishlist Modal */}
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => this.setState({ showWishlistModal: true })}>
              <img style={{ width: "20px" }} src={require("../img/new-heart.png")} alt="wishlist" />
            </a>
            <Modal show={this.state.showWishlistModal} onHide={() => this.setState({ showWishlistModal: false })}>
              {/* Your wishlist modal content goes here */}
            </Modal>
          </li>
<li>
          <Dropdown
            show={this.state.showSupportModal}
            onMouseEnter={() => this.setState({ showSupportModal: true })}
            onMouseLeave={() => this.setState({ showSupportModal: false })}
          >
            <Dropdown.Toggle
              variant="link"
              id="support-dropdown"
              style={{ color: "black", textDecoration: "none" }}
            >
              <img
                style={{ width: "20px" }}
                src={require("../img/new-support.png")}
                alt="service logo"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Customer Service</Dropdown.Item>
              <Dropdown.Item>What can we do for you?</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
</li>
          {/* Cart Modal */}
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => this.setState({ showCartModal: true })}>
              <img style={{ width: "20px" }} src={require("../img/new-cart.png")} alt="cart logo" />
            </a>
            <Modal show={this.state.showCartModal} onHide={() => this.setState({ showCartModal: false })}>
              {/* Your cart modal content goes here */}
            </Modal>
            </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* space */}
        <div className="d-flex" style={{ height: "83px" }}>
          <div className="vr"></div>
        </div>

        {/* Carousel */}
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../img/carousel5.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../img/carousel6.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../img/carousel7.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../img/carousel1.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
