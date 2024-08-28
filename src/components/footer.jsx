import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (

        <footer style={{ backgroundColor: '#f9f9f9', padding: '2rem', textAlign: 'center' }}>
            <div className="contact-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="contact-info" style={{ textAlign: 'left' }}>
                    <h4>FALE CONOSCO:</h4>
                    <p>
                        <FaInstagram /> @lojamilitar
                    </p>
                    <p>lojamilitar@militar.br</p>
                    <p>Rua da loja é uma aí, nº 45, centro.</p>
                </div>
                <div className="social-media" style={{ textAlign: 'center' }}>
                    <h4>Nos acompanhe nas Redes Sociais</h4>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <FaInstagram size={24} />
                        <FaFacebookF size={24} />
                        <FaPinterestP size={24} />
                    </div>
                </div>
            </div>
            <div className="developer-info" style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
                <p>Criado e desenvolvido por Tiago</p>
                <p>tiago@mail.com</p>
            </div>

        </footer>
        
    );
};

export default Footer;
