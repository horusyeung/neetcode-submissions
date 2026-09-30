class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // hashmap to store the charcode combined key to an array of string
        const map = new Map<string, string[]>();

        // for loop to loop through the array of strings
        for (let i = 0; i < strs.length; i++) {
            // create an string array with 26 zero
            const counts = new Array(26).fill(0);

            const str = strs[i];
            for (let j = 0; j < str.length; j++) {
                counts[str.charCodeAt(j) - 97]++;
            }
            const combinedCounts = counts.toString();

            if (map.has(combinedCounts)) {
                map.get(combinedCounts)?.push(str);
            } else {
                map.set(combinedCounts, [str]);
            }
        }

        // typescript default return
        return [...map.values()];
    }
}
