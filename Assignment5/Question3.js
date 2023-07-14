function sorted_Squares(nums) {
    const result = [];
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result.unshift(nums[left] * nums[left]);
            left++;
        } else {
            result.unshift(nums[right] * nums[right]);
            right--;
        }
    }
    return result;
}
sorted_Squares([-4,-1,0,3,10]);
