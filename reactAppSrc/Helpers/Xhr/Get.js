'use strict'

/**
 *  GET Xhr Helpers.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import { restListener, errMsg } from './Shared'

export const asyncGet = (url, token) => {
  return new Promise((res, rej) => {
    const what = 'asyncGet'
    try {
      let r = restListener(res, rej, what, 'success', 'fail')

      r.open('GET', url, true)
      if (token !== null) r.setRequestHeader('Authorization', 'bearer ' + token)
      r.setRequestHeader('content-type', 'application/json')
      r.withCredentials = false

      r.send()
    } catch (ex) {
      console.log(errMsg(what, ex))
    }
  })
}