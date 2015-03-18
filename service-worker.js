onmessage = function(event) {
    if (event.ports[0]) {
        var receivedPort = event.ports[0];
        receivedPort.onmessage = function() {
            var title = 'Song playing yo',
                body = 'Blerp',
                icon = './200_3876906.jpg',
                tag = 'a-song-is-playing';

            self.registration.showNotification(title, {
                body: body,
                icon: icon,
                tag: tag,
                silent: true,
                sticky: true
            });
        };
    }
};