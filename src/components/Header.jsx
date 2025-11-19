import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Header = ({ nomeLoja }) => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-white/10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <ShoppingBag className="w-6 h-6 text-purple-500" />
                    <span className="text-xl font-bold tracking-tighter">{nomeLoja}</span>
                </div>
                <div className="bg-purple-glow/20 border border-purple-500/30 px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">Black Friday 2025</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
