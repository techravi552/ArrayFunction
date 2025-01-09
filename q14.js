
array = ["Play", "Exercise", "Study", "Work", "Read a book"]

for(i=0 ; i<array.length-1 ; i++){

     array[i]=array[i+1]

}
 array.length-= 1

// console.log(array)

l = array.length + 2

for(i=l-1 ;  i>=0 ; i--){
    array[i] = array[i-2]
}
array[1] = "second work"

array[0] = "first work"

console.log(array)