function isValidDate(dateString) {
    if (dateString.length !== 10 || dateString[2] !== "/" || dateString[5] !== "/") {
        return false;
    };
    const datePart = dateString.split("/")
    //console.log(datePart)
    const day = parseInt(datePart[0]);
    const month = parseInt(datePart[1]);
    const year = parseInt(datePart[2]);
    console.log("Jour :", day);
    console.log("Mois :", month);
    console.log("Année :", year);
    
    if (month<1 || month>12) { 
        console.log("Mois invalide")
        return false;
    }
    const maxDays = maxDaysInMonth(month,year)
    if (day<1||  day>maxDays){ 
        return false;
    }
     return true;
}
isValidDate("12/03/1997");
//isValidDate("15/14/2022");
 function maxDaysInMonth(month, year) {
    if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return 29; 
        } else {
            return 28;
        }
    } else if ([4, 6, 9, 11].includes(month)) {
        return 30;
    } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        return 31;
    } else {
        return "Mois invalide";
    }
}
function isPalindrome(dateString){
    if (!isValidDate(dateString)){
        return false;
    }
    const cleanDate= dateString.replaceAll("/" ,"");
    const reverseTheDate= cleanDate.split("").reverse().join("");
    return cleanDate === reverseTheDate;
}
console.log(isPalindrome("11/02/2011")); // true
console.log(isPalindrome("03/04/2001")); // false
console.log(isPalindrome("31/02/2020")); // false (car date invalide)

const today = new Date();
 function getTomorrow(date) {
    const tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate()+1);
    return tomorrow;
 };
 function formatDate(date) {
    let day=  date.getDate();
    let month= date.getMonth()+1;
    let year = date.getFullYear()
   if (day<10)day = "0"+day;
   if (month<10) month = "0" +month;
  return `${day}/${month}/${year}`;
;
 }
 function getNextPalindromes(X) {
    const results= [];
let date = new Date();
while (results.length<X) {
    const dateString = formatDate(date);
    if(isPalindrome(dateString)){
        results.push(dateString);
    }
    date = getTomorrow(date);
} 
return results ;  
 }
 console.log(getNextPalindromes(8));

 function isDatePalindrome(dateString) {
    if (!isValidDate(dateString)) {
        return false;
    }

    const cleanDate = dateString.replaceAll('/', '');
    return isPalindrome(cleanDate);
}
console.log(isDatePalindrome("11/02/2011")); // true
console.log(isDatePalindrome("03/04/2001")); // false
console.log(isDatePalindrome("31/02/2020")); // false (date invalide)
