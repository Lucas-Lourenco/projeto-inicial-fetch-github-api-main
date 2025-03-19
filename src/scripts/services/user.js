import { urlBase } from '/src/scripts/variables.js';

async function getuser(userName){
    let response = await fetch(`${urlBase}${userName}`);
    
    return await response.json()
}

export {getuser}