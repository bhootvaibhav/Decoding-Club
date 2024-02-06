// Array of Gmail addresses
var gmailAccounts = ["reenapatidarvp@gmail.com"];

// YouTube channel link
var channelLink = "https://www.youtube.com/@DecodingwithVaibhav";

// Loop through each Gmail account and subscribe to the channel
gmailAccounts.forEach(function(gmail) {
  // Construct the subscription link
  var subscriptionLink = "https://www.youtube.com/channel/@DecodingwithVaibhav" + "/subscribe?email=" + gmail;
  
  // Open the subscription link in a new tab
  window.open(subscriptionLink);
});
