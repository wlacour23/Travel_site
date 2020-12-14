function getRandomNumber() {
	return new Promise(x =>
  	setTimeout(() => x(Math.floor(Math.random() * 1000)), 500));


async function printRandomNumber() {
	const randNumber = await getRandomNumber();
  const randNumberLog = `Random Number: ${randNumber}`;
  console.log(randNumberLog);
  htmlLog(randNumberLog);
}


async function printLatitudeAndLongitude(city) {
   const url = `https://geocode.xyz/${city}?json=1`;

let res = await fetch(url);

if (res.status !=200) {
    res = await new Promise(x => setTimeout(async () => {
        const tmpRes = await fetch(url);
        x(tmpRes);
    }, 1000));
}

}

}