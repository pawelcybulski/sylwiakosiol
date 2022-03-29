/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine, RiInstagramFill, } from "react-icons/ri"
import Theme from "../components/theme"
import Icons from "../util/socialmedia.json"


const MenuItems = [
  {
    path: "/o-mnie",
    title: "O MNIE",
  },
  {
    path: "/o-terapii",
    title: "O TERAPII",
  },
  {
    path: "/blog",
    title: "BLOG",
  },
  {
    path: "/rejestracja",
    title: "REJESTRACJA",
  },
]

const ListLink = props => (
  <li>
    <Link 
      to={props.to} 
      activeClassName="active"
      >{props.children}</Link>
  </li>
)

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }))
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <ListLink key={index} to={menuItem.path}>
        {menuItem.title}
      </ListLink>
    ))
    const sIcons = Icons.socialIcons.map((icons, index) => {
      return (
        <div key={"social icons" + index}>
          {icons.icon === "instagram" ? (
            <Link to={icons.url} target="_blank">
              <RiInstagramFill />
            </Link>
          ) : (
            ""
          )}
        </div>
      )
    })
    return (
      <nav className="site-navigation" sx={navStyle.menu}>
        <button
          onClick={this.handleToggleClick}
          className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}
        >
          <div className="icon-menu-line">
            <RiMenu3Line />
          </div>
          <div className="icon-menu-close">
            <RiCloseLine />
          </div>
        </button>
        <ul>
          {listMenuItems}
          <div sx={navStyle.border}></div>
          <div sx={navStyle.theme}>
            <Theme />
          </div>
          <li  className="social-icons" sx={indexStyles.socialIcons}>
            {sIcons}
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation

const navStyle = {
  menu: {
    ul: {
      bg: "headerBg",
    },
  },
  theme: {
    display: ["block", "block", "block", "none"],
    p: " 25px 20px 20px",
  },
  border: {
    bg: "borderColor",
    borderTop: "1px solid transparent",
    display: ["block", "block", "block", "none"],
  },
}

const indexStyles = {
  socialIcons: {
    "a":{
      color: "socialIcons",
      ":hover":{
        color:"socialIconsHover",
      }
    }
  }
}
