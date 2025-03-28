<?php
require_once "structures/Queue.php";

use Queue\Queue;
use PHPUnit\Framework\TestCase;

class QueueTest extends TestCase
{
    public function testEnqueue()
    {
        $q = new Queue();
        $q->enqueue(10);

        $this->assertEquals($q->peek(), 10);
        $this->assertEquals($q->size(), 1);

        $this->assertEquals($q->poll(), 10);
        $this->assertEquals($q->size(), 0);
    }

    public function testPoll()
    {
        $stack = new Queue();
        $values = [10, 20, 30, 40];
        for ($i = 0; $i  < sizeof($values); $i++) {
            $stack->enqueue($values[$i]);
        }

        for ($i = 0; $i < sizeof($values); $i++) {
            $this->assertEquals($stack->poll(), $values[$i]);
            $this->assertEquals($stack->size(), sizeof($values) - $i - 1);
        }

        $this->assertEquals($stack->poll(), null);
        $this->assertEquals($stack->size(), 0);
    }
}
