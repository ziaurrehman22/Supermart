function addToCart(name, price, image) {

    // Purana cart nikalo
    let c = JSON.parse(
        localStorage.getItem('superMartCart')
    ) || [];

    // New product cart mein add karo
    c.push({
        name: name,
        price: price,
        image: image
    });

    // Cart ko dobara localStorage mein save karo
    localStorage.setItem(
        'superMartCart',
        JSON.stringify(c)
    );

    // Message show karo
    alert(name + ' added to cart!');
}