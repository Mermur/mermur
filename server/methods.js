Meteor.methods({
	sms: function(phone, message, user_agreement){
		var plivo = Plivo.RestAPI({
			authId: '<AUTH_ID>',
		    authToken: '<AUTH_TOKEN>',
		});
		var mermur = message + "\n\n" + 'Sent anonymously via Mermur';
		var dst_phone = '+1' + phone;
		numbers_array = ['<NUMBER>','<NUMBER>','<NUMBER>','<NUMBER>','<NUMBER>',];
		var src_phone = numbers_array[Math.floor(Math.random()*numbers_array.length)];
		var params = {
			'src': src_phone,
			'dst': dst_phone,
			'text': mermur,
			'type': 'sms',
		};
		console.log('Plivo Params:', params);
		console.log('Sending Plivo Message');
		plivo.send_message(params, function(status, response){
			console.log('Status: ', status);
			console.log('API Response:\n', response);
		});
	}
});
