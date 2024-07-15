document.getElementById('input-file').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgView = document.getElementById('img-view');
            imgView.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" style="width: 100%;">`;
        };
        reader.readAsDataURL(file);
    }
});
