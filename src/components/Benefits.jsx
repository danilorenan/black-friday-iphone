import React from 'react';
import { ShieldCheck, Truck, Battery, CreditCard } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
            title: "Garantia de 1 Ano",
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
            title: "12x Sem Juros",
            desc: "No cartão de crédito"
        }
    ];

    return (
        <section className="py-12 px-4 bg-black/50">
            <div className="container mx-auto max-w-md">
                <div className="grid grid-cols-2 gap-4">
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
