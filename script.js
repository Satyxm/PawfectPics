function fetchDogImages(breed) {
    const dogImageContainer = document.getElementById('dogImageContainer');
    const loadingIcon = document.getElementById('loadingIcon');

    
    dogImageContainer.innerHTML = '';

    
    loadingIcon.style.display = 'block'; 

    
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/9`) 
        .then((response) => response.json())
        .then((data) => {
            
            loadingIcon.style.display = 'none'; 

            data.message.forEach((imageUrl) => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.alt = 'Dog Image';
                imgElement.classList.add('img-dogs'); 
                dogImageContainer.appendChild(imgElement);
            });
        })
        .catch((error) => {
            console.error(error);
            alert('Failed to fetch dog images. Please try again later.');
            
            
            loadingIcon.style.display = 'none'; 
        });
}

function generateDogImages() {
    const breed = document.getElementById('search-input').value.trim();

    if (breed) {
        fetchDogImages(breed);
    } else {
        alert('Please enter a dog breed.');
    }
}


const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', generateDogImages);
