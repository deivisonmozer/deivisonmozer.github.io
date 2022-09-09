
window.onload = ()=>{

    /* runs test to see if expected argument is === to value returned by function2test argument */
    function myFunctionTest(expected, found) {
        if (expected === found) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }
    function arraysAreEqual(expected, found)
    {   
        // If length is not equal
        if(expected.length!=found.length)
            return "False";
        else
        {
            // Comparing each element of array
            for(var i=0;i<expected.length;i++)
                if(expected[i]!=found[i])
                    return "TEST FAILED.  Expected " + expected + " found " + found;
                return "TEST SUCCEEDED";
        }
    }

    
    /* max returns the maximum of 2 arguments */
    function max(a, b) {
        if (a > b) {
        return a;
        } else {
        return b;
        };
    }
    console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
    
    /* max3 takes 3 numbers as arguments and returns the largest */
    function maxOfThree(a, b, c) {
        return max(max(a, b), c);
    
    }
    
    console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
    console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
    
    console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
        
    function isVowel(val){
        return("aeiouAEIOU".indexOf(val) != -1);
    }
    console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
    console.log("Expected output of isVowel('s') is false  " + myFunctionTest(false, isVowel('s')));
    
    function sum(){
        let x = [1,2,3,4];
        sum=0;
        for(i=0; i< x.length; i++){
            sum+=x[i];
        }
        return sum;
    }
    console.log("Expected output of sum() is 10 " + myFunctionTest(10, sum()));
    
    function multiply(){
        let y = [1,2,3,4];
        mult=y[0];
        for(i=1; i< y.length; i++){
            mult*=y[i];
        }
        return mult;
    }    
    console.log("Expected output of multiply() is 24 " + myFunctionTest(24, multiply()));
        
    function reverse(){
        let s = "jag testar";
        rev="";
        while(s!=""){
        rev = rev + s.charAt(s.length - 1);
        s = s.substring(0, s.length - 1);
        }
        return rev;
    }
    console.log("Expected output of reverse() is ratset gaj " + myFunctionTest("ratset gaj", reverse()));
        
    function findLongestWord(){
        let strs = ["str", "str1", "str12345"];
        let ret = 0;
        strs.forEach(element => {
        if(element.length > ret)
            ret = element.length;
        });
        return ret;
    }
    console.log("Expected output of filterLongWords() is 8 " + myFunctionTest(8, findLongestWord()));

    function filterLongWords(){
        let strs = ["str", "str1", "str123","str12345"];
        let ret=[];
        i = 5;
        strs.forEach(item => {
        if(item.length > i)
            ret.push(item);
        });
        return ret;
    }
    console.log("Expected output of filterLongWords() is [\"str123\",\"str12345\"] " + arraysAreEqual(["str123", "str12345"], filterLongWords()));
     
};

