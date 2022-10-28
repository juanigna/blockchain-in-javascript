const Block = require('./block');
const SHA256 = require('crypto-js/sha256');

class Blockchain {
    constructor(firstBlock) {
        this.bloques = [this.addFirstBlock(firstBlock)];
    }

    addFirstBlock(firstBlock) {
        return new Block(0, firstBlock);
    }

    lastBlock() {
        return this.bloques[this.bloques.length - 1];
    }

    addToBlockchain(data) {
        let prevBlock = this.lastBlock();
        let currentBlock = new Block(prevBlock.index + 1, data, prevBlock.hash);
        if (currentBlock.hash !== prevBlock.hash) {
            this.bloques.push(currentBlock);
        }
    }

    showBlockChain() {
        console.log('Welcome to my first BlockChain in crypto');
        this.bloques.forEach((bloque) => {
            const bloqueCadena = JSON.stringify(bloque, null, 2);
            console.log(bloqueCadena);
            console.log(
                '---------------------------------------------------------------------------------------'
            );
        });
    }
}

module.exports = Blockchain;
