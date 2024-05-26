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
            price: 'Free',
            category: {
                name: {
                    pl: 'Konwerter',
                    en: 'Converter'
                },
                color: 'category-converter'
            }
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
            price: 'Free',
            category: {
                name: {
                    pl: 'Konwerter',
                    en: 'Converter'
                },
                color: 'category-converter'
            }
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
            price: 'Free Plan',
            category: {
                name: {
                    pl: 'Audio',
                    en: 'Audio'
                },
                color: 'category-audio'
            }
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
            price: 'Free',
            category: {
                name: {
                    pl: 'Grafika',
                    en: 'Graphics'
                },
                color: 'category-graphics'
            }
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
            price: 'Free',
            category: {
                name: {
                    pl: 'Grafika',
                    en: 'Graphics'
                },
                color: 'category-graphics'
            }
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
            price: 'Free',
            category: {
                name: {
                    pl: 'Grafika',
                    en: 'Graphics'
                },
                color: 'category-graphics'
            }
        },
        {
            name: 'LibreOffice',
            description: {
                pl: 'Bezpłatny pakiet biurowy kompatybilny z Microsoft Office, oferujący edytor tekstu, arkusze kalkulacyjne i prezentacje.',
                en: 'Free office suite compatible with Microsoft Office, offering a word processor, spreadsheets, and presentations.'
            },
            link: 'https://www.libreoffice.org/',
            new: false,
            image: 'photos/libreoffice.jpg',
            price: 'Free',
            category: {
                name: {
                    pl: 'Edytor',
                    en: 'Editor'
                },
                color: 'category-editor'
            }
        },
        {
            name: 'Overleaf',
            description: {
                pl: 'Edytor LaTeX online do tworzenia dokumentów akademickich, umożliwiający współpracę w czasie rzeczywistym.',
                en: 'Online LaTeX editor for creating academic documents, enabling real-time collaboration.'
            },
            link: 'https://www.overleaf.com/',
            new: false,
            image: 'photos/overleaf.jpg',
            price: 'Free',
            category: {
                name: {
                    pl: 'Edytor',
                    en: 'Editor'
                },
                color: 'category-editor'
            }
        },
        {
            name: 'Notion',
            description: {
                pl: 'Darmowe narzędzie do notatek, planowania i zarządzania projektami z różnorodnymi bazami danych i kalendarzami.',
                en: 'Free tool for note-taking, planning, and project management with various databases and calendars.'
            },
            link: 'https://www.notion.so/',
            new: false,
            image: 'photos/notion.jpg',
            price: 'Free',
            category: {
                name: {
                    pl: 'Edytor',
                    en: 'Editor'
                },
                color: 'category-editor'
            }
        },
        {
            name: 'Trello',
            description: {
                pl: 'Darmowe narzędzie do zarządzania projektami i organizacji zadań oparte na tablicach kanban.',
                en: 'Free tool for project management and task organization based on kanban boards.'
            },
            link: 'https://trello.com/',
            new: false,
            image: 'photos/trello.jpg',
            price: 'Free Plan',
            category: {
                name: {
                    pl: 'Planer',
                    en: 'Planner'
                },
                color: 'category-planner'
            }
        },
        {
            name: 'Anki',
            description: {
                pl: 'Program do nauki za pomocą fiszek z synchronizacją na różnych urządzeniach, wykorzystujący powtarzanie przestrzenne.',
                en: 'Program for learning with flashcards synchronized across different devices, utilizing spaced repetition.'
            },
            link: 'https://apps.ankiweb.net/',
            new: false,
            image: 'photos/anki.jpg',
            price: 'Free',
            category: {
                name: {
                    pl: 'Nauka',
                    en: 'Study'
                },
                color: 'category-study'
            }
        },
        {
            name: 'Forest Free',
            description: {
                pl: 'Aplikacja pomagająca w koncentracji poprzez sadzenie wirtualnych drzew podczas pracy.',
                en: 'App helping with focus by planting virtual trees during work.'
            },
            link: 'https://www.forestapp.cc/',
            new: false,
            image: 'photos/forest.jpg',
            price: 'Free',
            category: {
                name: {
                    pl: 'Skupienie',
                    en: 'Focus'
                },
                color: 'category-focus'
            }
        },
        {
            name: 'Habitica',
            description: {
                pl: 'Aplikacja do zarządzania zadaniami i nawykami w formie gry RPG, motywująca do realizacji celów.',
                en: 'App for task and habit management in the form of an RPG game, motivating to achieve goals.'
            },
            link: 'https://habitica.com/',
            new: false,
            image: 'photos/habitica.jpg',
            price: 'Free',
            category: {
                name: {
                    pl: 'Skupienie',
                    en: 'Focus'
                },
                color: 'category-focus'
            }
        },
        {
            name: 'Audacity',
            description: {
                pl: 'Bezpłatne narzędzie do nagrywania i edycji dźwięku, popularne wśród podcasterów i muzyków.',
                en: 'Free tool for recording and editing sound, popular among podcasters and musicians.'
            },
            link: 'https://www.audacityteam.org/',
            new: false,
            image: 'photos/audacity.jpg',
            price: 'Free',
            category: {
                name: {
                    pl: 'Audio',
                    en: 'Audio'
                },
                color: 'category-audio'
            }
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
            freeInfo: {
                free: "Narzędzie jest darmowe",
                freePlan: "Narzędzie ma darmowy plan"
            }
        },
        en: {
            pageTitle: "StudyTools - Tools for Students",
            headerTitle: "StudyTools",
            headerDescription: "Your favorite study tools in one place",
            toolsListTitle: "Tool List",
            tableHeaderName: "Name",
            tableHeaderDescription: "Description",
            tableHeaderAction: "Action",
            freeInfo: {
                free: "This tool is free",
                freePlan: "This tool has a free plan"
            }
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
            tool.translatedCategoryName = tool.category.name[language];
            tool.translatedFreeInfo = tool.price === 'Free' ? translations[language].freeInfo.free : translations[language].freeInfo.freePlan;
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
    const modalCategory = document.getElementById('modalCategory');
    const modalFreeInfo = document.getElementById('modalFreeInfo');
    const closeModal = document.getElementsByClassName('close')[0];

    tools.forEach(tool => {
        const listItem = document.createElement('tr');
        const visitButton = `<a href="${tool.link}" target="_blank"><button class="visit-btn"><i class="fas fa-external-link-alt"></i></button></a>`;
        const newIcon = tool.new ? '<i class="fas fa-star new-icon"></i>' : '';
        listItem.className = tool.new ? 'new-tool' : '';
        listItem.innerHTML = `<td><div class="tool-name-container">${newIcon}<span class="tool-name">${tool.name}</span></div></td><td>${tool.translatedDescription}</td><td>${visitButton}</td>`;
        listItem.addEventListener('click', () => {
            modalTitle.textContent = tool.name;
            modalImage.src = tool.image;
            modalDescription.textContent = tool.translatedDescription;
            modalCategory.textContent = tool.translatedCategoryName;
            modalCategory.className = `badge category-badge ${tool.category.color}`;
            modalFreeInfo.textContent = tool.translatedFreeInfo;
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
