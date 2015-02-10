# Mermur

## Description

Mermur, the anonymous texting application, has now gone completely open source! Now you can host your own Mermur server for others to use! 

## Prerequisites

We are huge fans of the [Meteor](https://www.meteor.com) framework, so we had a blast re-creating our application to leverage it's resources. That being said, the only requirement is Meteor.
 
[Installing](https://www.meteor.com/install) meteor is very easy, simply type in your console:

    curl https://install.meteor.com/ | sh

Outside of that, you should be good to go. Go ahead and download the repo using the following steps or your preferred method.

    git clone https://github.com/Mermur/mermur.git
    
    
## Configuration

Mermur uses the [Plivo](https://www.plivo.com/) framework to send it's SMS messages. The first step is to create your plivo account. Keep in mind, plivo requires a minimum fee  ($25) to leverage it's SMS service. That being said, $25 gets you roughly 7,142 messages (at $0.0035 a message). Keep in mind there are other services out there, such as [Twilio](https://www.twilio.com/). Also, when you create your Plivo Account, it would be wise to stop incoming Voice so you aren't paying for it as well (people will call back), unless you specifically need it. Moving on.

Plivo's `RestAPI` takes one argument i.e. an object that contains two keys - authId and authToken. So you are going to need to include these values with your own keys like so:

**/server/methods.js**

    var plivo = Plivo.RestAPI({
		authId: '<AUTH_ID>', 
		authToken: '<AUTH_TOKEN>',
	});
	
The next step is to set up the Plivo numbers. The secret sauce behind Meteor's anonymization of SMS messages is very simple. In the original build, we bought  9 (you can buy as many as you would like) phone [numbers](https://manage.plivo.com/number/search/) from plivo. In order to increase the anonymity we used numbers from all over the US. Anyway, these numbers were passed into an `array` and randomly chosen as the `src` number like so:

**/server/methods.js**

    numbers_array = ['<NUMBER>','<NUMBER>','<NUMBER>','<NUMBER>','<NUMBER>'];
	var src_phone = numbers_array[Math.floor(Math.random()*numbers_array.length)];

Basically, everyone who receives a Mermur is getting it from one of these numbers, rotating each time. Once you add these numbers you are all set. Type in the following commands to deploy your Mermur/Meteor server locally or however you have all this set up.

    cd mermur <- or whatever you've named the folder
    meteor

## Usage

So if you've used Mermur before, you already know how simple it is. There is almost no need for this usage section. For new-comers, we've left a test server deployed at [test.mermur.it](http://test.mermur.it) if you want to get an idea of how it works. Just for clarity, here are the steps.

* Select the 'Send Mermur' Button
* Enter 10-Digit Phone Number
* Enter your message (max length 133)
* Agree to Terms and Conditions
* Hit Send!

NOTICE: Mermur currently supports US numbers, however you can change the code easily to  adjust to international numbers. 

## Contributing

We know we have only scraped the surface on what can be done with Mermur, so we are handing it over to the public to blossom. Feel free to customize and add/remove whatever code you wish in your own build. However, if you feel like contributing to our original repo....more to come. (still updating the README..thanks!).

## Donations

If you could find it in your great big heart to donate at least $1 you will help us out so much! When you donate you help us pay for our servers, our Plivo account that sends the messages, the time it takes for us to develop Mermur itself and reply to all the support inquiries we get!

TL;DR: In the long run none of this stuff would be possible without you and we tremendously appreciate your help

[Donation Page](https://gumroad.com/l/DlQf)

