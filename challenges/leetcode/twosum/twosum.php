<?php

class Solution
{

    function twoSum($nums, $target)
    {
        $hm = [];
        for ($i = 0; $i < count($nums); $i++) {
            $c = $target - $nums[$i];

            if (array_key_exists($c, $hm)) {
                return [$hm[$c], $i];
            }
            $hm[$nums[$i]] = $i;
        }
        return [];
    }
}
