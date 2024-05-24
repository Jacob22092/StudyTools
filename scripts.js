document.addEventListener('DOMContentLoaded', function() {
    const tools = [
        { 
            name: 'OCR App 2.0', 
            description: {
                pl: 'Zaawansowane narzędzie do rozpoznawania tekstu ze zdjęć', 
                en: 'Advanced tool for text recognition from images'
            }, 
            link: 'https://jacob22092.github.io/OCR-App-2.0/', 
            new: true,
            image: 'photos/ocr-app-2.0.jpg',
            price: 'Free'
        },
        { 
            name: 'OCR App', 
            description: {
                pl: 'Podstawowe narzędzie do rozpoznawania tekstu ze zdjęć', 
                en: 'Basic tool for text recognition from images'
            }, 
            link: 'https://jacob22092.github.io/OCR-App/', 
            new: false,
            image: 'photos/ocr-app.jpg',
            price: 'Free'
        },
        {
            name: 'GoodTape',
            description: {
                pl: 'Narzędzie do transkrypcji i edycji wideo',
                en: 'Tool for transcription and video editing'
            },
            link: 'https://goodtape.io/',
            new: false,
            image: 'photos/goodtape.jpg',
            price: 'Free Plan'
        },
        {
            name: 'PhotoRoom',
            description: {
                pl: 'Narzędzie do usuwania tła z obrazów',
                en: 'Tool for removing background from images'
            },
            link: 'https://www.photoroom.com/tools/background-remover',
            new: false,
            image: 'photos/photoroom.jpg',
            price: 'Free'
        },
        {
            name: 'Photopea',
            description: {
                pl: 'Alternatywa dla popularnego programu Photoshop',
                en: 'Alternative to the popular Photoshop program'
            },
            link: 'https://www.photopea.com/',
            new: false,
            image: 'photos/photopea.jpg',
            price: 'Free'
        },
        {
            name: 'Canva',
            description: {
                pl: 'Narzędzie do projektowania grafiki',
                en: 'Tool for graphic design'
            },
            link: 'https://www.canva.com/',
            new: false,
            image: 'photos/canva.jpg',
            price: 'Free'
        }
    ];

    const translations = {
        pl: {
            pageTitle: "StudyTools - Narzędzia dla Studentów",
            headerTitle: "StudyTools",
            headerDescription: "Twoje ulubione narzędzia do nauki w jednym miejscu",
            toolsListTitle: "Lista Narzędzi",
            tableHeaderName: "Nazwa",
            tableHeaderDescription: "Opis",
            tableHeaderAction: "Akcja",
        },
        en: {
            pageTitle: "StudyTools - Tools for Students",
            headerTitle: "StudyTools",
            headerDescription: "Your favorite study tools in one place",
            toolsListTitle: "Tool List",
            tableHeaderName: "Name",
            tableHeaderDescription: "Description",
            tableHeaderAction: "Action",
        }
    };

    function setLanguage(language) {
        document.title = translations[language].pageTitle;
        document.getElementById('header-title').textContent = translations[language].headerTitle;
        document.getElementById('header-description').textContent = translations[language].headerDescription;
        document.getElementById('tools-list-title').textContent = translations[language].toolsListTitle;
        document.getElementById('table-header-name').textContent = translations[language].tableHeaderName;
        document.getElementById('table-header-description').textContent = translations[language].tableHeaderDescription;
        document.getElementById('table-header-action').textContent = translations[language].tableHeaderAction;
        
        tools.forEach(tool => {
            tool.translatedDescription = tool.description[language];
        });
    }

    const userLang = navigator.language || navigator.userLanguage;
    const language = userLang.startsWith('pl') ? 'pl' : 'en';
    setLanguage(language);

    const toolsList = document.getElementById('tools');
    const modal = document.getElementById('toolModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const closeModal = document.getElementsByClassName('close')[0];

    tools.forEach(tool => {
        const listItem = document.createElement('tr');
        const visitButton = `<a href="${tool.link}" target="_blank"><button class="visit-btn"><i class="fas fa-external-link-alt"></i></button></a>`;
        const badge = tool.new ? '<span class="badge">New!</span>' : '';
        listItem.className = tool.new ? 'new-tool' : '';
        listItem.innerHTML = `<td><strong>${tool.name}</strong> ${badge}</td><td>${tool.translatedDescription}</td><td>${visitButton}</td>`;
        listItem.addEventListener('click', () => {
            modalTitle.textContent = tool.name;
            modalImage.src = tool.image;
            modalDescription.textContent = tool.translatedDescription;
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
