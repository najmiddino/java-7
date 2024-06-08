alert (`mashinalar 4ta`)
const car = ['BMW', 'urus','porche','audi']

// alert(car.length)
// console.log('Uzunligi');

if (confirm('mashinalrno olishni hohlaysizmi')) {
    car.pop()
    alert (`bitta mashina olib tashlandi: ` + car.length)
    console.log(car);
}else {
    console.log(car);
    alert (`bitta mashina olib tashlanmadi: ` + car.length)
}