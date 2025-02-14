import supabase from "./db/db.mjs";

async function testConnection() {
  const { data, error } = await supabase.from("usuarios").select("*"); // Supondo que você tenha uma tabela chamada 'usuarios'

  if (error) {
    console.log("Erro ao conectar com o banco de dados:", error);
  } else {
    console.log("Conexão bem-sucedida. Dados recebidos:", data);
  }
}

testConnection();
