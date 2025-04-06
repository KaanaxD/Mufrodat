document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const navMufrodat = document.getElementById('nav-mufrodat');
    const navVocab = document.getElementById('nav-vocab');
    const defaultArticle = document.getElementById('default');
    const mufrodatArticle = document.getElementById('mufrodat');
    const vocabArticle = document.getElementById('vocab');
    const nextback_M = document.getElementById('nextback-M');
    const nextback_V = document.getElementById('nextback-V');

    // Hide all articles except default initially
    defaultArticle.style.display = 'flex';
    mufrodatArticle.style.display = 'none';
    vocabArticle.style.display = 'none';
    nextback_M.style.display = 'none';
    nextback_V.style.display = 'none';


    // Add click handlers
    navMufrodat.addEventListener('click', function() {
        defaultArticle.style.display = 'none';
        mufrodatArticle.style.display = 'flex';
        vocabArticle.style.display = 'none';
        nextback_M.style.display = 'flex';
        nextback_V.style.display = 'none';
        
        // Update active state
        navMufrodat.classList.add('active');
        navVocab.classList.remove('active');
    });

    navVocab.addEventListener('click', function() {
        defaultArticle.style.display = 'none';
        mufrodatArticle.style.display = 'none';
        vocabArticle.style.display = 'flex';
        nextback_M.style.display = 'none';
        nextback_V.style.display = 'flex';
        
        // Update active state
        navVocab.classList.add('active');
        navMufrodat.classList.remove('active');
    }); 
});
