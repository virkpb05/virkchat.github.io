window.addEventListener('DOMContentLoaded', function() {
    const output = document.getElementById('output');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('send');

    sendButton.addEventListener('click', function() {
        const message = messageInput.value;
        if (message !== '') {
            output.innerHTML += '<p>' + message + '</p>';
            messageInput.value = '';
            messageInput.focus();
        }
    });

    messageInput.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            sendButton.click();
        }
    });
});