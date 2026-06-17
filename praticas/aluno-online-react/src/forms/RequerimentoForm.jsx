import { useForm } from "react-hook-form";
import './RequerimentoForm.css'
import { Link } from "react-router";
import  {cadastrarRequerimento}  from "../services/requerimentoService";

function RequerimentoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

async function salvar(requerimento) {
  try {
    await cadastrarRequerimento(requerimento);

    alert("Requerimento cadastrado com sucesso!");

    reset();
  } catch (erro) {
    console.error(erro);
  }
}

  return (
    <form
  className="requerimento-form"
  onSubmit={handleSubmit(salvar)}
>
  <h2 className="tp-requerimento">Novo Requerimento</h2>

  <div className="campo">
    <label>Tipo de Requerimento</label>

    <select
      {...register("tipo", {
        required: "Tipo é obrigatório"
      })}
    >
      <option value="">Selecione um tipo...</option>
      <option value="matricula">Matrícula</option>
      <option value="historico">Histórico</option>
    </select>

    <p className="erro">{errors.tipo?.message}</p>
  </div>

  <div className="campo">
    <label>Descrição</label>

    <textarea
      {...register("descricao", {
        required: "Descrição é obrigatória",
        minLength: {
          value: 10,
          message: "Mínimo 10 caracteres"
        }
      })}
    />

    <p className="erro">{errors.descricao?.message}</p>
  </div>

  <div>
    <p>Data do Requerimento</p>

    <input
      type="date"
      {...register("data")}
    />
  </div>

  <div className="botoes">
    <Link to="/requerimentos"> <button> Cancelar </button> </Link>
    <button type="submit">Salvar</button>
  </div>
</form>
  );
}

export default RequerimentoForm;