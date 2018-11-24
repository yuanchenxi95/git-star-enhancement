import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Navbar, Nav, NavbarBrand, NavItem, NavbarToggler,
  NavLink, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import { FaLanguage } from 'react-icons/fa'

import { ROOT, MY_STAR_PAGE } from '../constants/route'
import { keys } from 'src/i18n/resources'

@inject(stores => {
  const { i18nStore } = stores
  const { setLocaleToEnglish, setLocaleToChinese } = i18nStore
  return {
    setLocaleToEnglish,
    setLocaleToChinese,
  }
})
@translate()
@observer
class NavBar extends Component {
  constructor(props) {
    super(props)

    this.toggleLanguageDropDown = this.toggleLanguageDropDown.bind(this)
    this.toggleListDropDown = this.toggleListDropDown.bind(this)
    this.renderNavBarList = this.renderNavBarList.bind(this)
    this.state = {
      languageDropdownOpen: false,
      listDropdownOpen: false,
    }
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
    setLocaleToEnglish: PropTypes.func.isRequired,
    setLocaleToChinese: PropTypes.func.isRequired,
    // logOut: PropTypes.func.isRequired,
  }

  toggleLanguageDropDown() {
    this.setState({
      languageDropdownOpen: !this.state.languageDropdownOpen,
    })
  }

  toggleListDropDown() {
    this.setState({
      listDropdownOpen: !this.state.listDropdownOpen,
    })
  }


  renderNavBarList() {
    const { t } = this.props
    return (
      <div>
        <NavbarToggler onClick={this.toggleListDropDown} />
        <Collapse isOpen={this.state.listDropdownOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to={MY_STAR_PAGE}>
                {t(keys.myStarsList)}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    )
  }

  render() {
    const { t, setLocaleToChinese, setLocaleToEnglish } = this.props

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to={ROOT}>
            {t(keys.appName)}
          </NavbarBrand>
          {this.renderNavBarList()}
          <Nav className="ml-auto" navbar>
            <Dropdown nav isOpen={this.state.languageDropdownOpen} toggle={this.toggleLanguageDropDown}>
              <DropdownToggle nav caret>
                <FaLanguage size={40}/>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>{t(keys.language)}</DropdownItem>
                <DropdownItem onClick={setLocaleToEnglish}>English</DropdownItem>
                <DropdownItem onClick={setLocaleToChinese}>中文</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Navbar>
      </div>
    )
  }

}

export default NavBar
