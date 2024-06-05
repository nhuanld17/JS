export function sum(a, b, callback){
    let result = a + b;
    console.log(result);
    callback(result);
}