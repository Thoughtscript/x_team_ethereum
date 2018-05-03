'use strict'

/**
 *  MyCoin with Redux.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import CustomFooter from '../../Presentation/CustomFooter'
import './MyCoin.scss'
import * as eth from '../../../../production_bindings/ethereumFacade'

const check = val => val !== undefined && val !== null && val !== '' && val.length > 0

export class MyCoin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      web3: eth.network().connect(),
      accounts: [],
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

  }

  componentDidMount () {
    let temp, promises = []

    eth.blockchain(this.state.web3).currentBlockNumber().then(blockNumber => {
      this.currentBlockNumber = blockNumber
      eth.accounts(this.state.web3).then(accounts => {
        temp = []

        for (let i = 0; i < accounts.length; i++) {
          let innerPromise = new Promise((resolve, reject) => {
            let innerTemp = []
            innerTemp[0] = accounts[i]

            eth.balance(this.state.web3, accounts[i]).then(balance => {
              innerTemp[1] = balance
              resolve(temp.push(innerTemp))
            })

            promises.push(innerPromise)
          })

        }
      })
    })

    Promise.all(promises).then(allDone => {
      this.setState({
        accounts: allDone
      })
    })

  }

  render () {
    return (
      <div className="mainContentWrapper">
        <main className="addressTable">
          <table>
            <thead>
            <tr>
              <th>Address</th>
              <th>Balance</th>
            </tr>
            </thead>
            <tbody>
            {
              check(this.state.accounts) && (this.state.accounts).map(account =>
                <tr>
                  <th>{account[0]}</th>
                  <th>{account[1]}</th>
                </tr>
              )
            }
            </tbody>
          </table>
          <div className="content">
            {
              check(this.currentBlockNumber) ? <div className="text">{this.currentBlockNumber}</div> :
                <div className="text">Current Block Pending...</div>
            }
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