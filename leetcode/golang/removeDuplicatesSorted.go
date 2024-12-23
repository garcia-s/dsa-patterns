package main

func removeDuplicates(nums []int) int {
	id := 0
	//So this works since id will be the index of the first number of the same type
	//Then we move forward with loop index (i) and check if they are different
	//If they are then we can insert that number into the next index and repeat
	for i := 1; i < len(nums); i++ {
		if nums[id] != nums[i] {
			id++
			nums[id] = nums[i]
		}
	}
	return id + 1
}
