// Selecting the toast container element
let toastBox = document.getElementById('toastBox');

// Messages for different types of notifications
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix The Error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, Check Again';

// Function to show toast notification
function showToast(msg) {
    // Create a new toast notification div
    let toast = document.createElement('div');
    toast.classList.add('toast'); // Add default class
    toast.innerHTML = msg; // Set message content

    // Append the toast to the container
    toastBox.appendChild(toast);

    // Add additional class based on the message type
    if (msg.includes('Error')) {
        toast.classList.add('error');
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    // Remove the toast notification after 6 seconds
    setTimeout(() => {
        toast.remove();
    }, 6000);
}
