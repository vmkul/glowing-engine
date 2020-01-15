'use strict';

const iterable = {
	start: 0,
	end: 10,
	};
	
iterable[Symbol.iterator] = function() {
	return {
			next: () => {
				if (this.start === this.end) return {value: this.start, done: true};
				return {value: ++this.start, done: false}; 
				
			}
		}
}

for (const value of iterable)
	console.log(value);

process.exit(0);

function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker();

for (let value of gen)
	console.log(value);