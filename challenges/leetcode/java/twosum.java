package challenges.leetcode.java;

import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Weird, it cannot be a primitive int, that's interesting
        var res = new int[2];
        HashMap<Integer, Integer> hm = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            var c = target - nums[i];
            if (hm.containsKey(c)) {
                res[0] = i;
                res[1] = hm.get(c);

                return res;
            }
            hm.put(nums[i], i);
        }
        return res;
    }
}
