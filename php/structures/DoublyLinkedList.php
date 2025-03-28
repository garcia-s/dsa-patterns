<?php

namespace DoublyLinkedList;


class Node
{
    public $value;
    public ?Node $next = null;
    public ?Node $prev = null;

    public function __construct($value)
    {
        $this->value = $value;
    }
}

class DoublyLinkedList
{

    private ?Node $head = null;
    private ?Node $tail = null;
    private int $size = 0;

    public function size()
    {
        return $this->size;
    }

    public function append($value): void
    {
        $node = new Node($value);

        if ($this->head == null) {
            $this->head = $node;
            $this->tail = $node;
            $this->size++;
            return;
        }

        $node->prev = $this->tail;
        $this->tail->next = $node;
        $this->tail = $node;
        $this->size++;
    }


    public function prepend($value)
    {

        $node = new Node($value);
        if ($this->head == null) {
            $this->head = $node;
            $this->tail = $node;
            $this->size++;
            return;
        }

        $node->next = $this->head;
        $this->head->prev = $node;
        $this->head = $node;
        $this->size++;
    }

    public function poll()
    {
        if ($this->size === 0) return;
        $val = $this->tail->value;


        if ($this->size > 1) {
            $this->tail = $this->tail->prev;
            $this->tail->next = null;
        } else {
            $this->tail = null;
            $this->head = null;
        }

        $this->size--;
        return $val;
    }

    public function pollFirst()
    {

        if ($this->size === 0) return;
        $val = $this->head->value;

        if ($this->size > 1) {
            $this->head = $this->head->next;
            $this->head->prev = null;
        } else {
            $this->tail = null;
            $this->head = null;
        }

        $this->size--;
        return $val;
    }

    public function peek()
    {
        if (!$this->tail) return null;
        return $this->tail->value;
    }

    public function peekFirst()
    {
        if (!$this->head) return null;
        return $this->head->value;
    }
}
