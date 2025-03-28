<?php

namespace Stack;

class Node
{
    public $next;
    function __construct(public $value) {}
}

//We don't do finds, if you need to find stuff just use an array,
//this is not a makeshift array
//
class Stack
{
    private int $size = 0;
    private ?Node $head = null;

    public function size()
    {
        return $this->size;
    }

    public function push(mixed $value)
    {
        $node = new Node($value);
        $node->next = $this->head;
        $this->head = $node;
        $this->size++;
    }

    public function pop()
    {
        if ($this->size == 0)  return null;
        $curr = $this->head->value;
        $this->head = $this->head->next;
        $this->size--;
        return $curr;
    }

    public function peek()
    {
        return $this->head->value;
    }
}
