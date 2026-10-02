class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded: string = "";
        for (const str of strs) {
            const count: number = str.length;
            encoded = encoded + count + "#" + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0; // starting point
        while (i < str.length) {
            const hash = str.indexOf("#", i); // 1. 由邊度開始搵 #？
            const len = Number(str.slice(i, hash)); // 2. 長度係邊段？
            const start = hash + 1;
            result.push(str.slice(start, start + len)); //    切 len 個字元
            i = start + len; // 4. 個字完咗，下一個長度由呢度開始
        }
        return result;
    }
}
