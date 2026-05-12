function findLargestElements(numbers)
{
    let largest = numbers[0];
    for (let i=0; i<numbers.length; i++)
    {
        if(numbers[i]>largest)
        {
            largest = numbers[i];
        }

    }
    return largest;

}

console.log(findLargestElements([3,2,5,11,15,1]));