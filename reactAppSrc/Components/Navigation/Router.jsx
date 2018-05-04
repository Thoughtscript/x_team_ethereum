'use strict'

/**
 *  Router.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CustomHeader from '../Presentation/CustomHeader'

import { BASE_PATH, HOME_PATH, MYCOIN_PATH, BLOCKCHAIN_PATH } from '../../Constants'
import { BlockchainReduxWrapper } from '../Containers/Blockchain'
import { MyCoinReduxWrapper } from '../Containers/MyCoin'
import Landing from '../Presentation/Landing'
import PageNotFound from '../Presentation/PageNotFound'

export default () =>
  <BrowserRouter>
    <div className="innerRouterWrapper">
      <CustomHeader/>
      <Switch>
        <Route exact path={BASE_PATH} component={Landing}/>
        <Route exact path={HOME_PATH} component={Landing}/>
        <Route exact path={BLOCKCHAIN_PATH} component={BlockchainReduxWrapper}/>
        <Route exact path={MYCOIN_PATH} component={MyCoinReduxWrapper}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  </BrowserRouter>