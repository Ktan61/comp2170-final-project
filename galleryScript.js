function changePreview(imageSrc, caption) {
    document.getElementById('imgPreview').src = imageSrc;
    document.getElementById('imgCaption').innerHTML = '<h5>' + caption + '</h5>';
}
