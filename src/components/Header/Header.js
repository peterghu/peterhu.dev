import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai"
import headshot from "../../images/headshot_small.jpg"
import Image from "react-bootstrap/Image"
import Burger from "../Burger/Burger"
import MobileMenu from "../MobileMenu/MobileMenu"
import { Desktop, Mobile } from "../MediaQueries/MediaQueries"
import { useOnClickOutside } from "../../utils/Hooks"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  function openLink(url) {
    const otherWindow = window.open(url)
    otherWindow.opener = null
  }

  return (
    <header>
      <div className="container d-flex justify-content-between">
        <Link to="/">
          <div className="d-flex">
            <Image src={headshot} roundedCircle className="header-headshot" />
            <h1 className="header-left__text d-flex">
              <span className="header-left__text--orange ml-2">
                <span>Peter</span>
                <span className="ml-5">Hu</span>
              </span>
              <span className="header-left__text--black-enlarged">G</span>
            </h1>
          </div>
        </Link>
        {/* Side Bar - Desktop */}
        <Desktop>
          <div className="d-flex pt-2 mr-2">
            <div className="header-email ml-1">
              <a href="peterh782@gmail.com">
                <button
                  type="button"
                  className="btn btn-circle"
                  onClick={openLink.bind(this, "peterh782@gmail.com")}
                >
                  <AiOutlineMail />
                </button>
                <span className="ml-1">peterh782@gmail.com</span>
              </a>
            </div>
            <button
              type="button"
              className="btn btn-circle ml-2"
              onClick={openLink.bind(
                this,
                "https://www.linkedin.com/in/peter-hu-p-eng-57450071/"
              )}
            >
              <AiOutlineLinkedin />
            </button>
            <button
              type="button"
              className="btn btn-circle ml-2"
              onClick={openLink.bind(this, "https://github.com/peterghu")}
            >
              <AiOutlineGithub />
            </button>
          </div>
        </Desktop>
        <Mobile>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen}></Burger>
            <MobileMenu open={open} setOpen={setOpen}></MobileMenu>
          </div>
        </Mobile>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header