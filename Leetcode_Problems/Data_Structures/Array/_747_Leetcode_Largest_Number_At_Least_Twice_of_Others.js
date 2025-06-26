function dominantIndex(nums: number[]): number {
  if (nums.length === 0) return -1;

  let max1 = 0; // chỉ số của số lớn nhất
  let max2 = -1; // chỉ số của số lớn thứ hai

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[max1]) {
      max2 = max1;
      max1 = i;
    } else if (max2 === -1 || nums[i] > nums[max2]) {
      max2 = i;
    }
  }

  if (max2 === -1 || nums[max1] >= 2 * nums[max2]) {
    return max1;
  }

  return -1;
}
