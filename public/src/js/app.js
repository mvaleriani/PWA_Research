if ('serviceWorker' in navigator){
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
            console.log('Service Worker has been registered!');
        });
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
            console.log('Service Worker has been registered!');
        });
}