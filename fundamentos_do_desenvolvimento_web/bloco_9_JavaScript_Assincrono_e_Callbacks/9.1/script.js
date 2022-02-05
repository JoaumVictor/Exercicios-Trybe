const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// definição da função sendMarsTemperature...

const delay = messageDelay;
const valorC = getMarsTemperature();
const valorF = toFahrenheit(valorC);

const temperaturaEmF = (tempEmF) => {
  setTimeout(() => {
    const tempF = tempEmF;
    console.log(`A temperatura é ${tempF}ºF em Marte`);
  }, delay);
};

const temperaturaEmC = (tempEmC) => {
  setTimeout(() => {
    const tempC = tempEmC;
    console.log(`A temperatura é ${tempC}ºC em Marte`);
  }, delay);
};

temperaturaEmF(valorF);
temperaturaEmC(valorC);