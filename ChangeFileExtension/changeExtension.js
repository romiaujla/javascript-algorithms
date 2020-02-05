function toCSV(filename, extension){
  return filename.split('.')[0] + "." + extension;
  
}

console.log(toCSV("example", "csv"));
console.log(toCSV("example.txt", "csv"));
console.log(toCSV("example.csv", "csv"));