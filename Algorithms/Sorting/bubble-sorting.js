function bubbleSort(data = []) {
  const size = data.length;
  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}

const data = [12, 5, -12, 57, 9, 8]
console.log("the data is ", data)
console.log("the sorted data is ", bubbleSort(data))
