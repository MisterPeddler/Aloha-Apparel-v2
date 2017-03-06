$(function() {

    //regex function for verifying email input
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    //click handler for subscribe button
    //if empty ask user for valid email address
    //if valid email then thank user for subscribing
    //uses default html5 behaviour for invalid email
    $('.subscribe-button').on('click', function(event) {

        var newEmail = $('input').val();
        event.preventDefault();

        if (isEmail(newEmail)) {
            $('input').val('');
            alert("Thanks for subscribing!");
        } else if (newEmail === '') {
            alert("Please submit a valid email address.");
        }
    });

    //click handler for 'add to cart'
    var cartCount = 0;
    //when any 'add to cart' button is clicked it increments 'counter-text'
    //which is displayed over the cart logo
    $('.add-to-cart-button').on('click', function(event) {

        $('.cart-counter').css('display', 'block');
        cartCount++;
        $('.counter-text').text(cartCount);

    });

    //initialize flickity
    $('.carousel').flickity({
  "prevNextButtons": false,
    "imagesLoaded": true,
    "percentPosition": false,
    "cellAlign": "left",
    "contain": true,
    "autoPlay": true
});

});
