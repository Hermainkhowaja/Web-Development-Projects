const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".btn");

// Load saved notes
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    attachEventListeners(); // Ensure notes remain editable after reload
}
showNotes();

// Update localStorage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Add event listeners to all notes (called on page load & new notes)
function attachEventListeners() {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
        note.onkeyup = () => updateStorage();
    });
}

// Create new note
createButton.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    updateStorage(); // Save after adding new note
    attachEventListeners(); // Ensure new note gets event listener
});

// Handle delete and text updates
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});
