class ResettableIterator {
    constructor(iterable) {
      this.iterable = iterable;
      this.index = 0; 
    }
 
    
    [Symbol.iterator]() {
      return this;
    }
 
    
    next() {
  
      if (this.index >= this.iterable.length) {
        return { done: true };
      }
     
     
      const value = this.iterable[this.index];
      this.index++;
      return { value, done: false };
    }
 
 
    reset() {
      this.index = 0;
    }
  }
 

  const numbers = [1, 2, 3, 4, 5];
  const resettableIterator = new ResettableIterator(numbers);
 

  for (const num of resettableIterator) {
    console.log(num);
  }
 

  resettableIterator.reset();
 
  for (const num of resettableIterator) {
    console.log(num);
  }