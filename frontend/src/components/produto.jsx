import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import '../css/produto.css'; // Importando o CSS para estilizar a página do produto
import PhotoSlideshow from './slideshow'; // Importando o componente de slideshow
import Promo from './promo'; // Importando o componente de promo

const ProductPage = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // Lista de imagens para o slideshow
    const photos = [
        'https://acdn.mitiendanube.com/stores/001/686/454/products/kit-primeiros-socorros-luvas-atadura-curativo-analgesicos-695m11-a3d2bc33f5d08dbf1c16493406419735-1024-1024.webp',
        'https://acdn.mitiendanube.com/stores/001/686/454/products/kit-sobrevivencia-na-selva-saco-verde-695m1-edeadaaefbedf60bdc16493406417397-1024-1024.webp',
        'https://acdn.mitiendanube.com/stores/001/686/454/products/kit-ca41-b8181834b91ad4f75016493406416094-1024-1024.webp',
    ];

    return (
        <div className="product-page">
            <div className="product-container">
                <div className="product-info">
                    <h1>Kit Sobrevivência na Selva - Elite</h1>
                    <span className="price">R$ 149,99</span>
                    <div className="quantity">
                        <label>Quantidade: </label>
                        <input type="number" defaultValue={1} />
                    </div>
                    <button className="buy-now">Comprar agora</button>
                    <button className="add-cart">Adicionar ao carrinho</button>
                </div>

                <div className="product-image">
                    {/* Substitua a imagem estática pelo componente de slideshow */}
                    <PhotoSlideshow photos={photos} />
                </div>
            </div>

            <div className="description-section">
                <h2>Descrição do Produto</h2>
                <p>
                    A garantia da sobrevivência é o desejo de todos os seres vivos. Para garantir a sobrevivência humana em situações adversas, um kit contendo equipamentos e ferramentas é essencial.
                </p>
                <p>
                    Possuir um bom kit durável, portátil e confiável, deixou de ser requisito apenas para as forças armadas, sendo hoje indispensável para ciclistas, aventureiros e praticantes de trekking. Nunca se sabe quando será necessário enfrentar uma situação não programada.
                </p>
                <p>
                    O <strong>Kit Sobrevivência na Selva</strong> é completo, composto por 6 potes organizados, e conta com equipamentos necessários para situações de sobrevivência, como obtenção do fogo, alimento, purificação de água, sinalização e curativos.
                </p>
                <p>
                    Todos os potes são enviados em um saco de TNT verde personalizado com fechamento através de um cordão. Os kits que compõem o Kit Selva também podem ser adquiridos separadamente.
                </p>

                {isExpanded ? (
                    <>
                        <h3>O Kit é composto por:</h3>

                        <h4>Kit Sobrevivência</h4>
                        <ul>
                            <li>1 Isqueiro</li>
                            <li>1 Isca de fogo</li>
                            <li>1 Caderneta</li>
                            <li>1 Lápis</li>
                            <li>1 Borracha</li>
                            <li>1m de Cordão Velame</li>
                            <li>4 Sachês de Sal</li>
                            <li>2 Sachês de Açúcar</li>
                            <li>1 Kit Pesca</li>
                            <li>1 Kit Camuflagem</li>
                            <li>1 Manual de Sobrevivência</li>
                            <li>2 Purificadores de Água</li>
                            <li>1 Apito</li>
                            <li>1 Organizador</li>
                            <li>1 Pote Médio</li>
                        </ul>

                        <h4>Kit Primeiros Socorros</h4>
                        <ul>
                            <li>1 Esparadrapo</li>
                            <li>1 Atadura</li>
                            <li>4 Curativos Adesivos</li>
                            <li>4 Analgésicos</li>
                            <li>1 Frasco 20ml (vazio)</li>
                            <li>1 Organizador</li>
                            <li>1 Pote Médio</li>
                        </ul>

                        <h4>Kit Manutenção Armamento</h4>
                        <ul>
                            <li>1 Óleo</li>
                            <li>1 Cordel</li>
                            <li>1 Pincel</li>
                            <li>1 Protetor Auricular</li>
                            <li>1 Escova</li>
                            <li>1 Chave de Clicar</li>
                            <li>1 Pedaço de Tecido</li>
                            <li>1 Pedaço de Lona</li>
                            <li>1 Flanela</li>
                            <li>1 Cordel</li>
                            <li>1 Peso de Latão</li>
                            <li>1 Pote Médio</li>
                        </ul>

                        <h4>Kit Manutenção de Coturno</h4>
                        <ul>
                            <li>1 Pasta Para Calçados</li>
                            <li>1 Flanela</li>
                            <li>1 Escova Dental</li>
                            <li>1 Pedaço de Tecido</li>
                            <li>1 Escova para Limpeza de Coturno</li>
                            <li>1 Pote Grande</li>
                        </ul>

                        <h4>Kit Higiene</h4>
                        <ul>
                            <li>1 Creme Dental</li>
                            <li>1 Escova de Dentes</li>
                            <li>1 Barbeador</li>
                            <li>1 Gel para Barba</li>
                            <li>1 Cortador de Unhas</li>
                            <li>1 Sabonete</li>
                            <li>1 Organizador</li>
                            <li>1 Pote Médio (com espelho na parte interna da tampa)</li>
                        </ul>

                        <h4>Kit Costura</h4>
                        <ul>
                            <li>2 Agulhas</li>
                            <li>4 Botões</li>
                            <li>1 Retrós de Linha</li>
                            <li>1 Remendo</li>
                            <li>1 Organizador</li>
                            <li>1 Tesourinha</li>
                            <li>1 Pote Pequeno</li>
                        </ul>

                        <h3>Dimensões Aproximadas da Embalagem</h3>
                        <p>
                            <strong>Largura:</strong> 34 cm<br />
                            <strong>Comprimento:</strong> 36 cm<br />
                            <strong>Peso:</strong> 950 g
                        </p>

                        <p>
                            Na Loja Militar, você encontra os melhores Kits de Sobrevivência para sua aventura.
                        </p>
                    </>
                ) : (
                    <p>
                        O <strong>Kit Sobrevivência na Selva</strong> é completo, composto por 6 potes organizados e conta com equipamentos necessários para situações de sobrevivência. Clique no botão abaixo para ler mais.
                    </p>
                )}
                <div className="read-more-container">
                    <button onClick={handleToggleExpand} className="read-more-btn">
                        {isExpanded ? 'Ler menos' : 'Ler mais'}
                    </button>
                </div>
            </div>

            <div className="promotions-section">
                <Promo />
            </div>
        </div>
    );
};

export default ProductPage;
