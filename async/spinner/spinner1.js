const anm = ['-','\\','|','/','-','\\','|','/']

for (let i = 0; i<anm.length; i++){
  setTimeout(() => {
    process.stdout.write(`\r${anm[i]}   `);
  }, i*300);

}

console.log("");

