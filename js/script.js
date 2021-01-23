function GetSelectedValue() {

    let textArea, newTextArea, ilosc, wydruk, returnValue, countValue;

    textArea = document.getElementById("textArea").value;
    ilosc = document.getElementById("ilosc").value;
    wydruk = document.getElementById("wydruk").innerHTML;
    const number = ['1','2','3','4','5','6','7','8','9','0'];
    const letters = ['a','b','c',]

if(textArea.length>0)
{ 
returnValue="";
countValue=0;
   // console.log(textArea.length);
   if (ilosc == "iloscZnakow") {
        returnValue = textArea.length;
        countValue = returnValue;
    }
    else if (ilosc == "iloscCyfr") {

        // for (let value of textArea) {
        //     if (number.includes(value)){
        //         returnValue +=value;
        //         countValue++;

        //     }
        // }
        //alternative options for counting
        countValue= textArea.match(/\d/g).length;
       

      
    }
    else if (ilosc == "iloscLiter") {

        for (let value of textArea) {
            if (isNaN(value)){
                returnValue +=value;
                countValue++;
            }
        }
    }
    else if (ilosc == "iloscWyrazow") {
        String.prototype.countWords = function(){
            return this.split(/\s+\b/).length;
          }
          
          countValue = textArea.countWords();



    }
}else{
    returnValue="zbiór jest pusty";
    countValue=0;
}
 console.log(returnValue);
 document.getElementById("wydruk").innerText=countValue;



}
