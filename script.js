var testObject = document.querySelectorAll(".YasuoMongate");
console.log('typeof testObject: ' + typeof testObject);
console.log('testObject properties:');
for (var prop in testObject) {
    console.log('  ' + prop + ': ' + testObject[prop]);
}
localStorage.setItem('testObject', testObject);
var retrievedObject = localStorage.getItem('testObject');
console.log('typeof retrievedObject: ' + typeof retrievedObject);
console.log('Value of retrievedObject: ' + retrievedObject);