// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
    var b = [1, 2, 3, 4];
    //TODO
    console.log(a instanceof Array); //false
    console.log(b instanceof Array); // true 


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i in a ){
	a[i] *= 2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var case1 = colors.join(" ");
console.log(case1);
// case 2 output: 'Red+Green+White+Black'
var case2 = colors.join("+");
console.log(case2);
// case 3 output: 'Red,Green,White,Black'
var case3 = colors.join(",");
console.log(case3);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(num1, num2) {
  return num2 - num1;
});
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    //TODO should output: 'a'[动画表情]
    if (a === null || a === undefined || a.length == 0) {
      return null;
    }
    var map = new Map();
    var value = 1; // 次数
    var key = a[0]; //元素
    for (var i in a) {
		//已经放进的元素，value值加1.未放进map的元素则value为1
      if (map.get(a[i]) !== undefined) {
        let num = map.get(a[i]);
        map.set(a[i], ++ num);
      } else {
        map.set(a[i] , 1);
      }
	  //放进map后更新当前出现最多的元素及其出现的次数
      if(map.get(a[i]) > value){
        key=a[i];
        value = map.get(a[i])
      }
    }
    console.log(key);