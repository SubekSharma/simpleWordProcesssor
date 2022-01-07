function myFunction(){
    var x = document.getElementById("textarea").value;
    var wordCount = x.match(/(\w+)/g).length;
    var str = x;
    var charCount = str.length; 

    document.getElementById("output1").innerHTML = wordCount;
    document.getElementById("output2").innerHTML = charCount;


    

}

// function countOccurences(string, word) {
//     return string.split(word).length - 1;
//  }

//  var x = document.getElementById("textarea").value;
//  var count=countOccurences(x,document.getElementById("wordtocount").value); 

//  document.getElementById("demo").innerHTML = count;

