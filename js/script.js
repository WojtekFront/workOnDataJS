function GetSelectedValue() {
    //creating variable
    //const textArea, ilosc;
    let ilosc, textArea, returnValue, countValue;

    textArea = document.getElementById("textArea").value;
    ilosc = document.getElementById("ilosc").value;
    countValue = 0;

    //logic in select
    if (textArea.length > 0) {
        returnValue = "";
        if (ilosc == "iloscZnakow") {
            returnValue = textArea.split("");
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
        }

        if (returnValue == "" || returnValue == null) { //catching exceptions
            returnValue = "zbiór jest pusty";
            countValue = 0;
        } else {
            countValue = returnValue.length;
        }


    } else {
        returnValue = "zbiór jest pusty";
    }

    //print in: console.log and screen
    console.log(returnValue);
    document.getElementById("wydruk").innerText = countValue;

}
