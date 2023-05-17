const cats = [
    "Milo",
    "Otis",
    "Garfield",
];
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name) {
    const copyOfCats= cats.slice()
    copyOfCats.push(name)
    return copyOfCats
}
function prependCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.unshift(name)
    return copyOfCats
}
function removeLastCat() {
    const copyOfCats = cats.slice()
    copyOfCats.pop()
    return copyOfCats
}
function removeFirstCat() {
    const copyOfCats = cats.slice()
    copyOfCats.shift()
    return copyOfCats
}

