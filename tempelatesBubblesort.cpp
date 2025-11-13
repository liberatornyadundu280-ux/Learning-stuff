#include <iostream>
#include <vector>
#include <string>
#include <algorithm> // Needed for std::swap

using namespace std;

// Corrected print function
// It needs to be a template function to handle different types
template <typename t>
void print(const vector<t>& arr) // Use const reference to avoid unnecessary copy
{
    for (const auto& i : arr) // Use const reference for elements as well
        cout << i << " ";
    cout << endl; // Add a newline for clean output
}

// Corrected and renamed sort function.
// The original logic was closer to Selection Sort, not Bubble Sort.
// I've fixed the bounds and the swapping.
template <typename t>
void selectionSort(vector<t>& arr)
{
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) // Outer loop for the pass (up to n-2)
    {
        // Find the minimum element in the unsorted subarray arr[i..n-1]
        int min_idx = i;
        for (int j = i + 1; j < n; j++) // Inner loop starts from i+1
        {
            if (arr[j] < arr[min_idx])
            {
                min_idx = j;
            }
        }

        // Swap the found minimum element with the element at index i
        if (min_idx != i) {
            swap(arr[i], arr[min_idx]);
        }
    }
}

// If you actually wanted Bubble Sort:
/*
template <typename t>
void bubbleSort(vector<t>& arr)
{
    int n = arr.size();
    for (int i = 0; i < n - 1; i++)
    {
        bool swapped = false;
        // Last i elements are already in place
        for (int j = 0; j < n - 1 - i; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        // Optimization: If no two elements were swapped by inner loop, then break
        if (!swapped)
            break;
    }
}
*/

int main()
{
    const int SIZE = 5;
    vector<int> v(SIZE); // Use the constant SIZE
    
    cout << "Enter your array of " << SIZE << " integers: ";
    for (int i = 0; i < SIZE; i++)
        cin >> v[i];
    
    cout << "Your array: ";
    print(v); // The print function now correctly handles the vector of int

    // Use the corrected sort function
    selectionSort(v); 
    
    cout << "Sorted array: ";
    print(v); // Corrected function name and usage

    return 0;
}