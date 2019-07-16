(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{264:function(e){e.exports={data:{post:{title:"Multiprocess Containers with S6 Overlay",path:"/blog/multiprocess-containers-with-s6-overlay",date:"17. July 2019",timeToRead:5,tags:[{id:"docker",title:"docker",path:"/tag/docker"},{id:"containers",title:"containers",path:"/tag/containers"},{id:"s6overlay",title:"s6overlay",path:"/tag/s6overlay"},{id:"supervision",title:"supervision",path:"/tag/supervision"}],description:"Containers are meant to wrap a single service, which ideally has a single OS process. That process is the PID 1 of the container. This makes scaling containers a breeze. For instance, if you need more processes, you just spin up more containers in your cluster. This way of building and running containers works fine with languages that are self-contained, like Go or Node, for instance, where you can spin up a single process that binds to a port and that's it.",content:'<p><small><em>Note: I originally wrote this article as an introduction to S6 Overlay in the internal blog at <a href="https://madewithlove.be/" target="_blank" rel="nofollow noopener noreferrer">madewithlove</a></em></small>.</p>\n<hr>\n<p>Containers really shine when your service has a single OS process (or have a main process that handles children processes). That process is the PID 1 of the container. This makes scaling containers a breeze. For instance, if you need more processing power, you can spin up more containers in your cluster. This way of building and running containers works fine with languages that are self-contained, like Go or Node, for instance, where you can spin up a single process that binds to a port and that\'s it.</p>\n<p>But when it comes to PHP, at least the more traditional way of running PHP, it gets tricky. In the pre-container era, the most common way of running PHP applications was with Nginx+phpfpm. This works out really well, actually. But in the container era, it\'s tricky. To run PHP like that you need two processes: Nginx and fpm. They will talk with each other via Unix sockets (basically a shared file in the same filesystem).</p>\n<p>And both processes are important for the container. You want your container terminating if either of these processes dies, so the orchestrator can detect it and spin up a new container to take over. They are equally important. How can you make it so they are both handled as PID 1 in the container?</p>\n<p>Some folks just give up and go with apache2+modphp, which is actually fine, I guess (I have done that myself), but I would prefer to stick with Nginx and fpm. If you are like me, there is a way: process supervision.</p>\n<h2 id="process-supervision"><a href="#process-supervision" aria-hidden="true"><span class="icon icon-link"></span></a>Process Supervision</h2>\n<p>A process supervisor is exactly what it sounds like: some process that the only job is to watch other processes. If they are running, or if they have stopped, things like that.</p>\n<p>The most common supervisor might be <a href="http://supervisord.org/" target="_blank" rel="nofollow noopener noreferrer">Supervisord</a>, and in most cases, it does the job really well. I\'ve used it for running queue workers and schedulers, for instance. But it\'s not suited for running as the init process in the era of containers, it even states that in the first page of the <a href="http://supervisord.org/#supervisor-a-process-control-system" target="_blank" rel="nofollow noopener noreferrer">documentation</a>:</p>\n<blockquote>\n<p>It shares some of the same goals of programs like launchd, daemontools, and runit. Unlike some of these programs, it is not meant to be run as a substitute for init as “process id 1”. Instead it is meant to be used to control processes related to a project or a customer, and is meant to start like any other program at boot time.</p>\n</blockquote>\n<p>That\'s ok, actually. We have other options, and some are even linked in Supervisord\'s documentation. One option that is not listed is called: <a href="https://github.com/just-containers/s6-overlay" target="_blank" rel="nofollow noopener noreferrer">S6</a>.</p>\n<h2 id="s6-overlay"><a href="#s6-overlay" aria-hidden="true"><span class="icon icon-link"></span></a>S6 Overlay</h2>\n<p>S6 all the functionality required for running as the PID 1 in a container, essentially:</p>\n<ul>\n<li>Well, process supervision; and</li>\n<li>Forwarding signals (any signals the PID 1 receives, it will forward to the other processes, so they can terminate gracefully or re-read the configs);</li>\n</ul>\n<p>There are other functionalities built-in in S6, but these are the main ones, as I see it. You can read more about S6 <a href="https://skarnet.org/software/s6/index.html" target="_blank" rel="nofollow noopener noreferrer">here</a>.</p>\n<p>Let\'s see what it looks like to add S6 overlay to our Docker images.</p>\n<h2 id="example"><a href="#example" aria-hidden="true"><span class="icon icon-link"></span></a>Example</h2>\n<p>I\'ve created a repository <a href="https://github.com/madewithlove/php-s6-overlay-demo" target="_blank" rel="nofollow noopener noreferrer">here</a> so I won\'t go over it step-by-step. The Dockerfile has some comments if you are curious. To run this app you first have to build the Docker image:</p>\n<pre class="language-bash"><span class="token function">git</span> clone git@github.com:madewithlove/php-s6-overlay-demo.git\n<span class="token function">cd</span> php-s6-overlay-demo/\ndocker build -t php-s6-demo-app:0.0.1 <span class="token keyword">.</span>\ndocker run --rm -p <span class="token string">"8000:80"</span> php-s6-demo-app:0.0.1</pre>\n<p>You should see an output like:</p>\n<pre class="language-bash"><span class="token punctuation">[</span>s6-init<span class="token punctuation">]</span> making user provided files available at /var/run/s6/etc<span class="token punctuation">..</span>.exited 0.\n<span class="token punctuation">[</span>s6-init<span class="token punctuation">]</span> ensuring user provided files have correct perms<span class="token punctuation">..</span>.exited 0.\n<span class="token punctuation">[</span>fix-attrs.d<span class="token punctuation">]</span> applying ownership <span class="token operator">&amp;</span> permissions fixes<span class="token punctuation">..</span>.\n<span class="token punctuation">[</span>fix-attrs.d<span class="token punctuation">]</span> done.\n<span class="token punctuation">[</span>cont-init.d<span class="token punctuation">]</span> executing container initialization scripts<span class="token punctuation">..</span>.\n<span class="token punctuation">[</span>cont-init.d<span class="token punctuation">]</span> done.\n<span class="token punctuation">[</span>services.d<span class="token punctuation">]</span> starting services\n<span class="token punctuation">[</span>services.d<span class="token punctuation">]</span> done.\nThis account is currently not available.\n<span class="token punctuation">[</span>10-Jul-2019 17:55:48<span class="token punctuation">]</span> NOTICE: fpm is running, pid 178\n<span class="token punctuation">[</span>10-Jul-2019 17:55:48<span class="token punctuation">]</span> NOTICE: ready to handle connections</pre>\n<p>Nice! And if you open your browser, you should see the familiar phpinfo screen:</p>\n<p><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1128 696\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-16\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-16)\' width=\'1128\' height=\'696\' xlink:href=\'data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAACXBIWXMAAAsSAAALEgHS3X78AAAO0klEQVRo3s1Z%2bVuTV9rOn/D9Mr/M1Zm29vuuEQRhtO5ara3dLC7oTLXWal3AWu1iteO0itVWpx33BVcQBdSyBQgo2UhIQkggLLKaQFhtixWtlkX23PM8500wBKTtN9rKdd3XWd7zHs5zP%2bt5I9uwyh9r3gpE%2bIoAvLc6COtXB2JjWCA%2bWDcGH633x8cb/bB542hs2vi/%2bPiDZ7D5o2ew5cNR2PrBX/DZh4HY9v5fseuDZ/H1hvE49N5ERK6fglNhUxH1zjScXT4d55fPwvklL%2bD84pdwceFrSAwJQdIr85D88gIkzwlFyouLkDQ7FAnPz0fi9PlICZ4H%2beh5SB09H2ljFyA9aCHS/RZD4bcEmc%2b%2bjcvT3sHS4DGYO/UJzJ8eiBcC/oiXR/0PlgX/Eeufewabpv4BUcv%2bhKhNk3H81RCcnTwPJ1%2bai2MhL2P/gtnYs3g6tr8xDZ8snYJjG6ZCFvq6H/4aPAFz5szBjOnP4flZszFt6jTCdEyfNgPPzZiJmTNnYeZzszB50hQ8O36CaCdMmIjgsUEYP248/P38McY/gDBmRPiP8YW/V%2bs/%2bFmA13PuB/gL%2bLnXBgcGYmzgWASMCURgQCCCaBxEz4MCpXME%2bEvreW1AAM3RPkFjA%2bEXGISQcX4InxKA5a8GEwGv%2bWPq1BlYty4cr742F6GLFgky5s6dK9oQ0tjrr8/FvHkhmDRpIvz8RmPcuHEIDgqC/2jqBwfhySeewKgnn8TTvwFGufHUn/%2bMpxlPSuDxU2J%2b8NqnafzMU0/h/0aNEqT9hQh7a9IYfD57LN6YEwjZ30LGYsqU6YTJmDhxIml2AmbPnk1an4nPd%2b7CyVOnERl5HIcOH0bk8RM4cfIk4RTOxpxDDCH67FmcO3ceMefOPZY4GxOD%2bAsX8emnn2LOiy9iwfz5GEfWO2b8JKx8hSxgwSt%2bmDxlGmbMmIHg4GCMHz%2beCHgBs2Y9D60uB866RhSXXIUlvwDWwhJUVNlxrdqJ5h9a0HL7jsDN2z8%2bPrg1GDdu3kJHZzdS09IRGhqKNWvWIJDcJCh4HN6cEwDZhjVzkJQkh1yeQpAjNTWVkEz9JKhUV2Aw6ASMRr0A93NysqHXa6F73KDTQM%2bgfo4%2bm86pFX099TMzM5GSLMmYlpaKC5cS8PGKlyDbtmUxfP8KC2/AbP6BBP6WBGZcF21OTiOhSYz1%2bgb6h/WPFXJyGuhcTcjWNUCpqkbmFSc0Gp6rhcs1WMY7d9uwfeNCyP65aQG6uvvQ19eL3t5eavuxZ/clhIUdwNatcdi8ORr/2BpPbQwiIpKxbVsCtmyJwd59Bhw5ko/Dhy2PDfZ8lYP1GyLx9srtWLpsC9aE7cXKVfuwc5cSLS13SWwXenp6iAwXnLUN2PrefLKATYvQ2%2bfhxYX%2b/n4KbrnYt09Fwc%2bIgwfVOHBAQ%2bMsHDtmFDh4UIPTp22IiiomFP2uOHNGak%2bdKsSn2%2bVY%2bmY43lwWhvB1W7F06VKsWrsdn0UocOfHNiFhf79kCu0dXfjik6WQRXwY6kUAhBVEReWTkKzdfNKyTeDoUZsYS3MFOHTIQmvyCJ7WG545s9ec2Qe/dM7ss9fw6/k8O3ddxvqNp/DhZjne3/QN1q47ho82p%2bHL3Wrcvt06iICOe9346p/LIdvx/oJBBLAFlJY2wmZroFhQj/z8GlgZ1hrR/3k43W0tCgoaCQ2itdkaab8m0TI8c97gtb5z3vO%2b73jGnrao8Dr93yby%2bWtQayooVjlhsdTSXB06SOPCxt3BoJ0I2P/ZCsh2bQhBbz8GHvJzh%2bMmSkquo7LyJhobewjdvxK9aGj4CfX1DmprqXXC6bSjpuYa6upraFyDBkJdXQ1qax2oI9TWVtNaJ81VC/B8Db3DbWNj7cB7nmf1dTViXx7zvNiH%2bs3N13Hr1g2BlpZmgebmb9Hd7UtAF45ErIbsX%2b%2bFoMeHAIXiGhU3RZQe7RRR2yi6thOr7aLNyekgZkeAeN5Naeh7kX4MBhPtoYdapUZWlhLZ2TqK2HqYTCZ6ZoRWS%2blKn0P7Gmgul943iL6e5ngtt7m5ZrHWaDSKZzqqT6SxCTkGg5jX6aR9C4uKUVZWTlZcJlBeXkGWV4TW1tZBBLSRRUR%2bvhay/esXDiFARSlEnlpN%2bdKB9PRqMq9%2bFBW5aKN%2bMqducoeuEdBJ6CW0wGrJJUu6CluhDXnmPHo3H7aCAjFXV19PWiPN1tWR5hsG%2box6euYNflZfXyfe4XGDe07Me73DLc/VVFfDbrcLOBwOIqEc7e3tQwg4uZMIOLJ2CboHEeAi5huRnFSJxKQKXL7cAEV6DRHioALJDoOxlXyuj4TpIfQOA55nom7TOovQak5OjhDaarUIzQvtk9Zyc3NhsVqpb0BxcQny8sxUf5jFPGveZCItk4bvvydZgYHmLBYLKaVQjPPy8uh/6MV7jIICG6qJBBbe6XSioqJieAJ2EQEnVi5Dt1eVwHVAfn4r/RM2/bu0YQfMBBbcaGyjzdkauFgaGTbbXTJtLTRqDdRqtTBPjUZDYxUFKA2Ns%2bngFmHSV65cFiRpNGpBDLcqlYqgpIJGRcLmiXf1eh2UyiwiKY8syuxeoxKuYDTyPllijVajFcRcvXpVWMG1a9eGJ%2bCLMMjOvP02ugYR0EcCdgohi4shWk%2bfIQnnGmiHg3hWcIf8WyUEZI1lZWVRLNDBQtpSESGssezsbEGMXvivTmg1O1srCMvWUgkrSGECVcLneR%2b1SiVag9vv%2bZlSqYSZ9uU%2b76mk/6Wh96W4YkJl1QMI2B0OWfSyFcMS4NEkC88xYDBcI4CfSwRoNEoRwPS6bKEZIRgfkITgPlsCj7XUSuZrRj7FiEKKGaWlpcJ3C2hcRIcoIfaLiopFn8HrKisrRd9mK6R3JBTTmFt2jwI6iN3uQFVV1RACOjq7sG0dFULRb3oTIFWCRmMzHew2aeBHEuIGmWonaaeL0DkAnhse9%2bh5D5noD8IFWMMsHPs2C1NMgtjoYHxw9nse86Hz6bbJJltTUzPgvwzui7G79Qabt%2b%2bcw%2bE7dggy29ravAhwobOrB5%2b8uwiyqOX3XcCTBZRZdiQkVFAGoOAnv0aH77gvHLVmIWTXA2G19tG6myS4QRKewMGwnIKRR0Bf8Dwflv31YYL3LCsr8yGALKCjG1/vXkIxYOXy%2bxbgcolSUZddj%2bQUOxQZdUijyJ%2bSXEl9mksqwzcJZWS6P5CZuUTUH0oAW0ivIMBE12eO5pyHOT0Jrf3MgT1B69ET0IPduxZDdvKd%2b1nA5SbAkwZT5HZRCygUtWQNTtHnVJiRWY9Usgyes1q7hyfA0kLal1IdByxOdRyZy8ivHQ77gLCPEj9HwJc7yQUOrXoDPQMhQCJAr2tCcnIVkpIrSOhqEtqBjIxapKSQ0EQCF0l6PcUI/Y9EQM9QK7D2DrgApywOXiUlJSgqLqLAVSUO9aiFH5kAl0TAjlDIvl69yKcSJAvQNlAZXCWElUy/gmJBlbAIJkKhqBMxgWNDbm77A13AbDaS/5upEKkUkZjBkZsLE%2b4/bH9/kEsNS8C9HnwRsRCyf69ePKQUVqvJ5BX1yKQYkEEEKBROyt3NZPZ2IqZCuEAmISHhKtIUtaL6Y1eQIAVBq/UWEWASeZ9N3%2bh2AU9G4BpdlK0U/IbDw7ISTyk8HAFf7iAX2Lfm70PvAsoaxMVaqRQuFz4vJ8EvXCigwFiFxMRSQhlF9TahbbYCs7ndB50kaDMVIjpRynLBoqXChMF9vvBw7peKFb37IqMbWGcwUOCk1MhWwtby34Atjt1vOBfYvYOC4P6wvw9xAY26jjRdKXxfR77OZm4w3CHcFTAaf/JJe75pUAqCJpOUBrlW5xzPplhONzXWiOiXD%2b0zPC7y6CwAwgJ273gDsr3hQwlQq5yiDuAAyAJz/mfzli46Eh5cB9yPAQaDXtTpXOJy8PMucEaC3W3%2bjzQN3uvGnojlFATD/zbUAjRkAclSxGefT0wsp6rwjiAhz9I5YhHknQaNxhxRAPFtjrVqt//6APbI0iAR8K/tKyH7at3QLKBScc6vFUVQqkiD/GHktrgXDM37DybAZJI%2bZpgo%2bHE56qkCPYd72EXPr7WAr7e/A9nuIQRAuEBamnMg9TEBmZkNlBVqBREju0DXfQsw6GAiAnLpRsa3tUK6A3DLgcmbhN%2bjEOJPYgciVkG2Z/3QLJCV5cA335SLyo%2bLH44FaWk1SEwohTb71gNKYF8CborLkJEI4EwggqH7Y4cnwP2uBNB1%2bOiONWQBG5cQAa5BLqDVUvGTTHcBRY3IBFwKM/hiZDS2It/6y4Ig/5SWS5Ug38mtVqv4sME3QvvApef3K4XbyAIiI8Ig%2b4II6O1zDXGBFAqCaVTrJ9EFSKttEff8n/d/iQBOg/zTmq0wXxQ7/FnKO8oPaP43qARHIuBERDgVQhvf8rEAUJFSR0VQlfD9ZLoPpCv4G3/vLyfBfRfgIMjat4kPE/aHFt0flgWc3P4uZEfeXYluHwI0ar74OKSrcIpEhFL5HYF/KP3JXfh0joAeqh1uil%2bS%2bYsPf6T8LSL%2bL78LuAn4bB1kx9auQGdPD/r7%2btDHP44SLmfSVTjFTkGvmFygnK69dlH3X7pYiCtXmkS5a6Jq0GRqpQg/HDro%2bXciC/C3Pf4czpG/nA5SwZXebwSuACup/uDPaT/dvStuu/zTH8va2n4PJ7aGSQT4/umNN5CR9T1ddOqRcfk6lOoWpKbTpYj6l7OaUV4JutcDpWXA1VKgxAvFDJovutqJgqIC5FLwKydNNH7/HeqvXx8eTYym%2b2gcjIam/z8ar3%2bLaopD/T4y9hAiPyEC9i56FXqFAmZFBnIzGApE749D9IFEnN5H7aE4nDt6EWePxOPcsUs4dTAOh/fG4/C/L%2bD4wUuIOpaImBPJOH9CjtjjqYg/noYLkRm4SPPyM6chj4pCymlqT0dBfuoMzUUjLToGaVExUhtDOH8OaXGxSI%2bPR/qFC0i/6MaleKRdjENq/Hmkxp2HPFZCamwsjeMkxHIbLyFWGssFYgfWJ56Nhp7ksmhUyFVeQZ46C8rUFBylEuA/CWnK%2b53%2bLPkAAAAASUVORK5CYII=\' /%3e%3c/svg%3e" width="1128" alt="phpinfo output" data-srcset="/assets/static/php-s6-overlay.82a2fbd.45c727a.png 480w, /assets/static/php-s6-overlay.cbab2cf.45c727a.png 1024w" data-sizes="(max-width: 1128px) 100vw, 1128px" data-src="/assets/static/php-s6-overlay.cbab2cf.45c727a.png"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/php-s6-overlay.cbab2cf.45c727a.png" width="1128" alt="phpinfo output"></noscript></p>\n<p>This means everything is working! Great. Now, you can go ahead and kill the docker container by pressing Ctrl+d in the container terminal screen. You should see some output that S6 is sending the services the TERM signal and then the KILL (for the ones that did not handle the TERM):</p>\n<pre class="language-bash">^C<span class="token punctuation">[</span>10-Jul-2019 18:04:39<span class="token punctuation">]</span> NOTICE: Terminating <span class="token punctuation">..</span>.\n<span class="token punctuation">[</span>10-Jul-2019 18:04:39<span class="token punctuation">]</span> NOTICE: exiting, bye-bye<span class="token operator">!</span>\n<span class="token punctuation">[</span>cont-finish.d<span class="token punctuation">]</span> executing container finish scripts<span class="token punctuation">..</span>.\n<span class="token punctuation">[</span>cont-finish.d<span class="token punctuation">]</span> done.\n<span class="token punctuation">[</span>s6-finish<span class="token punctuation">]</span> waiting <span class="token keyword">for</span> services.\n<span class="token punctuation">[</span>s6-finish<span class="token punctuation">]</span> sending all processes the TERM signal.\n<span class="token punctuation">[</span>s6-finish<span class="token punctuation">]</span> sending all processes the KILL signal and exiting.</pre>\n<p>Great! That was it.</p>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true"><span class="icon icon-link"></span></a>Conclusion</h2>\n<p>Some people might argue that containers are meant to be single-process services, and maybe they are right by the book, but I do think it\'s fine if you need multiple processes in a single container in this case. As always: it depends.</p>\n<p>You can split your application in two containers one for the nginx and another for the fpm processing and make them talk via TCP sockets, but that gets weird, you have to add a copy of your assets (usually the <code class="language-text">public/</code> folder to your nginx image, and you also need that in the fpm container). It would be just easier to spin this application as a single container.</p>\n<p>There are no silver bullets, only trade-offs. And in this case, they are worth it, IMO.</p>\n<p>Cheers.</p>\n<hr>\n<p>P.S: Maybe worth saying that the S6 Overlay init script (located at <code class="language-text">/init</code> after you add the S6 Overlay files to your image), must be the <a href="https://serversforhackers.com/c/div-entrypoint-vs-cmd" target="_blank" rel="nofollow noopener noreferrer">ENTRYPOINT</a> of your container, this way you can override the default command and S6 will still apply process supervision to your command. This is very useful when running workers, you can re-use the same container image and change the command to something like <code class="language-text">php artisan horizon</code> and S6 will apply the process supervision on this process as well.</p>\n',coverImage:null}}}}}]);