// function oneto255(){
// 	arr = [];
// 	for(x=1;x<256;x++){
// 		arr.push(x);
// 	}
// 	return arr;
// }
// console.log(oneto255());

// function oneto1000even(){
// 	sum=0;
// 	for(x=2;x<1000;x+=2){
// 		sum += x;
// 	}
// 	return sum;
// }
// console.log(oneto1000even());

// function oneto5000odd(){
// 	sum=0;
// 	for(x=1;x<5000;x+=2){
// 		sum += x;
// 	}
// 	return sum;
// }
// console.log(oneto5000odd());

// function allsum(arr){
// 	sum=0;
// 	for(x=0;x<arr.length;x++){
// 		sum += arr[x];
// 	}
// 	return sum;
// }
// console.log(allsum([-5,2,5,12]));

// function maxxer(arr){
// 	max = 0;
// 	for(x=0;x<arr.length;x++){
// 		if(arr[x]>max){
// 			max = arr[x];
// 		}
// 	}
// 	return max;
// }

// console.log(maxxer([-3,3,5,7]));

// function avgg(arr){
// 	return allsum(arr)/arr.length;
// }
// console.log(avgg([1,3,5,7,20]));

// function odds(){
// 	arr = [];
// 	for(var x=1;x<50;x+=2){
// 		arr.push(x);
// 	}
// 	return arr;
// }

// console.log(odds());

// function greaterY(arr, y){
// 	count = 0;
// 	for(var x=0;x<arr.length;x++){
// 		if(arr[x]>y){
// 			count++;
// 		}
// 	}
// }


// function repl_neg(arr){
// 	for(var x=0;x<arr.length;x++){
// 		arr[x] = arr[x]**2;
// 	}
// }

// var butt = [1,5,10,-2];
// console.log(butt);
// repl_neg(butt);
// console.log(butt);

function rem_neg(arr){
	for(var x=0;x<arr.length;x++){
		if(arr[x] < 0){
			arr[x] = 0;
		}
	}
}

var butt = [1,5,10,-2];
console.log(butt);
rem_neg(butt);
console.log(butt);