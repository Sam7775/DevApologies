import { reactive } from 'vue';

// État réactif pour stocker les excuses, la dernière excuse affichée, et le prochain code HTTP
const state = reactive({
  phrases: [],
  previousPhrase: null,
  nextHttpCode: 766,
});

// Fonction pour récupérer les excuses depuis le backend
async function fetchPhrases() {
  try {
    const res = await fetch('/api/apologies');
    const data = await res.json();
    state.phrases = data;
    if (data.length > 0) {
      // Déterminer le prochain code HTTP en fonction du plus grand code existant
      const maxHttpCode = Math.max(...data.map(phrase => phrase.http_code));
      state.nextHttpCode = maxHttpCode + 1;
    }
  } catch (error) {
    console.error('Error fetching:', error);
  }
}

// Fonction pour ajouter une nouvelle excuse
async function addPhrase(newPhrase) {
  const phraseToAdd = {
    http_code: state.nextHttpCode,
    message_apology: newPhrase
  };
  try {
    const res = await fetch('/api/apologies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(phraseToAdd)
    });
    const data = await res.json();
    state.phrases.push(data);
    state.nextHttpCode += 1; // Incrémenter le prochain code HTTP
  } catch (error) {
    console.error('Error adding phrase:', error);
  }
}

// Fonction pour obtenir une excuse aléatoire
function getRandomPhrase() {
  if (state.phrases.length === 0) return null;

  let newPhrase;
  do {
    const randomIndex = Math.floor(Math.random() * state.phrases.length);
    newPhrase = state.phrases[randomIndex].message_apology;
  } while (newPhrase === state.previousPhrase); // Éviter d'avoir la même excuse que précédemment

  state.previousPhrase = newPhrase;
  return newPhrase;
}

// Récupérer les excuses au chargement du module
fetchPhrases();

// Exporter les fonctions et l'état pour être utilisées ailleurs dans l'application
export function useStore() {
  return {
    ...state,
    getRandomPhrase,
    addPhrase,
  };
}
