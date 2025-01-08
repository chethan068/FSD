const nums = [10, 20, 30, 40, 50];
let [first,,third]=nums;
[third,first]=[first,third];
let[,second,,fourth]=nums;
[fourth,second]=[second,third];
