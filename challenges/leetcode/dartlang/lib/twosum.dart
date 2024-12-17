class Solution {
  List<int> twoSum(List<int> nums, int target) {
    Map<int, int> hm = {};
    for (var i = 0; i < nums.length; i++) {
      var c = target - nums[i];
      if (hm.containsKey(c)) {
        return [hm[c]!, i];
      }
      hm[nums[i]] = i;
    }
    return [];
  }
}
