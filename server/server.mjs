//server.mjs

import express from "express";
import cors from "cors"; // Importe o pacote CORS
import supabase from "./db/db.mjs"; // Cliente Supabase configurado

// Criando a aplicação Express
const app = express();

// Iniciando o servidor na porta definida nas variáveis de ambiente ou padrão 3000
const PORT = process.env.PORT || 3000;

// Configuração do CORS
app.use(cors());

// === ROTAS DE USUÁRIOS ===

// Listar todos os usuários
app.get("/usuarios", async (req, res) => {
  try {
    const { data, error } = await supabase.from("usuarios").select("*");
    if (error) {
      return res
        .status(500)
        .json({ error: "Erro ao buscar usuários", details: error });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro interno do servidor", details: err });
  }
});

// Criar um novo usuário
app.post("/usuarios", async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const { data, error } = await supabase
      .from("usuarios")
      .insert([{ nome, email, senha }]);
    if (error) {
      return res
        .status(500)
        .json({ error: "Erro ao criar usuário", details: error });
    }
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro interno do servidor", details: err });
  }
});

// Atualizar um usuário
app.put("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  try {
    const { data, error } = await supabase
      .from("usuarios")
      .update({ nome, email, senha })
      .eq("id", id);
    if (error) {
      return res
        .status(500)
        .json({ error: "Erro ao atualizar usuário", details: error });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro interno do servidor", details: err });
  }
});

// Excluir um usuário
app.delete("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from("usuarios")
      .delete()
      .eq("id", id);
    if (error) {
      return res
        .status(500)
        .json({ error: "Erro ao excluir usuário", details: error });
    }
    res.status(200).json({ message: "Usuário excluído com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro interno do servidor", details: err });
  }
});

// === ROTAS DE PROJETOS ===

// Listar todos os projetos
app.get("/projects", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("projetos")
      .select("id_proj, nome_proj, descricao_proj, tecnologia_proj")
      .order("data_criacao", { ascending: false });
    if (error) {
      return res
        .status(500)
        .json({ error: "Erro ao buscar projetos", details: error });
    }
    res.status(200).json(data);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro interno do servidor", details: err.message });
  }
});

// Criar um novo projeto
app.post("/projetos", async (req, res) => {
  const { nome_proj, descricao_proj, tecnologia_proj, id_usuario } = req.body;
  try {
    const { data, error } = await supabase
      .from("projetos")
      .insert([{ nome_proj, descricao_proj, tecnologia_proj, id_usuario }]);
    if (error) {
      return res
        .status(500)
        .json({ error: "Erro ao criar projeto", details: error });
    }
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro interno do servidor", details: err });
  }
});

// Atualizar um projeto existente
app.put("/projetos/:id", async (req, res) => {
  const { id } = req.params;
  const { nome_proj, descricao_proj, tecnologia_proj, id_usuario } = req.body;
  try {
    const { data, error } = await supabase
      .from("projetos")
      .update({ nome_proj, descricao_proj, tecnologia_proj, id_usuario })
      .eq("id_proj", id);
    if (error) {
      return res
        .status(500)
        .json({ error: "Erro ao atualizar projeto", details: error });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro interno do servidor", details: err });
  }
});

// Excluir um projeto
app.delete("/projetos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from("projetos")
      .delete()
      .eq("id_proj", id);
    if (error) {
      return res
        .status(500)
        .json({ error: "Erro ao excluir projeto", details: error });
    }
    res.status(200).json({ message: "Projeto excluído com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro interno do servidor", details: err });
  }
});

//mostra a porta que ta usando
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
