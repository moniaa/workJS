window.onload = pageLoad;

function pageLoad() {
    imageIntialize();
    viewProduct();
}

function cambia(val) {

    var nodos = document.getElementById(val);
    var atrybut = nodos.attributes.getNamedItem("src").nodeValue;
    var elementoRecibe = document.getElementById("firstImage");
    elementoRecibe.setAttribute("src", atrybut);

}

function imageIntialize() {
    var ourTable = [1, 2, 3, 4, 5];
    var length = ourTable.length;
    var gallery = document.getElementById("gallery");

    for (var x = 0; x < ourTable.length; x++) {

        var image = document.createElement('img');
        image.setAttribute('src', 'ob' + ourTable[x] + '.jpg');
        image.setAttribute('id', ourTable[x]);
        image.setAttribute('value', ourTable[x]);
        image.setAttribute('onclick', "cambia('" + ourTable[x] + "');");
        image.setAttribute('class', 'imageGallery');
        gallery.appendChild(image);
    };
}

function addToCart() {
    _edrone.app_id = '5972281698801';
    _edrone.version = '1.0.0';
    _edrone.action_type = 'add_to_cart';
    _edrone.platform_version = '1.1.26';
    _edrone.platform = 'custom';
    _edrone.product_skus = 'NL1975286';
    _edrone.product_ids = '12';
    _edrone.product_titles = 'Sorel Womens shoes Glacy';
    _edrone.product_images = 'http://demo-store.edrone.me/img/p/4/5/45-large_default.jpg';
    _edrone.product_urls = 'http://demo-store.edrone.me/index.php?id_product=12&controller=product';
    _edrone.product_category_ids = '2~3~4';
    _edrone.product_category_names = 'Główna~Shoes~Men shoes';

    var doc = document.createElement('script');
    doc.type = 'text/javascript';
    doc.async = true;
    doc.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + "//d3bo67muzbfgtl.cloudfront.net/edrone_2_0.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(doc, s);
}

function viewProduct() {
    window._edrone = window._edrone || {};
    _edrone.app_id = '5972281698801';
    _edrone.version = '1.0.0';
    _edrone.platform_version = '1.1.26';
    _edrone.platform = 'custom';
    _edrone.trace_url = 'https://api.edrone.me/trace.php';
    _edrone.email = 'wrobelmonika000@gmail.com';
    _edrone.phone = '';
    _edrone.first_name = 'Monika';
    _edrone.last_name = 'Wrobel';
    _edrone.product_skus = 'MAK03035';
    _edrone.product_ids = '3434';
    _edrone.product_titles = 'Buty';
    _edrone.product_images = 'http://x.z..com/media/s/x/cache/3/image/df/3/u/3u1a6597--1200q100.jpg';
    _edrone.product_urls = 'http://demo-store.edrone.me/index.php?id_product=12&controller=product';
    _edrone.order_id = '';
    _edrone.order_payment_value = '';
    _edrone.currency = '';
    _edrone.action_type = 'product_view';
    _edrone.country = 'Poland';
    _edrone.city = 'Gliwice';

    var doc = document.createElement('script');
    doc.type = 'text/javascript';
    doc.async = true;
    doc.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + "//d3bo67muzbfgtl.cloudfront.net/edrone_2_0.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(doc, s);
}