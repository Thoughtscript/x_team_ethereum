# x_team_ethereum

A very simple `React`, `React Router`, and `React-Redux` ERC20 example using `webpack` to compile the app, `live-server` as a test server, and `Truffle + Ganache` for `Solidity`.

Smart contracts are built by subclassing `openzeppelin-solidity` standard `Solidity` contracts on `pragma ^0.4.11`.

# What's Here?

A very simple `React` client. Once connected to your `Ganache` testing instance, you can see a list of default accounts, balances, and deploy a simple ERC20-compliant Ethereum cryptocurrency.

Full configuration and `Truffle` support is provided in `/production_bindings` and `/truffle`, respectively.  

You will connect this to your `Truffle` instance, select an address to deploy to on the *Blockchain* view, then deploy two compiled contracts to that address on the *MyCoin* view!

# How Do I Run This?

```bash
    $ npm i
    $ npm run build
    $ npm run start
```

Or, you can use:
```bash
    $ npm run all
```

### Redux

A simple *encapsulated storage object* is supplied to simplify while partially concealing important client-side data (rather than exposing such data in `localstorage`).

Once an item is saved by `key` and `value` it will be available in `this.props.KEY_NAME` wherever the store provider has coverage in the app.

### Solidity

To compile `Solidity` smart contracts:
```bash
    $ cd truffle
    $ truffle compile
```

The resulting JSON ABI's are available in `/build` and are aleady imported for use client-side.

### Google Maps

To enable `Google Maps` please secure an API-Key following: https://developers.google.com/maps/documentation/javascript/get-api-key

The `Google Maps` React component is configurable at `/reactAppSrc/Helpers/Geo.js`.

The supplied key in `/public/index.html` was used for testing and development purposes and is no longer used.

# Licensing and Use

This is MIT Licensed.