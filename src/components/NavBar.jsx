import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'
/*import { Wrapper, Logo , MenuItem, Left, Center, Right } from './styledComponents';*/


const NavBar = () => {
    return (


<nav className="navbar navbar-expand-lg bg-light">
  <Wrapper>
  <div className="container-fluid">
    <Logo>
    <a className="navbar-brand" href="#">ARTandDECO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </Logo>
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PICTURES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">SHOP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">OUR ARTIST</a>
        </li>

<Right>
<MenuItem><CartWidget /></MenuItem>
</Right>


      </ul>
    </div>
  </div>
  </Wrapper>
</nav>
    );
}

export default NavBar;