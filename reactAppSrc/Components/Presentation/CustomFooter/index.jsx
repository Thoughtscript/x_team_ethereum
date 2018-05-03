'use strict'

/**
 *  CustomFooter.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'

import CustomLink from '../CustomLink'

export default () =>
  <footer>
    <ul>
      <li><CustomLink url={'https://x-team.com/blog/'} label={'X-Team Blog'}/></li>
      <li><CustomLink url={'https://www.ethereum.org/'} label={'Ethereum'}/></li>
      <li><CustomLink Link url={'https://openzeppelin.org/'} label={'Open Zepplin'}/></li>
      <li><CustomLink url={'http://truffleframework.com/docs/ganache/using'} label={'Truffle'}/></li>
      <li><CustomLink Link url={'https://solidity.readthedocs.io/en/v0.4.23/'} label={'Solidity'}/></li>
    </ul>
  </footer>