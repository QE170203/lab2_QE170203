import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/js/bootstrap.bundle';
function App() {
  return (
    <>
      <div className="container-fluid bg-dark text-white">
        <div className="row">
          <div className="col-lg-12">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                  <a className="navbar-brand" href="#">Pizza House</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                      <li className="nav-item">
                        <a className="nav-link" href="#">House</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                      </li>
                    </ul>
                    <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      </input>
                      <button className="btn btn-danger" type="submit"><i className="fa fa-search"></i></button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-lg-12 mb-5">
            <div className="row">
              <div id="carouselExampleCaptions" className="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./images/pizza1.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Pizza - Endless fun!</h5>
                      <p>Every slice of pizza is a feast for the taste buds with crispy crust, rich tomato sauce and creamy cheese.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="./images/pizza2.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Your pizza, a world of flavors!</h5>
                      <p>Freely create your own pizza with countless attractive topping options.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="./images/pizza3.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Hot, delicious, only pizza!</h5>
                      <p>Freshly baked pizza, hot, fragrant, guaranteed to satisfy you.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="./images/pizza4.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Pizza - Companion of every party!</h5>
                      <p>Pizza is the perfect choice for gatherings with friends and family.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="./images/pizza5.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Hungry? Pizza is here!</h5>
                      <p>Call us now, pizza will be delivered to your door, hot and delicious.</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 mb-5">
          <div className="container">
            <div className='row'>
              <h2>Our Menu</h2>
              <div className='col-md-3 mb-2'>
                <div className="card" >
                  <img src="images/menu1.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Margherita Pizza</h5>
                    <p className="text-muted">$40.00</p>
                    <a href="#" className="form-control btn btn-dark">Buy</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 mb-2'>
                <div className="card" >
                  <img src="images/menu2.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mushroom Pizza</h5>
                    <p className="text-muted">$25.00</p>
                    <a href="#" className="form-control btn btn-dark">Buy</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 mb-2'>
                <div className="card" >
                  <img src="images/menu3.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Hawaiian Pizza</h5>
                    <p className="text-muted">$30.00</p>
                    <a href="#" className="form-control btn btn-dark">Buy</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 mb'>
                <div className="card" >
                  <img src="images/menu4.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Pesto Pizza</h5>
                    <p className="text-muted">$30.00</p>
                    <a href="#" className="form-control btn btn-dark">Buy</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="container">
              <div className='row'>
                <h2 className='text-center'> Book Your Table</h2>
                <div className="row mb-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Your name* " aria-label=" Your name" />
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Your email* " aria-label="Your email" />
                  </div>
                  <div className="col">
                    <select id="inputState" className="form-select">
                      <option selected>Select a Service</option>
                      <option>Pizza1</option>
                      <option>Pizza2</option>
                      <option>Pizza3</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <textarea className="form-control" rows="5" placeholder='Please write your comment' aria-label="Please write your comment"></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input type="submit" className="btn btn-warning text-white" value="Send Message"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
