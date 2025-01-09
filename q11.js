
temperatures = [22,38,41,49,52,32,21]

for(i=0 ; i<temperatures.length ; i++){
    if(i==3){
        temperatures[i]=temperatures[i]+2
    }
}
console.log("updated temperatures - "  ,temperatures)