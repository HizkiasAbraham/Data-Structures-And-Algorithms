##### Selection sorting
Selection sorting is a sorting algorithm that selects the smallest element from unsorted list in each iteration and places that element at begning of the unsorted list.

###### Working of Slection sort
1) Set the first element of array to `minimum`
2) Compare `minimum` with the second element, if the second element is less than the `minimum`, assign the second element to `minimum`, do this until the last ellement
3) After each iteration, the minimum is placed in the front of the unsorted list.
4) For each iteration, the indexing starts from the unsorted element. step 1 - 3 are repeated unill all elements are placed at their correct position.
   
- Psudo code
  ```javascript
    selectionSort(array)
        repeat (arraySize - 1)
        set the first unsorted element as minimum
        for each of the unsorted elements
         if element < currentMinimum
            set element as currentMinimum
        swap the currentMinimum with the first unsorted element
    end selectionSort
          
  ```
- Javascript example 
    ```js
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
    ```
###### Selection sort complexity
1) Time complexities
   - Worest case O(n<sup>2</sup>)
   - Best case O(n)
   - Average case O(n<sup>2</sup>)
2) Space complexity - O(1)
