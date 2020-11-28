import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'This is the default admin title',
}: Props) => (
    <div className='adminThing'>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <header>
        <nav>
          <ul className='text-black d-flex justify-content-around pt-5'>
            <li className="nav-item mr-3">
              <Link href='/admin/dashboard'>
                <div className="NavButton">
                  <div className="Icon fas fa-fw" ></div>
                  <span className="Label">Dashboard</span>
                </div>
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link href='/admin/products'>
                <div className="NavButton">
                  <div className="Icon fas fa-fw" ></div>
                  <span className="Label">Products</span>
                </div>
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link href='/admin/categories'>
                <div className="NavButton">
                  <div className="Icon fas fa-fw" ></div>
                  <span className="Label">Categories</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );

export default Layout;
