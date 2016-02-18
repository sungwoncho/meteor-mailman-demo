if (Meteor.isClient) {
  Template.hello.events({
    'click button': function () {
      Meteor.call('sendEmail');
    }
  });
}

Meteor.methods({
  sendEmail() {
    if (Meteor.isServer) {
      Email.send({
        from: 'my@email.com',
        to: 'your@email.com',
        subject: 'Welcome to mailman!',
        html: '<h1>Welcome to mailman</h1><br><p>mailman opens outgoing emails in your browser.</p><br><p>- mailman</p>'
      });
    }
  }
});
