import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import { CardTitle, Card, Form, FormGroup, Label, Input, TabContent, Button,
  TabPane, Nav, NavItem, NavLink, ButtonGroup } from 'reactstrap'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { translate } from 'react-i18next'

// import './ChineseTranslationPage.css'
import { keys } from 'src/i18n/resources'

import { Query } from "react-apollo";
import gql from "graphql-tag";

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }}
  </Query>
);

@inject(stores => {
  let {  } = stores
  return {
  }
})
@translate()
@observer
class ChineseTranslationPage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
  }


  render() {
    const { } = this.props
    return (
      <div>
        <h1>My star page</h1>
        <ExchangeRates/>
      </div>
    )
  }
}

export default ChineseTranslationPage
