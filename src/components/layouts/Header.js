import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false
    };
  }

  render() {
    const { lang } = this.props;
    const { menu } = this.state;

    return (
      <div>
        <nav
          className='navbar is-warning'
          role='navigation'
          aria-label='main navigation'
        >
          <div className='navbar-brand'>
            <Link className='navbar-item' to='/'>
              <img
                src='static/img/logo.png'
                alt='logo'
                width='112'
                height='28'
              />
            </Link>

            <div
              role='button'
              className={
                menu ? 'navbar-burger burger is-active' : 'navbar-burger burger'
              }
              aria-label='menu'
              aria-expanded='false'
              onClick={() => this.setState({ menu: !menu })}
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </div>
          </div>

          <div className={menu ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className='navbar-start'>
              <Link to='/' className='navbar-item is-hidden-desktop'>
                {lang.homepage}
              </Link>

              <div className='buttons navbar-item is-hidden-touch'>
                <Link to='/' className='button is-primary'>
                  <strong>{lang.homepage}</strong>
                </Link>
              </div>
            </div>

            <div className='navbar-end'>
              <Link to='/faq' className='navbar-item is-hidden-desktop'>
                {lang.faq}
              </Link>
              <Link to='/about' className='navbar-item is-hidden-desktop'>
                {lang.about}
              </Link>

              <div className='buttons navbar-item is-hidden-touch'>
                <Link to='/faq' className='button is-success'>
                  <strong>{lang.faq}</strong>
                </Link>
                <Link to='/about' className='button is-info'>
                  <strong>{lang.about}</strong>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
