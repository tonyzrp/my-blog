(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{265:function(n){n.exports={data:{post:{title:"Otimizando eventos - jQuery",path:"/blog/otimizando-eventos-j-query",date:"13. May 2013",timeToRead:3,tags:[{id:"iniciantes",title:"iniciantes",path:"/tag/iniciantes"},{id:"jQuery",title:"jQuery",path:"/tag/j-query"},{id:"DOM",title:"DOM",path:"/tag/dom"},{id:"eventos",title:"eventos",path:"/tag/eventos"},{id:"events",title:"events",path:"/tag/events"}],description:"Otimizando eventos - jQuery",content:'<p>Bom, esse post vai ser dedicado a eventos em jQuery. Esses dias surgiram algumas dúvidas sobre a manipulação de eventos no jQuery, por isso, resolvi falar um pouco sobre isso.</p>\n<p>Bom, uma coisa simples de fazer em JS é adicionar <em>event listeners</em> no DOM. Contudo, por ser algo trivial de ser feito, muita gente acaba fazendo de qualquer jeito. É o velho princípio do "funciona?! Então, não mexe".</p>\n<p>Vejamos o exemplo abaixo:</p>\n<pre class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//code.jquery.com/jquery.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n\t<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>$<span class="token punctuation">,</span> document<span class="token punctuation">,</span> undefined<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">var</span> lista <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'ul li\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t\tlista<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'clickou na LI : \'</span> <span class="token operator">+</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></pre>\n<p>Esse é um exemplo bem básico, ele adiciona um <em>event listener</em> no evento <em>click</em> nas LI\'s. Até ai, blz. Mas esse código pode ser melhorado. Para isso, vamos seguir algumas dicas do site <a href="http://desenvolvimentoparaweb.com/jquery/otimizar-codigos-jquery-aumentar-performance-front-end/" target="_blank" rel="nofollow noopener noreferrer">desenvolvimentoparaweb</a>.</p>\n<p>Primeiro, podemos otimizar os seletores, assim:</p>\n<pre class="language-js"><span class="token keyword">var</span> lista <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'ul li\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\n<p>Ficando assim:</p>\n<pre class="language-js"><span class="token keyword">var</span> lista <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"ul"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">\'li\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\n<p>Legal! Primeiro passo rumo à otimização foi dado!</p>\n<p>Agora, digamos que o seja necessário adicionar LI\'s dinamicamente na lista. Para fazer isso, vamos alterar o código da página, ficando assim:</p>\n<pre class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>add-li<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Add outra LI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//code.jquery.com/jquery.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n\t<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>$<span class="token punctuation">,</span> document<span class="token punctuation">,</span> undefined<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">var</span> lista <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"ul"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t\tlistaItens <span class="token operator">=</span> lista<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">\'li\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t\tbtnAddLI <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'#add-li\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t\tbtnAddLI<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tlista<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'&lt;li>Outra LI&lt;/li>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                \n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                     \n\n\t\tlistaItens<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'clickou na LI : \'</span> <span class="token operator">+</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></pre>\n<p>Ótimo! Agora está concluído, correto? Não! Ao testar, percebemos que o <em>event listener</em> que atrelamos às LI\'s não se aplica as novas LI\'s. WTF? Em versões anteriores do jQuery alguns simplesmente utilizariam o método <em>live()</em>, o que não é tão legal assim, mas resolveria o nosso problema, pois ele adicionaria o <em>event listener</em> nas LI\'s existentes e em LI\'s que fossem adicionadas ao DOM futuramente.</p>\n<p>Essa não é a melhor solução, visto que o <em>live()</em> já está depreciado. Outro ponto importante é que quando adicionamos o evento nas LI\'s, acabamos criando um evento para cada LI, o que não é o "ótimo" da questão.</p>\n<p>E se nós, ao invés de atrelarmos o evento nas LI\'s, fizéssemos isso na UL? "Quando alguma LI dessa UL for clicada, execute isso". Isso também é um dos pontos lá do <a href="http://desenvolvimentoparaweb.com/jquery/otimizar-codigos-jquery-aumentar-performance-front-end/" target="_blank" rel="nofollow noopener noreferrer">desenvolvimentoparaweb</a>.</p>\n<p>Com o código abaixo, matamos dois coelhos com uma só cajadada:</p>\n<pre class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Lorem 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>add-li<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Add outra LI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//code.jquery.com/jquery.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n\t<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>$<span class="token punctuation">,</span> document<span class="token punctuation">,</span> undefined<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">var</span> lista <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"ul"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t\tbtnAddLI <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'#add-li\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t\tbtnAddLI<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tlista<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'&lt;li>Outra LI&lt;/li>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                \n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               \n\n\t\tlista<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token string">\'li\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'clickou na LI : \'</span> <span class="token operator">+</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></pre>\n<h2 id="conclusão"><a href="#conclus%C3%A3o" aria-hidden="true"><span class="icon icon-link"></span></a>Conclusão</h2>\n<p>Embora seja um trabalho relativamente simples, há alguns pontos que precisam ser levados em conta ao manipular o DOM e adicionar eventos, etc. Não podemos simplesmente deixar "funcionando". Temos sempre que pensar no "ótimo"! É isso que faz a diferença.  Seja ela mínima, como no exemplo acima, ou gigantesca em aplicações maiores.</p>\n<p>Até a próxima!</p>\n',coverImage:{type:"image",mimeType:"image/jpeg",src:"/assets/static/jquery-events-dom.07cc2b7.de3d5c3.jpg",size:{width:860,height:252},sizes:"(max-width: 860px) 100vw, 860px",srcset:["/assets/static/jquery-events-dom.a67b0b2.de3d5c3.jpg 480w","/assets/static/jquery-events-dom.07cc2b7.de3d5c3.jpg 860w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 860 252' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-65'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='10'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-65)' width='860' height='252' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAATAEADASIAAhEBAxEB/8QAHAAAAgICAwAAAAAAAAAAAAAAAAUEBgECAwcI/8QAKxAAAQQBAwMDBAIDAAAAAAAAAQIDBBEFABIhBhMxIkFRBxRhgTJScrHw/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAUDBAcCBv/EACsRAAEDAwIEBAcAAAAAAAAAAAECAxEABCExQRNRobEFIjKBEmFxkcHS8P/aAAwDAQACEQMRAD8AQ42H926l2Csw3ibUxdpV/iT7fg6tDGJYkMLfbYLD7ddxpQKUqBNbkfv21nonG4x91xWRkIbjNIUtSwa8Akefk1xqSiZNZxU%2bchCFNR2z20PeoITYrcCeDfsPGsvuXFk%2bU7x2x1rTioJwNo61zQsXa0laSoWL/I02j4CR9%2b89Udbccjtl2wT8Xqxqn4yLhMVOdSw0pCe48g8qW3uvdQ99vqAPtqBkeqMTk4kl5MgNlwqUgIshSroXx4oaWu8bPwmdB9xPTT61RN4%2b6YQkxp1ikj8mRHzTbywhCn272j1oUkGv1zp%2b504641DnGU2G3SolLbdA8Vx/162be6emYVkMOy3JJTtSrZe1yroj2TemHS2bgZDDPQpDyDIxr5adQbGwmiPz%2b/Gi5ZLDZVIkJ2zuBB9p94qC4uVhIU2kiDBxt8q6/e6fyrrwRGmtR%2b35pG7eq/8AVVx72dWfpvpHPsZZp6ZkEr2Obu22wlPFfxvmua5%2bL%2beLIj7BMsqbksIcUq9qyASfFc6epzcWPJBeIbBbJLu70jaBd65t74XKg08QkE58omDMwYxtFLbt91XonTma8WY/KzpKcX35K1bgsq9rpRq6%2bKGp8KfKT0wthLyw1IlFLo/uAmwCfPnnRo17l5tAMAb/AJNOmlFQSSdv1oiZObPyinJcp1xTUEtI9VAJCRQocaXyJT7OQfQ084lCNoSkKNAbgdGjQlCQuAMRVgYRjnVpwWYyDLHUXalLQW3UIQRVpTXgHzqJDlyGsi8tt1YUpxKlG7s0OTo0apcNIUvHLsmpW8gE8z3NO81Okn6gNtF223UjekgUqgKNfPPnVW%2bqeYyDcdOOblOIhBph7sp4G9YUVH90OPHGjRo8PbQXmpA9I70tvFENKAP9Ff/Z' /%3e%3c/svg%3e"}}}}}}]);