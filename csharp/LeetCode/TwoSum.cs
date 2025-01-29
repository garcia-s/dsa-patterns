namespace TwoSum
{


    public class Solution
    {

        public int[] TwoSum(int[] nums, int target)
        {
            var hm = new Dictionary<int, int>();

            for (int i = 0; i < nums.Length; i++)
            {
                var compl = target - nums[i];
                if (hm.ContainsKey(compl))
                {
                    int val;
                    hm.TryGetValue(compl, out val);
                    return [i, val];
                }

                hm.TryAdd(nums[i], i);
            }
            return [];
        }
    }
}

