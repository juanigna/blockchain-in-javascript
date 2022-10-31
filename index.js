const Blockchain = require('./src/blockchain');
const Block = require('./src/block');

const ejecutarCadena = () => {
    let blockchain = new Blockchain();
    blockchain.addToBlockchain('Bloque 1');
    blockchain.addToBlockchain('Bloque 2');
    blockchain.addToBlockchain('Bloque 3');
    blockchain.addToBlockchain('Bloque 4 :)');

    blockchain.showBlockChain();
};

ejecutarCadena();
