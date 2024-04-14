document.getElementById('generateBtn').addEventListener('click', function () {
    var url = document.getElementById('urlInput').value;
    var qrCodeContainer = document.getElementById('qrCodeContainer');

    // Check if the URL input is empty
    if (url.trim() === '') {
        // If empty, do nothing
        return;
    }

    // Clear previous QR code
    qrCodeContainer.innerHTML = '';

    // Generate new QR code
    var qrImg = document.createElement('img');
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(url);
    qrCodeContainer.appendChild(qrImg);
});
