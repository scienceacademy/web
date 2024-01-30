const max = function (nums) {
	let m = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (m < nums[i]) { m = nums[i] }
	}
	return m;
}
const min = function (nums) {
	let n = nums[0];
	for (let j = 1; j < nums.length; j++) {
		if (n > nums[j]) { n = nums[j] }
	}
	return n;
}
const range = function (nums) {
	let o = nums[0];
	let p = nums[0];
	for (let r = 1; r < nums.length; r++) {
		if (o < nums[r]) { o = nums[r] }
		if (p > nums[r]) { p = nums[r] }
	}
	return o - p;
}
const mean = function (nums) {
	let sum = nums[0];
	for (let i = 1; i < nums.length; i++) {
		sum = nums[i] + sum;
	}
	return Math.round(sum / nums.length);
}
const median = function (nums) {
	let sorted = nums.sort();
	let answer = ""
	if (sorted.length % 2 === 1) {
		answer = (sorted[Math.floor(sorted.length / 2)])
	}
	else {
		answer = ((sorted[sorted.length / 2] + sorted[sorted.length / 2 - 1]) / 2)
	}
	return answer;
}

const sort = function (nums) {
	for (let k = 0; k < nums.length; k++) {
		let index = k;
		let min = nums[k]
		for (let l = k + 1; l < nums.length; l++) {
			if (nums[l] < min) {
				min = nums[l];
				index = l;
			}
		}
		if (index !== k) {
			[nums[index], nums[k]] = [nums[k], nums[index]]
		}
	}
	return nums;
}

const toGrade = (score) => score < 60 ? "F" : score < 70 ? "D" : score < 80 ? "C" : score < 90 ? "B" : "A";

/*const mode = function (grades) {
	let modeGrade = ""
	let maxCount = 0;
	let cCount = 0;
	let cElement = ""
	for (let n = 1; n < grades.length; n++) {
		if (grades[n - 1] !== grades[n]) {
			if (cCount > maxCount) {
				maxCount = cCount;
				cCount = 0;
				modeGrade = cElement;
			}
			cCount = 0;
			cElement = grades[n];
		}
		cCount++;
	}
	return cCount > maxCount ? cElement : modeGrade;
}*/

const modeO = function (grades) {
	let counter = {};
	for(let o = 0; o < grades.length; o++){
		if(grades[o] in counter){
			counter[grades[o]]++
		} else {
			counter[grades[o]] = 0;
		}
	}
	let mode = ""
	let maxCount = 0;
	for(c in counter){
		if(maxCount < counter[c]){
			maxCount = counter[c];
			mode = c;
			}
	}
	return mode;
}
