(function (){
    var app = angular.module("MobileStore", []);
    var iphone = {
        name: "iphone7 plus",
        color: "APPLE RED",
        memory: "4GB RAM, 128GB INTERNAL STORAGE",
        price: 75000,
        image: "images/apple.jpg",
        isSoldOut: true,
        activeTab:"Description",
    };
    var microsoft = {
        name: "MICROSOFT 940XL",
        color: "ORANGE",
        memory: "4GB RAM, 128GB INTERNAL STORAGE",
        price: 60000,
        image: "images/microsoft.jpg",
        isSoldOut: true,
        activeTab:"Description",
    };

    app.controller("StoreController", function () {
        this.mobiles = [iphone, microsoft];
        this.setActiveTab = function (mobile,Tab) {
        mobile.activeTab = Tab;
        }
    });
})();