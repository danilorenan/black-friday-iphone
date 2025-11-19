import React from 'react';
import { MessageCircle } from 'lucide-react';

const StickyFooter = ({ numeroWpp }) => {
    const wppLink = `https://wa.me/${numeroWpp}?text=Olá, gostaria de garantir o iPhone 17 Pro Max na oferta da Black Friday!`;

    return (
        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 9999, backgroundColor: 'black' }} className="border-t border-white/20 p-4">
            <div className="container mx-auto max-w-md">
                <a
                    href={wppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2 text-lg animate-pulse-slow transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                    <MessageCircle className="w-6 h-6" />
                    GARANTIR MEU IPHONE AGORA
                </a>
                <p className="text-center text-xs text-gray-500 mt-2">
                    Oferta válida enquanto durarem os estoques.
                </p>
            </div>
        </div>
    );
};

export default StickyFooter;
