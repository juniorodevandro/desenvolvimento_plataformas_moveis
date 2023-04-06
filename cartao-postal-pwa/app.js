if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        console.log('ServiceWorker registrado com sucesso com escopo: ', registration.scope);
      }, function(err) {
        console.log('Falha ao registrar o ServiceWorker: ', err);
      });
    });
  }