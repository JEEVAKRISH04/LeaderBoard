let messages = [];

function postMessage() {
    const messageText = document.getElementById('messageText').value;
    if (messageText.trim() === '') return;

    const message = {
        text: messageText,
        time: new Date().toLocaleString()
    };
    
    messages.push(message);
    displayMessages();
    document.getElementById('messageText').value = ''; // Clear input
}

function displayMessages() {
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = '';
    messages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML =` <strong>{${msg.time}:}</strong><br>{${msg.text}}`;
        messagesContainer.appendChild(messageElement);
    }
    );
}