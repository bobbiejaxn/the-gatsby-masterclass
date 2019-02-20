import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import gatsbyLogo from '../images/gatsby-icon.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* Title / Logo */}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={gatsbyLogo}
          alt="Gastby Garb Logo"
          style={{
            borderRadius: '50%',
            border: '3px solid orange',
            margin: '0 5px',
            width: `3rem`,
          }}
        />
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </span>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
