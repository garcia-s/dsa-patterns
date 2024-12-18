package main

// Well, I should have done it this way. I think this is the easiest solution
// probably not the fastest but this one is pretty easy
func strStr(haystack string, needle string) int {

	hl := len(haystack)
	nl := len(needle)

	if nl > hl {
		return -1
	}

	for i := 0; i < hl-nl+1; i++ {
		if haystack[i:i+nl] == needle {
			return i
		}
	}

	return -1
}
