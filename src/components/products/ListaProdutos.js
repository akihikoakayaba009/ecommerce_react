// src/ProductList.js

import React, { useEffect, useState } from 'react';
import api from '../../api'; // Utilize a configuração da API do Back4App
import '../css/produtoslista.css'; // Adicione esta linha para o CSS

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Faz a requisição para a classe _Product no Back4App
                const response = await api.get('/classes/_Product');
                setProducts(response.data.results);
            } catch (err) {
                // Detalhar o erro
                if (err.response) {
                    setError(`Erro ${err.response.status}: ${err.response.data.error || 'Erro ao buscar produtos'}`);
                } else if (err.request) {
                    setError('Nenhuma resposta recebida do servidor');
                } else {
                    setError(`Erro: ${err.message}`);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <a href='/Add-Produto'><button>add</button></a>
            <ul>
                {products.map(product => (
                    <li key={product.objectId}>

                        <h2>{product.nome}</h2> {/* Assumindo que os campos sejam nome, preco, e descricao */}
                        <p>Preço: {product.price}</p>
                        <p>Descrição: {product.description}</p>
                        <p>ordem: {product.order}</p>
                        <p>estoque: {product.stock}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
