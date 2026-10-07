const products = {

    snacks: [
        [
            'Lays Classic Chips',
            180,
            'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Chocolate Bar',
            250,
            'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Cookies Pack',
            220,
            'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Popcorn',
            150,
            'https://images.unsplash.com/photo-1585647347384-2593bc35786b?auto=format&fit=crop&w=600&q=80'
        ]
    ],


    grocery: [
        [
            'Basmati Rice 5kg',
            1250,
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Cooking Oil 1L',
            560,
            'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Wheat Flour 5kg',
            650,
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Sugar 1kg',
            190,
            'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=600&q=80'
        ]
    ],


    meat: [
        [
            'Chicken Breast 1kg',
            850,
            'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Beef Cubes 1kg',
            1450,
            'https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Chicken Nuggets',
            750,
            'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Frozen Kebabs',
            900,
            'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80'
        ]
    ],


    vegetable: [
        [
            'Fresh Tomatoes 1kg',
            180,
            'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Potatoes 1kg',
            150,
            'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Fresh Carrots 1kg',
            200,
            'https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Broccoli 500g',
            220,
            'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80'
        ]
    ],


    dairy: [
        [
            'Fresh Milk 1L',
            250,
            'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Cheese 200g',
            480,
            'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Yogurt 500g',
            220,
            'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80'
        ],

        [
            'Fresh Eggs Dozen',
            360,
            'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80'
        ]
    ]

};


// Products ko HTML mein show karne ka function

function renderProducts(type, icon) {

    document.getElementById('products').innerHTML = products[type]
        .map(p => {

            return `
                <div class="product-card">

                    <img 
                        src="${p[2]}" 
                        alt="${p[0]}"
                    >

                    <div class="product-info">

                        <i class="fa-solid ${icon}"></i>

                        <h3>${p[0]}</h3>

                        <span class="price">
                            Rs. ${p[1]}
                        </span>

                        <button 
                            class="add-btn"
                            onclick="addToCart(
                                '${p[0]}',
                                ${p[1]},
                                '${p[2]}'
                            )"
                        >
                            <i class="fa-solid fa-cart-plus"></i>
                            Add to Cart
                        </button>

                    </div>

                </div>
            `;

        })
        .join('');
}