import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaginaInicialdoSite (){
    const navigate = useNavigate(); // Hook para navegação

    const irParaCadastro = () => {
        navigate('/formulario-cadastro'); // Redireciona para a rota do formulário
    };

    return (
        <div className="container">
            <h1>Bem-vindo(a) ao Esporte Clube Bahia!</h1>
            <button 
                onClick={irParaCadastro} 
            >
                Clique aqui para se cadastrar
            </button>
        </div>
    );
};

export default PaginaInicialdoSite;