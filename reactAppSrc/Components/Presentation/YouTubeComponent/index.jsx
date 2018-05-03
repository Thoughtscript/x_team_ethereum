'use strict'

/**
 *  Video Component.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'

export default ({className, url}) =>
  <div className={className}>
    <iframe width="100%" height="100%" src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>
  </div>