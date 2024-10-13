// src/components/AddProduct.js
import React, { useState } from 'react';
import api from '../../api'; // Utilize a configuração da API do Back4App
import '../css/form.css'; // Adicione esta linha se necessário

const AddProduct = () => {
    const [newProduct, setNewProduct] = useState({
        nome: '',
        price: '',
        cover: '',
        description: '',
        productIdentifier: '',
        icon: { __type: 'File', name: '', url: '' }, // Estrutura para o campo `icon`
        order: '', // Definindo um valor padrão de 0
        title: '',
        subtitle: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Se o campo for "icon.name" ou "icon.url", atualiza o objeto `icon`
        if (name.startsWith('icon.')) {
            const iconField = name.split('.')[1];
            setNewProduct({
                ...newProduct,
                icon: {
                    ...newProduct.icon,
                    [iconField]: value
                }
            });
        } else {
            // Converte o valor para número se o campo for 'order'
            const updatedValue = name === 'order' ? parseInt(value, 10) : value;
            setNewProduct({ ...newProduct, [name]: updatedValue });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Ativar o carregamento

        // Defina a data de criação e atualização ao enviar
        const productWithDates = {
            ...newProduct,
            createdAt: { __type: 'Date', iso: new Date().toISOString() }, // Formato correto para Data
            updatedAt: { __type: 'Date', iso: new Date().toISOString() }  // Formato correto para Data
        };

        try {
            // Faz a requisição POST para a classe _Product no Back4App
            const response = await api.post('/classes/_Product', productWithDates);
            console.log('Produto adicionado com sucesso:', response.data);

            // Limpar o formulário após a adição
            setNewProduct({
                nome: '',
                price: '',
                cover: '',
                description: '',
                productIdentifier: '',
                icon: { __type: 'File', name: '', url: '' },
                order: 0, // Resetando para o valor padrão
                title: '',
                subtitle: '',
            });
        } catch (err) {
            // Detalhar o erro
            if (err.response) {
                console.error('Erro na resposta do servidor:', err.response.data);
                setError(`Erro ${err.response.status}: ${err.response.data.error || 'Erro ao adicionar produto'}`);
            } else if (err.request) {
                setError('Nenhuma resposta recebida do servidor');
            } else {
                setError(`Erro: ${err.message}`);
            }
        } finally {
            setLoading(false); // Desativar o carregamento
        }
    };

    return (
        <div>
            <h1>Adicionar Produto</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome do Produto"
                    value={newProduct.nome}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Preço"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="cover"
                    placeholder="URL da Capa"
                    value={newProduct.cover}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Descrição"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <input
                    type="text"
                    name="productIdentifier"
                    placeholder="Identificador do Produto"
                    value={newProduct.productIdentifier}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="icon.name"
                    placeholder="Nome do Ícone"
                    value={newProduct.icon.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="icon.url"
                    placeholder="URL do Ícone"
                    value={newProduct.icon.url}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="order"
                    placeholder="Ordem"
                    value={newProduct.order}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Título"
                    value={newProduct.title}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="subtitle"
                    placeholder="Subtítulo"
                    value={newProduct.subtitle}
                    onChange={handleInputChange}
                    required
                />
                {/* Se precisar de mais campos, adicione aqui */}

                <button type="submit" disabled={loading}>
                    {loading ? 'Adicionando...' : 'Adicionar Produto'}
                </button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default AddProduct;
