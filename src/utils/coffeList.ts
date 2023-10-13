import expressoTradicional from '../assets/coffes/expresso-tradicional.png';
import expressoAmericano from '../assets/coffes/expresso-americano.png';
import expressoCremoso from '../assets/coffes/expresso-cremoso.png';
import expressoGelado from '../assets/coffes/expresso-gelado.png';
import cafeComLeite from '../assets/coffes/cafe-com-leite.png';
import latte from '../assets/coffes/latte.png';
import capuccino from '../assets/coffes/capuccino.png';
import macchiato from '../assets/coffes/macchiato.png';
import mocaccino from '../assets/coffes/mocaccino.png';
import chocolateQuente from '../assets/coffes/chocolate-quente.png';
import cubano from '../assets/coffes/cubano.png';
import havaiano from '../assets/coffes/havaiano.png';
import arabe from '../assets/coffes/arabe.png';
import irlandes from '../assets/coffes/irlandes.png';

export interface Coffe {
  id: number;
  name: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
  isAvailable: boolean;
}

const coffeList: Coffe[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['TRADICIONAL'],
    price: 1,
    image: expressoTradicional,
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['TRADICIONAL'],
    price: 9.9,
    image: expressoAmericano,
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['TRADICIONAL'],
    price: 9.9,
    image: expressoCremoso,
    isAvailable: true,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['TRADICIONAL', 'GELADO'],
    price: 9.9,
    image: expressoGelado,
    isAvailable: true,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    image: cafeComLeite,
    isAvailable: true,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    image: latte,
    isAvailable: true,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    image: capuccino,
    isAvailable: true,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    image: macchiato,
    isAvailable: true,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    image: mocaccino,
    isAvailable: true,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['ESPECIAL', 'COM LEITE'],
    price: 9.9,
    image: chocolateQuente,
    isAvailable: true,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    price: 9.9,
    image: cubano,
    isAvailable: true,
  },
  {
    id: 12,
    name: 'Havaino',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['ESPECIAL'],
    price: 9.9,
    image: havaiano,
    isAvailable: true,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['ESPECIAL'],
    price: 9.9,
    image: arabe,
    isAvailable: true,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    price: 9.9,
    image: irlandes,
    isAvailable: true,
  },
];

export { coffeList };
