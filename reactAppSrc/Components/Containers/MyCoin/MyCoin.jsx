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
import { MyCoinAbi, MyCoinWalletAbi } from '../../../../production_bindings/abiMappings'
import { MyCoinBytecode, MyCoinWalletBytecode } from '../../../../production_bindings/bytecodeMappings'

const check = val => val !== undefined && val !== null && val !== '' && val.length > 0

export class MyCoin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      web3: eth.network().connect(),
      myWalletObject: false,
      myCoinObject: false,
      myWalletBalance: 0,
      ...this.props
    }
    this.deployContracts = this.deployContracts.bind(this)
  }

  deployContracts (e) {
    const addr = this.props.myAddress

    if (check(addr)) {

      try {
        const contract = eth.contract(this.state.web3),
          myCoin = contract.instance(MyCoinAbi, addr),
          wallet = contract.instance(MyCoinWalletAbi, addr)

        contract.deploy(myCoin, MyCoinBytecode).then(deployedCoinObject => {
          contract.deploy(wallet, MyCoinWalletBytecode, [1000]).then(deployedWalletObject => {
            eth.balance(this.state.web3, addr).then(walletBalance => {

              this.setState({
                myCoinObject: deployedCoinObject,
                myWalletObject: deployedWalletObject,
                myWalletBalance: eth.toEthFromWei(walletBalance)
              })

            })
          })
        })

      } catch (ex) {
        console.log(ex)
      }

    }

    e.preventDefault()

  }

  componentDidMount () { }

  render () {
    return (
      <div className="mainContentWrapper">
        <main className="myCoin">
          <div className="top">
            <div className="text">JSON Contract: {JSON.stringify(MyCoinAbi)}</div>
          </div>

          <div className="content"> {
            (check(this.props.myAddress)) ?
              <div className="text" onClick={e => this.deployContracts(e)}>Deploy it from {this.props.myAddress}!</div>
              : <div className="text">Please select an address to deploy to!</div>
          } </div>

          <div className="more">
            <div className="text">MyCoin Wallet balance: {this.state.myWalletBalance} ETH</div>
          </div>

        </main>
        <CustomFooter/>
      </div>
    )
  }
}