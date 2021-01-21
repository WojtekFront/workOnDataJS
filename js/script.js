function GetSelectedValue() {

    let textArea, ilosc, wydruk;

    textArea = document.getElementById("textArea").value;
    ilosc = document.getElementById("ilosc").value;
    wydruk = document.getElementById("wydruk").innerHTML;


    console.log(textArea.length);
    if (ilosc == "iloscZnakow") {
        wydruk = textArea.length;
    }
    else if (ilosc == "iloscCyfr") {

        for (let value of textArea) {
            if (!isNaN(value)){
                console.log(value);
            }
        }

        document.getElementById("wydruk").innerHTML = "działa";
    }
    else if (ilosc == "iloscLiter") {
        document.getElementById("wydruk").innerHTML = "jij";
    }
    else if (ilosc == "iloscWyrazow") {
        document.getElementById("wydruk").innerHTML = "jyj";
    }





}
