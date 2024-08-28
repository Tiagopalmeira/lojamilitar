import React from 'react';
import '../css/home.css';
import testeImage from '../img/teste.png';

const Home = () => {


  const redirectTo = (url) => {
    window.location.href = url;
  };

  return (
    <div className="container">
      {/* Banner */}
      <div className="banner">
        {/* Banner content can be added here */}
      </div>

      {/* Categorias de Produtos */}
      <div className="categories">
        <div className="category-item">
          <img
            src="https://acdn.mitiendanube.com/stores/001/686/454/themes/amazonas/1-img-1347768361-1628001476-5b7e494388fc3c50be7095d249961d611628001477-480-0.webp?46755272"
            alt="Calçados"
            className="category-image"
          />
        </div>
        <div className="category-item">
          <img
            src="https://acdn.mitiendanube.com/stores/001/686/454/themes/amazonas/1-img-1114247873-1628001497-fefdf7a626cee4f2a333a96aed98e6f51628001498-480-0.webp?46755272"
            alt="Cutelaria e Ferramentas"
            className="category-image"
          />
        </div>
        <div className="category-item">
          <img
            src="https://acdn.mitiendanube.com/stores/001/686/454/themes/amazonas/1-img-490634494-1628001526-61a94143f8e289617332245187e668991628001526-480-0.webp?46755272"
            alt="Bolsas e Mochilas"
            className="category-image"
          />
        </div>
      </div>

      {/* Ofertas de Produtos */}
      <div className="offers-section">
        <div className="offers-title">
          CONFIRA NOSSAS OFERTAS EM PRODUTOS PARA CAMPING
        </div>
        <div className="offers">
          <div className="offer-item">
            <img
              src="https://acdn.mitiendanube.com/stores/001/686/454/products/kit-ca41-b8181834b91ad4f75016493406416094-480-0.webp"
              alt="Produto 1"
              className="offer-image"
            />
            <div className="offer-text">Kit Sobrevivência na Selva</div>
            <div className="offer-price">R$ 149,99</div>
            <button className="offer-button">COMPRAR</button>
            <button className="add-car">Adicionar ao carrinho</button>
          </div>

          <div className="offer-item">
            <img
              src="https://acdn.mitiendanube.com/stores/001/686/454/products/14601493767-cinto-para-calca-preto-com-fivela-metal-535d0849aa51e3204d16317170528101-480-0.webp"
              alt="Produto 2"
              className="offer-image"
            />
            <div className="offer-text">Cinto Tático Lona Premium</div>
            <div className="offer-price">R$ 14,99</div>
            <button className="offer-button">COMPRAR</button>
            <button className="add-car">Adicionar ao carrinho</button>
          </div>

          <div className="offer-item">
            <img
              src="https://acdn.mitiendanube.com/stores/001/686/454/products/conjunto-calca-combat-gandola-assault-preta-c05201d904f7e796c916286892807570-480-0.webp"
              alt="Produto 3"
              className="offer-image"
            />
            <div className="offer-text">Gandola Premium 3 Cores</div>
            <div className="offer-price">R$ 79,90</div>
            <button className="offer-button">COMPRAR</button>
            <button className="add-car">Adicionar ao carrinho</button>
          </div>
        </div>
      </div>

      {/* Parceiros */}
      <div className="partner-title">Nossos parceiros: </div>



      <div className="partner-items">
        <img
          src="https://nautika.vteximg.com.br/arquivos/logo-ntk-laranja-com-preto-versao-principal.png?v=638194160113270000"
          alt="Nautika"
          className="partner-logo"
        />
        <img
          src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/4/AmazonStores/A2Q3Y263D00KWC/ef6084961c6d521e941239d0e1e62b3c.w3781.h2554.png"
          alt="Mor"
          className="partner-logo"
        />
        <img
          src="https://cdn.awsli.com.br/1636/1636598/logo/a954eef3bd.png"
          alt="Belica"
          className="partner-logo"
        />
        <img
          src="https://cdn.awsli.com.br/531/531888/logo/logo-ly21n5kbqb.png"
          alt="Atalaia"
          className="partner-logo"
        />

        <img
          src="https://logopng.com.br/logos/caterpillar-9.png"
          alt="CatterPillar"
          className="partner-logo"
        />

      </div>

      {/* Mais Categorias de Produtos */}
      <div className="categories">
        <div className="category-item">
          <img
            src="https://acdn.mitiendanube.com/stores/001/686/454/themes/amazonas/1-img-2082826584-1628000325-b122feb070575750ef94e9f13345a0361628000325-480-0.webp?46755272"
            alt="Calçados"
            className="category-image"
          />
        </div>
        <div className="category-item">
          <img
            src="https://acdn.mitiendanube.com/stores/001/686/454/themes/amazonas/1-img-37108055-1628000359-2c20a97d2127c6c9a96865b836d11b301628000360-480-0.webp?46755272"
            alt="Cutelaria e Ferramentas"
            className="category-image"
          />
        </div>
        <div className="category-item">
          <img
            src="https://acdn.mitiendanube.com/stores/001/686/454/themes/amazonas/1-img-1715526513-1628000564-6658e62d89f2e445ee6962453e38282e1628000564-480-0.webp?46755272"
            alt="Bolsas e Mochilas"
            className="category-image"
          />
        </div>
      </div>

      <div className="promocoes-container">
        <h2 className="promocoes-title">PROMOÇÕES</h2>
        <div className="promocoes-list">
          <div className="promocao-item">
            <div className="promocao-offer">40% OFF</div>
            <img src="https://acdn.mitiendanube.com/stores/001/686/454/products/65532f6e53ff7bb33fba1178d072d0e3awsaccesskeyidakiatclmsgfx4g7qtfvdexpires1671563034signaturen2fxyraafls8nrq0dtf72b2hfysxo3d-69c0c340730241d83516400270354358-480-0.webp" alt="Bermuda e Bolsos Tecido Brim" className="promocao-image" />
            <div className="promocao-text">BERMUDA E BOLSOS TECIDO BRIM</div>
            <div className="promocao-price">R$ 89,99</div>
            <button className="promocao-button">COMPRAR</button>
            <button className="add-car">Adicionar ao carrinho</button>
          </div>

          <div className="promocao-item">
            <div className="promocao-offer">25% OFF</div>
            <img src="https://acdn.mitiendanube.com/stores/001/686/454/products/bota-tatica-onix-preta-rafale-lateraljpg1-552db9be2e7ec9e96716774984883551-480-0.webp" alt="Coturno Leve Impermeável" className="promocao-image" />
            <div className="promocao-text">COTURNO LEVE IMPERMEÁVEL</div>
            <div className="promocao-price">R$ 129,99</div>
            <button className="promocao-button">COMPRAR</button>
            <button className="add-car">Adicionar ao carrinho</button>
          </div>

          <div className="promocao-item">
            <div className="promocao-offer">25% OFF</div>
            <img src="https://acdn.mitiendanube.com/stores/001/686/454/products/ff6f7a2afc26ba54eaa01be1f3433f01awsaccesskeyidakiatclmsgfx4g7qtfvdexpires1673984445signature3bjbc5iyukkpmega8jpnnlsyqdk3d-438b3cc45ad13a8ee316424484459461-480-0.webp" alt="Adaptador GoPro Camping" className="promocao-image" />
            <div className="promocao-text">ADAPTADOR GOPRO CAMPING</div>
            <div className="promocao-price">R$ 49,99</div>
            <button className="promocao-button">COMPRAR</button>
            <button className="add-car">Adicionar ao carrinho</button>
          </div>

          <div className="promocao-item">
            <div className="promocao-offer">10% OFF</div>
            <img src="https://acdn.mitiendanube.com/stores/001/686/454/products/drop-mag-modular-preto-frente-c4bb9db4299534f98017013444380313-480-0.webp" alt="Chapa de Colete Air Soft" className="promocao-image" />
            <div className="promocao-text">CHAPA DE COLETE AIR SOFT</div>
            <div className="promocao-price">R$ 129,99</div>
            <button className="promocao-button">COMPRAR</button> 
            <button className="add-car">Adicionar ao carrinho</button>
            
          </div>
        </div>
      </div>

      <div className='sociais'>
      <img src={testeImage} alt="Descrição da imagem" />
    </div>
    </div>
  );
};

export default Home;
