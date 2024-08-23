const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex } = require("ethereum-cryptography/utils");
const { encode } = require('eip55');

const privateKey = secp256k1.utils.randomPrivateKey();
console.log('private key        :  ', toHex(privateKey));               // c8aee432ef2035adc6f71a7094c0677eedf74a04f4e17227fa1a4155ad511047

const publicKeyComp = secp256k1.getPublicKey(privateKey, true);         // 0262117d6727ddd50b8f1d60ce50ef9fa511c7b43b6b6e6f763b32b942e515a4d4
console.log('public key - comp  :', toHex(publicKeyComp));

const publicKeyUncomp = secp256k1.getPublicKey(privateKey, false);      // 0462117d6727ddd50b8f1d60ce50ef9fa511c7b43b6b6e6f763b32b942e515a4d47df6eb61d3dceb615176c80a16484e773885f3de31e0344ed3d74cce103646f4
console.log('public key - uncomp:', toHex(publicKeyUncomp));

const address = keccak256(publicKeyUncomp.slice(1)).slice(-20);
console.log('address            :', '0x' + toHex(address));    



const addressEip55 = encode('0x' + toHex(address));
console.log('=======================================');  
console.log('pub address (EIP-55)   :', addressEip55);  
console.log('private key        :  ', toHex(privateKey));              