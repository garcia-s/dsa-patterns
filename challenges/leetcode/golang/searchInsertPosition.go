package main

import "log"

func searchInsert(nums []int, target int) int {
	hi := len(nums) - 1
	lo := 0

	for {
		diff := hi - lo
		if diff <= 1 {
			break
		}

		mid := diff / 2

		if nums[mid] > target {
		}
	}

	return 0
}

func main() {
	log.Print(searchInsert([]int{1, 3, 5, 6}, 5))
}
