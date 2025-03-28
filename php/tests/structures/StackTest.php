<?php
require_once "structures/Stack.php";

use Stack\Stack;
use PHPUnit\Framework\TestCase;


class StackTest extends TestCase
{
    public function testPush()
    {
        $stack = new Stack();

        $stack->push(10);
        $stack->push(20);
        $stack->push(30);


        $this->assertEquals($stack->size(), 3);
        $this->assertEquals($stack->peek(), 30);
    }

    public function testPop()
    {
        $stack = new Stack();
        $values = [10, 20, 30, 40];
        for ($i = 0; $i  < sizeof($values); $i++) {
            $stack->push($values[$i]);
        }

        for ($i = sizeof($values) - 1; $i >= 0; $i--) {
            $this->assertEquals($stack->pop(), $values[$i]);
            $this->assertEquals($stack->size(), $i);
        }

        $this->assertEquals($stack->pop(), null);
        $this->assertEquals($stack->size(), 0);
    }
}
