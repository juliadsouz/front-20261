function Tabela(props) {
    return <>
            {props.titulo && <caption>{props.titulo}</caption>}
            <table>
                <thead>
                    <tr>
                        {props.colunas.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.dados.map((linha, i) => (
                        <tr key={i}>
                            {linha.map((coluna, j) => (
                                <td key={j}>{coluna}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    }
    
    export default Tabela;