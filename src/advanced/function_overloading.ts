/**
 *Function overloading is a concept in TS where a single function can have multiple signatures 
 (parameter types and return types) to handle different input scenarios.
 */

function reverse(string: string):string;//multiple signature
function reverse(stringArray: string[]):string[]//multiple signature
function reverse(stringOrstringArray: string | string[]){
  if(typeof stringOrstringArray == 'string'){
    return stringOrstringArray.split('').reverse().join()
  }else{
    return stringOrstringArray.slice().reverse()
  }
}

const hello__ = reverse('hello')
const h_e_l_l_o = reverse(['h','e','l','l','o'])