x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
console.log(x)
x.push (100)
console.log(x)
x.push (["hello", "world", "JavaScript is Fun"])
console.log(x)

var sum = 0;
for (var i=1; i<=500; i++){
  sum = sum + i;
}
console.log(sum);

var arr = [1, 5, 90, 25, -3, 0];
var min = arr[0];
for (var i=0; i<arr.length; i++){
  if (arr[i]< min){
    min = arr[i];
  }
}
console.log(min);

var arr = [1, 5, 90, 25, -3, 0];
var sum = arr[0];
for (var i=0; i<arr.length; i++){
  sum += arr[i];
}
console.log(sum/arr.length);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var i in newNinja) {
  console.log('newNinja.' + i, '=', newNinja[i]);
}
