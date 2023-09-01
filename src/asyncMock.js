const products = [
    {
        id: '1',
        title: 'Taza Rick And Morty 001',
        price: 1400,
        category: 'rickandmorty',
        stock: 10,
        img: '/images/rym1.jpg',
        text: 'Taza ceramica importada de excelente calidad y resistente a rayaduras. Aptas para usar en microondas y lavavajillas.'
    }, 
    {
        id: '2',
        title: 'Taza Rick And Morty 002',
        price: 1400,
        category: 'rickandmorty',
        stock: 10,
        img: '/images/rym2.jpg',
        text: 'Taza ceramica importada de excelente calidad y resistente a rayaduras. Aptas para usar en microondas y lavavajillas.'
    },
    {
        id: '3',
        title: 'Taza Rick And Morty 003',
        price: 1400,
        category: 'rickandmorty',
        stock: 10,
        img: '/images/rym3.jpg',
        text: 'Taza ceramica importada de excelente calidad y resistente a rayaduras. Aptas para usar en microondas y lavavajillas.'
    },
    {
        id: '4',
        title: 'Taza Simpson 001',
        price: 1400,
        category: 'simpsons',
        stock: 10,
        img: '/images/simpson5.jpg',
        text: 'Taza ceramica importada de excelente calidad y resistente a rayaduras. Aptas para usar en microondas y lavavajillas.'
    },
    {
        id: '5',
        title: 'Taza Simpson 002',
        price: 1400,
        category: 'simpsons',
        stock: 10,
        img: '/images/simpson6.jpg',
        text: 'Taza ceramica importada de excelente calidad y resistente a rayaduras. Aptas para usar en microondas y lavavajillas.'
    },
    {
        id: '6',
        title: 'Taza Simpson 003',
        price: 1400,
        category: 'simpsons',
        stock: 10,
        img: '/images/simpson7.jpg',
        text: 'Taza ceramica importada de excelente calidad y resistente a rayaduras. Aptas para usar en microondas y lavavajillas.'
    },
    {
      id: '7',
      title: 'Taza Back To The Future 001',
      price: 1400,
      category: 'bttf',
      stock: 10,
      img: '/images/btf1a.jpg',
      text: 'Taza ceramica importada de excelente calidad y resistente a rayaduras. Aptas para usar en microondas y lavavajillas.'
  },
  {
      id: '8',
      title: 'Taza Back To The Future 002',
      price: 1400,
      category: 'bttf',
      stock: 10,
      img: '/images/btf2a.jpg',
      text: 'Taza ceramica importada de excelente calidad y resistente a rayaduras. Aptas para usar en microondas y lavavajillas.'
  },
  {
      id: '9',
      title: 'Taza Back To The Future 003',
      price: 1400,
      category: 'bttf',
      stock: 10,
      img: '/images/btf3.jpg',
      text: 'Taza ceramica importada de excelente calidad y resistente a rayaduras. Aptas para usar en microondas y lavavajillas.'
  },
]

export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(product => product.category === categoryId))
    }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(product => product.id === id))
    }, 500)
  })
}

export { products }