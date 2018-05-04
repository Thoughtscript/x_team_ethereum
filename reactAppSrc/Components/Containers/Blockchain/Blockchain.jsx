'use strict'

/**
 *  Blockchain with Redux.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import CustomFooter from '../../Presentation/CustomFooter'
import './Blockchain.scss'
import * as eth from '../../../../production_bindings/ethereumFacade'

const check = val => val !== undefined && val !== null && val !== '' && val.length > 0

export class Blockchain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      web3: eth.network().connect(),
      blockNumber: 0,
      accounts: [],
      ...this.props
    }
    this.selectAddress = this.selectAddress.bind(this)
  }

  selectAddress(e) {
    this.props.save("myAddress", e.target.textContent)
  }

  componentDidMount () {
    let promises = []

    try {
      promises.push(new Promise((resolve, reject) => {
        eth.blockchain(this.state.web3).currentBlockNumber().then(blockNumber => {
          resolve(blockNumber)
        })
      }))
      eth.accounts(this.state.web3).then(accounts => {
        for (let i = 0; i < accounts.length; i++) {
          promises.push(new Promise((resolve, reject) => {
            let innerTemp = []
            innerTemp[0] = accounts[i]
            eth.balance(this.state.web3, accounts[i]).then(balance => {
              innerTemp[1] = balance
              resolve(innerTemp)
            })
          }))
        }
        Promise.all(promises).then(allDone => {
          let block = allDone.shift()
          this.setState({
            blockNumber: block || 0,
            accounts: allDone
          })
        })
      })
    } catch (ex) {
      console.log(ex)
    }

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
                  <th onClick={e => this.selectAddress(e)}>{account[0]}</th>
                  <th>{account[1]}</th>
                </tr>
              )
            }
            </tbody>
          </table>
          <div className="content">
            <div className="text">Block Number: {this.state.blockNumber}</div>
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