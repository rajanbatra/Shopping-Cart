var stripe = Stripe('pk_test_x3jDObm7EbR69pHqvhWn9IFG');


var $form = $('#checkout-form');

$form.submit(function(event) {
  $('#charge-error').addClass('hidden');
	$form.find('button').prop('disabled', true);
	stripe.createToken(card).then(function(result) {
  // Handle result.error or result.token

		type: 'card',
		card: {
 		number: $('#card-number').val(),
 		cvc: $('#card-cvc').val(),
 		exp_month: $('#card-expiry-month').val(),
 		exp_year: $('#card-expiry-month').val(),
 		name: $('#card-name').val()
 	}
}, stripeResponseHandler);
	return false;
});
  
  function stripeResponseHandler(status, response) {
  	if(response.error) {
  		$('#charge-error').text(response.error.message);
  		$('#charge-error').removeClass('hidden');
  		$form.find('button').prop('disabled', false);
  	} else { 
  		var token = response.id;
  		$form.append($('<input type="hidden" name="stripeToken" />').val(token));
  	
  		$form.get(0).submit();
  	}
  }