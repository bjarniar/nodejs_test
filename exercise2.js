//console.log(process.argv);

var L = process.argv.length;

var sum = 0;
for (i = 2; i<L; i++)	{
	sum = sum + Number(process.argv[i])
}

console.log(sum);
