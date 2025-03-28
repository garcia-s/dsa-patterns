<?php

namespace Queue;


class Node
{
    public ?Node $next = null;
    public function __construct(public $value) {}
}

class Queue
{
    private $head;
    private $tail;
    private int $size = 0;


    public function size()
    {
        return $this->size;
    }

    public function enqueue(mixed $value)
    {
        $node = new Node($value);
        if ($this->size == 0) {
            $this->head = $this->tail = $node;
            $this->size++;
            return;
        }

        $this->tail->next = $node;
        $this->tail = $node;
        $this->size++;
    }


    public function poll()
    {
        if ($this->size == 0) return null;
        $val = $this->head->value;
        $this->head = $this->head->next;
        $this->size--;
        return $val;
    }

    public function peek()
    {
        return $this->head->value;
    }
}
