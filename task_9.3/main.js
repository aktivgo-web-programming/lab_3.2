function startCountdown() {
    const now = Date.now();
    console.log('now timestamp', now);
    inputDateValue = document.querySelector('input[type="datetime-local"]').value;
    console.log('input date', inputDateValue);
    inputDate = new Date(inputDateValue).getTime();
    console.log('input date timestamp', inputDate);
    result = inputDate - now;
    console.log('result timestamp', result);
    resultDate = new Date(result);
    console.log('result', resultDate);

    days = resultDate.getDay();
    hours = resultDate.getHours();
    minutes = resultDate.getMinutes();
    seconds = resultDate.getSeconds();

    console.log(`days:${days}\nhours:${hours}\nminutes:${minutes}\nseconds:${seconds}\n`)

    document.getElementById('result').value = `days:${days}\nhours:${hours}\nminutes:${minutes}\nseconds:${seconds}\n`
}