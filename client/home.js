Template.home.events({
	"click .send-mermur": function(event, template){
		$('#overlay').toggleClass('open');
	},
	"click #registration .close": function(events, template){
		$('#overlay').toggleClass('open');
	},
	"click .send": function(events, template){
		var phone = $('.phone').val();
		var message = $('.sms-message').val();
		var user_agreement = Session.get('agreementChecked');
		if(Session.get("agreementChecked") === true){
			Meteor.call('sms', phone, message, user_agreement);
			Router.go('/sent');
			return false;
		}else{
			alert('Please fill in all required fields and agree to Terms and Conditions');
			return false;
		}
	},
	"change .check": function(event){
		Session.set("agreementChecked", event.target.checked);
	}
});