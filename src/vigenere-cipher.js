const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message.charCodeAt(i);
      if (messageChar < 65 || messageChar > 90) {
        encryptedMessage += message.charAt(i);
        continue;
      }
      const keyChar = key.charCodeAt(keyIndex % key.length) - 65;
      const encryptedChar = String.fromCharCode(((messageChar - 65 + keyChar) % 26) + 65);
      encryptedMessage += encryptedChar;
      keyIndex++;
    }

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let message = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage.charCodeAt(i);
      if (encryptedChar < 65 || encryptedChar > 90) {
        message += encryptedMessage.charAt(i);
        continue;
      }
      const keyChar = key.charCodeAt(keyIndex % key.length) - 65;
      const decryptedChar = String.fromCharCode(((encryptedChar - 65 - keyChar + 26) % 26) + 65);
      message += decryptedChar;
      keyIndex++;
    }

    return this.isDirect ? message : message.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
