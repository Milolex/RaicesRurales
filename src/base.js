const { Database } = require("arangojs");
//const { aql } = require("arangojs");

const db = new Database({
  url: 'http://127.0.0.1:8529',
  databaseName: "_system",
  auth: { username: "root", password: "wills" },
});

// Intentar realizar una operación simple para verificar la conexión
async function checkConnection() {
  try {
    await db.listCollections(); // Intenta obtener la lista de colecciones

    console.log("Conexión a la base de datos establecida correctamente.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

checkConnection();

async function createNewCollection() {
    try {
      // Nombre de la nueva colección
      const collectionName = "Diego";
  
      // Crear la colección
      const collection = db.collection(collectionName);
      await collection.create();
      
      console.log(`Colección ${collectionName} creada exitosamente.`);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  createNewCollection();