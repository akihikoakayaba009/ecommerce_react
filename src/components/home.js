import React from 'react';
import myImage from './assets/fundo.png';


const Home = () => {
    const containerStyle = {
        backgroundImage: `url(${myImage})`,
        width: '100%',
        height: '100vh', // Você pode ajustar a altura conforme necessário
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '5px',
        marginBottom: '15px',
    };

    return (
        <div style={containerStyle}>
         
           <center> <h1 style={{ color: 'white' }}>Bem-vindo ao meu site!</h1></center>
           
        </div>
    );
};

export default Home;
