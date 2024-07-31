let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.us', '.io'];
let dominio= '';
for(let i=0; i<pronoun.length; i++){
    for(let j=0; j<adj.length; j++){
        for(let k=0; k<noun.length; k++){
            for(let l=0; l<extension.length; l++){
                dominio = pronoun[i]+adj[j]+noun[k]+extension[l];
                document.getElementById("dominios").innerHTML += `<p>${dominio}</p>`;
                console.log(dominio);
            }
        }
    }
}