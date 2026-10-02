class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        // create the left and right side result array
        const left = new Array(n).fill(1);
        const right = new Array(n).fill(1);

        // left array loop, from left to right, multiply to the end
        // skip the first
        for (let i = 1; i < n; i++) {
            left[i] = left[i - 1] * nums[i - 1];
        }
        // skip the last
        for (let i = n - 2; i >= 0; i--) {
            right[i] = right[i + 1] * nums[i + 1];
        }

        return left.map((l, i) => l * right[i]);
    }
}
