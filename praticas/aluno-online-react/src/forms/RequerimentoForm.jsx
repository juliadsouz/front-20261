import { useForm } from "react-hook-form";

function RequerimentoForm() {
    const [erro, setErro] = useState();
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
  
    const salvar = async (dados) => {
      try {
        if (id) {
          await atualizar({ id, ...dados });
        } else {
          await criar(dados);
        }
        navigate("/requerimentos");
      } catch (error) {
        setErro(error.message);
      }
    };
  
    useEffect(() => {
      if (!id) {
        return;
      }
  
      const disparar = async () => {
        const resposta = await obter({id});
        reset(resposta);
      }
  
      disparar();
    }, []);
  
    return (
      <>
        <h1>Cadastro de Produtos</h1>
        <p>{erro}</p>
        <form onSubmit={handleSubmit(salvar)}>
          <input
            type="text"
            placeholder="Nome do Produto"
            {...register("nome")}
          />
          <input 
            type="text" 
            placeholder="Preço 0,00" 
            {...register("preco")} />
          <input 
            type="text"
            placeholder="Unidade" 
            {...register("unidade")} 
          />
          <Link to="/requerimentos">Cancelar</Link>
          <button type="submit">Salvar</button>
        </form>
      </>
    );
  }
export default RequerimentoForm;