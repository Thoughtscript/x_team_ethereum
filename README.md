# x_team_ethereum

A very simple `React`, `React Router`, and `React-Redux` ERC20 example using `webpack` to compile the app, `live-server` as a test server, and `Truffle + Ganache` for `Solidity`.

Smart contracts are built by subclassing `openzeppelin-solidity` standard `Solidity` contracts on `pragma ^0.4.11`.

# What's Here?

A very simple `React` client. Once connected to your `Ganache` testing instance, you can see a list of default accounts, balances, and deploy a simple ERC20-compliant Ethereum cryptocurrency.

Full configuration and `Truffle` support is provided in `/production_bindings` and `/truffle`, respectively.  

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

To compile `Solidity` smart contracts:
```bash
    $ cd truffle
    $ truffle compile
```

The resulting JSON ABI's are available in `/build` and are aleady imported for use client-side.

To enable `Google Maps` please secure an API-Key following: https://developers.google.com/maps/documentation/javascript/get-api-key

The supplied key in `/public/index.html` was used for testing and development purposes and is no longer used.

# Licensing and Use

This is MIT Licensed.