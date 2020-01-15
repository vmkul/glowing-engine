'use strict';

class Computer {
  constructor(gpu, cpu, ram){
    this.gpu = gpu;
    this.cpu = cpu;
    this.ram = ram;
  };

  static from(machine) {
    return new Computer(machine.gpu, machine.cpu, machine.ram);
  }

  toString() {
  console.log('---\n'+`Videocard: ${this.gpu}\nProcessor: ${this.cpu}\nRAM: ${this.ram}`);
  }
}

const mass = [
  ['GTX 2080Ti', 'Intel Core i9', '264Gb'],
  ['GTX 980', 'Intel Core i5', '16Gb'],
  ['GT 6700', 'Intel Pentium', '4Gb'],
];

mass.forEach((element) => {
  let machine = {gpu: element[0], cpu: element[1], ram: element[2]};
  let comp = Computer.from(machine);
  comp.toString();
}
);

