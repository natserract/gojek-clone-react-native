
/* Image source - global */

var LogoImgSource = '../assets/images/logo/'
var IconImgSource = '../assets/images/icon/';
var ContentImgSource = '../assets/images/content/';

var ImgSource = {
    topHeader: {
        logo:  require(LogoImgSource + 'gojeklogo.png'),
        voucher: require(IconImgSource + 'bill.png'),
        topNavigationHeader: {
            back: require(IconImgSource + 'arrow_back.png'),
        }
    },
    navbottom: {
        home: {
            default: require(IconImgSource + 'home.png'),
            active: require(IconImgSource + 'home-active.png')
        },
        orders: {
            default: require(IconImgSource + 'order.png'),
            active: require(IconImgSource + 'order-active.png'),
        },
        chat: {
            default: require(IconImgSource + 'chat.png'),
            active: require(IconImgSource + 'help-active.png'),
        },
        inbox: {
            default: require(IconImgSource + 'inbox.png'),
            // active: require(IconImgSource + 'inbox-active.png')
        },
        account: {
            default: require(IconImgSource + 'account.png'),
            active: require(IconImgSource + 'account-active.png'),
        }
    },
    home: {
        logo: {
            gopay: require(IconImgSource + 'gopay.png'),
        },
        gopay_menu: {
            transfer: require(IconImgSource + 'pay.png'),
            scan: require(IconImgSource + 'scan.png'),
            topup: require(IconImgSource + 'saldo.png'),
            more: require(IconImgSource + 'menu.png'),
        },
        gojek_menu: {
            goride: require(IconImgSource + 'go-ride.png'),
            gocar: require(IconImgSource + 'go-car.png'),
            gobluebird: require(IconImgSource + 'go-bluebird.png'),
            gofood: require(IconImgSource + 'go-food.png'),
            gosend: require(IconImgSource + 'go-send.png'),
            godeals: require(IconImgSource + 'go-deals.png'),
            gopulsa: require(IconImgSource + 'go-pulsa.png'),
            more: require(IconImgSource + 'go-more.png'),
            moreDisabled: require(IconImgSource + 'more-disabled.png')
        },
        gofood: {
            logo: require(ContentImgSource + 'gofood.png'),
            content: {
                item1: require(ContentImgSource + 'item_gofood1.png')
            }
        },
        otherServices: {
            gopoints: require(IconImgSource + 'go-points.png'),
            gonearby: require(IconImgSource + 'go-nearby.png'),
            gobills: require(IconImgSource + 'go-bills.png'),
            goshop: require(IconImgSource + 'go-shop.png'),
            gomart: require(IconImgSource + 'go-mart.png'),
            gobox: require(IconImgSource + 'go-box.png'),
            gomassage: require(IconImgSource + 'go-mas.png'),
            godaily: require(IconImgSource + 'go-daily.png'),
        }
    },
    voucher: {
        vector: require(ContentImgSource + 'voucher_vector.png')
    },
    orders: {
        vector: require(IconImgSource + 'orders-history.png'),
        noitem: require(ContentImgSource + 'order_noitem.png')
    }
};

export default ImgSource;
