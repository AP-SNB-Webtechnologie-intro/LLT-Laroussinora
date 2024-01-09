function getCatPicture() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        const catImageContainer = document.getElementById('catImageContainer');
        const imageUrl = data[0].url;

        // Create an image element and set its source to the cat picture URL
        const catImage = document.createElement('img');
        catImage.src = imageUrl;
        catImage.alt = 'Random Cat';

        // Append the image to the container
        catImageContainer.innerHTML = '';
        catImageContainer.appendChild(catImage);
      })
      .catch(error => console.error('Error fetching cat picture:', error));
  }