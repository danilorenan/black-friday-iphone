import React from 'react';
import { Star } from 'lucide-react';

const SocialProof = ({ nomeLoja }) => {
    const reviews = [
        {
            name: "Ricardo M.",
            time: "Há 2 horas",
            text: "Chegou muito rápido! O celular está impecável, parece que saiu da caixa agora. Recomendo demais!"
        },
        {
            name: "Ana Julia",
            time: "Há 5 horas",
            text: "Atendimento nota 1000. Tive dúvidas sobre o parcelamento e me ajudaram na hora. O iPhone é lindo!"
        },
        {
            name: "Felipe S.",
            time: "Ontem",
            text: `Melhor preço que achei na Black Friday. A bateria veio 100% mesmo, conferi aqui. Valeu ${nomeLoja}!`
        }
    ];

    return (
        <section className="py-12 px-4 pb-32">
            <div className="container mx-auto max-w-md">
                <h2 className="text-2xl font-bold text-center mb-8">Quem comprou, aprovou</h2>
                <div className="space-y-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="glass p-4 rounded-xl border-l-4 border-l-green-500">
                            <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-bold text-white">{review.name}</span>
                                <span className="text-xs text-gray-500">{review.time}</span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
