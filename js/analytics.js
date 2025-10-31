(function() {
    var GA_TRACKING_ID = 'G-GYPQZW4BDX';
    
    // Carrega o script do Google Analytics
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_TRACKING_ID;
    document.head.appendChild(gaScript);
    
    // Configura o Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);
    
    console.log('Google Analytics carregado!');
})();