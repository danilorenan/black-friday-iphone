import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import StickyFooter from './components/StickyFooter';

function App() {
  const params = new URLSearchParams(window.location.search);
  const nomeLoja = params.get('loja') || 'iStore';
  const precoProduto = params.get('preco') || '4.299';
  const precoOriginal = params.get('precoOriginal') || '5.899';
  const numeroWpp = params.get('wpp') || '';
  const modelKey = params.get('model'); // Pega a chave ex: '17', '14pro'

  // Configuração dos Modelos (Nome e Imagem)
  const modelsConfig = {
    '12': { name: 'iPhone 12 128gb', image: '/iphone-12.png' },
    '12pro': { name: 'iPhone 12 Pro 128gb', image: '/iphone-12-pro.png' },
    '13': { name: 'iPhone 13 128gb', image: '/iphone-13.png' },
    '13pro': { name: 'iPhone 13 Pro 256gb', image: '/iphone-13-pro.png' },
    '14': { name: 'iPhone 14 128gb', image: '/iphone-14.png' },
    '14pro': { name: 'iPhone 14 Pro 128gb', image: '/iphone-14-pro.png' },
    '15': { name: 'iPhone 15 128gb', image: '/iphone-15.png' },
    '15pro': { name: 'iPhone 15 Pro 128gb', image: '/iphone-15-pro.png' },
    '16pro': { name: 'iPhone 16 Pro 128gb', image: '/iphone-16-pro.png' },
    
    '14promax': { name: 'iPhone 14 Pro Max', image: '/iphone-14-pro-max.png' },
    '15promax': { name: 'iPhone 15 Pro Max', image: '/iphone-15-pro-max.png' },
    '16promax': { name: 'iPhone 16 Pro Max', image: '/iphone-16-pro-max.png' },
    '17': { name: 'iPhone 17 Pro Max', image: '/iphone-17.png' }, // O fictício/novo
    
    'default': { name: 'iPhone 14 Pro Max', image: '/iphone-14.png' }
  };

  // Lógica para selecionar o modelo atual
  // Se o modelKey existir na config, usa ele. Se não, usa o default.
  const selectedModel = modelsConfig[modelKey] || modelsConfig['default'];

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-purple-500/30">
      <Header nomeLoja={nomeLoja} />
      <main>
        {/* Passamos o modelKey para o Hero continuar tratando a imagem se necessário */}
        <Hero precoProduto={precoProduto} precoOriginal={precoOriginal} model={modelKey} />
        
        <Benefits nomeLoja={nomeLoja} />
        
        <SocialProof nomeLoja={nomeLoja} />
      </main>
      
      {/* MUDANÇA AQUI: Passamos o nome do modelo escolhido para o Footer */}
      <StickyFooter numeroWpp={numeroWpp} modelName={selectedModel.name} />
    </div>
  );
}

export default App;