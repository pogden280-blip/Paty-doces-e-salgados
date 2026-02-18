
export interface SocialLink {
  name: string;
  url: string;
  platform: 'instagram' | 'youtube' | 'facebook' | 'whatsapp';
}

export interface MenuItem {
  day?: string;
  title: string;
  price: string;
  desc: string;
  imageUrl: string;
  category: 'petiscos' | 'doces' | 'bebidas' | 'especial';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
