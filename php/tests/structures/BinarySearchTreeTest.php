<?php
require_once "structures/BinarySearchTree.php";

use BinarySearchTree\BinarySearchTree;
use PHPUnit\Framework\TestCase;

class BinarySearchTreeTest extends TestCase
{


    public function testInsertOnRoot()
    {
        $bst = new BinarySearchTree(fn($a, $b) =>  $a - $b);
        $bst->insert(10);
        $this->assertEquals($bst->size(), 1);
    }

    public function testInsertMultiple()
    {
        $bst = new BinarySearchTree(fn($a, $b) =>  $a - $b);
        $bst->insert(5);
        $bst->insert(3);

        $this->assertEquals($bst->size(), 2);
        $this->assertNotEquals($bst->find(3), null);
        $this->assertNotEquals($bst->find(5), null);
    }

    public function testPreOrderTraversal()
    {
        $bst = new BinarySearchTree(fn($a, $b) =>  $a - $b);
        $items = [3, 4, 2, 1, 5];
        for ($i = 0; $i < sizeof($items); $i++) {
            $bst->insert($items[$i]);
        }
        $i = 0;
        $results = [3, 2, 1, 4, 5];
        foreach ($bst->preOrderTraversal() as $val) {
            $this->assertEquals($val, $results[$i]);
            $i++;
        }

        $this->assertEquals($i, 5);
    }

    public function testInOrderTraversal()
    {
        $bst = new BinarySearchTree(fn($a, $b) =>  $a - $b);
        $items = [3, 4, 2, 1, 5];
        for ($i = 0; $i < sizeof($items); $i++) {
            $bst->insert($items[$i]);
        }
        $curr = 1;
        foreach ($bst->inOrderTraversal() as $val) {
            $this->assertEquals($val, $curr);
            $curr++;
        }
    }

    public function testPostOrderTraversal()
    {
        $bst = new BinarySearchTree(fn($a, $b) =>  $a - $b);
        $items = [3, 4, 2, 1, 5];
        for ($i = 0; $i < sizeof($items); $i++) {
            $bst->insert($items[$i]);
        }
        $i = 0;
        $results = [1, 2, 5, 4, 3];
        foreach ($bst->postOrderTraversal() as $val) {
            $this->assertEquals($val, $results[$i]);
            $i++;
        }

        $this->assertEquals($i, 5);
    }
}
