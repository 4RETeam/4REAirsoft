import Link from 'next/link';
import NavButton from './NavButton';
import Layout from "./Layout";




const Navbar = ({onToggleReg: onToggleReg, onToggleLog: onToggleLog, navButtons}) => (

  <div className='container'>
  <div className='row no-gutters'>
    <div className='col-sm-1  	d-none d-lg-block '>
      <a className="navbar-airsoft-brand " href="/">
        <img src="/airsofta_logo_new.png" className='mr-5 logo' alt="my image" />
      </a>

    </div>
    <div className='col-6 offset-2 py-5'>
      <form className="form search-bar py-2">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"></input>
      </form>

      <nav className="navbar navbar-expand  bg-none px-0">
        <div className="collapse navbar-collapse">

          <ul className="navbar-nav mt-3">
            {
              navButtons.map(
                (button: any) => (
                  <NavButton
                    key={button.path}
                    path={button.path}
                    label={button.label}
                    icon={button.icon}
                  />
                )
              )
            }
          </ul>


        </div>
      </nav>
    </div>
    <div className='col-sm-3 pt-1'>
      <div className="mt-4 pt-4">

        <span className='pt-2 mx-3'>
          <button onClick={onToggleLog}>Login</button>/<button onClick={onToggleReg}>Register</button>
        </span>

        <Link href='/cart'>
          <span className='bag'>
            <span className='circle text-center'>
              <span className='numberOfItems'>
                0
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="7" fill="#B33131" />
              </svg>
            </span>
            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.00374031 22.244L1.76003 5.59716C1.79688 5.24866 2.09201 4.98405 2.44408 4.98405H5.74511V4.23494C5.74511 1.89988 7.6539 0 9.99992 0C12.3461 0 14.2549 1.89988 14.2549 4.23494V4.98405H17.5559C17.908 4.98405 18.2031 5.24866 18.24 5.59716L19.9963 22.244C20.0165 22.4369 19.9536 22.6294 19.8233 22.7736C19.6929 22.9177 19.507 23 19.3122 23H0.687958C0.492971 23 0.307152 22.9177 0.176867 22.7736C0.0462284 22.6294 -0.0165348 22.4369 0.00374031 22.244ZM12.8794 4.23494C12.8794 2.65478 11.5877 1.36906 9.99992 1.36906C8.41234 1.36906 7.12059 2.65478 7.12059 4.23494V4.98405H12.8794V4.23494ZM18.5485 21.6309L16.9366 6.35311H14.2549V7.86168C14.2549 8.23965 13.9469 8.54621 13.5672 8.54621C13.1874 8.54621 12.8794 8.23965 12.8794 7.86168V6.35311H7.12059V7.86168C7.12059 8.23965 6.8126 8.54621 6.43285 8.54621C6.0531 8.54621 5.74511 8.23965 5.74511 7.86168V6.35311H3.06342L1.45151 21.6309H18.5485Z" fill="#F6F6F6" />
            </svg>
            <span className='ml-3'>
              0.00$
            </span>
          </span>
        </Link>
      </div>
      <Link href=''>
        <div className="BookGame mt-3">
          <span className="Label">BOOK A GAME</span>
        </div>
      </Link>
    </div>
    </div>
  </div>
);

export default Navbar;
