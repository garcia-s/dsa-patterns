package main

func removeElement(nums []int, val int) int {
	count := 0
	l := len(nums)

	for i := 0; i < l; i++ {
		if nums[i] != val {
			nums[count] = nums[i]
			count++
		}
	}
	return count
}
