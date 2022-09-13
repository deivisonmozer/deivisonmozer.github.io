function compArrays(array1,array2){
  return array1.length === array2.length && array1.every(function(value, index) { return value === array2[index]});
}
function myFunctionTestArr(expected, found) {
  if (compArrays(expected,found)) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}


//FP
function sumFP(arr){
  return arr.reduce((x,y)=>x+y);
}



function multiplyFP(arr){
  return arr.reduce((x,y)=>x*y);
}




function reverseFP(str){
  var splitString = str.split("");
  return splitString.reduce((x,y)=>y+x);
}



function filterLongWordsFP(arr,i){
  return arr.filter(w=>w.length>i);
}

describe("sum", function() {

  it("sum elements in array", function() {
    assert.equal(sumFP([1,2,3,4]), 10);
  });

});

describe("multiply", function() {

  it("multiply elements in array", function() {
    assert.equal(multiplyFP([1,2,3,4]), 24);
  });

});

describe("reverse", function() {

  it("Reverse the string", function() {
    assert.equal(reverseFP("jag testar"), "ratset gaj");
  });

});

describe("filterLongWords", function() {

  it("Filter array with words whose length is greater than given index", function() {
    assert.deepEqual(filterLongWordsFP(["1","11","111"],1), ["11","111"]);
  });

});
