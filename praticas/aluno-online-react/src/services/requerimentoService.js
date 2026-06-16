const url = "http://localhost:3000/requerimentos";

async function listarRequerimentos() {
    try {
    const resposta = await fetch(url);
    return await resposta.json();
  } catch (error) {
    return { message: `Erro ao listar! ${error.code}-${error.message}` };
  }    
}

async function cadastrarRequerimento(requerimento) {
  try {
    const resposta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(requerimento), 
      headers: { "content-type": "application/json" },
    });
    return await resposta.json();
  } catch (error) {
    return { message: `Erro ao cadastrar! ${error.code}-${error.message}` };
  }
}


export { listarRequerimentos, cadastrarRequerimento}