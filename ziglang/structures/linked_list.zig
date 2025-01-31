//
//
// I really don't know enough zig to do this by myself,
// so special thanks to u/tandonhiten in the r/Zig subreddit
// Now I didn't completely stole their implementation,
// however it was a really helpful read.
// https://www.reddit.com/r/Zig/comments/1bbbyzn/roast_my_linked_list_implementation/
// This is a research repository and a learning resource but still, credit should be given.

const std = @import("std");

fn Node(comptime T: type) type {
    return struct {
        data: T,
        next: ?*Node(T),

        fn init(self: *Node(T), data: T, next: ?*Node(T)) *Node(T) {
            self.data = data;
            self.next = next;
            return self;
        }
    };
}

fn LinkedList(comptime T: type) type {
    return struct {
        head: ?*Node(T),
        tail: ?*Node(T),
        len: usize = 0,
        alloc: std.mem.Allocator,

        fn init(alloc: std.mem.Allocator) LinkedList(T) {
            return .{
                .alloc = alloc,
            };
        }

        fn deinit(self: *LinkedList(T)) void {
            if (self.head == null) return;
        }
    };
}
