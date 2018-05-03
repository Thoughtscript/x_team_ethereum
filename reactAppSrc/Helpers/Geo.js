'use strict'

/**
 *  Geo JSON and Google Map helpers.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

export const initGMap = el => {
    const m = document.getElementsByClassName(el)[0]
    return new google.maps.Map(m, {
      zoom: 5,
      center: new google.maps.LatLng(-37.3366934,136.9040523),
      mapTypeId: 'terrain'
    })
}