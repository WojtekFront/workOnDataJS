
function GetSelectedValue() {
    //creating variable
    let textArea, textArea2, ilosc, returnValue, countValue;
    textArea = document.getElementById("textArea").value;
    textArea2 = document.getElementById("textArea2").value;
    ilosc = document.getElementById("ilosc").value;
    countValue = 0;

    //logic in select
    if (textArea.length > 0 || textArea != null) {
        returnValue = "";
        if (ilosc == "iloscZnakow") {
            returnValue = textArea.split("");
           // console.log("sprawdzam ilosc znakow"+(returnValue.join('')));
        }
        else if (ilosc == "iloscCyfr") {
            returnValue = textArea.match(/\d/g); //d is digit
        }
        else if (ilosc == "iloscLiter") {
            returnValue = textArea.match(/[a-ząćęłńóśźż]/gi); //i-case-insensitive search  A-ZĄĆĘŁŃÓŚŹŻ
        }
        else if (ilosc == "iloscWyrazow") {
            String.prototype.countWords = function () {
                return this.split(/\s+\b/g); //split by whitespace and begining with letter
            }
            textArea = textArea.trim();  //without trim plus one word on begining
            returnValue = textArea.countWords();
        } else if (ilosc == "iloscAnagram") {
            if (textArea.length != textArea2.length) {
                countValue = "wyrazy nie sa anagramami";
            } else if (textArea2 != null) {
                textArea = textArea.split('').sort().join('').toLowerCase();
                textArea2 = textArea.split('').sort().join('').toLowerCase();
                if(textArea === textArea2){countValue ="wyrazy sa anagramami"}
                else{countValue ="wyrazy nie sa anagramami"}
            }
            else {
                countValue = "wyrazy nie sa anagramami"
            }

        }
        else if (returnValue == "" || returnValue == null) { //catching exceptions
            returnValue = "zbiór jest pusty";
            countValue = 0;
        } 
            countValue = returnValue.length;
        
       // console.log("drugi komunikat "+(returnValue.join('')));


    } else {
        countValue = "zbiór jest pusty";
    }



    //print in: console.log and screen
    console.log(returnValue);
    document.getElementById("wydruk").innerText = countValue;

}




let ilosc2 =document.getElementById("ilosc");
ilosc2.onclick = function (e) { 
    if (ilosc2.value == "iloscAnagram") { 
        document.getElementById("hiddenText").style.visibility = "visible";
    } else if(ilosc2.value != "iloscAnagram"){
        document.getElementById("hiddenText").style.visibility = "hidden";

    }

}; 