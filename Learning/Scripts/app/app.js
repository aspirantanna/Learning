(function () {
    var app = angular.module('store', []);

    app.controller('strorecontroller', function () {
        this.product = gem;
        this.products = gems;
    });

    var gem = {
        name: 'Dedecahedron',
        price: 2.95,
        description: 'Lorem Ipsum dummy contentLorem Ipsum dummy contentLorem Ipsum dummy content',
        canPurchase: true,
        soldOut:false,
    }

    var gems= [{
        name: 'Dedecahedron',
        price: 222.95,
        description: 'Lorem Ipsum dummy contentLorem Ipsum dummy contentLorem Ipsum dummy content',
        canPurchase: true,
        soldOut: false,
    },
    {
        name: 'Dumka',
        price: 4.95,
        description: 'Lorem Ipsum dummy contentLorem Ipsum dummy contentLorem Ipsum dummy content',
        canPurchase: true,
        soldOut: false,
    },
    {
        name: 'Kumka',
        price: 12.95,
        description: 'Lorem Ipsum dummy contentLorem Ipsum dummy contentLorem Ipsum dummy content',
        canPurchase: true,
        soldOut: false,
    },
    {
        name: 'Bilakki',
        price: 8.95,
        description: 'Lorem Ipsum dummy contentLorem Ipsum dummy contentLorem Ipsum dummy content',
        canPurchase: true,
        soldOut: false,
    }]
})();
    