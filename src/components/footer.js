const Footer = () => {
    return (
      <footer style={footerStyle}>
        <p style={textStyle}>© {new Date().getFullYear()} Marcos Pedroso. Todos os direitos reservados.</p>
        <div style={socialIconsStyle}>
          <span style={iconStyle}>Facebook</span>
          <span style={iconStyle}>Twitter</span>
          <span style={iconStyle}>Instagram</span>
        </div>
      </footer>
    );
  };
  
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  };
  
  const textStyle = {
    margin: '0',
  };
  
  const socialIconsStyle = {
    marginTop: '10px',
  };
  
  const iconStyle = {
    margin: '0 10px',
    cursor: 'pointer',
  };
  
  export default Footer;
  