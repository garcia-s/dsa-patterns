<?php

namespace BinarySearchTree;

use function PHPUnit\Framework\isCallable;
use function PHPUnit\Framework\isNan;

class Node
{
    public ?Node $left = null;
    public ?Node $right = null;

    public function __construct(public $value) {}
}

/**
 *A binary search tree implementation 
 *this is not a self balancing binary tree 
 */
class BinarySearchTree
{


    private ?Node $root = null;
    private int $size = 0;
    private $compare;

    public function __construct($compare)
    {
        assert(is_callable($compare));
        $this->compare = $compare;
    }


    public function size()
    {
        return $this->size;
    }

    /**
     * This insert is iterative, not recursive
     * and this is not a self balancing BST
     * @property $val mixed;
     */
    public function insert($val)
    {
        $node = new Node($val);

        if ($this->root == null) {
            $this->root = $node;
            $this->size++;
            return;
        }

        $curr = $this->root;

        while (true) {
            //This syntax is so weird but hey, it works
            $res = ($this->compare)($curr->value, $val);
            assert(is_numeric($res));
            $node = new Node($val);

            $this->size++;
            if ($res >= 0) {
                if ($curr->left != null) {
                    $curr = $curr->left;
                    continue;
                }

                $curr->left = $node;
                return;
            }

            if ($curr->right != null) {
                $curr = $curr->right;
                continue;
            }

            $curr->right = $node;
            return;
        }
    }


    public function find($val)
    {
        if ($this->root == null) return null;
        $curr = $this->root;
        while (true) {
            $res = ($this->compare)($curr->value, $val);
            assert(is_numeric($res));
            if ($res == 0) return $curr->value;
            $curr = $res > 0 ? $curr->left : $curr->right;
            if ($curr == null) return null;
        }
    }

    public function inOrderTraversal(): iterable
    {
        return $this->inOrderGenerator($this->root);
    }


    public function preOrderTraversal(): iterable
    {
        return $this->preOrderGenerator($this->root);
    }

    public function postOrderTraversal()
    {
        return $this->postOrderGenerator($this->root);
    }


    private function preOrderGenerator($node): iterable
    {
        if ($node == null) return;
        yield $node->value;
        yield from $this->preOrderGenerator($node->left);
        yield from $this->preOrderGenerator($node->right);
    }

    private function inOrderGenerator($node): iterable
    {
        if ($node == null) return;
        yield from $this->inOrderGenerator($node->left);
        yield $node->value;
        yield from $this->inOrderGenerator($node->right);
    }


    private function postOrderGenerator($node): iterable
    {
        if ($node == null) return;
        yield from $this->postOrderGenerator($node->left);
        yield from $this->postOrderGenerator($node->right);
        yield $node->value;
    }
}
