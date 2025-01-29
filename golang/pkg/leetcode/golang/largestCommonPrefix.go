package main

func longestCommonPrefix(strs []string) string {
	//If it is a single word
	if len(strs) == 1 {
		return strs[0]
	}
	for i := 0; i < len(strs[0]); i++ {
		for j := 1; j < len(strs); j++ {
			//If word len is equal to the current letter index
			//Or is a different letter
			if len(strs[j]) <= i || strs[0][i] != strs[j][i] {
				return strs[0][:i]
			}
		}
	}
	//Breaks out of the loop so prefix is at least equal to the first word
	//If the word ends it cannot be another common prefix anyways
	return strs[0]
}
