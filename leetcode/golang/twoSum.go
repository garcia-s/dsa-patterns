package main

func twoSum(nums []int, target int) []int {
	hm := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		compl := target - nums[i]
		if id, ok := hm[compl]; ok {
			return []int{i, id}
		}

		hm[nums[i]] = i
	}
	return []int{}
}
