(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{274:function(n){n.exports={data:{tag:{title:"belongsTo",belongsTo:{edges:[{node:{title:"Concatenando campos de Models Relacionados - CakePHP",path:"/blog/concatenando-campos-de-models-relacionados-cake-php",date:"16. May 2013",timeToRead:3,description:"Concatenando campos de Models Relacionados - CakePHP",coverImage:{type:"image",mimeType:"image/jpeg",src:"/assets/static/cakephp-banner.07cc2b7.2f11865.jpg",size:{width:860,height:252},sizes:"(max-width: 860px) 100vw, 860px",srcset:["/assets/static/cakephp-banner.a67b0b2.2f11865.jpg 480w","/assets/static/cakephp-banner.07cc2b7.2f11865.jpg 860w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 860 252' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-48'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='10'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-48)' width='860' height='252' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAATAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAQCBwMFBgj/xAAqEAACAQMCBQMEAwAAAAAAAAABAgMABBESIQUHEzFhBjJRFEFTcSJCgf/EABkBAQADAQEAAAAAAAAAAAAAAAIAAQMEBf/EAB8RAAICAgMAAwAAAAAAAAAAAAECABExQRIhIiNC8P/aAAwDAQACEQMRAD8Ao1J5U9rnHwd6YS%2bP90z5FM/Tw/jWovFbp71Qfuu2iNzwCytqYX6FyRoJWUnAGNyauflDyssPVlvdXHE71lktCqFUQFmJGcgnYDb4zVMCa3jlRo4dZVg2w%2bD5r0Vyyl9Rem1urzhthb39lcxRSOjTdPJIyuhiNzht%2b4%2b3cVf1NZkUfIoYHj3f4Tg%2ba/L6w9MxwNwW7mZp9euGaPS66MA9tj/mKrGOS3gX%2bJLt8gVdXMCHjXEoOIcU4pPZdK3WR1h66kxhiW6ecbncAZ77VScT22kB49BHfIoIwZR2CdxOhV28kLqD3zH2KB5O9LvNI/ucnxWwWG3cZVUP6qX08P41pcSYQ6jUSuppBIVDkL4pc796KKBzNlFCbKyRVgDADURuax2V/dW6P0p3UahtnIGTvsaKKeKqZAA3cjNdz3E1s88rOcA7nbfH2qfEEXph8DVnGaKKrIMhFMAIgCQcg4NN2U0jPpZiR5ooqlzNHHkz/9k=' /%3e%3c/svg%3e"},content:'<p>Olá! Hoje o post vai ser mais rápido. Vou mostrar uma solução para concatenar campos de Modelos associados em um <a href="http://book.cakephp.org/2.0/en/models/virtual-fields.html" target="_blank" rel="nofollow noopener noreferrer">virtualField</a> no CakePHP. Essa dúvida surgiu na lista oficial do CakeTuga e eu resolvi tentar fazer. Após algumas buscas, encontrei uma <a href="http://ask.cakephp.org/questions/view/using_associated_tables_with_virtualfield" target="_blank" rel="nofollow noopener noreferrer"><em>thread</em></a> onde o cara conseguiu fazer isso. Legal, vamos a minha implementação.</p>\n<h2 id="show-me-the-code"><a href="#show-me-the-code" aria-hidden="true"><span class="icon icon-link"></span></a>Show me the code!</h2>\n<p>Primeiro, vamos definir nossa base de dados com duas tabelas: <em>users</em> e <em>companies</em>, com a seguinte estrutura:</p>\n<pre class="language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">`</span>companies<span class="token punctuation">`</span> <span class="token punctuation">(</span>\n  <span class="token punctuation">`</span>id<span class="token punctuation">`</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n  <span class="token punctuation">`</span>name<span class="token punctuation">`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>id<span class="token punctuation">`</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">`</span>users<span class="token punctuation">`</span> <span class="token punctuation">(</span>\n  <span class="token punctuation">`</span>id<span class="token punctuation">`</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n  <span class="token punctuation">`</span>name<span class="token punctuation">`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token punctuation">`</span>company_id<span class="token punctuation">`</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>id<span class="token punctuation">`</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>companies<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>name<span class="token punctuation">`</span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span>\n<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'company 1\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">\'company 2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>users<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>name<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>company_id<span class="token punctuation">`</span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span>\n<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'user 1\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">\'user 2\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\n<p>Agora, vamos definir os nosso modelos, começando pelo Model Company:</p>\n<pre class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token scope">App<span class="token punctuation">::</span></span><span class="token function">uses</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'AppModel\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'Model\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Company</span> <span class="token keyword">extends</span> <span class="token class-name">AppModel</span>\n<span class="token punctuation">{</span>\n\n\t<span class="token keyword">public</span> <span class="token variable">$displayField</span> <span class="token operator">=</span> <span class="token single-quoted-string string">\'name\'</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">public</span> <span class="token variable">$hasMany</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>\n\t\t<span class="token single-quoted-string string">\'User\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">array</span><span class="token punctuation">(</span>\n\t\t\t<span class="token single-quoted-string string">\'className\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'User\'</span><span class="token punctuation">,</span>\n\t\t\t<span class="token single-quoted-string string">\'foreignKey\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'company_id\'</span><span class="token punctuation">,</span>\n\t\t\t<span class="token single-quoted-string string">\'dependent\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token boolean">false</span>\n\t\t<span class="token punctuation">)</span>\n\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span></span></pre>\n<p>Vamos ser mais diretos, sem códigos desnecessários para o exemplo. O importante aqui é definir os relacionamentos. Agora, vamos para o model User:</p>\n<pre class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token scope">App<span class="token punctuation">::</span></span><span class="token function">uses</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'AppModel\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'Model\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">AppModel</span> \n<span class="token punctuation">{</span>\n\t<span class="token keyword">public</span> <span class="token variable">$displayField</span> <span class="token operator">=</span> <span class="token single-quoted-string string">\'name\'</span><span class="token punctuation">;</span>\n\t\n\t<span class="token keyword">public</span> <span class="token variable">$belongsTo</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>\n\t\t<span class="token single-quoted-string string">\'Company\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">array</span><span class="token punctuation">(</span>\n\t\t\t<span class="token single-quoted-string string">\'className\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'Company\'</span><span class="token punctuation">,</span>\n\t\t\t<span class="token single-quoted-string string">\'foreignKey\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'company_id\'</span>\n\t\t<span class="token punctuation">)</span>\n\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></span></pre>\n<p>Perfeito! Temos os models e seus relacionamentos bem definidos! Agora, digamos que você queira apresentar os nomes dos usuários da aplicação concatenados com o nome da empresa a qual ele pertence em um combobox. Dado o problema, vamos a primeira solução: adicionar o virtualField no model User...</p>\n<pre class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token keyword">public</span> <span class="token variable">$virtualFields</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>\n\t<span class="token double-quoted-string string">"user_comp"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"SELECT \n\t\t\t\t\t\tCONCAT(U.name, \' - \', C.name) \n\t\t\t\t\tFROM \n\t\t\t\t\t\tusers U\n\t\t\t\t\tLEFT JOIN \n\t\t\t\t\t\tcompanies \n\t\t\t\t\t\tON (U.company_id = C.id)\n\t\t\t\t\tWHERE \n\t\t\t\t\tU.id = User.id"</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></span></pre>\n<p>Agora, é só fazer um <em>find</em> na action que o combobox será apresentado e tá finalizado, certo? Errado. Adicionamos uma complexidade a mais no model User, essa complexidade será adicionada em todos os finds que o model User aparecer. Não é isso que queremos, certo? Queremos apenas apresentar o nome do usuário concatenado ao nome da empresa em um combobox em uma action específica. Achei melhor criar um método específico que adicione o virtualField em tempo de execução no model User e me traga o que eu quero, uma lista de usuários, vamos ao método:</p>\n<pre class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">findListUsersConcatWithCompanyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n\t<span class="token this">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">virtualFields</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'user_comp\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token double-quoted-string string">"SELECT \n\t\t\t\t\t\t\t\t\t\tCONCAT(U.name, \' - \', C.name) \n\t\t\t\t\t\t\t\t\tFROM \n\t\t\t\t\t\t\t\t\t\t<span class="token interpolation"><span class="token punctuation">{</span><span class="token this">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">useTable</span><span class="token punctuation">}</span></span> U\n\t\t\t\t\t\t\t\t\tLEFT JOIN \n\t\t\t\t\t\t\t\t\t\t<span class="token interpolation"><span class="token punctuation">{</span><span class="token this">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">Company</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">useTable</span><span class="token punctuation">}</span></span> C\n\t\t\t\t\t\t\t\t\t\tON (U.company_id = C.id)\n\t\t\t\t\t\t\t\t\tWHERE \n\t\t\t\t\t\t\t\t\t\tU.id = User.id"</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">return</span> <span class="token this">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">find</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'list\'</span><span class="token punctuation">,</span> <span class="token keyword">array</span><span class="token punctuation">(</span>\n\t\t<span class="token single-quoted-string string">\'fields\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'User.id\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'User.user_comp\'</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></span></pre>\n<p>Pronto! Só precisamos remover o virtualField anterior e, agora, usamos esse método na action específica, ou quando quisermos.</p>\n<p>No fim, o model User se parece com isso:</p>\n<pre class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token scope">App<span class="token punctuation">::</span></span><span class="token function">uses</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'AppModel\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'Model\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">AppModel</span> \n<span class="token punctuation">{</span>\n\t<span class="token keyword">public</span> <span class="token variable">$displayField</span> <span class="token operator">=</span> <span class="token single-quoted-string string">\'name\'</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">public</span> <span class="token variable">$belongsTo</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>\n\t\t<span class="token single-quoted-string string">\'Company\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">array</span><span class="token punctuation">(</span>\n\t\t\t<span class="token single-quoted-string string">\'className\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'Company\'</span><span class="token punctuation">,</span>\n\t\t\t<span class="token single-quoted-string string">\'foreignKey\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'company_id\'</span><span class="token punctuation">,</span>\n\t\t\t<span class="token single-quoted-string string">\'conditions\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'\'</span><span class="token punctuation">,</span>\n\t\t\t<span class="token single-quoted-string string">\'fields\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'\'</span><span class="token punctuation">,</span>\n\t\t\t<span class="token single-quoted-string string">\'order\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'\'</span>\n\t\t<span class="token punctuation">)</span>\n\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * returns an array list with the id of the user as the index and\n     * the name of the user concatenated with the company\'s name that \n     * the user belongs to\n     * \n     * @return array\n     */</span>\n\t<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">findListUsersConcatWithCompanyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">{</span>\n\t\t<span class="token this">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">virtualFields</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'user_comp\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token double-quoted-string string">"SELECT \n\t\t\t\t\t\t\t\t\t\t\tCONCAT(U.name, \' - \', C.name) \n\t\t\t\t\t\t\t\t\t\tFROM \n\t\t\t\t\t\t\t\t\t\t\t<span class="token interpolation"><span class="token punctuation">{</span><span class="token this">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">useTable</span><span class="token punctuation">}</span></span> U\n\t\t\t\t\t\t\t\t\t\tLEFT JOIN \n\t\t\t\t\t\t\t\t\t\t\t<span class="token interpolation"><span class="token punctuation">{</span><span class="token this">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">Company</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">useTable</span><span class="token punctuation">}</span></span> C\n\t\t\t\t\t\t\t\t\t\t\tON (U.company_id = C.id)\n\t\t\t\t\t\t\t\t\t\tWHERE \n\t\t\t\t\t\t\t\t\t\t\tU.id = User.id"</span><span class="token punctuation">;</span>\n\n\t\t<span class="token keyword">return</span> <span class="token this">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">find</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'list\'</span><span class="token punctuation">,</span> <span class="token keyword">array</span><span class="token punctuation">(</span>\n\t\t\t<span class="token single-quoted-string string">\'fields\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'User.id\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'User.user_comp\'</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span></span></pre>\n<p>No código final, ainda podemos mudar a vontade o nome das tabelas dos models que o método ainda funciona, pois ele está usando o atributo useTable dos models em questão.</p>\n<p>O resultado do método apresentado acima é esse:</p>\n<pre class="language-html">Array\n(\n    [1] => user 1 - company 2\n    [2] => user 2 - company 1\n)</pre>\n<h2 id="conclusão"><a href="#conclus%C3%A3o" aria-hidden="true"><span class="icon icon-link"></span></a>Conclusão</h2>\n<p>Bom pessoal, é isso. A mensagem aqui é que sempre devemos pensar no efeito que as nossas pequenas alterações fazem na aplicação como um todo e tentar otimizar isso ao máximo.</p>\n<p>Novamente, se fiz alguma cagada, façam o favor de comentar!</p>\n<p>Até a próxima!</p>\n'}}]}}}}}}]);