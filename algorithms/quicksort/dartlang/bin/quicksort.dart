void quicksort(List<int> arr, {int lo = 0, int hi = -1}) {
  if (hi < 0) hi = arr.length - 1;

  if (lo >= hi) return;

  final int p = partition(arr, lo, hi);
  quicksort(arr, lo: lo, hi: p - 1);
  quicksort(arr, lo: p + 1, hi: hi);
}

int partition(List<int> arr, int lo, int hi) {
  //Choosing the pivot
  final mid = (hi - lo).round();
  if ((arr[lo] > arr[hi]) ^ (arr[lo] > arr[mid])) {
    final tmp = arr[lo];
    arr[lo] = arr[hi];
    arr[hi] = tmp;
  }

  if ((arr[mid] > arr[hi]) ^ (arr[mid] > arr[lo])) {
    final tmp = arr[mid];
    arr[mid] = arr[hi];
    arr[hi] = tmp;
  }

  final int pivot = arr[hi];
  int lwall = lo - 1;
  for (var j = lo; j < hi; j++) {
    if (arr[j] > pivot) continue;
    lwall++;

    final tmp = arr[j];
    arr[j] = arr[lwall];
    arr[lwall] = tmp;
  }

  lwall++;
  final tmp = arr[hi];
  arr[hi] = arr[lwall];
  arr[lwall] = tmp;
  return lwall;
}

void main() {
  var data = [2, 6, 5, 3, 8, 7, 1, 0];
  quicksort(data);
  print(data);
}
