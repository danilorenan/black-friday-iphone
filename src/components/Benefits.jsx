import React from 'react';
import { ShieldCheck, Truck, Battery, CreditCard } from 'lucide-react';

const Benefits = ({ nomeLoja }) => {
    
    // Função para definir quais benefícios mostrar baseado na loja
    const getBenefitsList = () => {
        // Normaliza o nome para minúsculo para evitar erros de digitação na URL
        const loja = nomeLoja ? nomeLoja.toLowerCase() : "";

        // CONFIGURAÇÃO ESPECÍFICA PARA CENTRAL DO IPHONE
        if (loja.includes("central do iphone")) {
            return [
                {
                    icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
                    title: "Garantia",
                    desc: "Garantia de Loja" // Texto genérico como pedido
                },
                {
                    icon: <CreditCard className="w-8 h-8 text-purple-400" />,
                    title: "Até 18x", // Mudado para 18x
                    desc: "No cartão de crédito"
                }
                // Bateria e Envio removidos para essa loja
            ];
        }

        // CONFIGURAÇÃO PADRÃO (Para todas as outras lojas)
        return [
            {
                icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
                title: "Garantia",
                desc: "Apple Care incluso"
            },
            {
                icon: <Truck className="w-8 h-8 text-purple-400" />,
                title: "Envio Imediato",
                desc: "Para todo o Brasil"
            },
            {
                icon: <Battery className="w-8 h-8 text-purple-400" />,
                title: "Saúde 100%",
                desc: "Bateria original"
            },
            {
                icon: <CreditCard className="w-8 h-8 text-purple-400" />,
                title: "12x",
                desc: "No cartão de crédito"
            }
        ];
    };

    const benefits = getBenefitsList();

    return (
        <section className="py-12 px-4 bg-black/50">
            <div className="container mx-auto max-w-md">
                {/* Se tiver apenas 2 itens, centraliza eles visualmente */}
                <div className={`grid ${benefits.length === 2 ? 'grid-cols-2' : 'grid-cols-2'} gap-4`}>
                    {benefits.map((item, index) => (
                        <div key={index} className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors">
                            <div className="bg-purple-900/30 p-3 rounded-full">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">{item.title}</h3>
                                <p className="text-xs text-gray-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;