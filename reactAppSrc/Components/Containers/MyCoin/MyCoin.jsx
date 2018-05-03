'use strict'

/**
 *  MyCoin with Redux.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import CustomFooter from '../../Presentation/CustomFooter'
import './MyCoin.scss'

const check = val => val !== undefined && val !== null && val !== ''

export class MyCoin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      address: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
      balance: 0,
      transactions: [],
      ...this.props
    }
    this.handleAddress = this.handleAddress.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm (e) {
    if (check(this.state.address)) {

    }
  }

  handleAddress (e) {
    this.setState({address: e.target.value})
  }

  componentDidMount () { }

  render () {
    return (
      <div className="mainContentWrapper">
        <main className="addressTable">
          <table>
            <thead>
            <tr>
              <th>Address</th>
              <th>Balance</th>
              <th>Transaction</th>
            </tr>
            </thead>
            <tbody>
            {
              check(this.state.transactions) && (this.state.transactions).map(txhash =>
                <tr>
                  <th>{this.state.address}</th>
                  <th>{this.state.balance}</th>
                  <th>dgdgf</th>
                </tr>
              )
            }
            </tbody>
          </table>
          <div className="content">

          </div>
          <div className="more">
            <div className="text">I am some super rad filler text!</div>
          </div>
        </main>
        <CustomFooter/>
      </div>
    )
  }
}