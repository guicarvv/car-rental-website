import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message, rating });
    alert('Mensagem enviada com sucesso!');
    // Limpar os campos após envio
    setName('');
    setEmail('');
    setMessage('');
    setRating(1);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Contato com o Suporte</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '100px' }}
          />
        </div>
        <div>
          <label htmlFor="rating">Avaliação:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="1">1 - Ruim</option>
            <option value="2">2 - Regular</option>
            <option value="3">3 - Bom</option>
            <option value="4">4 - Muito Bom</option>
            <option value="5">5 - Excelente</option>
          </select>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit" style={{ padding: '10px 15px', borderRadius: '4px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}>
            Enviar
          </button>
          <button
            type="button"
            onClick={() => {
              setName('');
              setEmail('');
              setMessage('');
              setRating(1);
            }}
            style={{ padding: '10px 15px', borderRadius: '4px', backgroundColor: '#6c757d', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
