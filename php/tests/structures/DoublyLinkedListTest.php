<?php
require_once "structures/DoublyLinkedList.php";

use DoublyLinkedList\DoublyLinkedList;
use PHPUnit\Framework\TestCase;




class DoublyLinkedListTest extends TestCase
{

    public function testAppend()
    {
        $list = new DoublyLinkedList();
        $list->append(10);
        $list->append(20);
        $this->assertEquals($list->size(), 2);
        $this->assertEquals($list->peek(), 20);
    }


    public function testPrepend()
    {
        $list = new DoublyLinkedList();
        $list->prepend(10);
        $list->prepend(20);
        $this->assertEquals($list->size(), 2);
        $this->assertEquals($list->peekFirst(), 20);
    }

    public function testPoll()
    {
        $list = new DoublyLinkedList();
        $list->append(10);
        $list->append(20);
        $list->append(30);

        $this->assertEquals($list->size(), 3);
        $this->assertEquals($list->poll(), 30);

        $this->assertEquals($list->size(), 2);
        $this->assertEquals($list->poll(), 20);

        $this->assertEquals($list->size(), 1);
        $this->assertEquals($list->poll(), 10);
    }

    public function testPollFirst()
    {
        $list = new DoublyLinkedList();
        $list->prepend(10);
        $list->prepend(20);
        $list->prepend(30);

        $this->assertEquals($list->size(), 3);
        $this->assertEquals($list->pollFirst(), 30);

        $this->assertEquals($list->size(), 2);
        $this->assertEquals($list->pollFirst(), 20);

        $this->assertEquals($list->size(), 1);
        $this->assertEquals($list->pollFirst(), 10);

        $this->assertEquals($list->size(), 0);
    }
}
