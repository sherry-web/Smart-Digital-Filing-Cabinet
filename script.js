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

// Function to add a new folder
function addFolder() {
    const folderName = prompt('Enter the name of the new folder:');
    if (folderName) {
        const foldersList = document.getElementById('folders-list');
        const li = document.createElement('li');
        li.textContent = folderName;
        foldersList.appendChild(li);
    }
}

// Function to delete a folder
function deleteFolder(event) {
    if (event.target.tagName === 'LI') {
        const confirmDelete = confirm('Are you sure you want to delete this folder?');
        if (confirmDelete) {
            event.target.remove();
        }
    }
}

// Event listener for adding a new folder
document.getElementById('add-folder-btn').addEventListener('click', addFolder);

// Event listener for deleting a folder
document.getElementById('folders-list').addEventListener('click', deleteFolder);