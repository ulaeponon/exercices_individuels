//Crée une variable message dans lequel on va stocker le message : Bonjour !
//Affiche le message dans ta console. Tu devrais avoir le message “Bonjour !” qui apparaît.
//Crée une seconde variable firstname dans lequel on va stocker un prénom. Exemple : Beyonce
//Utilise la variable firstname dans message pour obtenir l’affichage du message : Bonjour Beyonce !
//Attention, ici il s’agit bien de modifier la variable messageet non le console.log()

//let message = "bonjour!";
//console.log(message);
//let firstname = "Beyonce";
//message = "Bonjour" + " " + firstname + "!"
//console.log(message);

//Encapsule ton code précédent dans une fonction nommée sayHello()
//Appelle la fonction sayHello() dans ton code pour t’assurer que tout continue de fonctionner.
//Tu devrais toujours avoir le message Bonjour Beyonce ! qui s’affiche dans la console.
//Déplace la variable firstname pour qu’elle devienne un paramètre de la fonction sayHello()
//Exécute ton code. Tu devrais obtenir dans ta console Bonjour undefined ! 🤔
//Corrige l’appel de fonction pour retrouver de nouveau le message Bonjour Beyonce !
//function sayHello(firstname) {
//let message = "Bonjour" + " " + firstname + "!"
//console.log(message);
//}
//sayHello("Beyonce")

//Ajoute un second paramètre hour à la fonction sayHello()
//Ajoute une condition dans ta fonction pour que lorsque hour est supérieur ou égal à 18H, 
// on dise Bonsoir plutôt que Bonjour dans le message
//  function sayHello(firstname,hour) {
//     let hello ='';
//     if (hour>=18) { hello="Bonsoir";

//     } else {hello="Bonjour";

//     }
//       message = hello + " " + firstname + "!"
//     document.querySelector('h1').innerText = message
// }
// sayHello(`Beyonce`, 11);
// sayHello(`Beyonce`, 18);
// sayHello(`Beyonce`, 17);
// let firstname = prompt("quel est ton prénom ?")
// let message =` Bonjour ${firstname} !`;
// document.querySelector('h1').innerText = message;

let firstname = prompt("quel est ton prénom ?")
function sayHello(firstname, hour) {
    let hello = '';
    if (hour >= 18) {
        hello = "Bonsoir";
    } else {
        hello = "Bonjour";
    }
    let message = `${hello} ${firstname} !`;
    document.querySelector('h1').innerText = message
}


sayHello(firstname, 20)