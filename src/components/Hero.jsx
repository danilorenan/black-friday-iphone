import React from 'react';
import { ShieldCheck, Truck, Battery, CreditCard } from 'lucide-react';
import iphoneImg from '../assets/iphone.png';

const Hero = ({ precoProduto, precoOriginal }) => {
    // Função para limpar e converter preço em número
    const parsePrice = (priceStr) => {
        if (!priceStr) return 0;
        // Remove tudo que não é dígito ou ponto/vírgula
        const cleanStr = priceStr.toString().replace(/[^\d,.]/g, '');
        // Remove pontos de milhar e troca vírgula por ponto decimal
        const normalizedStr = cleanStr.replace(/\./g, '').replace(',', '.');
        return parseFloat(normalizedStr);
    };

    // Função para formatar número para BRL
    const formatPrice = (value) => {
        return value.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    };

    const valorOriginal = parsePrice(precoOriginal);
    const valorAtual = parsePrice(precoProduto);
    const desconto = valorOriginal - valorAtual;
    const descontoFormatado = formatPrice(desconto);

    return (
        <section className="pt-24 pb-12 px-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-glow/30 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto max-w-md text-center">
                <h1 className="text-4xl md:text-5xl font-black mb-4 leading-none tracking-tighter text-white uppercase">
                    iPhone 14 Pro Max
                    <span className="block text-xl md:text-2xl font-normal mt-2 text-gray-200 normal-case">A oferta definitiva da Black Friday.</span>
                </h1>

                {/* Product Image */}
                <div className="relative my-8 mx-auto w-64 h-80 flex items-center justify-center animate-float">
                    <img
                        src={iphoneImg}
                        alt="iPhone 14 Pro Max"
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Pricing */}
                <div className="mb-6 space-y-1">
                    <p className="text-gray-500 text-lg line-through">De R$ {precoOriginal}</p>
                    <p className="text-5xl font-bold text-purple-500 tracking-tight">
                        R$ {precoProduto}
                    </p>
                    <div className="inline-block bg-green-500/20 text-green-400 text-sm font-bold px-3 py-1 rounded-full mt-2">
                        -R$ {descontoFormatado} OFF
                    </div>
                </div>

                {/* Scarcity Bar */}
                <div className="glass p-4 rounded-xl mb-8 text-left">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Estoque vendido</span>
                        <span className="text-white font-bold">87%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-gradient-to-r from-purple-600 to-pink-500 w-[87%] rounded-full relative">
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                    </div>
                    <p className="text-xs text-red-400 flex items-center gap-1 font-medium">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        Restam apenas 3 unidades nessa cor
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
