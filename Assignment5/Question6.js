function find_Duplicates(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            result.push(index + 1);
        }
        nums[index] = -nums[index];
    }
    return result;
}
find_Duplicates([4, 3, 2, 7, 8, 2, 3, 1]);
