import CryptoJS from 'crypto-js';

interface IDecryptResult {
    success: boolean;
    data: string;
}

export class AESHelper {
    private static readonly suffix: string = '_VALID';

    public static encrypt(plainText: string, secretKey: string): string {
        const encrypted = CryptoJS.AES.encrypt(plainText + this.suffix, secretKey);
        return encrypted.toString();
    }

    public static decrypt(encryptedText: string, secretKey: string): IDecryptResult {
        const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);

        if (decrypted.endsWith(this.suffix)) {
            return {
                success: true,
                data: decrypted.substring(0, decrypted.length - this.suffix.length)
            };
        } else {
            return {
                success: false,
                data: ''
            };
        }
    }
}

