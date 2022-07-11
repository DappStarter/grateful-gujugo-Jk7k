require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remain upgrade heavy private swift ghost'; 
let testAccounts = [
"0xc63e7bb9623f5ceb483c947bf240aaffd5654d09303189ebaff896874a5dba97",
"0x653ae1dd36602636e0c4753bc5062dabaa29becfcd0d9b66b1f20dc9264f8256",
"0x534af61cb99a8533eee766dab448fe2ff794f0324e9ac580ab1215f082c3ab0d",
"0xfb437f10557211034285215e00c3086da4f28bce9b3e54d16975b84a388fbf56",
"0xf73c96a37d3a8dbcb0a7978d188ed514e922ebc190a9ec3f89db0893e9f6163a",
"0xce7655369c85c68638c3e5abf3464f613d041adf3750f06864d7ab28ea540583",
"0xd3154156c1dd7bf590f4baad46fae673d85cd22b560ead0405d7e9ccde746cbf",
"0x6fcbf05385255bc6f101699ad386ff3f73409046679465f966c9878683f3069a",
"0xcf9f4949d572eafd8cc67bc520fac549db0d87ebeb44f4f87ce0e4dcab777c43",
"0xa135581f24817d566ad4e902a878fc9f896573f5159025a7d2ff8055fa3014cf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

