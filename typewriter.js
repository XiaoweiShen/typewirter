const sentence = "Coding is my favor by all means";

for (let i =0;i<sentence.length;i++){
  
  setTimeout(()=>{
    process.stdout.write(sentence[i]);
  },(i*50));  
}
console.log("");

  
