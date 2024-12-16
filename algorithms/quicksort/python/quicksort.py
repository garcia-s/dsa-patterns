data = [2, 6, 5, 3, 8, 7, 1, 0]
# data = [0, 6, 5, 3, 8, 7, 1, 2]


def quicksort(arr, lo=0, hi=None):
    # Cannot sort empty o single

    if (len(arr) < 2):
        return arr

    if hi is None:
        hi = len(arr) - 1

    if lo < hi:
        p = partition(arr, lo, hi)
        quicksort(arr, lo, p-1)
        quicksort(arr, p+1, hi)


def partition(arr, lo, hi):
    # Select the mid point
    mid = round((lo - hi) / 2)
    global pivot

    # Chooses a pivot (median of three)
    if (arr[lo] > arr[hi]) ^ (arr[lo] > arr[mid]):
        (arr[lo], arr[hi]) = (arr[hi], arr[lo])

    elif (arr[mid] > arr[lo]) ^ (arr[mid] > arr[hi]):
        (arr[hi], arr[mid]) = (arr[mid], arr[hi])

    pivot = arr[hi]
    lwall = lo - 1

    for j in range(lo, hi):
        if arr[j] > pivot:
            continue

        lwall = lwall + 1
        (arr[lwall], arr[j]) = (arr[j], arr[lwall])

    # At the end we swap the pivot
    (arr[lwall+1], arr[hi]) = (arr[hi], arr[lwall+1])
    return lwall+1


quicksort(data)
