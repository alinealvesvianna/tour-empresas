(function() {

  var ConfiguracoesBanner = {
    opcoesBoxes: [{
        tipoTransacao: "abertura",
        tituloSegundoPasso: "Abertura",
        titulo: "Abrir",
        texto: "Veja aqui como <strong class='u-maiuscula'>abrir</strong> a sua empresa",
        textoBtn: "Clique <br /> <span class='u-corAmarelo'>aqui</span>"
      },
      {
        tipoTransacao: "alteracao",
        tituloSegundoPasso: "Alteração",
        titulo: "Alterar",
        texto: "Veja aqui como <strong class='u-maiuscula'>alterar</strong> a sua empresa",
        textoBtn: "Clique <br /> <span class='u-corAmarelo'>aqui</span>"
      },
      {
        tipoTransacao: "baixa",
        tituloSegundoPasso: "Baixa",
        titulo: "Dar Baixa",
        texto: "Veja aqui como <strong class='u-maiuscula'>dar baixa</strong> na sua empresa",
        textoBtn: "Clique <br /> <span class='u-corAmarelo'>aqui</span>"
      }

    ],

    opcoesEscolhaTipoEmpresa: {
      titulo: "",
      bannerDescricao: "Primeiro, selecione o <stong class='u-maiuscula u-bold'>tipo da empresa:</stong>",
      tiposEmpresas: ["Matriz", "Filial", "MEI"],
      textoBnt: "continuar"
    }

  };



  var ManipularConfiguracoes = {
    init: function() {
      BannerPrincipal.init();
    },

    dadosConfiguracaoBanner: function() {
      return ConfiguracoesBanner.opcoesBoxes;
    },

    dadosConfiguracoesTipoEmpresa: function() {
      return ConfiguracoesBanner.opcoesEscolhaTipoEmpresa;
    }
  };


  var BannerPrincipal = {



    init: function() {

      var self = this;
      this.urlSvg = "source/images/ilustracao-banner.svg";
      this.containerBanner = document.getElementById('bannerContainerPrincipal');
      this.estruturaBanner = document.getElementById('containerBanner').innerHTML;

      this.navegacaoBanner = document.getElementById('navegacaoBanner').innerHTML;
      this.btnFecharBanner = document.getElementById('btnFecharBanner').innerHTML;
      this.estruturaOpcaoFormulario = document.getElementById('opcaoEscolhaBanner').innerHTML;

      this.containerBanner.innerHTML = "";
      this.btnIniciarTour = document.getElementById('iniciarTour');
      this.btnIniciarTour.addEventListener('click', function() {
        self.montarBanner();
      });
    },

    montarBanner: function() {

      var i,
        htmlTituloBox,
        htmlTextoBox,
        htmlBtnBox,
        bannerCapa = document.getElementById('bannerCapa'),
        containerSite = document.getElementsByClassName('container-site'),
        dadosBoxes = ManipularConfiguracoes.dadosConfiguracaoBanner(),
        dadosBoxesLength = dadosBoxes.length;


      this.htmlBoxBanner = null;

      containerSite[0].removeChild(bannerCapa);
      this.containerBanner.insertAdjacentHTML('beforeend', this.estruturaBanner);
      this.containerBanner.className = 'banner';

      this.bannerPasso = this.containerBanner.getElementsByClassName('banner-passo');

      for (i = 0; i < dadosBoxesLength; i++) {

        this.htmlBoxBanner = document.createElement("div");
        this.htmlBoxBanner.className = "banner-secao";
        this.htmlBoxBanner.id = dadosBoxes[i].tipoTransacao;


        htmlTituloBox = document.createElement("h4");
        htmlTituloBox.className = "banner-header banner-header--funcoes";
        htmlTituloBox.setAttribute("data-titulo", dadosBoxes[i].titulo);
        htmlTituloBox.innerHTML = dadosBoxes[i].titulo;

        htmlTextoBox = document.createElement("p");
        htmlTextoBox.className = "banner-descricao";
        htmlTextoBox.setAttribute("data-texto", dadosBoxes[i].texto);
        htmlTextoBox.innerHTML = dadosBoxes[i].texto;

        htmlBtnBox = document.createElement("button");
        htmlBtnBox.className = "banner-btn";
        htmlBtnBox.innerHTML = dadosBoxes[i].textoBtn;

        this.htmlBoxBanner.appendChild(htmlTituloBox);
        this.htmlBoxBanner.appendChild(htmlTextoBox);

        this.htmlBoxBanner.appendChild(htmlBtnBox);

        htmlBtnBox.addEventListener('click', this.abrirSegundoPasso(dadosBoxes[i], this.bannerPasso[0]));

        this.bannerPasso[0].appendChild(this.htmlBoxBanner);

      }

      this.fazerAnimacao();
    },

    abrirSegundoPasso: function(dados, localizacao) {
      return function() {
        var outrosBoxes = document.getElementsByClassName('banner-secao'),
          i,
          outroBoxesLength = outrosBoxes.length;

        this.boxAlvo = document.getElementById(dados.tipoTransacao);
        this.titulo = this.boxAlvo.getElementsByClassName('banner-header')[0];
        this.texto = this.boxAlvo.getElementsByClassName('banner-descricao')[0];

        localizacao.className = 'banner-passo banner-passo--segundoPasso';

        //TODO: pensar em algo melhor
        for (i = 0; i < outroBoxesLength; i++) {
          outrosBoxes[i].className = 'banner-secao banner-secao--naoSelecionado';

          var tituloOutrosBoxes = outrosBoxes[i].getElementsByClassName('banner-header')[0];
          tituloOutrosBoxes.innerHTML = tituloOutrosBoxes.getAttribute('data-titulo');

          var textoOutrosBoxes = outrosBoxes[i].getElementsByClassName('banner-descricao')[0];
          textoOutrosBoxes.innerHTML = textoOutrosBoxes.getAttribute('data-texto');
        }

        var dadosSegundaEtapa = ManipularConfiguracoes.dadosConfiguracoesTipoEmpresa();

        this.boxAlvo.className = 'banner-secao banner-secao--selecionado';
        this.texto.innerHTML = dadosSegundaEtapa.bannerDescricao;

      };
    },





    fazerAnimacao: function() {

      var svgElemento = document.getElementById('svgIlustracaoBanner'),
        s = Snap(svgElemento),
        ilustracao,
        shadow = s.filter(Snap.filter.shadow(2, 2, 3, 'grey', 0.5)),
        mascara = s.rect(-500, 0, 500, 400);

      Snap.load(this.urlSvg, function(f) {
        var svg = f.selectAll("g");
        s.append(svg);
        ilustracao = s.select("g#ilustracao");
        // Propriedades
        mascara.attr({
          fill: "#fff",
        });

        ilustracao.attr({
          fill: "#009BBF",
          "fill-opacity": 0.3,
          filter: shadow,
          mask: mascara,
        });

        //Animação
        mascara.animate({
          x: 0,
          y: 0
        }, 1000, mina.easein);

        ilustracao.animate({
          fill: "#4354a6",
          "fill-opacity": 0.7,
        }, 1000, mina.easeout);
      });
    },




  }

  ManipularConfiguracoes.init();

})();
