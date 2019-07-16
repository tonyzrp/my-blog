(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{256:function(e){e.exports={data:{post:{title:"Desenvolvendo uma API - parte 1",path:"/blog/desenvolvendo-uma-api-parte-1",date:"6. March 2014",timeToRead:1,tags:[{id:"API",title:"API",path:"/tag/api"},{id:"development",title:"development",path:"/tag/development"},{id:"desenvolvimento",title:"desenvolvimento",path:"/tag/desenvolvimento"}],description:"Desenvolvendo uma API - parte 1",content:'<p>Saber desenvolver uma API é muito importante nos dias de hoje. Com o avanço das tecnologias (see Internet of Things) temos cada vez mais a necessidade de fazer softwares que possam se comunicar tanto com o browser (front-end), com mobile clients (Android, iOS, Windows, BlackBerry, etc, etc...), quanto com nossas geladeiras. Partindo dessa necessidade de termos uma aplicação sendo utilizada por várias tecnologias diferentes que surgem as populares API\'s.</p>\n<p>Uma API nada mais é do que, citando a Wikipédia:</p>\n<blockquote>\n<p>No contexto de desenvolvimento web, uma API é um conjunto definido de mensagens de requisição e resposta HTTP, geralmente expressado nos formatos XML ou JSON. Ainda que o termo seja um sinônimo para web service, a chamada Web 2.0 está aos poucos depreciando o modelo de serviços SOAP para a técnica REST. - <a href="http://pt.wikipedia.org/wiki/API" target="_blank" rel="nofollow noopener noreferrer">Wikipédia</a></p>\n</blockquote>\n<p>Essa imagem descreve melhor essa explicação:</p>\n<p><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 800 600\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-10\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-10)\' width=\'800\' height=\'600\' xlink:href=\'data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAPsUlEQVRo3s1aCXiNVxqOxFYatSXETG1JZQRBEkIR00VpdYxSOkOprbZo%2bzwzQ0UsFSJIhRprk1pDRFBLKNOhsQ1SlWCE2iIhoQTZI7n3P%2b%2bc79x7bv773//eSCeZZ/7nOTn33/Kf7z3f8n7fOU5QH4yV94rCm7G8McX6/q84GH%2bPmd81Go2W3/K8uLjY6nm6ptA4zO9Wx%2bFkEUh%2bQAhr52M0GKbA5p1KAECHwWCwXNu1axeGDh2KTp06oVu3bvD19cWkSZNw6tQpKyCqCwQnKyEUY/lgs6%2bCnd8DnI2DcmE/jL/cBt1VzM8xOaDnHJRW%2bNu3b6Nv375wcnJCixYtsGLFCqxcuRIzZ84U16iNGzcOz549q1YQnIRaqoW6fw1sy1Sw%2bd2AOb5gszsBYV2BL/sA%2b%2bcA%2bQ%2bsnq%2bMFkghrl%2b/jkaNGlkEbdasGdavX4%2bkpCTMmjULNWvWtNzr3bs3SktLzQqoVL0GCKHNM2%2b8lQzDgldhmNUBhvmBMIT1BBa%2bip%2bmdsaO4V44PKwFHoT1A55kmDVBeS6foLZ9EsLPzw8uLi7o0KED2rdvj9atW4trb731lrjWtm1bcZ1%2bEwiTJ0/W9RtVZAJmJ1OQA6x8B1gUwGe7L7C0l6ktfhXj/Nww0LshBnd0x4xursCmsTByVWZaRymdpY6PkKpPak4znp%2bfj40bN2LhwoWIiorCokWLEBISgoiICHEeFhaGvXv34vTp06hVqxYuXLhgpUVVpwFGg0mVj0djhn999PVshHfaNcSAV14Sfd/Wrpje2wMR/V7GsA6NMca/OTC3E1jaMTD7U27V06xJ9e3Rowc6duwofnft2tWi6tTatWtndf7ee%2b%2bhrKwMzs7OAhytA61aH7A1GAFNa1gNQLY%2brVzRrkld8XtKoAcQ3hWG%2bM%2bFv0AGn5nMVN4uAunngbxfbMxCCp%2bXl4cmTZqgS5cu4pyAaMPVPzExEW%2b//Y4AavSoUejcubP41uDBg3H//n3hE958881qAkD6gA3j8MbLdcSHa7vUgHMNJ9R0NgHyepsGotXh14O7NxMO0TCnC9gsHyC0o6mRs5zpDcR%2bamMCEoCcnBzUr19fzPyVK1eErY8fP17cO3jwoOjPnjsn%2bjZt2gih7969K0ygV69e1a8Bge7OQmAXLnwtl3JtGOrTGKvfbY13uUl84OsGzO8CZftfwG7xwV5LMrXbycC6EaamMQW1BjRu3NiiAZ6enhg2bBiOHTsmIsDx48dx5MgRfP/99%2bJeUFAQnj59Ws0aoPIBB4Z6YPUfvTCqc1Nh%2b5/2aI5NQzwxKcAdQ9o3Qufm9TCiC9eAMF8Y9XzAts%2bAtX%2b2AUDtA3r27Cm8Ox1TpkwRZtCnTx%2b4uroKsFu1aiUEp%2bvh4eHiXboeGhqqD4Da36jbc4ZoVRR4DKx6lwvnh8SPOmDje544M5EPNKoPksb5YOXA1lg56BVcm%2bQpooDCgbPQZWOZ6b9tCdYFQD3wtWvXCoFIOIoAc%2bfOFZ5/wYIFwkGuXr1aXJs3bx6WLl0qQiA9f/HiResoYCU4H4ccD1NFJi04FfKAm%2bdg5DwA8zubQ2BvlIXx8yWcBEXy8wW%2bwFcDoTxMN/1fyQNkvzXYrgaoeQCZgNbRBgYGIiEhAS%2b88ILNvalTp1rzAKucpYKwqDim7hYqLEFg2ddg3DQFhi%2b6wxjiIxybkYgREaT4mVCe3rc8z9SJUwUAqGfvxo0bgv6ScHXq1BGNfpOzo55AkL/feOMNfSYoQFVMY3iaBeOJjSjbOQuGuOkw7F0AdvlIOVtVjHZNwskmEZJHVhpwYS%2bQnACkJgKPbtvmDPLdCgDQywVu3bolbF0v7Mo2duwYlJQUm8EzmIU2q7z8Jh%2bfEs419AsehSK4c43gtD2ca/AczlXWj%2bSh547tmB1ng4p958F0ssFKAKCXDcbHx2PEiBEWEkTh79NPPsGJEyfKcwip8eqh0B%2berAktDQ9E/J9/h9F%2bzQRPmdazBe7O6CZAUKIGguU/NGurYicd1oIghSLUhXMx2NYDtM9WAgDqtZQ2PT1dAEBU2SJ4UR6UkkKgtAiMN%2brxjJ8beIaYmw22tB/YF/7A8r74O3fSS/u3xLb3vRAS1AKXp3F/teI1GD7n3CQxwm6q7/RfB1I7ADAdocmG1YJnZ2fj2rWfRayn9JgAWB61TNx7lrgULJInXssGgH35lmigFkl9f7Alr3On3AMl87rj/OSOAgASOnuGHw6O8sa6QW2QOZ2D84Uf2OrhYGUlDkygmgCQNqtNY4nebtkci%2b3bduDbPfsQvyMBq/6%2bRgDwZWSkeKYsehwYz0TZoaXAgfDytn8hcCgSxo08Q4wIxKHRv9P1H/VrO6OfV0MY5vrxDGwwWHHe/w4ApnF8dDx48AvS0q7yrC4Fa9es55HgptW/uXMnAyNHfIj169aJ89KYCWDRH5Vrk%2bazhnvcSS8ORNxwk%2b/wcK2FV3i%2b0vKl2iJvqVfLGd5u9VES0knQfMb0Q2GVA8CkBpjDFB2HvzvCU9/Noo/duh2ZmZlWNT%2bpIZcuXcbO%2bATT/4qdDMZptRgusVVN2q3QjS0fI21iWwR5NsGWoZ64GNwJx8f74FKwL0Z1ccOnr/6G5yjtwc7vtg6HjgCQditVl9JRauS51QVKpuMEmQoA6blPnTzNhdqlWx2SAJR/z4jo9TGI3bEHKeH8/8R8VK5JVqU78/ce3RHEDPM4Yw3vwU2Ck7bFvUz9QooC7YXJMG3UsgeAIy%2btV6BkmjDIYj8BeOwVZ4w/V1aEmOhvUFRUZLLrsrIKq0ZFhYU8A8zCjrh47FsxTxV0NDUG82wSMTPuDBFcwMjt3Ti3K5R5/lCW/wHG07G25mgPAKaTuBBZWbVqlajWbNq0Cbm5ufogSNXaOg1sels%2bC0EwRA5A/Ozx3MHttIr9u3fvFkzw22%2b/xfLly7Fz505kZGTo1vx2JOxDSspF63tm0K3qmNSeZgPXT4GlHQUyUnjYLLZyxPaZoGYG5Ie%2b%2buorC0WVrXnz5jh69KhlNqX9kurSW8q141D2c099cBG2z52MpDM/WQ2%2bpKRE5PWU2U2cOFFUfKgecPbsWZVPKNe%2bO5wb7ErYrUuDy3mIihXa5AHGCjNDKxOQsxQbG2sRmoDYvn071nHvTClrjRo1uDdPc%2bgXb2U9wo7dByyczWAWiDI6qv5u3rxZ1PyoLrh//wFcvnzZDEC5IDn5Bty9l23xHzYVYS0ZY9qFnOdLi21MgGbWx8dHCP/aa68JskL9qFGjRNWWrtNvWeAoKCiwtDxuIsayUpw%2beVK0Ym7yBUWlWgJra/%2bq7xfwl66k56KAz8Uxrm1JPxyvtpK4FQBS7W7evCmE7N%2b/vzinnJzO9%2b3bJ/J3mcE1bNhQ1Pa1ja43btxEOD86Um88wd2HhbiXU4KcvGcaIBhKywyWWUq/n4%2bUW/nI%2bKUQyeeSEROzweI47ZXDtb5LHVWeZyHFBgByfCQkOT46KFGh80OHDolyNf12c3PDhAkT8PHHH9s0uk5FjEXhi3GSJzT5xQakpOfjws8PcfVuETePfBTyWc4teIYbWUW4dKcYVzKLueAFyHqi4PKlS9gQ8w327NlriR7a2dcKqA7RanNWryNYhe6KTIAWKqilpKSICg6t1yUnJ2P69OnmNHXsc/AjBYmJh7E1eh12rY1EzJpV3KazkPWUcaGLcDWrFKlpmRzYIzh3/t/4%2bXo6J0rfcR8Rjdy8PJuKsp4g2lBNRVei2YU8lKon1hEIuk5ww4YNFidIa3UUrqhkRfV5upaammoBSxIabRM8gB/FJ7aiKLQrj0z/QvTGWHyXmIgfk38Uwm7ZtBn//OdRHOUtalkUGjRoKAqi8n9rB64nPAFEjpXWGVu2bAkPDw94eXlZiq32gKwwDC5ZskR4fHUYJBuX5Wt7i5WWQXP6Kv5T8g6ekfGsrPAhyviti6kXkZR0XOQERUXly%2bEkuDQ19cwxnaKK/DZRaqojOiqqfPbZZ7r%2bwiERkr%2bvXr2KZcuWYc6cOYiOjsajR4/0iZAeqzOatImdjRM5u5KTqWsqstz1HdcIGjD19pbA1BP0%2bPFjMdP0Dk2UdrKktlIjziG1QDvmX02FdT2sOvZKAM5sB%2bPUFDkZwvdTNVntraXZaQGg61rVVz9PfoieHz16tCBW5HinTZuG4OBg0dMeA6osjxw5Ujy3Z88e3bK6k6OwQsLSC7LpJkP22JnBzPtpjwEBUPi4HBgVQdECcPjwYbtxX36TQnW9evXE80TaiKfQipO7uzuaNm0qeiqsDhgwAHFxcZbiqt7YnaqETaiEt1SXqeU%2bANs7n2uAH5Qfd4EVPlEVSxSrGSHB1RpApqF1rHKzhNpJr1mzBt7e3rr2T9FLrkO8%2bOKLuHfvng24VQeAOt/O44LHzwAW0VoCT0vDewJhXAuWvA72jxXlCykcBAkALZDSQGlmaQZpEVWv0QzL2af29ddfi1Uk6QvUPe05oPtiuc/FRUW5jVVcEFEvQJCtR70DhPogf3YA7s3wR9YMP9z/PABl8wKAEG8wWkEym4hiBi0rK0ssgHz44Yd2G5Ey2jYTEBBgpQE002rHJ3t6jnIYCYDMYapVA1j0GFGOfjy7B8b7uyPq7VaiYDmjTwtE9GvJuXUQlM/bibqeBK6yuz5oAVUCQM6NBPvhhx9w5swZkVlSTxyAtuJQ%2bi33Icl0vmoBUNcD0o5BoaXyxb1x929%2bGOD1kqjOxgxui7/18sCkbu6iWqPM787Nozfw5J7FH8iKsaMmzYWYXoMGDYSHVx9UXSahqVcf5AyHDBmiu82magE4EA5GAHDbfzIrQBQo3evXRKuGtUWRcoK/m9hyI9YfZ/PnUg%2bUFzZ0Qp6jMEjslOoTFA7ff/99sdVu0KBBGDhwoOjp/IMPPsDw4cPFhotLPMfQ4xdVWxSN%2bwsU2ijBAcgJ8YdX4zrwbloX7d3qooVrLRUAPU0bKk5usl2Se47NVlKFx4wZ45AFyrZt2zariFN9GpAQYgHgaWgAGtV1QS3nGhwA04rvmK4aADhLrCwAWgGIqaq33KkbRQfadOGIulctAP/aato2E9EbuRyABnVc8HKD2pjz%2b9%2bYNj76mQGg7XecG%2bDOhUoBYI%2byU3yneE%2bpOBVriP%2bTc5Q02xF7raIoYDaB3PtQIvry2N8dT0K7o25Na37%2bp05NgMggGEP57H8zVncNsbIgVLRlpqK8xakqQ6A4Pb%2bbq3cHFM32x8D2TdHtt64IavMSfD1exJIBbTg4nBWSCWSlVXr2HW2%2bVFN2vWJIhRWh/wIB1aKDOVegPQUU5jgZUmb7gs3tYvINoR24%2b34XLP0nh2v2/8ujaomQajmMPc4EO7ZWrBVgwwQeIf5qSo1L8v9vhKfjP%2bzi4OnfrrWBAAAAAElFTkSuQmCC\' /%3e%3c/svg%3e" width="800" alt="API cloud" data-srcset="/assets/static/api-cloud.82a2fbd.dd5c100.png 480w, /assets/static/api-cloud.775f9c8.dd5c100.png 800w" data-sizes="(max-width: 800px) 100vw, 800px" data-src="/assets/static/api-cloud.775f9c8.dd5c100.png"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/api-cloud.775f9c8.dd5c100.png" width="800" alt="API cloud"></noscript></p>\n<h2 id="tópicos"><a href="#t%C3%B3picos" aria-hidden="true"><span class="icon icon-link"></span></a>Tópicos</h2>\n<p>Aqui vamos falar um pouco sobre o desenvolvimento de API\'s. Vou citar aqui alguns dos tópicos que quero comentar:</p>\n<ul>\n<li>REST</li>\n<li>Padrões de Respostas (JSON, XML...)</li>\n<li>Error Handling e HTTP status codes</li>\n<li>Autenticação (OAuth2, token...)</li>\n<li>Paginação</li>\n<li>Versionamento</li>\n<li>Tarefas em Background (Queue Jobs)</li>\n<li>Push Notifications</li>\n<li>NoSQL (armazenamento mais rápido)</li>\n<li>Filtros e Validações</li>\n<li>Documentação</li>\n</ul>\n<p>É um caminho longo e alguns desses tópicos eu ainda estou estudando, como o NoSQL, por exemplo, mas vamos em frente!</p>\n<p>Vejo vocês no próximo post!</p>\n',coverImage:{type:"image",mimeType:"image/png",src:"/assets/static/api-cloud-tumb.633a126.47a290f.png",size:{width:800,height:200},sizes:"(max-width: 800px) 100vw, 800px",srcset:["/assets/static/api-cloud-tumb.a67b0b2.47a290f.png 480w","/assets/static/api-cloud-tumb.633a126.47a290f.png 800w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 800 200' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-68'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='10'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-68)' width='800' height='200' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFnElEQVRYw81Xa0xURxTeEoUfEH6YYBVobUVtUoGiDVL6x1owUVNtSGz4QYINMa3aIk2koVBAtJSKXW2MLSlKifIURSpvYQF3l0Wpj0JFLFnLVmBlcamLluWxj3u/3pm797IvW9dA0gmzM3t37pw53/m%2bcwYJ5rtZLfyoOguc%2bZhOWZYhH9yfYydtfHwcx45J4evri6qqKjC2bVhbFxpr0AJH3gG%2beQvpG4Pw4boApEQvA3M4CvhqA1jNDX4hY6W2nrVJFhoAehQOAOIwwzCi46QND4/g0SMDNJo/sXzZi5iYnAYGZGCKdwNn93J9D79H6SfADx8AOW/i133h%2bP69V9CzLwyn3n8VHbtDgYzXgYY83tb/CQBWYADDOCwxGAxoaGiCQqHEL93XUVZajpCVKzGsNwDVaWBO7QJ66sBeLQWuloG5Xg1UfIrhz0Lh670IEokEXi9IsMhLggA/H9xMCgHqsmG1gb1gANhT1zmiYmRtALCUAR%2bJDLBYLOjsVOFycwsunK%2bGTqdz2Pt04WmMjD/mHPkSrLJYpD8ZKXwjPRhLWY3w5X7Y/3YQDsW8jC82BiN0uT/6k14Cemv4dQvFAHtHiTMOQbda5wDiAGAFAMqSRU3Lr8jR2/ubiwyEphsdxfnay%2bg5mgT2SiG/n3mWB9Rq5gFp/Q5Tqa8BWeHAoXXAwTdgPLAauJDG5xn%2bEB4RVuKp88J8ZmYGIyMjriDYAIDqDJj8d4E7jRjqqEJdbb24dmpqChMTE1Cr1VQOQqKcmTVxkuhGR8MlUToOrCMf/TKw5SmcTBLBluwDbtXMAfocIEieh/6FhYUICgrCkiVLEBERgba2NvrcZDLBYuY6Nzff6waKdkF7JA4//yjFuOExH2ndGJKSkpCTk4PExERIpVL63GKxirZk7QroH%2brn7ApBEOZOlYK1Oc0uJAME2peWltIklJCQgIKCAmzatIl%2bHxgYcPtu1607GHv0RPw%2bNHQfFRUVKCkpQV9fH5TKTtEdYmOGM9PZ2QWtVjvHPjHCLK9xxpboSMTtNe%2bh8x5LgLTQ0FBERUXh2rVriIyMRF5eHry8vBAdHY3c3FxkZGQgMzMTWVmZSPs8FQe5uXHaDP3ELExmK6yMOwMMDH%2bboBkz4a56CI0NjTRX2DPPXoZEbgQsK5Gbm7vFggFAjC5dupQ639TURCOvUCjg7%2b9P5bB9%2b3Zs2bIFW7duxbZt27B582bs2bMXnVy5u6czoqtfjz9GjRh/YoJxxgrtXyYM6qbxwMDg/tgUZG1X0NzUzOWFCZfcY59nXCov99ylGs03AILx%2bPh4rFmzBuXl5cjPz0dlZSUFori4%2bKnv31Vr0P6TFI0FuZCruvG7Ro9e9UO0tHehtr4Fl1vlOPatFH23b4vvMIx758l3lUqF6upqmnuMRqNtPfNcIDxzEhQoOcqVq%2bDgYOp0YGAgHePi4ujv5JBms5kyhXQyt5pm%2bQ1qMrgafwj9mgdob21BO3f427293BoTKrmcEBISQtfb23J2vqOjg4JPbAo9ICAARUVFDiB4IgePJCAcjJSxkydPIiUlhSY0Z5AcdMnplDxlLmaBrf/a7f5yuZw6Njk56eKIkHxJtInDPj4%2bFHihE%2bmR5ydOnHBhyrwC4AyC8%2b8OUbOr26zFxI%2bXcsA2HqFgsBYzXSdEXCaTUQDI3eJp7COsW79%2bPU2ysbGx2LFjB80zpBolJydTYAYHB596xnm9BxADAsXJ6FZ7TuWLLdsP9twB8VZnn1dIdFetWkUvRWTP6elpCoagbyH6xNmYmBgHCZCenZ1Nx%2bPHj4vJel4Z8G%2bAuDUk1GjSbl4EjsYChzfwPT8GuHHB9m8DT2%2blUglvb2%2bsXbsW4eHhCAsLEzu5aK1YsYI6uHPnTlphyHzx4sV09PPzQ3p6Op2npqa6VIX/av8Ar7VJh2FSCdEAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}}}}}}]);