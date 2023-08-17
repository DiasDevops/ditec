import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function ExemploAxiosPost() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const [createPost, setCreatePost] = useState(null);
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            nomePost: nome,
            emailPost: email
        };

        axios.post('https://64d427ed67b2662bf3dd01b9.mockapi.io/api/v1/alunos/', newPost)
            .then(response => {
                setCreatePost(response.data);
            }).catch(error => {
                alert("Error ao enviar dados do formulário", error);
            });

        setEnviado(true);
    }

    return (

        < div className="container" >
            <h2>Cadastro de Alunos</h2 >
            {enviado ? <div className="alert alert-success"> Dados Enviado com Sucesso!</div> :
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="nome" className="form-label">Nome: </label>
                            <input
                                required
                                type="text"
                                value={nome}
                                id="nome"
                                name="nome"
                                className="my-3 form-control"
                                onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email: </label>
                            <input
                                required
                                type="text"
                                value={email}
                                id="email"
                                name="email"
                                className="my-3 form-control"
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                            <button type="reset" className="btn btn-secondary">Limpar</button>
                        </div>
                    </div>
                </form>
            }
        </div >
    );
}

export default ExemploAxiosPost;