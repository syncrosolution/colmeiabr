if ($('body').hasClass('pagina-inicial')) {
    (function (d, t) {
        var BASE_URL = "";
        var g = d.createElement(t),
            s = d.getElementsByTagName(t)[0];
        g.src = BASE_URL + "/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g, s);
        g.onload = function () {
            window.chatwootSDK.run({
                websiteToken: 'yBEbbFxSZ9zYsacWmnkpFdQv',
                baseUrl: BASE_URL
            })
        }
    })(document, "script");
}

if ($(".pagina-produto").length && typeof tabelaMedidas !== "undefined") {
    let imagemTabela = tabelaMedidas.imagem;
    let atributos = $(".pagina-produto .principal .acoes-produto");

    function criarModal() {
        atributos.prepend('<a href = "#" data-toggle="modal" data-target="#modal-medidas" class="btn">Tabela de medidas</button>');

        $(".pagina-produto").append(
            `<div id="modal-medidas" class="modal hide">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            <i class="icon-remove"></i>
        </button>
        <span class="titulo"> Tabela de medidas</span>
    </div>
    <div class="modal-body">
        <img src="${imagemTabela}" alt="Tabela de medidas" />
    </div>
</div>
`
        );
    }

    $(".pagina-produto .principal .breadcrumbs li").each(function() {
        let catTab = $(this).text().toLowerCase().trim();

        for (let i = 0; i < tabelaMedidas.categorias.length; i++) {
            let tabName = tabelaMedidas.categorias[i].nome;

            if (catTab == tabName) {
                criarModal();
                break;
            }
        }
    })
}


var _0x13f6f5 = _0x3377;

function _0x11c2() {
    var _0x22c658 = ['undefined', 'load', '#rodape\x20.assinatura-rodape\x20.design-fox', 'logo', 'link', 'after', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22partnerFooter\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20target=\x22_blank\x22\x20href=\x22', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Personalizado\x20por\x20:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22', '\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', '#rodape\x20.assinatura-rodape\x20', 'img', 'css', 'body', 'append', '<style>#rodape\x20.partnerFooter{display:flex;height:55px;width:110px;justify-content:center;align-items:center;order:3}#rodape\x20.partnerFooter\x20a{height:50px;display:flex;justify-content:center;align-items:center;flex-wrap:wrap/*!\x20width:\x20100px;\x20*/}#rodape\x20.design-fox{height:55px;float:none!important;position:initial!important;align-items:center;order:2;width:116px}#rodape\x20.design-fox\x20a{height:50px;align-items:center;display:flex;flex-wrap:wrap;justify-content:center;font-weight:500}#rodape\x20.design-fox\x20img{filter:grayscale(80%)!important}#rodape\x20.partnerFooter\x20img{width:86px;filter:grayscale(80%)!important}#rodape\x20.loja-integrada-copyright{order:4}#rodape\x20.loja-integrada-copyright\x20img{max-width:100%!important}#rodape\x20.assinatura-rodape\x20.span9.span12{order:1}#rodape\x20.assinatura-rodape\x20.row-fluid{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;flex-direction:row;flex-flow:wrap-reverse}@media\x20(max-width:767px){#rodape\x20.partnerFooter{display:flex;/*!\x20left:\x200;\x20*//*!\x20width:\x20100%;\x20*/justify-content:center;margin-top:18px}#rodape\x20.partnerFooter\x20a{color:#717171!important}#rodape\x20.partnerFooter\x20img{width:80px!important/*!\x20margin-top:\x20-9px;\x20*/}#rodape\x20.loja-integrada-copyright{width:100%!important;order:1;padding-bottom:20px}#rodape\x20.loja-integrada-copyright\x20img{width:40%!important;order:1}#rodape\x20.assinatura-rodape\x20.row-fluid{justify-items:center!important;display:inline-grid}#rodape\x20.design-fox\x20img{padding:0!important}}</style>'];
    _0x11c2 = function() {
        return _0x22c658;
    };
    return _0x11c2();
}

function _0x3377(_0x3c3384, _0x11c2cb) {
    var _0x337746 = _0x11c2();
    return _0x3377 = function(_0x4d53fb, _0x4f664a) {
        _0x4d53fb = _0x4d53fb - 0xc3;
        var _0x1a74f1 = _0x337746[_0x4d53fb];
        return _0x1a74f1;
    }, _0x3377(_0x3c3384, _0x11c2cb);
}
_0x13f6f5(0xc3) != typeof partnerFooter && $(window)[_0x13f6f5(0xc4)](function() {
    var _0xe60b9c = _0x13f6f5;
    $(_0xe60b9c(0xc5))['each'](function() {
        var _0x42d876 = _0xe60b9c,
            _0x49f418 = partnerFooter[_0x42d876(0xc6)],
            _0x3b0bdf = partnerFooter[_0x42d876(0xc7)];
        $(this)[_0x42d876(0xc8)](_0x42d876(0xc9) + _0x3b0bdf + _0x42d876(0xca) + _0x49f418 + _0x42d876(0xcb)), $(_0x42d876(0xcc))['find'](_0x42d876(0xcd))[_0x42d876(0xce)]('max-width', '80%'), $(_0x42d876(0xcf))[_0x42d876(0xd0)](_0x42d876(0xd1));
    });
});

if ("undefined" != typeof horarioAtendimento) {
    $('#operation').remove();
    $('#rodape .contato').append(
        '<li class="complement">' +
        '<li class="operation" id="operation""><strong>' + horarioAtendimento.titulo + '</strong><p>' + horarioAtendimento.horarios + '</p></li>' +
        '<a class="atd-rodape" id="atd-rodape" href="#modalContato" data-toggle="modal" data-target="#modalContato">Fale conosco</a>' +
        '</li>'
    );
}

if ("undefined" != typeof formasEnv) {
    $("#rodape .selos").each(function() {
        $(this).after(`
	<div class="formas-envio "><span class="titulo cor-secundaria">Formas de envio</span>
	             	<ul class>
	             	</ul>
	</div> 
            `);
        for (var i = 0; i < formasEnv.length; i += 1) {
            var imagemForm = formasEnv[i].imagemForma;
            $(".formas-envio > ul").prepend(`   
             	<li>
                 <img src="${imagemForm}" alt ="NÃ£o carrega">
              </li>
                 
         `);
        }

        $(".formas-envio").addClass("span4");
        $(".pagamento-selos .row-fluid .selos").addClass("form-active");
        if (window.matchMedia("(max-width: 767px)").matches) {
            $(".pagamento-selos .row-fluid .selos").removeClass("form-active");

            $(".formas-envio.span4 span").on("click", function() {
                $(".formas-envio.span4").find("ul").toggleClass("active");
            });
        }
    });
}

setTimeout(function() {
    $('a.loja-integrada-copyright').attr('href', 'https://bit.ly/3PKGDIH');
}, 950);

setTimeout(function() {
    if ($(".conteudo-topo .menu-user-welcome").length <= 0) {
        var alterarUser = $(".conteudo-topo .btn-group .pequeno.dropdown-toggle").text().trim().split(" ")[1];
        $(".my_account_info .my_account-title").text(`Olá, ${alterarUser}`);
        $(".my_account_info .my_account-subtitle").html(`<a href="/conta/index">Minha Conta</a>`);
        if (window.screen.width <= 768) {
            $(".lrMenu .minhaconta").addClass("exit").removeClass("minhaconta");
            $(".lrMenu .exit div").html(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>`);

            $(".lrMenu .meuspedidos").before(`<li class="minhaconta">
                <div class="icon-options-menu-mobile">
                    <svg class="user-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <path d="M418.651,431.634c-8.576-56.229-45.769-103.945-98.194-125.989c42.679-35.547,48.457-98.962,12.91-141.641s-98.962-48.457-141.641-12.91s-48.457,98.962-12.91,141.641c3.904,4.69,8.229,9.006,12.91,12.91c-49.783,21.12-86.007,65.344-96.914,118.309c-2.021,9.893,4.37,19.557,14.263,21.577c9.893,2.021,19.557-4.37,21.577-14.263c14.153-69.257,81.774-113.938,151.04-99.785c52.407,10.706,92.626,52.873,100.846,105.728c1.408,8.978,9.198,15.561,18.286,15.451h2.834C413.595,450.981,420.306,441.582,418.651,431.634z M192,228.571c0-35.346,28.654-64,64-64s64,28.654,64,64s-28.654,64-64,64S192,263.918,192,228.571z"></path>
                        <path d="M256,512C114.615,512,0,397.385,0,256S114.615,0,256,0s256,114.615,256,256S397.385,512,256,512z M256,36.571c-121.189,0-219.429,98.24-219.429,219.429S134.811,475.429,256,475.429S475.429,377.189,475.429,256S377.189,36.571,256,36.571z"></path>
                        <g></g>
                    </svg>
                </div>
                <a href="/conta/index">Minha Conta</a>
            </li>`);
            $(".lrMenu .faleconosco-mobile").after($(".lrMenu .exit"));
        }
    }

}, 1000);

$(document).ready(function() {
    var interval = setInterval(function() {
        let tagEmbedCss = $('link[href="https://widget.tagembed.com/widget/static/css/react-build.css"]');
        if (tagEmbedCss.length) {
            tagEmbedCss[0].disabled = true;
            console.log(' Removed unnecessary CSS from TagEmbed');
            clearInterval(interval);
        } else {
            console.log('TagEmbed CSS not found');

            if (typeof instagramFeed !== 'undefined') {
                if (instagramFeed.ativa === true) {
                    $('#corpo').append('<div id="insta-feed"><div class="conteiner row-fluid"><p class="instagram_username">Siga no instagram<a href="https://www.instagram.com/' + instagramFeed.usuario + '/" rel="noopener" target="_blank">@' + instagramFeed.usuario + '</a></p></div><div id="instagram-feed"><div class="tagembed-container" style="width: 100%;height: 100%;overflow: auto;"><div class="tagembed-socialwall" data-wall-id="' + instagramFeed.id + '" view-url="https://widget.tagembed.com/' + instagramFeed.id + '?view"></div></div></div></div>');
                }
            }

            (function() {
                var po = document.createElement('script');
                po.type = 'text/javascript';
                po.async = true;
                po.src = 'https://widget.tagembed.com/embed.min.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(po, s);
            })();

            clearInterval(interval);
        }
    }, 300);
});


if (typeof resolutionBanner !== 'undefined' && resolutionBanner.condition === true) {
    var fBanner = $('.full-banners');
    if (fBanner.length) {
        
        fBanner.find('img').each(function() {
           
            var src = $(this).attr('src');
           
            var img = $('<img />');
         
            img.attr('src', src);
            
            img.attr('src', img.attr('src').replace('1140x1140', '1920x1920'));
            
            $(this).replaceWith(img);
        });
    }
}

window.onload = function() {
    if (typeof horarioAtendimento !== 'undefined') {
        $('#rodape .contato .operation').html(
            '<li class="complement">' +
            '<li class="operation" id="operation"><span class="titulo">' + horarioAtendimento.titulo + '</span><p>' + horarioAtendimento.horarios + '</p></li>' +
            '</li>'
        );
    }
}


$('.my_account ul').hide();

function newAccountDesktop() {
    const svgNewAccountDesk = `<svg class="user-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M418.651,431.634c-8.576-56.229-45.769-103.945-98.194-125.989c42.679-35.547,48.457-98.962,12.91-141.641s-98.962-48.457-141.641-12.91s-48.457,98.962-12.91,141.641c3.904,4.69,8.229,9.006,12.91,12.91c-49.783,21.12-86.007,65.344-96.914,118.309c-2.021,9.893,4.37,19.557,14.263,21.577c9.893,2.021,19.557-4.37,21.577-14.263c14.153-69.257,81.774-113.938,151.04-99.785c52.407,10.706,92.626,52.873,100.846,105.728c1.408,8.978,9.198,15.561,18.286,15.451h2.834C413.595,450.981,420.306,441.582,418.651,431.634z M192,228.571c0-35.346,28.654-64,64-64s64,28.654,64,64s-28.654,64-64,64S192,263.918,192,228.571z"></path><path d="M256,512C114.615,512,0,397.385,0,256S114.615,0,256,0s256,114.615,256,256S397.385,512,256,512z M256,36.571c-121.189,0-219.429,98.24-219.429,219.429S134.811,475.429,256,475.429S475.429,377.189,475.429,256S377.189,36.571,256,36.571z"></path><g></g></svg>`;

    $(".my_account").html(`${svgNewAccountDesk}
    <div class="my_account_info">
        <a href="/conta/login" class="my_account-title">
            <div class="newUser">
                <span class="userName">Olá, bem-vindo(a)<span>
            </div>
        </a>
        <span class="my_account-subtitle">
            <a href="/conta/login">Entre</a> 
            ou 
            <a href="/conta/login">Cadastre-se</a>
        </span>
    </div>
    <ul>
        <li class="listAccount"><a href="/conta/pedido/listar">Meus pedidos</a></li>
        <li class="listAccount"><a href="/conta/favorito/listar">Meus favoritos</a></li>
        <li class="shipping"><a href="/#modalRastreio" data-toggle="modal" data-target="#modalRastreio">Acompanhar pedido</a></li>
    </ul>`);

    const userLoggedName = $.cookie("LI-UserLoggedName");

    if (userLoggedName && userLoggedName.trim() !== '') {
        const firstName = userLoggedName.trim().split(" ")[0];
        $(".my_account_info").html(`<a href="/conta/login" class="my_account-title">
            <div class="newUser">
                <span class="userName">Olá, <b>${firstName}</b></span>
            </div>
        </a>
        <span class="my_account-subtitle">
            <a href="/conta/index">Acessar Conta</a> 
        </span>`);
        $(".my_account ul").append(`<li class="login"><a href="/conta/logout">Sair</a></li>`);
    } else {
        const btnText = $(".btn-group .botao.secundario.pequeno").text().trim();
        if (btnText !== '') {
            const nomeUpd = btnText.split(" ")[1];
            $(".my_account_info").html(`<a href="/conta/login" class="my_account-title">
                <div class="newUser">
                    <span class="userName">Olá, <b>${nomeUpd}</b></span>
                </div>
            </a>
            <span class="my_account-subtitle">
                <a href="/conta/index">Acessar Conta</a> 
            </span>`);
            $(".my_account ul").append(`<li class="login"><a href="/conta/logout">Sair</a></li>`);
        }
    }
}

function newAccountMobile() {
    const newSvgExit = `<div class="icon-options-menu-mobile"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-17 0 512 512"><path d="m462.453125 247.742188h-165.164063c-9.121093 0-16.515624-7.386719-16.515624-16.515626 0-9.128906 7.394531-16.515624 16.515624-16.515624h165.164063c9.121094 0 16.515625 7.386718 16.515625 16.515624 0 9.128907-7.394531 16.515626-16.515625 16.515626zm0 0"></path><path d="m412.902344 297.289062c-4.226563 0-8.453125-1.609374-11.675782-4.839843-6.453124-6.449219-6.453124-16.902344 0-23.351563l37.871094-37.871094-37.871094-37.871093c-6.453124-6.453125-6.453124-16.90625 0-23.355469 6.453126-6.449219 16.902344-6.449219 23.355469 0l49.546875 49.550781c6.453125 6.449219 6.453125 16.902344 0 23.351563l-49.546875 49.546875c-3.226562 3.230469-7.453125 4.839843-11.679687 4.839843zm0 0"></path><path d="m363.355469 165.160156c9.121093 0 16.515625-7.386718 16.515625-16.515625v-132.128906c0-9.128906-7.394532-16.515625-16.515625-16.515625h-346.839844c-.753906 0-1.394531.332031-2.121094.429688-.976562.128906-1.875.265624-2.8125.566406-1.417969.449218-2.65625 1.113281-3.875 1.90625-.5.324218-1.109375.398437-1.578125.773437-.207031.167969-.285156.4375-.484375.613281-1.226562 1.09375-2.15625 2.410157-3.015625 3.824219-.339844.5625-.816406 1.015625-1.089844 1.621094-.949218 2.078125-1.539062 4.347656-1.539062 6.78125v429.417969c0 7.792968 5.445312 14.515625 13.054688 16.144531l231.226562 49.550781c1.144531.257813 2.304688.371094 3.460938.371094 3.742187 0 7.417968-1.273438 10.386718-3.675781 3.878906-3.132813 6.128906-7.855469 6.128906-12.839844v-33.03125h99.097657c9.121093 0 16.515625-7.386719 16.515625-16.519531v-132.128906c0-9.128907-7.394532-16.515626-16.515625-16.515626-9.121094 0-16.515625 7.386719-16.515625 16.515626v115.613281h-82.582032v-363.351563c0-7.792968-5.445312-14.515625-13.054687-16.144531l-78.808594-16.890625h174.445313v115.613281c0 9.128907 7.394531 16.515625 16.515625 16.515625zm-132.128907 309.890625-198.195312-42.46875v-395.632812l198.195312 42.46875zm0 0"></path></svg></div>`

    if ($.cookie("LI-UserLoggedName") && $.cookie("LI-UserLoggedName").trim() !== '') {
        $(".lrMenu .minhaconta a").attr("href", "/conta/index").text("Minha Conta");
        $(".lrMenu .options-menu-mobile").append(`<li class="exit">${newSvgExit} <a href="/conta/logout">Sair</a></li>`);
    } else {
        const btnText = $(".btn-group .botao.secundario.pequeno").text().trim();
        if (btnText !== '') {
            $(".lrMenu .minhaconta a").attr("href", "/conta/index").text("Minha Conta");
            $(".lrMenu .options-menu-mobile").append(`<li class="exit">${newSvgExit} <a href="/conta/logout">Sair</a></li>`);
        } else {
            $(".lrMenu .minhaconta a").attr('href', "/conta/login").html(`<b>Entre</b> ou <b>Cadastre-se</b>`);
        }
    }
}

setTimeout(function () {
    const launchFn = window.screen.width < 769 ? newAccountMobile : newAccountDesktop;
    launchFn();
    $('.my_account ul').show();
}, 2000);


if (typeof shippingByRegion !== 'undefined') {
                $('#corpo').prepend('<div class="frete-gratis"><div class="frete-gratis-progresso"><div class="frete-gratis-progresso-barra"></div></div><div class="frete-gratis-texto">Adicione seu cep para consultar o '+ shippingByRegion.text +'</div></div>');
                var valorPedido = $('[data-subtotal-valor]').text().replace('R$ ', '').replace('.', '').replace(',', '.');
                var cep = $('[name="cep_destino"]').val() 
                $('[name="cep_destino"]').on('keyup', function(){
                    if ($(this).val().length == 9) {
                        cep = $(this).val();
                        console.log(cep)
                    }
                });
                
                var nordeste = ['40000-000 ', '65999-999'];
                var norte = ['69000-000', '69999-999'];
                var sul = ['80000-000', '99999-999'];
                var sudeste = ['01000-000', '39999-999'];
                var centroOeste = ['70000-000', '76999-999'];

                var valorNordeste = shippingByRegion.nordeste;
                var valorNorte = shippingByRegion.norte;
                var valorSul = shippingByRegion.sul;
                var valorSudeste = shippingByRegion.sudeste;
                var valorCentroOeste = shippingByRegion.centroOeste;

                function cepNordeste(cep) {
                    if (cep >= nordeste[0] && cep <= nordeste[1]) {
                        return true;
                    } else {
                        return false;
                    }
                }

                function cepNorte(cep) {
                    if (cep >= norte[0] && cep <= norte[1]) {
                        return true;
                    } else {
                        return false;
                    }
                }

                function cepSul(cep) {
                    if (cep >= sul[0] && cep <= sul[1]) {
                        return true;
                    } else {
                        return false;
                    }
                }

                function cepSudeste(cep) {
                    if (cep >= sudeste[0] && cep <= sudeste[1]) {
                        return true;
                    } else {
                        return false;
                    }
                }

                function cepCentroOeste(cep) {
                    if (cep >= centroOeste[0] && cep <= centroOeste[1]) {
                        return true;
                    } else {
                        return false;
                    }
                }

                function cepValido(cep) {
                    if (cep.length == 9) {
                        if (cep.match(/\d/g).length == 8) {
                            return true;
                        } else {
                            return false;
                        }
                    } 
                }        

                function freteGratis() {
                    if (cepValido(cep) == true) {
                        if (cepNordeste(cep) == true) {
                            if (valorNordeste >= valorPedido) {
                                var valorFalta = valorNordeste - valorPedido;
                                var valorFalta = valorFalta.toFixed(2);
                                var valorFalta = valorFalta.replace('.', ',');
                                var valorPorcentagem = valorPedido / valorNordeste;
                                var valorPorcentagem = valorPorcentagem * 100;
                                var valorPorcentagem = valorPorcentagem.toFixed(0);

                                $('.frete-gratis-texto').text('Adicione mais R$ ' + valorFalta + ' para ganhar Frete GrÃ¡tis');
                                // adicionar css para barra de progresso
                                $('.frete-gratis-progresso').css('width', valorPorcentagem + '%');
                                console.log(valorPorcentagem)

                            } else {
                                $('.frete-gratis-texto').text('VocÃª ganhou '+ shippingByRegion.text +' para sua regiÃ£o!');
                            }
                        } else if (cepNorte(cep) == true) {
                            if (valorNorte >= valorPedido) {                        
                                var valorFalta = valorNorte - valorPedido;
                                var valorFalta = valorFalta.toFixed(2);
                                var valorFalta = valorFalta.replace('.', ',');
                                var valorPorcentagem = valorPedido / valorNorte;
                                var valorPorcentagem = valorPorcentagem * 100;
                                var valorPorcentagem = valorPorcentagem.toFixed(0);
                                $('.frete-gratis-texto').text('Adicione mais R$ ' + valorFalta + ' para ganhar '+ shippingByRegion.text +'');
                                $('.frete-gratis-progresso').css('width', valorPorcentagem + '%');

                            } else {
                                $('.frete-gratis-texto').text('VocÃª ganhou '+ shippingByRegion.text +' para sua regiÃ£o!');
                            }
                        } else if (cepSul(cep) == true) {
                            if (valorSul >= valorPedido) {
                                var valorFalta = valorSul - valorPedido;
                                var valorFalta = valorFalta.toFixed(2);
                                var valorFalta = valorFalta.replace('.', ',');
                                var valorPorcentagem = valorPedido / valorSul;
                                var valorPorcentagem = valorPorcentagem * 100;
                                var valorPorcentagem = valorPorcentagem.toFixed(0);
                                $('.frete-gratis-texto').text('Adicione mais R$ ' + valorFalta + ' para ganhar '+ shippingByRegion.text +'');
                                $('.frete-gratis-progresso').css('width', valorPorcentagem + '%');
                            } else {
                                $('.frete-gratis-texto').text('VocÃª ganhou '+ shippingByRegion.text +' para sua regiÃ£o!');
                            }
                        } else if (cepSudeste(cep) == true) {
                            if (valorSudeste >= valorPedido) {
                                var valorFalta = valorSudeste - valorPedido;
                                var valorFalta = valorFalta.toFixed(2);
                                var valorFalta = valorFalta.replace('.', ',');
                                var valorPorcentagem = valorPedido / valorSudeste;
                                var valorPorcentagem = valorPorcentagem * 100;
                                var valorPorcentagem = valorPorcentagem.toFixed(0);
                                $('.frete-gratis-texto').text('Adicione mais R$ ' + valorFalta + ' para ganhar '+ shippingByRegion.text +'');
                                $('.frete-gratis-progresso').css('width', valorPorcentagem + '%');
                            } else {
                                $('.frete-gratis-texto').text('VocÃª ganhou '+ shippingByRegion.text +' para sua regiÃ£o!');
                            }
                        } else if (cepCentroOeste(cep) == true) {
                            if (valorCentroOeste >= valorPedido) {
                                var valorFalta = valorCentroOeste - valorPedido;
                                var valorFalta = valorFalta.toFixed(2);
                                var valorFalta = valorFalta.replace('.', ',');
                                var valorPorcentagem = valorPedido / valorCentroOeste;
                                var valorPorcentagem = valorPorcentagem * 100;
                                var valorPorcentagem = valorPorcentagem.toFixed(0);
                                $('.frete-gratis-texto').text('Adicione mais R$ ' + valorFalta + ' para ganhar '+ shippingByRegion.text +'');
                                $('.frete-gratis-progresso').css('width', valorPorcentagem + '%');
                            } else {
                                $('.frete-gratis-texto').text('VocÃª ganhou '+ shippingByRegion.text +' para sua regiÃ£o!');
                            }
                        }
                    }
                }

                freteGratis();

                $('[name="cep_destino"]').on('keyup', function(){
                    if ($(this).val().length == 9) {
                        freteGratis();
                    }
                });
            }