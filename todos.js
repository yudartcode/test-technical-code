const resp = (result = "") => {
    return `
        <form action="/" method="GET">
            <input type="number" name="value" min="0" placeholder="Input Angka">
            <br>
            <input type="submit" name="task" value="Generate Segitiga">
            <input type="submit" name="task" value="Generate Bilangan Ganjil">
            <input type="submit" name="task" value="Generate Bilangan Prima">

        <div>Result: </div>
        ${result}
    `;
}

const mainApp = (req, res) => {
    const { value, task } = req.query;

    switch (task) {
        case "Generate Segitiga":
            let triangle = "";

            for (let i = 0; i < value.length; i++) {
                for (let j = 0; j <= i; j++) {
                    (j > 0) ? triangle += "0" : triangle += value.charAt(i)
                }
                triangle += "<br>"
            }

            res.send(resp(triangle))
            break;
        case "Generate Bilangan Ganjil":
            let ganjil = [];

            for (let i = 0; i <= value; i++) {
                if (i % 2 != 0) {
                    ganjil.push(i)
                }
            }
            res.send(resp(ganjil))
            break;
        case "Generate Bilangan Prima":
            let prima = [];

            for (let i = 2; i <= value; i++) {
                if (isPrime(i)) {
                    prima.push(i);
                }
            }
            res.send(resp(prima))
            break;

        default:
            res.send(resp())
            break;
    }
}

function isPrime(n) {
    let i = 2;
    while (n > i) {
        if (n % i == 0) {
            return false;
        }
        i++;
    }
    return true
}


module.exports = {
    mainApp,
}