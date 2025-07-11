type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Contact extends Base {
  contact_infos?: {
    address?: string;
    telephone?: string;
    email?: string;
    facebook?: string;
    instagram?: string;
  };
  opening_hours?: {
    day: LocalizedText;
    time: string;
  }[];
  happy_hours?: {
    days: LocalizedText;
    time: string;
    description?: LocalizedText;
  };
}


interface HomePage extends Base {
  gallery_section?: GallerySection;
  intro_section?: IntroSection;
}

interface IntroSection {
  title: LocalizedText;
  highlights: IntroHighlight[];
  image: Image;
}

interface IntroHighlight {
  _key: string;
  subtitle: LocalizedText;
  description: LocalizedText;
}

interface GallerySection {
  title: LocalizedText;
  description?: LocalizedText;
  images: Image[];
}



interface Image {
  _type: "image";
  _key: string;
  asset: Reference;
  alt?: string | LocalizedText;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Category extends Base {
  title: LocalizedText;
  description?: LocalizedText;
  sub_categories?: SubCategory[];
  menu_list?: Food[];
}

interface SubCategory extends Base {
  title: LocalizedText;
  description?: LocalizedText;
  menu_list: (Food | Wine)[];
}

interface Food extends Base {
  title: LocalizedText;
  priceSection: {
    price: number;
    takeawayPrice?: number;
  };
  description?: LocalizedText;
  badge?: LocalizedText;
}

interface Wine extends Base {
  title: LocalizedText;
  priceSection: {
    bottlePrice: number;
    glassPrice: number;
    carafePrice?: number;
  };
  description?: LocalizedText;
  badge?: LocalizedText;
}

interface LocalizedText {
  sv: string;
  en: string;
}

interface LunchItem {
  title: LocalizedText;
  description: LocalizedText;
}

interface LunchConfiguration extends Base {
  title: LocalizedText;
  timeInfo: {
    days: LocalizedText;
    hours: string;
  };
  dagensLunch?: {
    title: LocalizedText;
    description?: LocalizedText;
    price: number;
    items: LunchItem[];
  };
  lunchPizza?: {
    title: LocalizedText;
    description?: LocalizedText;
    price: number;
    subcategoryRef?: SubCategory;
  };
  monthlySpecial?: {
    title: LocalizedText;
    description?: LocalizedText;
    price: number;
    dish?: LunchItem;
  };
}

interface FAQItem {
  question: LocalizedText;
  answer: LocalizedText;
  showCTA?: boolean;
  ctaType?: 'lunch' | 'delivery' | 'menu' | 'contact';
  ctaText?: LocalizedText;
}

interface FAQ extends Base {
  questions: FAQItem[];
}
