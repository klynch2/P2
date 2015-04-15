//Part 4-A

var isArmstrong = function(num){
	"use strict";
	//convert to String
	num = String(num);
	var sum =0;
	//traverse n
	for(var i = 0; i < num.length; ++i)
	   sum = sum + Math.pow(num[i], num.length);
    if (num == sum)
    	return true;
    else return false;
}

//Part 4-B

var allArmstrongs = function() {
	"use strict";
	 var result ="";
     for(var i=1; i < 100000; i++) {
     	if(isArmstrong(i)) 
     		result = result + String(i) + ",";

    }
      return result; 	
     
}


//Part 4-C

var allSubstrings1 = function(s){
	"use strict";
	var result="";

	for(var i=0; i<=s.length; i++){
		for(var j = i+1; j <= s.length; j++){
			result = result + s.substring(i,j) + ",";

		}
	}
	return result;
}

// Part-D 
var allSubstrings2 = function(s){
	"use strict";
	var result = [];
	for(var i = 0; i <= s.length; i++){
	for(var j = i+1; j <= s.length; j++){
		var str = s.substring(i,j);
		result.push(str);
		}
	}
	return result;
}
//Part 4-E
var maxWord = function(wstring){
	"use strict";
	var mylist = wstring.split(" ");
	var longest = "";

	for (var i = 0; i < mylist.length; ++i){
		var word=mylist[i];
		if(longest.length<=word.length){
			longest = word;
		}
		}
		return longest;
}