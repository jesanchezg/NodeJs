var firstVar = "FirstVar";

(function (lastVar) {
    var firstVar = "FirstVar second value";
    console.log(firstVar);
    console.log(lastVar);
}("ParmeterValue"));

console.log(firstVar);