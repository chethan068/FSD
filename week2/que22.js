function* combinedSequence(arr) {
    let a = 0, b = 1;  
    let i = 0;
 
    
    while (true) {
      if (i < arr.length) {
        yield arr[i];  
      }
     
      yield a;  
      [a, b] = [b, a + b]; 
    }
  }
 

  const arr = [10, 20, 30, 40, 50];  
  const seqGen = combinedSequence(arr);
 

  for (let i = 0; i < 10; i++) {
    console.log(seqGen.next().value);
  }
 