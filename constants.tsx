
import { MenuItem, SocialLink } from './types';

export const BRAND_DATA = {
  name: "Paty",
  fullName: "Petiscos & Doces",
  tagline: "Sabor que encanta, momentos que ficam.",
  heroQuote: "Feito com amor, servido com alegria.",
  address: "Atendimento em domicílio & Encomendas",
  city: "São Paulo - SP",
  mainImageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1920&auto=format&fit=crop",
  directMapsUrl: "https://maps.google.com",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: '@paty.petiscos', url: '#', platform: 'instagram' },
  { name: 'WhatsApp Paty', url: '#', platform: 'whatsapp' },
];

export const MENU_HIGHLIGHTS: MenuItem[] = [
  { 
    title: 'Cesta de Petiscos Premium', 
    price: 'A partir de R$ 89',
    category: 'petiscos',
    desc: 'Uma seleção rigorosa de queijos, embutidos artesanais e antepastos exclusivos.',
    imageUrl: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop'
  },
  { 
    title: 'Combo Festa Kids', 
    price: 'Consulte valores',
    category: 'especial',
    desc: 'Mini salgadinhos, docinhos tradicionais e muita diversão para os pequenos.',
    imageUrl: 'https://images.unsplash.com/photo-1530101128243-c84f9761e60f?q=80&w=800&auto=format&fit=crop'
  },
  { 
    title: 'Brigadeiros Gourmet', 
    price: 'R$ 4,50 unid.',
    category: 'doces',
    desc: 'Feitos com chocolate belga e confeitos selecionados. Explosão de sabor!',
    imageUrl: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=800&auto=format&fit=crop'
  },
  { 
    title: 'Tábua de Frios Paty', 
    price: 'R$ 120',
    category: 'petiscos',
    desc: 'Ideal para 4 pessoas. Acompanha torradas temperadas e geleias da casa.',
    imageUrl: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?q=80&w=800&auto=format&fit=crop'
  },
  { 
    title: 'Bolo de Pote Supreme', 
    price: 'R$ 18',
    category: 'doces',
    desc: 'Camadas generosas de recheio cremoso e massa fofinha.',
    imageUrl: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=800&auto=format&fit=crop'
  },
];
