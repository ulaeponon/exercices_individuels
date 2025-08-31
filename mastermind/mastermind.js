const authorisedColors =["blue", "red","yellow","green"];
const secretCode = ["blue","red"];

function correctProposal(proposal) {
    return proposal === secretCode ;
}


function ValidProposal(proposal){
if (proposal.length !== 2) {
    return false ;
}
for (const color of proposal) {
    if (!authorisedColors.includes(color)) {
        return false ;
    }
}
if (proposal[0] === proposal[1] ) {
    return false ;
}
return true ;
};
function playGame(proposals) {
    let attempts = 0 ;
    for (const proposal of proposals) {
        attempts++;
        if (!ValidProposal(proposal)){ 
            console.log("Proposition Invalide :", proposal);
            continue;
        }
        if (correctProposal(proposal)){
            Cconsole.log(`Correct ! Trouvé en ${attempts} essais .`)
        }
        else{
            console.log (``)
        }
    }
    
}