function selectionSort(data = []) {
  for (let i = 0; i < data.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        minIndex = j;
      }
    }
    let dataAtCurrentIndex = data[i];
    data[i] = data[minIndex];
    data[minIndex] = dataAtCurrentIndex;
  }
  return data;
}
