export const HELLO_ALERT = 'HELLO_ALERT';

async function hello(){
    const reponse = await fetch('/name')
    const body = reponse.json();
    return body;  
} 

export function helloAlert() {
    const data = hello();
    return {
        type : HELLO_ALERT,
        payload : data, 
    }
}

