## Sorting algoritms
A sorting algorithm is used to put elements of an array/list in a specific order.

##### Bubble sort
Bubble sort is a sorting algorithm that compares (iteratevely) two adjacent elements and swaps them until they are not in the intended order
###### Working of Bubble Sort
Suppose we are trying to sort elements in an accending order
1) First Iteration (Compare and sawap)
  - Starting from the first index, compare the first and the second elements.
  - If the first element is greater than the second element, they are swapped.
  - Now compare the second and third element. The process goes on until the last element.
2) Remaining iterations 
  - The same process goes on the remaining iterations.
  - After each iteration, the largest item is among the unsorted elements is placed at the end.
  
- Psudo code 
  ```bash
    bubbleSort(array)
        for i <- firstItem to itemBeforeLastItem
            if leftElement > rightElement
                swap leftElement and rightElement
    end bubbleSort
  ```
- Javascript example
  ```javascript
     function bubbleSort(array = []) {
        const size = array.length;
        for (let i = 0; i < size - 1; i++) {
            for (let j = 0; j < size - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
          }
        }
        return array;
    }
  ```
###### Complexity of bubble sort
1) Time complexities
   - Worest case O(n<sup>2</sup>) - when we want to sort in an accending order while the array is in decending order
   - Best case O(n) - when the array is already in sorted order
   - Average case O(n<sup>2</sup>) - when the array elements are in jumbled order i.e neither ascending nor decending
2) Space complexity
   -  O(1) because only one extra variable is used for swapping