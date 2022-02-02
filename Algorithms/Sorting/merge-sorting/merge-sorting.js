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
