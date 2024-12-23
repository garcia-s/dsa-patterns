package main

type node struct {
	closer byte
	next   *node
}

// Looks like this is not memory efficient, but hey, I got it working,
// I'll try something different in another language
// I was avoiding conditional branching like the plage, but this is probably not
// noticeable as most of the answers are 0ms anyways
func isValid(s string) bool {
	if len(s)%2 != 0 {
		return false
	}

	var head *node

	openers := map[byte]byte{
		'{': '}',
		'(': ')',
		'[': ']',
	}

	for i := 0; i < len(s); i++ {
		if a, ok := openers[s[i]]; ok {
			n := &node{
				closer: a,
				next:   head,
			}
			head = n
			continue
		}

		if head == nil || head.closer != s[i] {
			return false
		}

		head = head.next
	}
	return head == nil
}
