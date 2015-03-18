onmessage = function(event) {
    console.log('onmessage', event);
    if (event.ports[0]) {
        var receivedPort = event.ports[0];
        receivedPort.onmessage = function() {
            console.log('onport message!!!');
            var title = 'Yay a message.';
            var body = 'We have received a push message.';
            var icon = '/images/icon-192x192.png';
            var tag = 'simple-push-demo-notification-tag';

            self.registration.showNotification(title, {
                body: body,
                icon: icon,
                tag: tag
            });
        };
    }
};