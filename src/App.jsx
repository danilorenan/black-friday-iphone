import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import StickyFooter from './components/StickyFooter';

function App() {
  const params = new URLSearchParams(window.location.search);
  // Garante que espaços e acentos venham corretos da URL
  const nomeLoja = params.get('loja') || 'iStore'; 
  const precoProduto = params.get('preco') || '4.299';
  const precoOriginal = params.get('precoOriginal') || '5.899';
  const numeroWpp = params.get('wpp') || '';
  const model = params.get('model');

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-purple-500/30">
      <Header nomeLoja={nomeLoja} />
      <main>
        <Hero precoProduto={precoProduto} precoOriginal={precoOriginal} model={model} />
        
        {/* MUDANÇA AQUI: Passando o nome da loja para o componente Benefits */}
        <Benefits nomeLoja={nomeLoja} />
        
        <SocialProof nomeLoja={nomeLoja} />
      </main>
      <StickyFooter numeroWpp={numeroWpp} />
    </div>
  );
}

export default App;