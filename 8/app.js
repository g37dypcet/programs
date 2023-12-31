// // Function 1: process.argv
// console.log('Command-line arguments:', process.argv);
// // This will display an array of command-line arguments passed to the program.

// // Function 2: process.cwd()
// console.log('Current working directory:', process.cwd());
// // This will display the current working directory of the program.

// // Function 3: process.env
// console.log('Environment variables:', process.env);
// // This will display an object containing the environment variables.

// // Function 4: process.exit()
// console.log('Before exit');
// process.exit(0);
// console.log('After exit');
// // This will terminate the program with an exit code of 0.

// // Function 5: process.memoryUsage()
// console.log('Memory usage:', process.memoryUsage());
// // This will display an object containing memory usage statistics.


console.log('Node.js version:', process.version);

// 2. Getting the current working directory
console.log('Current working directory:', process.cwd());

// 3. Getting the process ID (PID)
console.log('Process ID:', process.pid);

// 4. Getting the command-line arguments
console.log('Command-line arguments:', process.argv);

console.log('memory usage',process.memoryUsage());


// process.version
// process.pid
// process.argv
// process.memoryUsage()
// process.cwd();