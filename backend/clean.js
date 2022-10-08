const clean=string=>{
    const value=string.toString()
    const alphabet = value.replace(/[^A-Za-z']+/g, " ").trim()
    const lowerCase = alphabet.toLowerCase()
    return lowerCase
}
export default clean