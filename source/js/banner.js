(function () {

    var ConfiguracoesBanner = {
        opcoesBoxes: [
            {
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
        init: function () {
            BannerPrincipal.init();
        },

        dadosConfiguracaoBanner: function () {
            return ConfiguracoesBanner.opcoesBoxes;
        },

        dadosConfiguracoesTipoEmpresa: function () {
            return ConfiguracoesBanner.opcoesEscolhaTipoEmpresa;
        }
    };

    var BannerPrincipal = {

        init: function () {

            var self = this;

            this.containerBanner = document.getElementById('bannerContainerPrincipal');
            this.estruturaBanner = document.getElementById('containerBanner').innerHTML;
            this.estruturaBannerEscolha = document.getElementById('containerPassosEscolha').innerHTML;
            this.estruturaOpcaoFormulario = document.getElementById('opcaoFormBanner').innerHTML;

            this.containerBanner.innerHTML = "";
            this.btnIniciarTour = document.getElementById('iniciarTour');
            this.btnIniciarTour.addEventListener('click', function () {
                self.montarBanner();
            });


        },


    }

    ManipularConfiguracoes.init();

})();
