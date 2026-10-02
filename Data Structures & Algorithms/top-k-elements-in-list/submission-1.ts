class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = new Map<number, number>();
        for (const num of nums) count.set(num, (count.get(num) ?? 0) + 1);

        // Create n+1 buckets: buckets[frequency] = numbers that appear that many times
        const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of count) buckets[freq].push(num);

        // Start from the bucket with the highest frequency and take enough k numbers to stop
        const result: number[] = [];
        for (let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--) {
            for (const num of buckets[freq]) {
                result.push(num);
                if (result.length === k) break;
            }
        }
        return result;
    }
}
