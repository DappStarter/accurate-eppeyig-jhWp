require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remain puppy idea cloth fog solve'; 
let testAccounts = [
"0x9afdf1a0ddf100d20e34dd17cbcabab6d4fab53b5cc1c04d4428ed91cdfde94c",
"0xba3ad52370f999941f5a2dd66f31b20ce8d95de1741ce09b4917e4d69e00a08b",
"0x730dd57278e4858cd552a150db7788e80b821a574032c91a242806c39c37a325",
"0x812834c4a7cabd6b74f27248fba321ba4fa2e9bac92b0607b8c6937f5ad4e5d2",
"0x709ddaee98b1e20ac77afea43dfca906292ec3f2a06b38872bf70d6d0754f455",
"0x88c5186475e1b4137456db4348efbb16d26d18e288caadff54d3e69ca3253d3f",
"0x6d466dc2743863d436df0ff3fb392a54671b63f9c17a3917e74156c7c20e78c9",
"0xa0046fbc8227188ade2e57292794ab3b8f3c6637f04fd3c622be9ee56457c431",
"0x625a35d8a9042e97f20b715a8b1508220173a70c925a688f1e031ad25f1a9b72",
"0x9177ce7e66a8308da4c71e4cd240b1f0ee493d8ee556696738656282e50f6d3e"
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

