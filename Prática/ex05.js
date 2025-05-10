let cars = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1
console.log(`1.${cars[x]}`);

cars[1] = 'Audi'
console.log('2. Lista com Audi: ')
console.log(cars);

cars.push('Volvo')
console.log('3. Lista com Volvo: ');
console.log(cars)

console.log('4. Itens no array: '+cars.length)
