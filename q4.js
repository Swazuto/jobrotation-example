const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;
const total = sp + rj + mg + es + outros;

console.log('Valor total: ' + total.toFixed(2));

const ysp = (sp/total) * 100;
const yrj = (rj/total) * 100;
const ymg = (mg/total) * 100;
const yes = (es/total) * 100;
const yout = (outros/total) * 100;

console.log('Porcentagem de SP: ' + ysp.toFixed(2) + '%');
console.log('Porcentagem de RJ: ' + yrj.toFixed(2) + '%');
console.log('Porcentagem de MG: ' + ymg.toFixed(2) + '%');
console.log('Porcentagem de ES: ' + yes.toFixed(2) + '%');
console.log('Porcentagem de Outros: ' + yout.toFixed(2) + '%');
