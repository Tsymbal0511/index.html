const a = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));

function convert(x) {
    return ((9 / 5) * x + 32);
}
 
alert(`Температура по Цельсию = ${a.toFixed(1)}, температура по Фаренгейту = ${convert(a).toFixed(1)}`);