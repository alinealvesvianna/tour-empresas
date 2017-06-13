(function() {

  var ConfiguracoesBanner = {
    opcoesBoxes: [{
        tipoTransacao: "abertura",
        titulo: "Abrir",
        texto: "Veja aqui como <strong class='u-maiuscula'>abrir</strong> a sua empresa",
        textoBtn: "Clique <br /> <span class='u-corAmarelo'>aqui</span>"
      },
      {
        tipoTransacao: "alteracao",
        titulo: "Alterar",
        texto: "Veja aqui como <strong class='u-maiuscula'>alterar</strong> a sua empresa",
        textoBtn: "Clique <br /> <span class='u-corAmarelo'>aqui</span>"
      },
      {
        tipoTransacao: "baixa",
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

      this.containerBanner = document.getElementById('bannerContainerPrincipal');
      this.estruturaBanner = document.getElementById('containerBanner').innerHTML;
      this.estruturaBannerEscolha = document.getElementById('containerPassosEscolha').innerHTML;
      this.estruturaOpcaoFormulario = document.getElementById('opcaoFormBanner').innerHTML;

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

      console.log(this.containerBanner)
      var bannerPrimeiroPasso = this.containerBanner.getElementsByClassName('banner-passo--primeiroPasso');

      for (i = 0; i < dadosBoxesLength; i++) {

        this.htmlBoxBanner = document.createElement("div");
        this.htmlBoxBanner.className = "banner-secao banner-secaoTransacao";

        htmlTituloBox = document.createElement("h4");
        htmlTituloBox.className = "banner-header banner-header--funcoes";
        htmlTituloBox.innerHTML = dadosBoxes[i].titulo;

        htmlTextoBox = document.createElement("p");
        htmlTextoBox.className = "banner-descricao";
        htmlTextoBox.innerHTML = dadosBoxes[i].texto;

        htmlBtnBox = document.createElement("button");
        htmlBtnBox.className = "banner-btn banner-btnIniciaPasso2";
        htmlBtnBox.innerHTML = dadosBoxes[i].textoBtn;

        this.htmlBoxBanner.appendChild(htmlTituloBox);
        this.htmlBoxBanner.appendChild(htmlTextoBox);

        this.htmlBoxBanner.appendChild(htmlBtnBox);

        // htmlBtnBox.addEventListener('click', this.cliqueAbrirSegundoPasso(dadosBoxes[i].tipoTransacao));

        bannerPrimeiroPasso[0].appendChild(this.htmlBoxBanner);

      }

      // this.fazerAnimacao();
    },





  }

  ManipularConfiguracoes.init();

})();
