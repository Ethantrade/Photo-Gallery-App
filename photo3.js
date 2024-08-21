function openModal(image) {
    const modal = document.getElementById("modal");
    
    modal.style.display = "block";
    
    const modalImg = document.getElementById("modalImg");
    modalImg.src = image.src;
    
    const caption = document.getElementById("caption");
    caption.innerText = image.alt;
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }  