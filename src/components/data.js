

export async function fetchData(){

    try{

        const response = await fetch("/assets/logements.json");

        if(!response.ok){
            throw new Error("Impossible d'acceder aux ressources");
        }

        const data = await response.json();
        return data;
    }
    catch(error){
        console.error(error);
        return [];
    }
}


