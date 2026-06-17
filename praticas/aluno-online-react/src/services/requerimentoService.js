const url = "http://localhost:3000/requerimentos";

const token = localStorage.getItem("app.token");

function logout() {
  localStorage.removeItem("app.token");
  localStorage.removeItem("app.usuario");
  window.location.href = "/login";
}

async function listarRequerimentos() {
    try {
    const resposta = await fetch(url, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
    }
);
  if (resposta.status === 401) {
    logout();
    throw new Error("401");
  }
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
      Authorization: `Bearer ${token}`,
    });
    return await resposta.json();
  } catch (error) {
    return { message: `Erro ao cadastrar! ${error.code}-${error.message}` };
  }
}



export { listarRequerimentos, cadastrarRequerimento}