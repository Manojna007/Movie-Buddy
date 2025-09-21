// Movie data
const movieData = {
  "movies": [
    {"id": 1, "title": "Phone Booth", "genre": ["Thriller", "Drama"], "language": "Hollywood", "origin": "US", "description": "A psychological thriller about a man trapped in a phone booth by a sniper."},
    {"id": 2, "title": "Identity", "genre": ["Mystery", "Thriller"], "language": "Hollywood", "origin": "US", "description": "Ten strangers are trapped in a desert motel during a storm with a killer among them."},
    {"id": 3, "title": "Panic Room", "genre": ["Thriller", "Crime"], "language": "Hollywood", "origin": "US", "description": "A mother and daughter hide in their safe room when intruders break into their home."},
    {"id": 4, "title": "Predestination", "genre": ["Sci-Fi", "Thriller"], "language": "Hollywood", "origin": "Australia", "description": "A time-traveling agent embarks on a final assignment to prevent an elusive criminal."},
    {"id": 5, "title": "The Prestige", "genre": ["Mystery", "Drama", "Thriller"], "language": "Hollywood", "origin": "US", "description": "Two rival magicians engage in a dangerous game of one-upmanship."},
    {"id": 6, "title": "Shutter Island", "genre": ["Mystery", "Thriller"], "language": "Hollywood", "origin": "US", "description": "A U.S. Marshal investigates the disappearance of a patient from a psychiatric facility."},
    {"id": 7, "title": "Parasite", "genre": ["Thriller", "Drama"], "language": "Korean", "origin": "South Korea", "description": "A poor family schemes to infiltrate a wealthy household with unexpected consequences."},
    {"id": 8, "title": "Memories of Murder", "genre": ["Crime", "Drama", "Thriller"], "language": "Korean", "origin": "South Korea", "description": "Detectives investigate a series of brutal murders in a Korean province."},
    {"id": 9, "title": "Memento", "genre": ["Mystery", "Thriller"], "language": "Hollywood", "origin": "US", "description": "A man with short-term memory loss searches for his wife's killer."},
    {"id": 10, "title": "Past Lives", "genre": ["Drama", "Romance"], "language": "Hollywood", "origin": "US", "description": "Childhood sweethearts reconnect after decades apart."},
    {"id": 11, "title": "The Skin I Live In", "genre": ["Drama", "Horror", "Thriller"], "language": "Spanish", "origin": "Spain", "description": "A plastic surgeon's obsession leads to disturbing experiments."},
    {"id": 12, "title": "Mulholland Drive", "genre": ["Mystery", "Drama", "Thriller"], "language": "Hollywood", "origin": "US", "description": "A dark mystery unfolds in the surreal landscape of Los Angeles."},
    {"id": 13, "title": "Triangle", "genre": ["Horror", "Mystery", "Thriller"], "language": "Hollywood", "origin": "UK", "description": "A group of friends encounter supernatural events on a mysterious ship."},
    {"id": 14, "title": "Coherence", "genre": ["Sci-Fi", "Thriller"], "language": "Hollywood", "origin": "US", "description": "A dinner party takes a bizarre turn during a cosmic phenomenon."},
    {"id": 15, "title": "The Usual Suspects", "genre": ["Crime", "Mystery", "Thriller"], "language": "Hollywood", "origin": "US", "description": "A sole survivor tells a twisted tale of a legendary crime boss."},
    {"id": 16, "title": "The Game", "genre": ["Mystery", "Thriller"], "language": "Hollywood", "origin": "US", "description": "A wealthy businessman gets caught up in a dangerous psychological game."},
    {"id": 17, "title": "Dark City", "genre": ["Mystery", "Sci-Fi", "Thriller"], "language": "Hollywood", "origin": "US", "description": "A man struggles with memory loss in a city where reality is constantly altered."},
    {"id": 18, "title": "The Call", "genre": ["Thriller"], "language": "Korean", "origin": "South Korea", "description": "Two women connected by a phone call across time face deadly consequences."},
    {"id": 19, "title": "The Others", "genre": ["Horror", "Mystery", "Thriller"], "language": "Hollywood", "origin": "Spain", "description": "A mother and her children experience supernatural events in their isolated home."},
    {"id": 20, "title": "The Sixth Sense", "genre": ["Drama", "Mystery", "Thriller"], "language": "Hollywood", "origin": "US", "description": "A child psychologist treats a boy who claims to see dead people."},
    {"id": 21, "title": "Vikram Vedha", "genre": ["Action", "Crime", "Thriller"], "language": "Tamil", "origin": "India", "description": "A cop chases a notorious gangster in a cat-and-mouse game."},
    {"id": 22, "title": "13B", "genre": ["Horror", "Mystery", "Thriller"], "language": "Tamil", "origin": "India", "description": "A man discovers his TV show mirrors his family's life eerily."},
    {"id": 23, "title": "Drishyam 1 & 2", "genre": ["Crime", "Drama", "Thriller"], "language": "Malayalam", "origin": "India", "description": "A family man uses his wits to protect his family from a murder investigation."},
    {"id": 24, "title": "Ratsasan", "genre": ["Crime", "Thriller"], "language": "Tamil", "origin": "India", "description": "A cop investigates a series of brutal murders targeting school girls."},
    {"id": 25, "title": "Thadam", "genre": ["Action", "Crime", "Thriller"], "language": "Tamil", "origin": "India", "description": "A murder investigation becomes complex when identical twins are suspects."},
    {"id": 26, "title": "Kavaludaari", "genre": ["Mystery", "Thriller"], "language": "Kannada", "origin": "India", "description": "A traffic cop uncovers a decades-old murder mystery."},
    {"id": 27, "title": "Iratta", "genre": ["Mystery", "Thriller"], "language": "Malayalam", "origin": "India", "description": "A police officer investigates his twin brother's mysterious death."},
    {"id": 28, "title": "Aryabhatta", "genre": ["Thriller"], "language": "Kannada", "origin": "India", "description": "A psychological thriller about academic pressure and consequences."},
    {"id": 29, "title": "Gultoo", "genre": ["Thriller"], "language": "Kannada", "origin": "India", "description": "A cybercrime thriller involving online fraud and digital deception."},
    {"id": 30, "title": "Aa Karala Ratri", "genre": ["Horror", "Thriller"], "language": "Kannada", "origin": "India", "description": "Friends encounter terrifying events during a night out."},
    {"id": 31, "title": "Rangitaranga", "genre": ["Mystery", "Thriller"], "language": "Kannada", "origin": "India", "description": "A couple's vacation turns into a supernatural mystery."},
    {"id": 32, "title": "Shakahari", "genre": ["Thriller"], "language": "Kannada", "origin": "India", "description": "A vegetarian faces moral dilemmas in unexpected situations."},
    {"id": 33, "title": "Badla", "genre": ["Mystery", "Thriller"], "language": "Hindi", "origin": "India", "description": "A businesswoman seeks help from a lawyer to prove her innocence."},
    {"id": 34, "title": "Evaru", "genre": ["Crime", "Mystery", "Thriller"], "language": "Telugu", "origin": "India", "description": "A cop investigates a case involving his ex-lover and her husband."},
    {"id": 35, "title": "Kahaani", "genre": ["Mystery", "Thriller"], "language": "Hindi", "origin": "India", "description": "A pregnant woman searches for her missing husband in Kolkata."},
    {"id": 36, "title": "Game Over", "genre": ["Horror", "Thriller"], "language": "Tamil", "origin": "India", "description": "A video game designer faces her fears when reality blurs with gaming."},
    {"id": 37, "title": "Uppi 2", "genre": ["Psychological Thriller"], "language": "Kannada", "origin": "India", "description": "A man's psychological journey through surreal and mind-bending experiences."},
    {"id": 38, "title": "Tatsama Tadbhava", "genre": ["Crime", "Thriller"], "language": "Kannada", "origin": "India", "description": "A man becomes entangled in a web of crime and deception."},
    {"id": 39, "title": "Lucia", "genre": ["Psychological Thriller"], "language": "Kannada", "origin": "India", "description": "An insomniac's life changes when he starts taking experimental pills."},
    {"id": 40, "title": "Birbal", "genre": ["Mystery", "Thriller"], "language": "Kannada", "origin": "India", "description": "A case filed by a villager leads to unexpected revelations."},
    {"id": 41, "title": "U Turn", "genre": ["Mystery", "Thriller"], "language": "Kannada", "origin": "India", "description": "A journalist investigates accidents at a traffic circle."},
    {"id": 42, "title": "Window Seat", "genre": ["Thriller"], "language": "Kannada", "origin": "India", "description": "A journey takes an unexpected turn with mysterious fellow passengers."},
    {"id": 43, "title": "Coffee Thota", "genre": ["Thriller"], "language": "Kannada", "origin": "India", "description": "Events unfold in a coffee plantation setting."},
    {"id": 44, "title": "Ulidavaru Kandante", "genre": ["Crime", "Thriller"], "language": "Kannada", "origin": "India", "description": "Multiple perspectives reveal the truth behind a seaside incident."},
    {"id": 45, "title": "Tagaru", "genre": ["Action", "Crime", "Thriller"], "language": "Kannada", "origin": "India", "description": "A man seeks revenge against those who wronged his family."},
    {"id": 46, "title": "Heretic", "genre": ["Horror", "Thriller"], "language": "Hollywood", "origin": "US", "description": "Two missionaries encounter a dangerous test of faith."},
    {"id": 47, "title": "Cadaver", "genre": ["Crime", "Thriller"], "language": "Tamil", "origin": "India", "description": "A forensic pathologist unravels the mystery behind a series of murders."},
    {"id": 48, "title": "Officer on Duty", "genre": ["Thriller"], "language": "Hindi", "origin": "India", "description": "A police officer faces moral dilemmas during his duty."},
    {"id": 49, "title": "Blink Twice", "genre": ["Thriller"], "language": "Hollywood", "origin": "US", "description": "A psychological thriller about memory and perception."},
    {"id": 50, "title": "Paycheck", "genre": ["Action", "Sci-Fi", "Thriller"], "language": "Hollywood", "origin": "US", "description": "A man discovers clues about his erased memories."},
    {"id": 51, "title": "Jiivi", "genre": ["Crime", "Thriller"], "language": "Tamil", "origin": "India", "description": "A man becomes entangled in a murder investigation."},
    {"id": 52, "title": "Agent Sai Srinivas Athreya", "genre": ["Comedy", "Crime", "Thriller"], "language": "Telugu", "origin": "India", "description": "A detective investigates missing persons cases in his neighborhood."},
    {"id": 53, "title": "Get Out", "genre": ["Horror", "Mystery", "Thriller"], "language": "Hollywood", "origin": "US", "description": "A young man visits his girlfriend's family estate with sinister discoveries."},
    {"id": 54, "title": "The Butterfly Effect", "genre": ["Sci-Fi", "Thriller"], "language": "Hollywood", "origin": "US", "description": "A man discovers he can travel back in time to alter events."},
    {"id": 55, "title": "Donnie Darko", "genre": ["Drama", "Mystery", "Sci-Fi"], "language": "Hollywood", "origin": "US", "description": "A troubled teenager experiences visions of a mysterious rabbit."},
    {"id": 56, "title": "Talaash", "genre": ["Crime", "Drama", "Mystery"], "language": "Hindi", "origin": "India", "description": "A cop investigates an accident while dealing with personal trauma."},
    {"id": 57, "title": "Exam", "genre": ["Mystery", "Thriller"], "language": "Hollywood", "origin": "UK", "description": "Eight candidates compete in a final exam with deadly consequences."},
    {"id": 58, "title": "12 Monkeys", "genre": ["Mystery", "Sci-Fi", "Thriller"], "language": "Hollywood", "origin": "US", "description": "A time traveler tries to prevent a deadly plague."},
    {"id": 59, "title": "Pi", "genre": ["Drama", "Horror", "Mystery"], "language": "Hollywood", "origin": "US", "description": "A mathematician's obsession with numbers leads to paranoia."},
    {"id": 60, "title": "Accident", "genre": ["Action", "Crime", "Thriller"], "language": "Kannada", "origin": "India", "description": "A professional assassin stages elaborate accidents."},
    {"id": 61, "title": "Maharaja", "genre": ["Action", "Drama", "Thriller"], "language": "Tamil", "origin": "India", "description": "A barber seeks justice when his daughter is assaulted."},
    {"id": 62, "title": "Source Code", "genre": ["Action", "Mystery", "Sci-Fi"], "language": "Hollywood", "origin": "US", "description": "A soldier repeatedly experiences the last 8 minutes of another person's life."},
    {"id": 63, "title": "Neru", "genre": ["Crime", "Drama", "Thriller"], "language": "Malayalam", "origin": "India", "description": "A lawyer fights for justice in a challenging case."},
    {"id": 64, "title": "Saw", "genre": ["Horror", "Mystery", "Thriller"], "language": "Hollywood", "origin": "US", "description": "Two men wake up chained in a bathroom with a corpse."},
    {"id": 65, "title": "Raat Akeli Hai", "genre": ["Crime", "Mystery", "Thriller"], "language": "Hindi", "origin": "India", "description": "A cop investigates a murder in a politically connected family."},
    {"id": 66, "title": "Brahmayugam", "genre": ["Horror", "Thriller"], "language": "Malayalam", "origin": "India", "description": "A musician encounters supernatural forces in a mysterious mansion."},
    {"id": 67, "title": "Tumbbad", "genre": ["Fantasy", "Horror", "Thriller"], "language": "Hindi", "origin": "India", "description": "A man's greed leads him to a cursed treasure."},
    {"id": 68, "title": "Monica, Oh My Darling", "genre": ["Comedy", "Crime", "Thriller"], "language": "Hindi", "origin": "India", "description": "A young man gets caught in a web of blackmail and murder."},
    {"id": 69, "title": "Bank Chor", "genre": ["Comedy", "Crime", "Thriller"], "language": "Hindi", "origin": "India", "description": "Three friends attempt a bank robbery with unexpected results."},
    {"id": 70, "title": "A Thursday", "genre": ["Crime", "Drama", "Thriller"], "language": "Hindi", "origin": "India", "description": "A kindergarten teacher takes children hostage with shocking demands."},
    {"id": 71, "title": "Haseen Dillruba", "genre": ["Crime", "Mystery", "Romance"], "language": "Hindi", "origin": "India", "description": "A woman becomes the prime suspect in her husband's murder."},
    {"id": 72, "title": "Ittefaq", "genre": ["Crime", "Mystery", "Thriller"], "language": "Hindi", "origin": "India", "description": "A double murder investigation reveals conflicting testimonies."},
    {"id": 73, "title": "Ludo", "genre": ["Comedy", "Crime", "Drama"], "language": "Hindi", "origin": "India", "description": "Four stories interconnect through chance and choice."},
    {"id": 74, "title": "AK vs AK", "genre": ["Action", "Comedy", "Crime"], "language": "Hindi", "origin": "India", "description": "A filmmaker kidnaps an actor's daughter for his movie."},
    {"id": 75, "title": "Craazy", "genre": ["Thriller"], "language": "Kannada", "origin": "India", "description": "A psychological thriller exploring human relationships."},
    {"id": 76, "title": "Awe", "genre": ["Drama", "Fantasy", "Thriller"], "language": "Telugu", "origin": "India", "description": "Multiple interconnected stories explore human consciousness."},
    {"id": 77, "title": "Dobara", "genre": ["Thriller","Sci-fi"], "language": "Hindi", "origin": "India", "description": "A woman's second chance at life brings unexpected challenges."},
    {"id": 78, "title": "Forgotten", "genre": ["Mystery", "Thriller"], "language": "Korean", "origin": "South Korea", "description": "A man searches for his kidnapped brother and uncovers disturbing truths."},
    {"id": 79, "title": "Kaabil", "genre": ["Action", "Crime", "Drama"], "language": "Hindi", "origin": "India", "description": "A blind man seeks revenge against those who wronged his wife."},
    {"id": 80, "title": "Baazigar", "genre": ["Crime", "Drama", "Musical"], "language": "Hindi", "origin": "India", "description": "A young man seeks revenge against a business family."},
    {"id": 81, "title": "Kaun", "genre": ["Mystery", "Thriller"], "language": "Hindi", "origin": "India", "description": "A woman alone at home faces a mysterious visitor."},
    {"id": 82, "title": "Turthu Nirgamana", "genre": ["Thriller"], "language": "Kannada", "origin": "India", "description": "A thriller exploring human nature and consequences."},
    {"id": 83, "title": "Goodachari", "genre": ["Action", "Thriller"], "language": "Telugu", "origin": "India", "description": "A young man becomes a spy to serve his country."}
  ],
  "languages": ["English", "Hindi", "Tamil", "Telugu", "Malayalam", "Kannada", "Korean", "Spanish"]
};

// Application state
let appState = {
    currentMovieCount: 5,
    selectedLanguages: [],
    searchQuery: '',
    favoriteMovies: new Set(),
    watchedMovies: new Set(),
    currentRecommendations: [],
    isDarkMode: false
};

// DOM elements - will be set after DOM loads
let elements = {};

// Initialize the application
function initializeApp() {
    // Set DOM elements
    elements = {
        movieRange: document.getElementById('movieRange'),
        movieCount: document.getElementById('movieCount'),
        getRecommendations: document.getElementById('getRecommendations'),
        surpriseMe: document.getElementById('surpriseMe'),
        refreshSuggestions: document.getElementById('refreshSuggestions'),
        clearAll: document.getElementById('clearAll'),
        searchMovies: document.getElementById('searchMovies'),
        languageChips: document.getElementById('languageChips'),
        loadingSection: document.getElementById('loadingSection'),
        emptyState: document.getElementById('emptyState'),
        resultsHeader: document.getElementById('resultsHeader'),
        moviesGrid: document.getElementById('moviesGrid'),
        totalMovies: document.getElementById('totalMovies'),
        favoriteCount: document.getElementById('favoriteCount'),
        watchedCount: document.getElementById('watchedCount'),
        snackbar: document.getElementById('snackbar'),
        snackbarMessage: document.getElementById('snackbarMessage'),
        snackbarClose: document.getElementById('snackbarClose'),
        themeToggle: document.getElementById('themeToggle')
    };

    setupEventListeners();
    createLanguageChips();
    showEmptyState();
    updateStatistics();
    
    // Check for saved theme preference or detect system preference
    const savedTheme = localStorage.getItem('movieBuddyTheme');
    if (savedTheme) {
        appState.isDarkMode = savedTheme === 'dark';
    } else {
        appState.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    updateTheme();
}

// Event listeners
function setupEventListeners() {
    // Slider - fixed event handling
    if (elements.movieRange) {
        elements.movieRange.addEventListener('input', handleSliderChange);
        elements.movieRange.addEventListener('change', handleSliderChange);
    }

    // Action buttons
    if (elements.getRecommendations) {
        elements.getRecommendations.addEventListener('click', () => {
            getMovieRecommendations(appState.currentMovieCount);
        });
    }

    if (elements.surpriseMe) {
        elements.surpriseMe.addEventListener('click', () => {
            const randomCount = Math.floor(Math.random() * 5) + 3; // 3-7 movies
            getMovieRecommendations(randomCount);
            showSnackbar(`Surprise! Getting ${randomCount} random movies for you!`);
        });
    }

    if (elements.refreshSuggestions) {
        elements.refreshSuggestions.addEventListener('click', () => {
            if (appState.currentRecommendations.length > 0) {
                getMovieRecommendations(appState.currentRecommendations.length);
                showSnackbar('Refreshed your recommendations!');
            } else {
                showSnackbar('No recommendations to refresh. Get some first!');
            }
        });
    }

    if (elements.clearAll) {
        elements.clearAll.addEventListener('click', () => {
            clearAllRecommendations();
            showSnackbar('All recommendations cleared!');
        });
    }

    // Search
    if (elements.searchMovies) {
        elements.searchMovies.addEventListener('input', (e) => {
            appState.searchQuery = e.target.value.toLowerCase();
            if (appState.currentRecommendations.length > 0) {
                filterAndDisplayMovies();
            }
        });
    }

    // Theme toggle
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }

    // Snackbar close
    if (elements.snackbarClose) {
        elements.snackbarClose.addEventListener('click', hideSnackbar);
    }
}

// Handle slider change
function handleSliderChange(e) {
    const value = parseInt(e.target.value);
    appState.currentMovieCount = value;
    if (elements.movieCount) {
        elements.movieCount.textContent = value;
    }
}

// Create language filter chips
function createLanguageChips() {
    if (!elements.languageChips) return;
    
    elements.languageChips.innerHTML = '';
    
    movieData.languages.forEach(language => {
        const chip = document.createElement('div');
        chip.className = 'chip';
        chip.textContent = language;
        chip.addEventListener('click', () => toggleLanguageFilter(language, chip));
        elements.languageChips.appendChild(chip);
    });
}

// Toggle language filter
function toggleLanguageFilter(language, chipElement) {
    if (appState.selectedLanguages.includes(language)) {
        appState.selectedLanguages = appState.selectedLanguages.filter(l => l !== language);
        chipElement.classList.remove('active');
    } else {
        appState.selectedLanguages.push(language);
        chipElement.classList.add('active');
    }
    
    if (appState.currentRecommendations.length > 0) {
        filterAndDisplayMovies();
    }
}

// Get movie recommendations - fixed async logic
function getMovieRecommendations(count) {
    showLoading();
    
    // Use setTimeout instead of async/await for better compatibility
    setTimeout(() => {
        let filteredMovies = [...movieData.movies];
        
        // Apply language filter if any selected
        if (appState.selectedLanguages.length > 0) {
            filteredMovies = filteredMovies.filter(movie => 
                appState.selectedLanguages.includes(movie.language)
            );
        }
        
        // Apply search filter if any
        if (appState.searchQuery) {
            filteredMovies = filteredMovies.filter(movie =>
                movie.title.toLowerCase().includes(appState.searchQuery) ||
                movie.description.toLowerCase().includes(appState.searchQuery) ||
                movie.genre.some(g => g.toLowerCase().includes(appState.searchQuery))
            );
        }
        
        if (filteredMovies.length === 0) {
            hideLoading();
            showSnackbar('No movies found matching your criteria!');
            return;
        }
        
        // Randomly shuffle and select movies
        const shuffled = shuffleArray(filteredMovies);
        const selected = shuffled.slice(0, Math.min(count, shuffled.length));
        
        appState.currentRecommendations = selected;
        hideLoading();
        displayMovies(selected);
        showResultsHeader(selected.length);
        showSnackbar(`Found ${selected.length} amazing movies for you!`);
    }, 1500);
}

// Utility function to shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Filter and display current recommendations
function filterAndDisplayMovies() {
    let filteredMovies = [...appState.currentRecommendations];
    
    // Apply language filter
    if (appState.selectedLanguages.length > 0) {
        filteredMovies = filteredMovies.filter(movie => 
            appState.selectedLanguages.includes(movie.language)
        );
    }
    
    // Apply search filter
    if (appState.searchQuery) {
        filteredMovies = filteredMovies.filter(movie =>
            movie.title.toLowerCase().includes(appState.searchQuery) ||
            movie.description.toLowerCase().includes(appState.searchQuery) ||
            movie.genre.some(g => g.toLowerCase().includes(appState.searchQuery))
        );
    }
    
    displayMovies(filteredMovies);
    
    if (filteredMovies.length === 0) {
        showEmptyState();
        if (elements.resultsHeader) {
            elements.resultsHeader.classList.add('hidden');
        }
    } else {
        showResultsHeader(filteredMovies.length);
    }
}

// Display movies in grid
function displayMovies(movies) {
    if (!elements.moviesGrid) return;
    
    if (elements.emptyState) {
        elements.emptyState.classList.add('hidden');
    }
    
    elements.moviesGrid.innerHTML = '';
    
    movies.forEach((movie, index) => {
        const movieCard = createMovieCard(movie, index);
        elements.moviesGrid.appendChild(movieCard);
    });
}

// Create movie card element
function createMovieCard(movie, index) {
    const card = document.createElement('div');
    card.className = 'movie-card card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const isFavorite = appState.favoriteMovies.has(movie.id);
    const isWatched = appState.watchedMovies.has(movie.id);
    
    card.innerHTML = `
        <div class="movie-header">
            <h3 class="movie-title">
                <span>${movie.title}</span>
                <div class="movie-actions">
                    <button class="icon-button favorite-btn ${isFavorite ? 'active' : ''}" 
                            data-movie-id="${movie.id}" title="Add to favorites">
                        <span class="material-icons">${isFavorite ? 'favorite' : 'favorite_border'}</span>
                    </button>
                </div>
            </h3>
            <div class="movie-meta">
                <span class="movie-language">${movie.language}</span>
                <div class="movie-genres">
                    ${movie.genre.map(g => `<span class="genre-tag">${g}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="movie-body">
            <p class="movie-description">${movie.description}</p>
        </div>
        <div class="movie-footer">
            <div class="movie-origin">
                <span class="material-icons">place</span>
                ${movie.origin}
            </div>
            <button class="watch-toggle ${isWatched ? 'watched' : ''}" 
                    data-movie-id="${movie.id}">
                <span class="material-icons">${isWatched ? 'check_circle' : 'radio_button_unchecked'}</span>
                ${isWatched ? 'Watched' : 'Mark as Watched'}
            </button>
        </div>
    `;
    
    // Add event listeners
    const favoriteBtn = card.querySelector('.favorite-btn');
    const watchToggle = card.querySelector('.watch-toggle');
    
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', () => toggleFavorite(movie.id, favoriteBtn));
    }
    if (watchToggle) {
        watchToggle.addEventListener('click', () => toggleWatched(movie.id, watchToggle));
    }
    
    return card;
}

// Toggle favorite status
function toggleFavorite(movieId, button) {
    const movie = movieData.movies.find(m => m.id === movieId);
    const icon = button.querySelector('.material-icons');
    
    if (appState.favoriteMovies.has(movieId)) {
        appState.favoriteMovies.delete(movieId);
        button.classList.remove('active');
        if (icon) icon.textContent = 'favorite_border';
        showSnackbar(`Removed "${movie.title}" from favorites`);
    } else {
        appState.favoriteMovies.add(movieId);
        button.classList.add('active');
        if (icon) icon.textContent = 'favorite';
        showSnackbar(`Added "${movie.title}" to favorites`);
    }
    
    updateStatistics();
}

// Toggle watched status
function toggleWatched(movieId, button) {
    const movie = movieData.movies.find(m => m.id === movieId);
    
    if (appState.watchedMovies.has(movieId)) {
        appState.watchedMovies.delete(movieId);
        button.classList.remove('watched');
        button.innerHTML = '<span class="material-icons">radio_button_unchecked</span>Mark as Watched';
        showSnackbar(`Marked "${movie.title}" as unwatched`);
    } else {
        appState.watchedMovies.add(movieId);
        button.classList.add('watched');
        button.innerHTML = '<span class="material-icons">check_circle</span>Watched';
        showSnackbar(`Marked "${movie.title}" as watched`);
    }
    
    updateStatistics();
}

// Show/hide loading state
function showLoading() {
    if (elements.loadingSection) {
        elements.loadingSection.classList.remove('hidden');
    }
    if (elements.emptyState) {
        elements.emptyState.classList.add('hidden');
    }
    if (elements.resultsHeader) {
        elements.resultsHeader.classList.add('hidden');
    }
    if (elements.moviesGrid) {
        elements.moviesGrid.innerHTML = '';
    }
}

function hideLoading() {
    if (elements.loadingSection) {
        elements.loadingSection.classList.add('hidden');
    }
}

// Show empty state
function showEmptyState() {
    if (elements.emptyState) {
        elements.emptyState.classList.remove('hidden');
    }
    if (elements.resultsHeader) {
        elements.resultsHeader.classList.add('hidden');
    }
    if (elements.moviesGrid) {
        elements.moviesGrid.innerHTML = '';
    }
}

// Show results header
function showResultsHeader(count) {
    if (!elements.resultsHeader) return;
    
    elements.resultsHeader.classList.remove('hidden');
    if (elements.emptyState) {
        elements.emptyState.classList.add('hidden');
    }
    
    const title = count === 1 ? 'Your Movie Recommendation' : 'Your Movie Recommendations';
    const subtitle = count === 1 ? 
        'Here\'s a great movie picked just for you!' : 
        `Here are ${count} great movies picked just for you!`;
    
    const titleElement = document.getElementById('resultsTitle');
    const subtitleElement = document.getElementById('resultsSubtitle');
    
    if (titleElement) titleElement.textContent = title;
    if (subtitleElement) subtitleElement.textContent = subtitle;
}

// Clear all recommendations
function clearAllRecommendations() {
    appState.currentRecommendations = [];
    if (elements.moviesGrid) {
        elements.moviesGrid.innerHTML = '';
    }
    showEmptyState();
}

// Update statistics
function updateStatistics() {
    if (elements.totalMovies) {
        elements.totalMovies.textContent = movieData.movies.length;
    }
    if (elements.favoriteCount) {
        elements.favoriteCount.textContent = appState.favoriteMovies.size;
    }
    if (elements.watchedCount) {
        elements.watchedCount.textContent = appState.watchedMovies.size;
    }
}

// Snackbar functions
let snackbarTimeout; // Track the timeout globally

function showSnackbar(message) {
    if (!elements.snackbar || !elements.snackbarMessage) return;

    // Always clear previous timeout
    if (snackbarTimeout) clearTimeout(snackbarTimeout);

    elements.snackbarMessage.textContent = message;
    elements.snackbar.classList.remove('hidden', 'hide');
    elements.snackbar.classList.add('show');

    // Auto hide after 4 seconds
    snackbarTimeout = setTimeout(() => {
        hideSnackbar();
    }, 4000);
}

function hideSnackbar() {
    if (!elements.snackbar) return;

    // Clear the timeout so manual close doesn't trigger auto-hide again
    if (snackbarTimeout) {
        clearTimeout(snackbarTimeout);
        snackbarTimeout = null;
    }

    elements.snackbar.classList.add('hide');
    elements.snackbar.classList.remove('show');

    setTimeout(() => {
        elements.snackbar.classList.add('hidden');
        elements.snackbar.classList.remove('hide');
    }, 300);
}

// Make sure this is set up in your event listeners:
if (elements.snackbarClose) {
    elements.snackbarClose.addEventListener('click', hideSnackbar);
}

// Theme toggle - fixed implementation
function toggleTheme() {
    appState.isDarkMode = !appState.isDarkMode;
    updateTheme();
    localStorage.setItem('movieBuddyTheme', appState.isDarkMode ? 'dark' : 'light');
    showSnackbar(`Switched to ${appState.isDarkMode ? 'dark' : 'light'} mode`);
}

function updateTheme() {
    const icon = elements.themeToggle ? elements.themeToggle.querySelector('.material-icons') : null;
    
    if (appState.isDarkMode) {
        document.documentElement.setAttribute('data-color-scheme', 'dark');
        if (icon) icon.textContent = 'light_mode';
    } else {
        document.documentElement.setAttribute('data-color-scheme', 'light');
        if (icon) icon.textContent = 'dark_mode';
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);