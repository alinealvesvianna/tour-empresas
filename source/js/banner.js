(function () {

   var ConfiguracoesBanner = {

       boxSelecionado: null,

       opcoesBoxes: [
           {
               tipoTransacao: "abertura",
               tituloSegundoPasso: "Abertura",
               titulo: "Abrir",
               texto: "Veja aqui como <strong class='u-maiuscula'>abrir</strong> a sua empresa",
               textoBtn: "Clique <br /> <span class='u-corAmarelo'>aqui</span>",
               flagTipoEscolha: "",
               botaoHabilitado: false
           },
           {
               tipoTransacao: "alteracao",
               tituloSegundoPasso: "Alteração",
               titulo: "Alterar",
               texto: "Veja aqui como <strong class='u-maiuscula'>alterar</strong> a sua empresa",
               textoBtn: "Clique <br /> <span class='u-corAmarelo'>aqui</span>",
               flagTipoEscolha: "",
               botaoHabilitado: false
           },
           {
               tipoTransacao: "baixa",
               tituloSegundoPasso: "Baixa",
               titulo: "Dar Baixa",
               texto: "Veja aqui como <strong class='u-maiuscula'>dar baixa</strong> na sua empresa",
               textoBtn: "Clique <br /> <span class='u-corAmarelo'>aqui</span>",
               flagTipoEscolha: "",
               botaoHabilitado: false
           }

       ],

       elementosNavegacao: [
           {
               tipoLink: "tipoEmpresa",
               labelLink: "Tipo Empresa",
               classeIcone: "icon-industry",
               linkDesativado: false
           },

           {
               tipoLink: "municipio",
               labelLink: "Município",
               classeIcone: "icon-empresa",
               linkDesativado: true
           }
       ],

       opcoesEscolhaTipoEmpresa: {
           opcaoEscolhida: "",
           bannerDescricao: "Primeiro, selecione o <stong class='u-maiuscula u-bold'>tipo da empresa:</stong>",
           opcoesRadio: [
                {
                    label: "Matriz",
                    valor: "matriz",
                    id: "matriz",
                    name: "tipo-empresa",
                    tipo: "tipoEmpresa",
                    classesInput: "icheckBtn banner-input banner-input--tpEmp"
                },
                {
                    label: "Filial",
                    valor: "filial",
                    id: "filial",
                    name: "tipo-empresa",
                    tipo: "tipoEmpresa",
                    classesInput: "icheckBtn banner-input banner-input--tpEmp"
                },
                {
                    label: "MEI",
                    valor: "mei",
                    id: "mei",
                    name: "tipo-empresa",
                    tipo: "tipoEmpresa",
                    classesInput: "icheckBtn banner-input banner-input--tpEmp"
                }
           ],
           textoBnt: "CONTINUAR"
       },

       opcoesEscolhaCidade: {
           opcaoEscolhida: "",
           bannerDescricao: "Agora, selecione o <stong class='u-maiuscula u-bold'>MUNICÍPIO </stong> que deseja informações:",
           opcoesRadio: [
               {
                   label: "Rio de Janeiro",
                   valor: "rioDeJaneiro",
                   id: "rioDeJaneiro",
                   name: "tipo-municipio",
                   tipo: "cidade",
                   classesInput: "icheckBtn banner-input banner-input--tpMun"
               },
               {
                   label: "Outros Municípios",
                   valor: "outrosMunicipios",
                   id: "outrosMunicipios",
                   name: "tipo-municipio",
                   tipo: "cidade",
                   classesInput: "icheckBtn banner-input banner-input--tpMun"
               }
           ],
           textoBnt: "<span class='icon-search'></span> BUSCAR"
       }

   };


   var ManipularConfiguracoes = {
       init: function () {
           BannerPrincipal.init();
       },

       dadosTodosBoxes: function () {
           return ConfiguracoesBanner.opcoesBoxes;
       },

       pegarDadoBoxAtual: function () {
           return ConfiguracoesBanner.boxSelecionado;
       },

       selecionarDadoBoxAtual: function (boxAtual) {
           ConfiguracoesBanner.boxSelecionado = boxAtual;
       },

       setaBotaoHabilitado: function (booleano) {
           ConfiguracoesBanner.boxSelecionado.botaoHabilitado = booleano;
       },

       mudarTipoEscolha: function (tipo) {
           ConfiguracoesBanner.boxSelecionado.flagTipoEscolha = tipo;
       },

       dadosNavegacao: function () {
           return ConfiguracoesBanner.elementosNavegacao;
       },

       dadosConfiguracoesTipoEmpresa: function () {
           return ConfiguracoesBanner.opcoesEscolhaTipoEmpresa;
       },

       dadosConfiguracoesCidade: function () {
           return ConfiguracoesBanner.opcoesEscolhaCidade;
       },
   };

   var BannerPrincipal = {

       init: function () {

           var self = this;

           this.urlSvg = "source/images/ilustracao-banner.svg";
           this.containerBanner = document.getElementById('bannerContainerPrincipal');
           this.estruturaBanner = document.getElementById('containerBanner').innerHTML;
           this.todasOpcoesTipoEmpresa = [];
           this.todasOpcoesMunicipio = [];
           this.containerBanner.innerHTML = '';
           this.btnIniciarTour = document.getElementById('iniciarTour');
           this.btnIniciarTour.addEventListener('click', function () {
               self.montarBanner();
           });
       },

       montarBanner: function () {

           var i,
               htmlTituloBox,
               htmlTextoBox,
               htmlBtnBox,
               bannerCapa = document.getElementById('bannerCapa'),
               containerSite = document.getElementsByClassName('container-site')[0],
               dadosBoxes = ManipularConfiguracoes.dadosTodosBoxes(),
               dadosBoxesLength = dadosBoxes.length,
               dadosTipoEmpresa = ManipularConfiguracoes.dadosConfiguracoesTipoEmpresa(),
               dadosMunicipio = ManipularConfiguracoes.dadosConfiguracoesCidade();


           this.htmlBoxBanner = null;
           this.containerNavegacaoBanner = null;

           containerSite.removeChild(bannerCapa);
           this.btnIniciarTour = null;
           this.containerBanner.insertAdjacentHTML('beforeend', this.estruturaBanner);
           this.containerBanner.className = 'banner';

           this.containerBoxes = this.containerBanner.getElementsByClassName('banner-passo')[0];
           this.tipoInputEmpresa = document.getElementById('tipo-empresa');
           this.tipoInputMunicipio = document.getElementById('tipo-municipio');
           this.tipoTransacaoInput = document.getElementById('tipo-transacao');

           for (i = 0; i < dadosBoxesLength; i++) {

               this.htmlBoxBanner = document.createElement('div');
               this.htmlBoxBanner.className = 'banner-secao';
               this.htmlBoxBanner.id = dadosBoxes[i].tipoTransacao;

               htmlTituloBox = document.createElement('h4');
               htmlTituloBox.className = 'banner-header banner-header--funcoes';
               htmlTituloBox.innerHTML = dadosBoxes[i].titulo;

               htmlTextoBox = document.createElement('p');
               htmlTextoBox.className = 'banner-descricao';
               htmlTextoBox.innerHTML = dadosBoxes[i].texto;

               htmlBtnBox = document.createElement('button');
               htmlBtnBox.className = 'banner-btn';
               htmlBtnBox.innerHTML = dadosBoxes[i].textoBtn;

               this.htmlBoxBanner.appendChild(htmlTituloBox);
               this.htmlBoxBanner.appendChild(htmlTextoBox);

               this.htmlBoxBanner.appendChild(htmlBtnBox);

               htmlBtnBox.addEventListener('click', this.abrirSegundoPasso(this.htmlBoxBanner, dadosBoxes[i]));

               this.containerBoxes.appendChild(this.htmlBoxBanner);
           }

           this.fazerAnimacao();
           this.montarNavegacao();
           this.montaRadioOpcoes(dadosTipoEmpresa);
           this.montaRadioOpcoes(dadosMunicipio);

       },

       abrirSegundoPasso: function (box, dado) {

           var self = this;

           return function () {

               ManipularConfiguracoes.selecionarDadoBoxAtual(dado);


               switch (dado.flagTipoEscolha) {
                   case "":
                       self.resetaOpcoes();
                       self.resetaBanner();
                       box.className = 'banner-secao banner-secao--selecionado';
                       self.containerBoxes.className = 'banner-passo banner-passo--segundoPasso';
                       self.gravaValorTipoTransacao(dado.tipoTransacao);
                       ManipularConfiguracoes.mudarTipoEscolha('tipoEmpresa');
                       self.mudaTextos(box);
                       self.adicionaBotaoFecharBanner(box);
                       self.adicionaOpcoes(box);
                       //self.verificaStatusBotao(box);
                       //self.adicionaNavegacao(box);
                       break;

                   case "tipoEmpresa":
                       self.removeOpcoes(box);
                       box.className = 'banner-secao banner-secao--selecionado';
                       self.containerBoxes.className = 'banner-passo banner-passo--segundoPasso';
                       ManipularConfiguracoes.mudarTipoEscolha('tipoMunicipio');
                       self.mudaTextos(box);
                       self.adicionaOpcoes(box);
                       self.gravaValorTipoTransacao(dado.tipoTransacao);
                       self.verificaStatusBotao(box);

                       break;

                   case "tipoMunicipio":
                       dado.flagTipoEscolha = "submeteDado";
                       console.log(dado.flagTipoEscolha);
                       self.verificaStatusBotao(box);
                       self.gravaValorTipoTransacao(dado.tipoTransacao);
                       break;

               }
           };
       },

       resetaBanner: function (fechar) {

           var todosBoxes = document.getElementsByClassName('banner-secao'),
               j,
               todosBoxesLength = todosBoxes.length,
               dadosBoxes = ManipularConfiguracoes.dadosTodosBoxes(),
               btnFechar = fechar === undefined ? document.getElementById('botaoFecharBanner') : fechar;


           //for para fazer o toggle de classes
           for (j = 0; j < todosBoxesLength; j++) {

               var botoesTodosBoxes = todosBoxes[j].getElementsByClassName('banner-btn')[0];

               //se cliquei no botão fechar, reseto
               //os boxes para classe inicial
               if (fechar !== undefined) {
                   todosBoxes[j].className = 'banner-secao';

               } else {
                   //senão, reseto os boxes para não selecionado, com largura maior
                   todosBoxes[j].className = 'banner-secao banner-secao--naoSelecionado';
               }

               //pega o título de todos os boxes e deixa com o título inicial
               var tituloTodosBoxes = todosBoxes[j].getElementsByClassName('banner-header')[0];
               tituloTodosBoxes.innerHTML = dadosBoxes[j].titulo;

               //pega o texto de todos os boxes e deixa com  o texto inicial
               var textoTodosBoxes = todosBoxes[j].getElementsByClassName('banner-descricao')[0];
               textoTodosBoxes.innerHTML = dadosBoxes[j].texto;

               //pega o texto de todos os botões e deixa com texto inicial
               var todosBotoes = todosBoxes[j].getElementsByClassName('banner-btn')[0];
               todosBotoes.innerHTML = dadosBoxes[j].textoBtn;

               dadosBoxes[j].flagTipoEscolha = "";

               if (todosBoxes[j].contains(btnFechar)) {
                   todosBoxes[j].removeChild(btnFechar);
               }
           }

           this.containerBoxes.className = 'banner-passo banner-passo--primeiroPasso';

           this.tipoInputEmpresa.value = "";
           this.tipoInputMunicipio.value = "";
           this.tipoTransacaoInput.value = "";
       },


       fazerAnimacao: function () {

           var svgElemento = document.getElementById('svgIlustracaoBanner'),
               s = Snap(svgElemento),
               ilustracao,
               shadow = s.filter(Snap.filter.shadow(2, 2, 3, 'grey', 0.5)),
               mascara = s.rect(-500, 0, 500, 400);

           Snap.load(this.urlSvg, function (f) {
               var svg = f.selectAll('g');
               s.append(svg);
               ilustracao = s.select('g#ilustracao');
               // Propriedades
               mascara.attr({
                   fill: '#fff',
               });

               ilustracao.attr({
                   fill: '#009BBF',
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
                   fill: '#4354a6',
                   'fill-opacity': 0.7,
               }, 1000, mina.easeout);
           });
       },


       montarNavegacao: function () {

           var htmlNav,
               htmlUl,
               l,
               htmlLi,
               htmlLink,
               htmlSpan,
               dadosElementos = ManipularConfiguracoes.dadosNavegacao(),
               dadosElementosLength = dadosElementos.length;


           this.containerNavegacaoBanner = document.createElement('aside');
           this.containerNavegacaoBanner.className = 'banner-menuOpc';

           htmlNav = document.createElement('nav');
           htmlNav.className = 'banner-navegacao';

           htmlUl = document.createElement('ul');
           htmlUl.className = 'banner-lista';

           for (l = 0 ; l < dadosElementosLength; l++) {

               htmlLi = document.createElement('li');
               htmlLi.className = 'banner-item';

               htmlLink = document.createElement('a');
               htmlLink.className = 'banner-lnk';
               htmlLink.innerHTML = dadosElementos[l].labelLink;

               htmlSpan = document.createElement('span');
               htmlSpan.className = "banner-icone " + dadosElementos[l].classeIcone;

               htmlUl.appendChild(htmlLi);
               htmlLi.appendChild(htmlLink);

               htmlLink.insertBefore(htmlSpan, htmlLink.childNodes[0]);

           }

           htmlNav.appendChild(htmlUl);
           this.containerNavegacaoBanner.appendChild(htmlNav);
       },


       montaRadioOpcoes: function (dados) {

           var htmlOpcao,
               htmlDivOpcao,
               htmlInputOpcao,
               htmlLabelOpcao,
               m,
               dadosOpcoes = dados.opcoesRadio,
               dadosOpcoesLength = dadosOpcoes.length;


           for (m = 0 ; m < dadosOpcoesLength; m++) {

               htmlDivOpcao = document.createElement('div');
               htmlDivOpcao.className = 'banner-opcForm';

               htmlInputOpcao = document.createElement('input');
               htmlInputOpcao.type = 'radio';
               htmlInputOpcao.value = dadosOpcoes[m].valor;
               htmlInputOpcao.id = dadosOpcoes[m].id;
               htmlInputOpcao.className = dadosOpcoes[m].classesInput;
               htmlInputOpcao.name = dadosOpcoes[m].name;
               htmlInputOpcao.addEventListener('click', this.montaRadioClique(dadosOpcoes[m]));


               htmlLabelOpcao = document.createElement('label');
               htmlLabelOpcao.htmlFor = dadosOpcoes[m].id;
               htmlLabelOpcao.className = 'banner-label';
               htmlLabelOpcao.innerHTML = dadosOpcoes[m].label;

               htmlDivOpcao.appendChild(htmlInputOpcao);
               htmlDivOpcao.appendChild(htmlLabelOpcao);

               htmlOpcao = htmlDivOpcao;


               if (dadosOpcoes[m].tipo === "tipoEmpresa") {
                   this.todasOpcoesTipoEmpresa.push(htmlOpcao);
               } else {
                   this.todasOpcoesMunicipio.push(htmlOpcao);
               }
           }
       },

       montaRadioClique: function (dados) {
           var self = this;
           return function () {

               if (dados.tipo === 'tipoEmpresa') {
                   self.tipoInputEmpresa.value = dados.valor;
               } else {
                   self.tipoInputMunicipio.value = dados.valor;
               }

               ManipularConfiguracoes.setaBotaoHabilitado(true);
               self.verificaStatusBotao();
           }

       },

       gravaValorTipoTransacao: function (transacao) {
           this.tipoTransacaoInput.value = transacao;
       },

       mudaTextos: function (boxSelecionado) {

           var tipoEscolhaAtual = ManipularConfiguracoes.pegarDadoBoxAtual(),
               dados = tipoEscolhaAtual.flagTipoEscolha === "tipoEmpresa" ? ManipularConfiguracoes.dadosConfiguracoesTipoEmpresa() : ManipularConfiguracoes.dadosConfiguracoesCidade();

           var tituloBox = boxSelecionado.getElementsByClassName('banner-header')[0];

           if (tipoEscolhaAtual.flagTipoEscolha === "tipoEmpresa") {
               tituloBox.innerHTML = tipoEscolhaAtual.tituloSegundoPasso;
           } else {
               var opcaoEscolhida = document.getElementById('tipo-empresa').value;
               tituloBox.innerHTML = tipoEscolhaAtual.tituloSegundoPasso + " > " + opcaoEscolhida;
           }

           var textoBox = boxSelecionado.getElementsByClassName('banner-descricao')[0];
           textoBox.innerHTML = dados.bannerDescricao;

           var btnBox = boxSelecionado.getElementsByClassName('banner-btn')[0];
           btnBox.innerHTML = dados.textoBnt;
       },

       adicionaBotaoFecharBanner: function (boxSelecionado) {
           var self = this;

           //coloca o botao fechar como null para remover o bind do evento de click
           this.botaoFechar = null;

           //cria botão fechar novo em folha
           this.botaoFechar = document.createElement('a');
           this.botaoFechar.className = 'banner-fechar';
           this.botaoFechar.id = 'botaoFecharBanner';
           var spanIcone = document.createElement('span');
           spanIcone.className = 'icon-cross';
           this.botaoFechar.appendChild(spanIcone);

           //adiciona o botão fechar aqui para saber em que box ele foi inserido
           //e evitar de ter q achar o box no dom para poder remover
           boxSelecionado.appendChild(this.botaoFechar);

           this.botaoFechar.addEventListener('click', function () {

               self.removeOpcoes(boxSelecionado);

               //passo o parâmetro de fechar para adicionar aos
               //boxes a classe de não selecionado que contém largura menor
               self.resetaBanner(this);
           });
       },

       adicionaOpcoes: function (boxSelecionado) {

           var o,
               tipoEscolhaAtual = ManipularConfiguracoes.pegarDadoBoxAtual(),
               opcoesHtml = tipoEscolhaAtual.flagTipoEscolha === "tipoEmpresa" ? this.todasOpcoesTipoEmpresa : this.todasOpcoesMunicipio,
               opcoesHtmlLength = opcoesHtml.length;

           for (o = 0; o < opcoesHtmlLength; o++) {
               var input = opcoesHtml[o].getElementsByClassName('banner-input')[0];
               input.checked = false;
               ManipularConfiguracoes.setaBotaoHabilitado(false);
               boxSelecionado.appendChild(opcoesHtml[o]);
           }

       },

       removeOpcoes: function (boxSelecionado, tipoEscolha) {
           var p,
               tipoEscolhaAtual = tipoEscolha === undefined ? ManipularConfiguracoes.pegarDadoBoxAtual() : tipoEscolha,
               opcoesHtml;


           if (tipoEscolhaAtual === tipoEscolha) {
               opcoesHtml = tipoEscolhaAtual === "tipoEmpresa" ? this.todasOpcoesTipoEmpresa : this.todasOpcoesMunicipio;
           } else {
               opcoesHtml = tipoEscolhaAtual.flagTipoEscolha === "tipoEmpresa" ? this.todasOpcoesTipoEmpresa : this.todasOpcoesMunicipio;
           }

           var opcoesHtmlLength = opcoesHtml.length;

           for (p = 0; p < opcoesHtmlLength; p++) {
               boxSelecionado.removeChild(opcoesHtml[p]);
           }

       },

       resetaOpcoes: function () {
           var q,
               dadosBoxes = ManipularConfiguracoes.dadosTodosBoxes(),
               dadosBoxesLength = dadosBoxes.length;

           for (q = 0; q < dadosBoxesLength; q++) {
               if (dadosBoxes[q].flagTipoEscolha !== "") {
                   var boxAlvo = document.getElementById(dadosBoxes[q].tipoTransacao);
                   var tipoEscolha = dadosBoxes[q].flagTipoEscolha;
                   this.removeOpcoes(boxAlvo, tipoEscolha);
               }

           }
       },


       adicionaNavegacao: function (boxSelecionado) {
           boxSelecionado.appendChild(this.containerNavegacaoBanner);
       },


       navegacaoDesativada: function () {

           var dadosDesativado = ManipularConfiguracoes.dadosNavegacao(),
               m,
               linksNavegacao = this.containerNavegacaoBanner.getElementsByClassName('banner-lnk'),
               linksNavegacaoLength = linksNavegacao.length;


           for (m = 0; m < linksNavegacaoLength; m++) {
               var status = dadosDesativado[m].linkDesativado ? "banner-btn banner-lnk banner-lnk--desativado" : "banner-btn banner-lnk";
               linksNavegacao[m].className = status;
           }

       },

       verificaStatusBotao: function () {
           var dadosDesativado = ManipularConfiguracoes.pegarDadoBoxAtual(),
               box = document.getElementById(dadosDesativado.tipoTransacao);
               btnBox = box.getElementsByClassName('banner-btn')[0],
               statusBtn = dadosDesativado.botaoHabilitado ? "banner-btn" : "banner-btn u-esconder";

           btnBox.className = statusBtn;
       }

   }

   ManipularConfiguracoes.init();

})();
