import dotenv from "dotenv";
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL; // URL do seu projeto Supabase
const supabaseKey = process.env.SUPABASE_KEY; // A chave da API armazenada nas variáveis de ambiente

// Verificando se as variáveis de ambiente estão carregadas corretamente
console.log("supabaseUrl:", supabaseUrl);
console.log("supabaseKey:", supabaseKey);

// Crie o cliente do Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
