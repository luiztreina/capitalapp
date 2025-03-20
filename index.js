async function getCapital() {
    const country = document.getElementById("countryInput").value;
    const resultElement = document.getElementById("result");

    if (!country) {
        resultElement.textContent = "Please enter a country name.";
        return;
    }

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const data = await response.json();

        if (data && data.length > 0) {
            const capital = data[0].capital ? data[0].capital[0] : "No capital found";
            resultElement.textContent = `Capital of ${country}: ${capital}`;
        } else {
            resultElement.textContent = "Country not found.";
        }
    } catch (error) {
        resultElement.textContent = "Error fetching data.";
    }
}
