const searchIcon = document.getElementById('searchIcon');
const searchDropdown = document.getElementById('searchDropdown');

searchIcon.addEventListener('click', function() {
    if (searchDropdown.style.display === 'none' || searchDropdown.style.display === '') {
        searchDropdown.style.display = 'block';
    } else {
        searchDropdown.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the mock API (replace the URL with your API endpoint)
    fetch('https://jsonplaceholder.typicode.com/posts/2')
        .then(response => response.json())
        .then(data => {
            // Update product details dynamically
            const productDetailsSection = document.getElementById('product-details');
            productDetailsSection.innerHTML = `
                <p>${data.body}</p>
            `;
        })
        .catch(error => console.error('Error fetching data:', error));
});
