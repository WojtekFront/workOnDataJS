function GetSelectedValue() {

    let textArea, newTextArea, ilosc, wydruk, returnValue, countValue;

    textArea = document.getElementById("textArea").value;
    ilosc = document.getElementById("ilosc").value;
    wydruk = document.getElementById("wydruk").innerHTML;
    //const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


    if (textArea.length > 0) {
        returnValue = "";
        countValue = 0;
        if (ilosc == "iloscZnakow") {
            returnValue = textArea.split("");
            countValue = returnValue.length;
        }
        else if (ilosc == "iloscCyfr") {
            returnValue = textArea.match(/\d/g);
            countValue = returnValue.length;
        }
        else if (ilosc == "iloscLiter") {
            returnValue = textArea.match(/[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]/gi);
            countValue = returnValue.length;
        }
        else if (ilosc == "iloscWyrazow") {
            String.prototype.countWords = function () {            
                return this.split(/\s+\b/);
            }
            newTextArea = textArea.trim();
            returnValue = newTextArea.countWords();
            countValue = returnValue.length;
        }
    } else {
        returnValue = "zbiór jest pusty.";
        countValue = 0;
    }
    console.log(returnValue);
    document.getElementById("wydruk").innerText = countValue;



}
