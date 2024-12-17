package main

func romanToInt(s string) int {
	m := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	prev := 0
	res := 0
	for i := len(s) - 1; i >= 0; i-- {
		v := m[s[i]]
		if prev > v {
			res = res - v
			continue
		}
		res = res + v
		prev = v
	}
	return res
}
