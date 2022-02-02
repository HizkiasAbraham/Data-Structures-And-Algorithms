##### Merge sorting
Merge sorting is one of the most popular [sorting algorithms](../Readme.md) that is based on the principle of [divide and conquer algorithm](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)
The MergeSort function repeatedly divides the array into two halves until we reach a stage where we try to perform MergeSort on a subarray of size 1 i.e. p == r.
After that, the merge function comes into play and combines the sorted arrays into larger arrays until the whole array is merged.

```js
function mergeSort(arr = [], start, end) {
  if (arr.length < 2) return arr
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(start, mid)
  const right = arr.slice(mid, end)

  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)
  return merge(sortedLeft, sortedRight)
}

function merge(left = [], right = []) {
  const sorted = []

  while (left.length && right.length) {
      sorted.push(right[0] > left[0] ? left.shift(): right.shift())
  }

  while(left.length) {
      sorted.push(left.shift())
  }

  while (right.length) {
      sorted.push(right.shift())
  }

  return sorted
}
```