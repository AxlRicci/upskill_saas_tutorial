/* global $, Stripe */
//Document ready
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form'),
      submitBtn = $('#form-submit-btn');
  //Set our stripe public key
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  
  //When user clicks form submit button
  submitBtn.click(function(event){
    //prevent default submission behaviour
    event.preventDefault();
  //Collect the credit card fields.
  var ccNum = $('#card_number').val(),
      cvcNum = $('#card_code').val(),
      expMonth = $('#card_month').val(),
      expYear = $('#card_year').val();
  
  //Send the card info to stripe
  Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
  });
  
  //stripe will return a card token
  //Inject card token as hidden field into form
  //submit form to our rails app
});
