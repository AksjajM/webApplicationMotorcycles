function getData() {
    const apiUrl = 'http://localhost:3000/motorcycle'; // Vervang door je eigen API-URL
  
    // Maak een Headers-object aan en voeg de gewenste headers toe
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
  
    // Maak het fetch-verzoek met de juiste headers
    fetch(apiUrl, {
      method: 'GET',
      headers: myHeaders,
    })
      .then(response => response.json())
      .then(data => {
        // Verwerk de gegevens hier (bijvoorbeeld weergeven in de console)
        console.log(data);
      })
      .catch(error => {
        console.error('Er is een fout opgetreden bij het ophalen van de gegevens:', error);
      });
  }