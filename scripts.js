document.addEventListener('DOMContentLoaded', function() {
  const tools = [
      { 
          name: 'OCR App 2.0', 
          description: 'Zaawansowane narzędzie do rozpoznawania tekstu ze zdjęć', 
          link: 'https://jacob22092.github.io/OCR-App-2.0/', 
          new: true,
          image: 'photos/ocr-app-2.0.jpg',
          price: 'Free'
      },
      { 
          name: 'OCR App', 
          description: 'Podstawowe narzędzie do rozpoznawania tekstu ze zdjęć', 
          link: 'https://jacob22092.github.io/OCR-App/', 
          new: false,
          image: 'photos/ocr-app.jpg',
          price: 'Free'
      }
  ];

  const toolsList = document.getElementById('tools');
  const modal = document.getElementById('toolModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const modalPrice = document.getElementById('modalPrice');
  const closeModal = document.getElementsByClassName('close')[0];

  tools.forEach(tool => {
      const listItem = document.createElement('tr');
      const visitButton = `<a href="${tool.link}" target="_blank"><button class="visit-btn"><i class="fas fa-external-link-alt"></i> Odwiedź</button></a>`;
      const badge = tool.new ? '<span class="badge">Nowa wersja!</span>' : '';
      listItem.className = tool.new ? 'new-tool' : '';
      listItem.innerHTML = `<td><strong>${tool.name}</strong> ${badge}</td><td>${tool.description}</td><td>${visitButton}</td>`;
      listItem.addEventListener('click', () => {
          modalTitle.textContent = tool.name;
          modalImage.src = tool.image;
          modalDescription.textContent = tool.description;
          modalPrice.textContent = tool.price;
          modal.style.display = 'block';
      });
      toolsList.appendChild(listItem);
  });

  closeModal.onclick = function() {
      modal.style.display = 'none';
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
});
