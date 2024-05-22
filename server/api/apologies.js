import mysql from 'mysql2/promise';

// Configuration de la base de données
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root', // Changez ce mot de passe par celui de votre base de données
  database: 'DevApologies',
  port: 3306
};

// Gestionnaire principal pour les requêtes HTTP
export default defineEventHandler(async (event) => {
  const { req, res } = event.node;

  // Ajouter une excuse
  if (req.method === 'POST' && req.url === '/api/apologies') {
    const body = await readBody(event); // Lire les données envoyées
    return await addApology(body); // Ajouter l'excuse
  }

  // Obtenir toutes les excuses
  if (req.method === 'GET' && req.url === '/api/apologies') {
    return await getApologies(); // Récupérer les excuses
  }

  // Obtenir une excuse par code HTTP
  if (req.method === 'GET' && req.url.startsWith('/api/apologies/')) {
    const httpCode = req.url.split('/').pop(); // Extraire le code HTTP de l'URL
    return await getApologyByHttpCode(httpCode); // Récupérer l'excuse
  }

  // Route non trouvée
  res.statusCode = 404;
  return { message: 'Not Found' };
});

// Fonction pour obtenir toutes les excuses
async function getApologies() {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig); // Connexion à la base de données
    const [rows] = await connection.execute('SELECT * FROM Apologies'); // Exécuter la requête SQL
    return rows; // Retourner les résultats
  } catch (error) {
    console.error('Database error:', error); // Afficher les erreurs
    throw error;
  } finally {
    if (connection) {
      await connection.end(); // Fermer la connexion
    }
  }
}

// Fonction pour obtenir une excuse par code HTTP
async function getApologyByHttpCode(httpCode) {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig); // Connexion à la base de données
    const [rows] = await connection.execute('SELECT * FROM Apologies WHERE http_code = "?"', [httpCode]); // Exécuter la requête SQL
    if (rows.length > 0) {
      return rows[0]; // Retourner l'excuse trouvée
    } else {
      throw new Error('Excuse non trouvée'); // Aucune excuse trouvée
    }
  } catch (error) {
    console.error('Database error:', error); // Afficher les erreurs
    throw error;
  } finally {
    if (connection) {
      await connection.end(); // Fermer la connexion
    }
  }
}

// Fonction pour ajouter une nouvelle excuse
async function addApology(body) {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig); // Connexion à la base de données
    const [result] = await connection.execute('INSERT INTO Apologies (http_code, message_apology) VALUES (?, ?)', [body.http_code, body.message_apology]); // Exécuter la requête SQL
    return { id: result.insertId, ...body }; // Retourner les données ajoutées
  } catch (error) {
    console.error('Database error:', error); // Afficher les erreurs
    throw error;
  } finally {
    if (connection) {
      await connection.end(); // Fermer la connexion
    }
  }
}
