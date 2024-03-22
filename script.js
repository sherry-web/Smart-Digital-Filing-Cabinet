// JavaScript for Smart Digital Filing Cabinet

// Function to handle document search
function searchDocuments() {
    const searchInput = document.getElementById('search-input').value;
    // Perform search logic here (e.g., filter documents based on searchInput)
    console.log('Searching for:', searchInput);
}

// Function to handle document upload
function uploadDocument() {
    const fileInput = document.getElementById('file-input').files;
    // Perform upload logic here (e.g., validate file types, send files to server)
    console.log('Uploading documents:', fileInput);
}

// Event listener for search form submission
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    searchDocuments();
});

// Event listener for document upload form submission
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    uploadDocument();
});