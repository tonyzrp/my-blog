(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{291:function(e){e.exports={data:{tag:{title:"iniciante",belongsTo:{edges:[{node:{title:"Integração Contínua - parte 2",path:"/blog/integracao-continua-parte-2",date:"15. May 2013",timeToRead:3,description:"Integração Contínua - parte 2",coverImage:{type:"image",mimeType:"image/jpeg",src:"/assets/static/phpci-all-builds-dashboard-banner.07cc2b7.266b83e.jpg",size:{width:860,height:252},sizes:"(max-width: 860px) 100vw, 860px",srcset:["/assets/static/phpci-all-builds-dashboard-banner.a67b0b2.266b83e.jpg 480w","/assets/static/phpci-all-builds-dashboard-banner.07cc2b7.266b83e.jpg 860w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 860 252' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-39'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='10'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-39)' width='860' height='252' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAATAEADASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAYHAgQFA//EADYQAAECBQAFCQYHAAAAAAAAAAECAwAEBhESBQcTITEIFjJBUVZhcZUVFyIkMzQlQlJjobHB/8QAGAEBAAMBAAAAAAAAAAAAAAAAAwACBAH/xAAjEQACAQMDBAMAAAAAAAAAAAAAAQIDEqEEEVETMjORMWFx/9oADAMBAAIRAxEAPwCc0jL1jV9KyWkZip55Lc4DkhEiwpKcVEccgersjty9PVoyylpqqtKIbQn4U%2bzpbt4dOM9SoR7t9B5FV9m5wO76q4sQCwte/iYepJxk9kvSCgrordv2yDS9NVm63kuuZ1k3tivRrF/4JEevNWse/wDM%2bmNRJn3SicfSlZAyvYGNdpzBxQQsjJVyARvMD1nxhEtXDycHmrWPf%2bZ9MahzVrHv/M%2bmNRIH154ZqJsq4ueuCl3mErKjmEkA33xOu%2bMIlv08kcdpCrnLZ17Mm3D8NaH%2bxEtZztZUPTqNKN1k/OKXMIY2apFpA3gm99/ZFoMrKVulKiMlXNj1xWvKJWper9nIk/Ptf0vxhaNS%2baTWEVqRti2t8kp1Estr1W6EUtCVKxcFyP3FRYGyR%2bkQhFave/0Sl2I4U398/vPSjXF9pxPHthCBNa%2bEZL/L5wP1B5QhHCwb4q84rPlBKKqAbvb79rq8FwhDafyIz6vxs//Z' /%3e%3c/svg%3e"},content:'<p>Olá! Olha aqui mais uma vez. Bom, antes de começar a falar aqui, preciso esclarecer algumas coisas. Primeiro, essa não é uma série de posts sequenciais, embora o título "parte1, parte2,..." possa sugerir isso. É apenas uma série sobre integração contínua. Na <a href="/2013/05/15/integracao-continua-parte-1/">parte 1</a> vimos uma introdução básica sobre integração contínua. Agora, vamos aplicar em um pequeno projeto meu para testes, o <a href="https://github.com/tonyzrp/mytwitter-laravel4" target="_blank" rel="nofollow noopener noreferrer">MyTwitter - Laravel</a>.</p>\n<p>Nesse projeto, tenho alguns testes automatizados já configurados e rodando localmente, como podemos ver aqui:</p>\n<p><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 651 254\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-5\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-5)\' width=\'651\' height=\'254\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAZAEADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwYAAQIEB//EAC4QAAEDAwMBBQgDAAAAAAAAAAECAxEABAUSEyExBhRBUaEVIlZxgZGU0ULB4f/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwD/xAAkEQABAgMJAQEAAAAAAAAAAAABAAIRkdEDExQhMUFRYZIEEv/aAAwDAQACEQMRAD8A8C7zatNgMW92FEAKUptQJIMjofD%2bq4txxQXreu9wp5TsdYIIn6z6VenKIVpnIhSgCBqV7wBgePPJ9awWMw2UlSL9BWQ0CSsTP8f8qMArnPMo5cCQQi6vveMwbYckD51SilxkhVzfnUI092EHjzmudTOWaWhCkXragTpBKhBiTH0FR9eUtmWlvOXjbS5DZLigD5xz8qaKX8N4Q3Hr4jQovlJ6SiJ9K13jIqQES%2bURAG34dfKgG7uVadVw%2bdJkS4rg%2bY5q%2b/Xkz3q5mIndV0%2b9KYHVMBDRC2HpA2nJPhoNDroVeXa1lS7m4UoiCS6okj70CKyKa7t3D2eym5xFtLrKHklq5UvhRPWOh4PFAVksCJCcM30EHdWJ559KWRV1HDsjqZmqmbJvcymUZDAkc4loQem45zWl5Ps%2bEnTg21K8BvOCaWKlE2DDzN1UtyOTNM6sn2fCSU4Rsny3nBWjkuzmkEYZBV5brlK1SlPzMO59GqIsWjczKYPa%2bG%2bHWfyl/qp7Xw3w6z%2bUv9Uv1K2GZ36dVG6b3M1X/9k=\' /%3e%3c/svg%3e" width="651" alt="Testes automatizados locais" data-srcset="/assets/static/testes-locais-mytwitter-laravel4.82a2fbd.dfee698.jpg 480w, /assets/static/testes-locais-mytwitter-laravel4.28c6e99.dfee698.jpg 651w" data-sizes="(max-width: 651px) 100vw, 651px" data-src="/assets/static/testes-locais-mytwitter-laravel4.28c6e99.dfee698.jpg"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/testes-locais-mytwitter-laravel4.28c6e99.dfee698.jpg" width="651" alt="Testes automatizados locais"></noscript></p>\n<p>Esse projeto já está integrado com o <a href="http://about.travis-ci.org/docs/" target="_blank" rel="nofollow noopener noreferrer">Travis-CI</a>, que é um serviço de integração contínua para projetos <em>open source</em>. Porém, vou aproveitar esse post para testar uma ferramenta nova, o <a href="http://www.phptesting.org/" target="_blank" rel="nofollow noopener noreferrer">PHPCI</a>, que parece ser bem interessante. Se quiser saber mais sobre <a href="https://github.com/Block8/PHPCI#what-it-does" target="_blank" rel="nofollow noopener noreferrer">o que ele faz</a>, <a href="https://github.com/Block8/PHPCI#pre-requisites" target="_blank" rel="nofollow noopener noreferrer">quais os requisitos</a>, etc.. basta acessar o <a href="https://github.com/Block8/PHPCI" target="_blank" rel="nofollow noopener noreferrer">repositório deles</a> no GitHub.</p>\n<h2 id="mãos-na-massa"><a href="#m%C3%A3os-na-massa" aria-hidden="true"><span class="icon icon-link"></span></a>Mãos na massa</h2>\n<p>Bom, primeiramente vamos seguir o passo a passo para instalação:</p>\n<ul>\n<li>clonar o repositório <code>git clone <a href="https://github.com/Block8/PHPCI.git" target="_blank" rel="nofollow noopener noreferrer">https://github.com/Block8/PHPCI.git</a></code></li>\n<li>instalamos as dependências via composer: <code>composer install</code></li>\n<li>permissão de execução no bin console dentro do projeto: <code>chmod +x ./console</code></li>\n<li>criar o arquivo config.php: <code>echo "&#x3C;?php" > config.php</code></li>\n<li>instalação do PHPCI: <code>./console phpci:install</code></li>\n</ul>\n<p>Após esses passos, o console pedirá algumas informações para a configuração do PHPCI com o MySQL.</p>\n<p>Depois disso, siga adiante:</p>\n<ul>\n<li>crie um VirtualHost apontando para o diretório clonado, lembre de permitir a reescrita de configurações: <code>AllowOverride All</code></li>\n<li>crie um arquivo .htaccess no diretório clonado com o seguinte conteúdo</li>\n</ul>\n<pre class="language-bash"><span class="token operator">&lt;</span>IfModule rewrite.c<span class="token operator">></span>\n    RewriteEngide On\n    RewriteCond %<span class="token punctuation">{</span>REQUEST_FILENAME<span class="token punctuation">}</span> <span class="token operator">!</span>-d\n    RewriteCond %<span class="token punctuation">{</span>REQUEST_FILENAME<span class="token punctuation">}</span> <span class="token operator">!</span>-f\n    RewriteRule ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ index.php <span class="token punctuation">[</span>QSA,L<span class="token punctuation">]</span>\n<span class="token operator">&lt;</span>/IfModule<span class="token operator">></span></pre>\n<p>Na documentação, eles dizem para criar um cronjob para sempre executar os builds, mas vamos fazer isso manualmente.</p>\n<p>Após essas configurações do PHPCI, você consegue acessar a página no browser, essa deve ser a home:</p>\n<p><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1366 768\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-13\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-13)\' width=\'1366\' height=\'768\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGwABAQEAAgMAAAAAAAAAAAAAAAcGAQQCAwX/xAAyEAABAgUBBAkDBQEAAAAAAAABAAIDBAUGEQcSITHRExQVFhhWYXGUCCJRNEFSdIGV/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAgEQACAgICAwEBAAAAAAAAAAAAAgEDERNRYSEzcTFB/9oADAMBAAIRAxEAPwDV2ZQLTnrfEWrxZCHMufhzI062G7Z2WgfaSfdfVlrX07iR4sN0SQ2mHBLp5rGn1BO4/wCKfacUySq%2bqEaXqMtCjwezy/ZfDbF3hrMHDwRlXWTsS2IYJiUSnRwRgCJIwW49ftaFetViMz%2bk7JaZxBlO6GnmQekpWSd47VZgILQ08Bz0lK48O1WYWzfZlpMDS626QA7O/qcPkuGWZargSbXpbd%2bN8lD3%2bqYTsZfoyLbQ04OC6NSmn8CpMIXIs7TbP6imf9JnNa1tmWqXOBtelgDgTJQ8H2TuZavSbPdel4xna6lDx7JivsZfoycO1dOJUhzZmnH9iO0WHPvvXvmKBYExCfDhxLehB4IL2x2B4B/i7aGCN29aZ1mWqHtAtilkHiRJQ8D33Kfa8W1QaZp7HmaZRafKTAmYLelgyzWOwXHIyAqVEeYXySzOsZI/bd7G3bwfXJOVE5tS3V9iK4w%2bLWg8M8NnHst2PqBnwMC3pP5L%2bSib3NcGbAIAYGnP5XivbVWr1qzR/DyWOyOyrPjJcW/ULUWjAt%2bTx/ZfyXPiHqXl%2bS%2bQ/koaivRXwRufkuXiHqXl%2bS%2bQ/kniHqXl%2bS%2bQ/koaiaK%2bBufkuXiHqXl%2bS%2bQ/ks3qBq5OXlbr6TMUmXlWOisi9JDjOcQWnOMEKYotilFnMQZNrzGJk7VThQ4M45kJgYwMhnAJO8saTx9SV1URZR61%2bG3exvoREXU5BERAEREB/9k=\' /%3e%3c/svg%3e" width="1366" alt="Home do PHPCI" data-srcset="/assets/static/phpci-home.82a2fbd.789bc0e.jpg 480w, /assets/static/phpci-home.cbab2cf.789bc0e.jpg 1024w" data-sizes="(max-width: 1366px) 100vw, 1366px" data-src="/assets/static/phpci-home.cbab2cf.789bc0e.jpg"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/phpci-home.cbab2cf.789bc0e.jpg" width="1366" alt="Home do PHPCI"></noscript></p>\n<h2 id="criando-um-projeto"><a href="#criando-um-projeto" aria-hidden="true"><span class="icon icon-link"></span></a>Criando um projeto</h2>\n<p>Após isso, selecionamos a opção "add project" no menu superior. Ele pede algumas configurações do repositório como: URL, nome do projeto, tipo do fonte (GitHub, Bitbucket ou local).</p>\n<p>Após adicionar o repositório, você é redirecionado para a tela do projeto no PHPCI. Antes de fazer o build, precisamos criar o arquivo de configuração do <em>build</em>, o <em>_config.yml</em> com o seguinte conteúdo:</p>\n<pre class="language-yml">build_settings:\n    ignore:\n        - "vendor"\n        - "tests"\n\nsetup:\n    composer:\n        action: "install --dev"\n\ntest:\n    php_mess_detector:\n        allow_failures: true\n    php_code_sniffer:\n        standard: "PSR0"\n    php_cpd:\n        allow_failures: true</pre>\n<p>Após adicionar o arquivo ao repositório, estamos prontos para fazer o primeiro build.</p>\n<h2 id="primeiro-build"><a href="#primeiro-build" aria-hidden="true"><span class="icon icon-link"></span></a>Primeiro Build</h2>\n<p>Para tal, o botão "build now" vai nos ajudar nessa primeira vez. Ao clicar nele, somos direcionados para a tela de visualização do build. Como você deve ter percebido, nada acontece. Isso ocorre porque não ativamos aquela <em>cron</em> que eles falam. Por isso, precisamos rodar as builds manualmente, assim:</p>\n<pre class="language-bash">/path/to/phpci/console phpci:run-builds</pre>\n<p>No melhor dos mundos, esse build deveria funcionar! Porém, meu projeto não está tão bom assim, visto que o build falhou, como podemos ver:</p>\n<p><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1366 768\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-17\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-17)\' width=\'1366\' height=\'768\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAcCAwEGCAQF/8QAPxAAAQIDBQMFCg8AAAAAAAAAAQIDAAQRBQYSITETQVEHCBUicRQWJTJSYXWBkbEjJDQ2U2JylKGywcLh8PH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/8QAIBEAAwACAQQDAAAAAAAAAAAAAAECAxIyESIxcSFBYf/aAAwDAQACEQMRAD8A26493Lr2nYIctJUmJtS%2bs2ucCFYcKQOqSaDf64%2bzLXLuM846nZyySg0OOZwJPnSTr6o0zkdQh3lLtTHtUjotGbKyFatjXWH8JdpxpKAuZRhJNQ4Qo14nfDcKUhb7Ni97xLi1B2UjUnMdIJoPwgFw7jA12Ujrp0gmnuhgTEuhtIIcmTjOL5RhpThXdn7oslWVMhRDT68X0roXTshdpXRi/TcS4RoVNyKTwE8kiMi4VwK%2bLJ/fUwww7VWEMpxcMSa%2byJFSgKmXoO1MHaHShdN3KuDKqSoCWO4juwKr20i6duvcdxhaAiw2Er6pXtEheemFWIUVWlI35DmPxGUq%2bypJhY84SpudZuJrB4Wl9aHyoqIm61It1M7Gg8hs%2bxN8oNqTKXFho2YE4ijPJTYpSvmprpHQ8vNSy2qh8EDWooR2xzZzdGBPXxnmW1bPwaRVQrmHEcCI6QasUNNlCHQK6kgn9YdttS/xDxzKdfP2y59KHkslLSHkZ9YqpTsyNYkVNNiikAD6yokloSzDTalg0rnpWKnSF5JJy4f5EFNEfipWVhCQo7woCLC6woEFCKHI5iKwg8VcP7lEtkryj7f4gEYa7mQfg20gncFDOFtzhFJ7z7OSEYVdKyx/NDLDVDXGqFjzg/mrZ/pOW9641w80Z5eDNI5uTTbPKRaKGkhCBZgNAScyWidfOTHS8EEK/E%2bkOPNe2eK0llBbpvrFbSiWwTBBGZZKsFYIIACsK7nCmtz7P9KS/wC6CCNcPNGeXgz/2Q==\' /%3e%3c/svg%3e" width="1366" alt="PHPCI primeiro build falhou" data-srcset="/assets/static/phpci-primeiro-build-falho.82a2fbd.d07e0a0.jpg 480w, /assets/static/phpci-primeiro-build-falho.cbab2cf.d07e0a0.jpg 1024w" data-sizes="(max-width: 1366px) 100vw, 1366px" data-src="/assets/static/phpci-primeiro-build-falho.cbab2cf.d07e0a0.jpg"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/phpci-primeiro-build-falho.cbab2cf.d07e0a0.jpg" width="1366" alt="PHPCI primeiro build falhou"></noscript></p>\n<p>Após alguns ajustes no meu código, podemos ver o build funcionando:</p>\n<p><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1366 768\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-21\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-21)\' width=\'1366\' height=\'768\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAYCBwEDCAQF/8QANxAAAQMCBAIHBgQHAAAAAAAAAQIDEQAEBQYSIRMxBwgUIkFRYRUlUnGBkRYjodEmQlN1krLC/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/EACARAAMAAgEEAwAAAAAAAAAAAAABAgMRMhIhMXEiQVH/2gAMAwEAAhEDEQA/AG/I2W8r4ngQcxE2fayvvNruwhWkJSBKZMDx%2btfZtckZIeU6jgsJKDBK7jQPmkkb/SkvodQh3pLxTWHQPZiN2VkK5tjnM1f6bdpbPDCrlPe1TxCFffy9KLhSkDr6myvfwDkcpT%2bTZzO/vAftUvwHkeAOz2Ox59vH7U/P27bYB4tydY8bnTERyk1K2YLS1KCH1SI/Nf1j6CaX4m2xBTkHIZSdbdoknyvgYrfbZHyEwoq7Ph7siIdukqAp9DoK9IbRqH8utM/apFSgCSyAB4lSa25BtiBd5PyGXQ6lixYJGkpt7gJB%2bYFeK7yNkcpJ49kwlXdk3QBM8gDI3mKstDgXOhtCo%2bFSTVY9YSTk7DdTYT72tvI/FTxM3SkWrcrYgdBt%2bzd9IOKXKVuBo4aE6iiDspsRE%2bkc%2bVdEW1zbuNApemNtxuPnXNnVzYTfZyvmW1Fv3aQSd9w4jyIrpVGGaEgJWkbbwmJoZKpqe30gJNNpfrMXRbWhlXDbdb37ylQR8tjNCH2QmEtFX6mpPNdnZab1SRO%2b4rU1rKoDg5eRpUUMngayvgKCj4japqeaIILJg%2blZ0u/1B/jWQFzuvb0FEJBtLTZlFuoTVadYJaVZQw5Ib0EYtbH/AGqz9J%2bI/YVV/WCTGU8OJMn2pbD9VVXDzRPLwYj9XJptnpIxFDSQhAwwGASdyWiefqTXS9FFC/E%2bkGPNe2eLEVFJbjxmtTSpbBooqY5OaJoorGCaq/rCn%2bD8P/ulv/1RRVcPNE8vBn//2Q==\' /%3e%3c/svg%3e" width="1366" alt="Build funcionando!" data-srcset="/assets/static/phpci-last-build-success.82a2fbd.c9b576b.jpg 480w, /assets/static/phpci-last-build-success.cbab2cf.c9b576b.jpg 1024w" data-sizes="(max-width: 1366px) 100vw, 1366px" data-src="/assets/static/phpci-last-build-success.cbab2cf.c9b576b.jpg"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/phpci-last-build-success.cbab2cf.c9b576b.jpg" width="1366" alt="Build funcionando!"></noscript></p>\n<p>Como vocês devem ter percebido, tive alguns problemas com o PHPCS, pois o phpci executava essa linha de comando:</p>\n<pre class="language-bash">RUNNING PLUGIN: php_code_sniffer\n    Executing: /var/www/phpci/vendor/bin/phpcs --standard<span class="token operator">=</span>PSR0 --ignore<span class="token operator">=</span>vendor/*,tests/*,app/config/*,app/database/* /var/www/phpci/build/project1-build5/\n        ERROR: the <span class="token string">"PSR0"</span> coding standard is not installed. The installed coding standards are Zend, Squiz, PHPCS, PSR2, PEAR, PSR1 and MySource\nPLUGIN STATUS: FAILED</pre>\n<p>Só consegui fazer esse comando rodar dizendo para executar no diretório <code>./app/</code>, não no root.. e não consegui fazer isso usando o PHPCI, caso alguém consiga, compartilha ai.</p>\n<h2 id="conclusão"><a href="#conclus%C3%A3o" aria-hidden="true"><span class="icon icon-link"></span></a>Conclusão</h2>\n<p>Após uma longa batalha para passar no QA, a build finalmente funcionou! Nesse exemplo, cada build foi executada na mão. Poderiamos usar o <em>cronjob</em> que eles sugerem, mas preferi assim, pelo menos para esse exemplo. No <a href="http://about.travis-ci.org/docs/" target="_blank" rel="nofollow noopener noreferrer">Travis</a> o <em>build</em> é disparado através de um hook no github... ou seja, a cada commit na branch master (ou nas que você definir), ele faz um build novo automaticamente.</p>\n<p>Meu dashboard até o build funcionar:</p>\n<p><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1366 768\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-22\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-22)\' width=\'1366\' height=\'768\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAYBBAUHCAID/8QAPhAAAQIFAQMJAwgLAAAAAAAAAQIDAAQFBhEHEhMhFhciQVVhcZTRFDFRCBUjJYGCobEkJicyYmRydJGy4f/EABkBAAMBAQEAAAAAAAAAAAAAAAACAwEEBf/EACARAAIBBAMBAQEAAAAAAAAAAAECAAMRElETIUFhBCP/2gAMAwEAAhEDEQA/AGyy6Dac9QA7V3ZBuaUvCkPTqWzshKQOiSfGMnL2vp4466zvaeFJOCpU8lKfuqPvjX%2bnFNkarqg8xUpZp9gU4r2XG0u8QlABwoEZjd6bCttwJApkgCBx%2br5fJ7/3IfjVQLnyLyFieotcj9PNlP0tKznj9aoieSOnmANukcD7/nRENKbHtaWdSp%2bj01xK8gJVIsgA8PgkGParVs9LgSbcpIBGdr2NvH5RlqezMyb5FVNn6cFJ236Wkn4VNBxFiWtXTZhRVt0Z3Ixh2fbUB%2bMMblp2ehBVycpKsdQkm8/lEG1bQG7/AFbpXT/km%2bHj/wAg/nuGTfIuzVuacF3epcpDBI2SmXnkJB8QDFR60NP3s7uoUtsKGD%2bnIzjuO1wPXmG1NqWeXFI5OUkbIBz7E3x/CEHXW3bfp%2bnr8zSqPTpWYTMsp3jMslCgCriMgQyJTdgoMVnZRfqJmiU2mo6qOPSxUQqnOJSVjZOQlA%2bJ8PsjpZptwJwsp7ukI5Y0CWlV%2bHZCgBTnUnrOejHROwc8UuY7kGKFc1UnQk88GYAezK1TKEMf1H3Hwig6tW0MZ%2bzMW1S7j8sxuk52VEnJA%2bEeHKfMqIIbB%2b8I5mUXnWgRluRPitZ2DEFZ6EWVSEwUEbsf5EQZCY6P0Y4d4hcRHxpyulR3i/AQga9n9m01/dMf7eEbHEhMhajuxxx1iNefKAYcZ01mi4nAM0x1/wAXjFfzi1QSVcKENpz7TK/PWfX1T1AW3LzAZS2CpAWMKQkq4Kz7zDFz33x2hLeUb9III9KiimmpI8nnVXYO1j7DnvvjtCW8o36RPPhfHaEt5Rv0gginEmhE5H3DnwvjtGX8o36Qc%2bF8doy/lG/SCCDiTQhyPsw58L47Rl/KN%2bkYq5dTLmuqlqplZm2XZRS0uFKWEIOUnI4gQQQCmg7AmF2PRM//2Q==\' /%3e%3c/svg%3e" width="1366" alt="Dashboard do projeto!" data-srcset="/assets/static/phpci-all-builds-dashboard.82a2fbd.498dd1a.jpg 480w, /assets/static/phpci-all-builds-dashboard.cbab2cf.498dd1a.jpg 1024w" data-sizes="(max-width: 1366px) 100vw, 1366px" data-src="/assets/static/phpci-all-builds-dashboard.cbab2cf.498dd1a.jpg"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/phpci-all-builds-dashboard.cbab2cf.498dd1a.jpg" width="1366" alt="Dashboard do projeto!"></noscript></p>\n<p>Bom, acho que é isso, galera.</p>\n<p>Fiz alguma cagada? Deixa o comentário ai.</p>\n<p>Até a próxima!</p>\n'}},{node:{title:"Integração Contínua - parte 1",path:"/blog/integracao-continua-parte-1",date:"14. May 2013",timeToRead:2,description:"Integração Contínua - parte 1",coverImage:{type:"image",mimeType:"image/jpeg",src:"/assets/static/tempos-modernos.07cc2b7.0126ff1.jpg",size:{width:860,height:252},sizes:"(max-width: 860px) 100vw, 860px",srcset:["/assets/static/tempos-modernos.a67b0b2.0126ff1.jpg 480w","/assets/static/tempos-modernos.07cc2b7.0126ff1.jpg 860w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 860 252' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-40'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='10'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-40)' width='860' height='252' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAATAEADASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAUHBgQI/8QAKxAAAQMDAwMCBgMAAAAAAAAAAQIDBAUREgAGIQcxQRMUCBUiYXGBMlGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMBRul9RX09qO5nJcRqPFWs%2b2XcqUEKwUcuwNwbDzbxcaSM0tp5DU%2bTKTBiRHEerIcAIRfwE91q4uEjnTuvVzazEqZFfc3A2W3VuO0ZpxbUR%2bQnAhYSpOTaVqUsgWuMQTbKww77NV3hVW2mc/apX6cVlxaQG0qVZKTawyPAJtcnvoO7cdUY3hXozVDp7y5YQW1yHFBCpNuyii%2bLYA%2b5%2b51r9mdJ361K9vU67ToL6r4x2byHlW7mwskD9nTXbWyIO3mIyKjEmTatKGTcKOyQ8lspUhYWFW9JSFYqCzcEdhzfXbL37t%2bjPt5PUlqoxXQ7jH9xJWlQSlC05pCUAqCADa6QbnzoEFU6WQ0SKsy3uRkyIClNID7OKF4i5Jso4908/c8ccIahX0/Lm36xE9CDGSlmPSmFYpccA5yPcIHe/cn9nVbq24IKq%2blNIjxZtSqR99EMYqaeWl5vH1QVJLSykItyfpKTwTfSHdNLh1OTIkUeityZFOacWuC7GcacQpa0pZbCUk%2bo6FqKyQMSLcgaCU7hqMetUtLsJkReLBq1rpv8Abjgj9j8aUQKm3HcQUtNuhJ/isAg61W1Nuy6lNSl6IFVJ94xI0N3%2bLWBAKli/cE2APnIntqvP9Epi4heZq0CRKCeYz0VIaWfICrC3%2bD8jQR/qrT40frBXIiErUx7lNw44pxRyxJ%2bpRJ8nzrU9I40cdTaPT1R2HIUpmUHmXW0rSvFClJuFA9ilJH40aNBS9oS5CYVPqQec99NIkyXiolTzhkqRdX9jEABPYeANeYeoEVmFvrcUWK2G47NQfbbQOyUhw2GjRoKZ8N9cqTteNIcmOrpsZl2UzHUbpbdCFEKHkc827X1bqs2mJWqfMjXbltyozaXgTlg4F5pv5SbDg8Dxa50aNBjp8CHQ/iS%2bXUiKzDgttNYtMoCRcx1kk/2SSSSeTq35EQ02PZ2w/wB0aNB//9k=' /%3e%3c/svg%3e"},content:'<p>Olá, senhoras e senhores. Hoje vou falar de Integração Contínua! Tenho tentado estudar esse assunto, gostaria de ter um pouco mais de tempo pra isso, mas vamos que vamos!</p>\n<p>Bom, segundo <a href="http://martinfowler.com/articles/continuousIntegration.html" target="_blank" rel="nofollow noopener noreferrer">Martin Fowler</a>:</p>\n<blockquote>\n<p>Integração contínua é uma prática de desevolvimento de <em>software</em> em que os membros de um time frequentemente integram seus trabalhos (...)</p>\n</blockquote>\n<p>Em outras palavras, é uma prática para automatizar e otimizar a integração do código de uma equipe.</p>\n<h2 id="um-exemplo-vale-mais"><a href="#um-exemplo-vale-mais" aria-hidden="true"><span class="icon icon-link"></span></a>Um exemplo vale mais</h2>\n<p>Acredito que a melhor forma de explicar o que é integração contínua é com um exemplo. Para tal, usarei uma versão simplificada do exemplo do próprio <a href="http://martinfowler.com/articles/continuousIntegration.html" target="_blank" rel="nofollow noopener noreferrer">Martin Fowler</a>. Vamos a ele, então.</p>\n<p>Digamos que eu esteja trabalhando em um projeto com uma equipe de desenvolvedores. Para completar minha tarefa, eu baixo a versão mais recente do repositório desse <em>software</em>.</p>\n<p>Altero alguns códigos de produção, sempre guiados por testes para garantir que tudo está funcionando. Temos aqui um ponto interessante, ao meu ver, não há integração contínua sem testes automatizados.</p>\n<p>Ao termino do meu trabalho, eu me certifico de que a aplicação está funcionando localmente, fazendo um <em>build</em> automatizado local e executando todos os testes. Só consideramos como <strong>sucesso</strong> se todos os testes passarem.</p>\n<p>Uma vez que os testes passaram, ai sim eu posso pensar em mandar as minhas alterações para o repositório. O lance é que, assim como eu estava desenvolvendo minhas tasks, outros desenvolvedores também estavam. Antes de mandar meu código, eu atualizo o código local com o repositório. Em caso de conflito, é minha responsabilidade resolve-los!</p>\n<p>Sem conflitos e com os testes passando, agora eu mando o código para o repositório. Meu trabalho está terminado, correto?! Não! Agora, uma nova build será feita automaticamente, pois há sempre a possibilidade de ter diferenças entre o meu ambiente local e o ambiente de <em>staging/produção</em> (esse problema pode ser minizado ou até mesmo removido usando <a href="http://www.vagrantup.com/" target="_blank" rel="nofollow noopener noreferrer">Vagrant</a>, por exemplo). Só quando as minhas alterações são integradas com sucesso ao <em>software</em> (aplicação é construída, todos os testes são executados, etc, etc) é que posso dizer que meu trabalho está terminado.</p>\n<p>Quando um <em>build</em> falha, o mesmo deve ser rapidamente corrigido!</p>\n<h2 id="conclusão"><a href="#conclus%C3%A3o" aria-hidden="true"><span class="icon icon-link"></span></a>Conclusão</h2>\n<p>O resultado de todo esse trabalho, é que a equipe passa menos tempo procurando erros e mais tempo em novos desafios (erro não é desafio, se é que me entendem).</p>\n<p>Embora seja um conceito muito foda, as empresas parecem não ligar muito para isso. Alguns até dizem que "o importante é funcionar" ou "não quero código limpo, quero funcionalidade", o que acho ridículo e imaturo, profissionalmente falando.</p>\n<p>Na verdade, nem mesmo testes automatizados se encontra fácil por ai. Vejam bem, não falo que a comunidade PHP não usa, e sim empresas de pequeno/médio porte. Muito pelo contrário, vemos que as empresas que realmente se importam com seus códigos estão fazendo um belo trabalho nesse sentido.</p>\n<p>Bem, fica aqui meu pensamento.</p>\n<p>Até a próxima!</p>\n'}}]}}}}}}]);