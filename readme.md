
Steps
1. Access to project `src` path using command prompt (bash, cmd or etc)
2. Run 'node deploy.js'
3. Run 'node interact-contract.js'

>node deploy.js

```
node deploy.js
abi.json was generated
Get abi and bytecode
Successfully initialize Web3..
Contract address ==>  0x5B1D7ff7c94cD53f6ea623e86D578EB2a1266539
Contract Successfully deployed, yeah...
```


> node interact-contract.js

```
Successfully initialize Web3..
Get abi and bytecode
contractBalanceBefore 0
Successfully Invest
Investment transaction hash --> 0x6798e309e0b274872c9bcd69b058d17a5dbcbeb77d5adb4e7c4cf85170b2367c
contractBalanceAfter 500000000000000000

```

Then, you can check the result over testnet rinkeby explorer or ganache.

Over Rinkeby, you will see this
https://prnt.sc/1s8gf48