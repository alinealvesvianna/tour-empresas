(function () {

    var items = localStorage.getItem("dados")

    if (items === null || items.length === 0 || items === undefined) {

        var Dados = {
            "dadoAtual": [],
            "dadosConteudo": [
               {
                   "tituloGeral": "Passos para Abertura de Matriz e Filial nos Demais Municípios",
                   "cidade": ["outrosMunicipios"],
                   "tipoTransacao": "abertura",
                   "tipoEmpresa": ["matriz", "filial"],
                   "cards": [
                      {
                          "tituloCard": "Passo 1: Pedido de Viabilidade (Atividade + Endereço + Reserva de Nome empresarial)",
                          "textoCard": [
                             "Acesse o nosso <a class='u-sm-link u-corAzul' href='http://www.jucerja.rj.gov.br/JucerjaPortalWeb/default.aspx' target='_blank'>Portal Web JUCERJA</a> e realize o login com seu usuário e senha. Caso não possua usuário e senha, efetue o cadastro através do menu Cadastro de Usuário Web disponível em nosso portal. Feito isto, você terá em mãos o seu usuário e senha para realizar o login em nosso site.",
                             "Acesse o menu REGIN – LISTA DE SERVIÇOS – PEDIDO DE VIABILIDADE, preencha o formulário do pedido de viabilidade e confirme o envio. Guarde o número do protocolo de viabilidade gerado e aguarde a análise da prefeitura no prazo de 2 (dois) dias úteis.",
                             "O andamento do pedido poderá ser acompanhado em nosso site através do menu REGIN - LISTA DE SERVIÇOS - ACOMPANHEMENTO DO PEDIDO DE VIABILIDADE. Após a finalização do pedido, imprima seu relatório de viabilidade válido para trâmite na JUCERJA."
                          ]
                      },
                      {
                          "tituloCard": "Passo 2: Solicitação de Inscrição do CNPJ",
                          "textoCard": [
                             "Realize a solicitação do CNPJ através do site <a class='u-sm-link u-corAzul' href='https://www14.receita.fazenda.gov.br/cadsincnac/inicioAction.do' target='_blank'>Coleta Online</a> da Receita Federal preenchendo o DBE (Documento Básico de Entrada). Após o preenchimento do DBE, guarde o seu número de recibo e o de identificação.Aguarde a validação de 30 minutos, depois acesse o site da <a class='u-sm-link u-corAzul' target='_blank' href='http://www.receita.fazenda.gov.br/PessoaJuridica/CNPJ/fcpj/consulta.asp'>Receita Federal</a> e imprima o DBE."
                          ]
                      },
                      {
                          "tituloCard": "Passo 3: Solicitação de Inscrição Estadual",
                          "textoCard": [
                             "Caso a empresa exerça atividade de Comércio e tenha interesse em solicitar simultaneamente a Inscrição Estadual, acesse o DOCAD Eletrônico (Documento de Cadastro Eletrônico) através do site<a class='u-sm-link u-corAzul' href='http://www.fazenda.rj.gov.br/sefaz/faces/menu_structure/servicos?_afrLoop=248298262977000&datasource=UCMServer%23dDocName%3A106508&_afrWindowMode=0&_adf.ctrl-state=1323k07guh_4' target='_blank'>SEFAZ RJ</a>, realize o download e instalação do programa. Preencha o formulário, disponível no programa instalado, com os dados da empresa. Após o preenchimento, salve o arquivo e anexe-o no site da SEFAZ e confirme o envio através da opção <a class='u-sm-link u-corAzul' href='http://www.fazenda.rj.gov.br/sefaz/faces/pagamentos/pagamentosNavigation/DOCAD?_afrLoop=248435397204000&_afrWindowMode=0&_adf.ctrl-state=1323k07guh_27' target='_blank'>Transmissão do DOCAD</a>."
                          ]
                      },
                      {
                          "tituloCard": "Passo 4: Protocolo Web",
                          "textoCard": [
                             "Acesse o nosso <a class='u-sm-link u-corAzul' href='http://www.jucerja.rj.gov.br/JucerjaPortalWeb/default.aspx' target='_blank'> Portal Web JUCERJA </a> e realize o login com seu usuário e senha.",
                             "Gere o boleto de pagamento no site da JUCERJA no acesso “Guia Bancária”.",
                             "Gere o DARF para pagamento no Site da Receita Federal clicando aqui:<a class='u-sm-link u-corAzul' href='http://idg.receita.fazenda.gov.br/orientacao/tributaria/pagamentos-e-parcelamentos/darf-calculo-e-impressao-programa-sicalc-1/programa-para-calculo-e-emissao-de-darf-on-line-de-tributos-e-contribuicoes-federais-exceto-contribuicoes-previdenciarias' target='_blank'>DARF.</a>",
                             "Após os pagamentos, preencha os dados da empresa no site da JUCERJA clicando em <a href='~/Servicos/Protocolo/' target='_blank' class='u-sm-link'>Protocolo Web</a>. Após a geração dos documentos, efetue a entrada processo digital ou compareça à JUCERJA para a entrada de processo nos casos de processo híbrido. Para dúvidas de documentação consulte a <a class='u-sm-link u-corAzul' href='http://drei.smpe.gov.br/legislacao/instrucoes-normativas/titulo-menu/new-instrucoes-normativas-em-vigor' target='_blank'>Instrução Normativa 10/2013</a>."
                          ]
                      },
                      {
                          "tituloCard": "Passo 5: Alvará de Funcionamento",
                          "textoCard": [
                             "Após o registro da empresa na JUCERJA, os dados da empresa serão enviados automaticamente para a prefeitura conceder o Alvará pelo REGIN. Acompanhe o seu processo de Alvará pelo site da JUCERJA no menu <a class='u-sm-link u-corAzul' href='https://www.jucerja.rj.gov.br/tax.juntarj/con_viabilidadeselecaoexterno.aspx' target='_blank'> REGIN - LISTA DE SERVIÇOS - ACOMPANHAMENTO DE ALVARÁ</a>(Informe o número do processo da JUCERJA)."
                          ]
                      },
                      {
                          "tituloCard": "Passo 6: Certificado do Corpo de Bombeiros",
                          "textoCard": [
                             "O Corpo de Bombeiros já está finalizando sua Integração ao RedeSimples. Em Breve, no seu pedido de viabilidade, estará disponível o formulário dos bombeiros para preenchimento.Com base nessas informações será possível saber, ainda na viabilidade, se o seu negócio poderá ser beneficiado pelo procedimento simplificado ou não.",
                             "Com a integração e o novo procedimento simplificado, assim que a empresa for registrada na JUCERJA, os dados serão enviados automaticamente para os Bombeiros. Você só precisará acessar o Portal Web dos Bombeiros e informar o número do seu processo na JUCERJA e o CNPJ concedido. Somente com estas informações, você poderá emitir o DAEM e dar continuidade no processo, gerando via web, respectivamente, o Termo de Responsabilidade,Verificação das Exigências e a Geração do Certificado de Aprovação Simplificado."
                          ]
                      }
                   ],

               },
               {
                   "tituloGeral": "Passos para Abertura de Matriz e Filial no Rio de Janeiro",
                   "cidade": ["rioDeJaneiro"],
                   "tipoTransacao": "abertura",
                   "tipoEmpresa": ["matriz", "filial"],
                   "cards": [
                      {
                          "tituloCard": "Passo 1: Consulta Prévia de Local",
                          "textoCard": [
                             "Solicite sua consulta prévia de local através do site <a class='u-sm-link u-corAzul' href='http://www.rio.rj.gov.br/web/rio-mais-facil/' target='_blank'>Rio Mais Fácil Negócios.</a> No menu ALVARÁ – CONSULTA PRÉVIA DE LOCAL, preencha o formulário da consulta prévia e confirme a solicitação. Aguarde a análise da Prefeitura. O prazo da análise é de até 2 dias úteis, quando não for necessária a realização da vistoria."
                          ]
                      },
                      {
                          "tituloCard": "Passo 2: Termo de Aceitação",
                          "textoCard": [
                             "Após a aprovação da consulta prévia de local no site <a class='u-sm-link u-corAzul' href='http://www.rio.rj.gov.br/web/rio-mais-facil/' target='_blank'> Rio Mais Fácil Negócios,</a> confirme o Termo de Aceitação através do menu <a class='u-sm-link u-corAzul' href='http://www.rio.rj.gov.br/web/riomaisfacilnegocios/erucca' target='_blank'> Requerimento Eletrônico de Alvará.</a>Após a confirmação do termo, você será direcionado para o sistema REGIN da JUCERJA."
                          ]
                      },
                      {
                          "tituloCard": "Passo 3: Viabilidade de Nome Empresarial",
                          "textoCard": [
                             "Após o direcionamento para o sistema JUCERJA/REGIN,realize o login com seu usuário e senha, caso não possua usuário e senha, você poderá efetuar o cadastro através do nosso <a class='u-sm-link u-corAzul' href='http://www.jucerja.rj.gov.br/JucerjaPortalWeb/default.aspx' target='_blank'> Portal Web JUCERJA</a> pelo menu Cadastro de Usuário Web. Após o login, preencha o formulário do pedido de viabilidade e confirme o envio. Guarde o número do protocolo gerado e imprima o relatório da viabilidade."
                          ]
                      },
                      {
                          "tituloCard": "Passo 4: Solicitação de Inscrição do CNPJ",
                          "textoCard": [
                             " Realize a solicitação do CNPJ através do site <a class='u-sm-link u-corAzul' href='https://www14.receita.fazenda.gov.br/cadsincnac/inicioAction.do' target='_blank'> Coleta Online</a> da Receita Federal preenchendo o DB(Documento Básico de Entrada). Após o preenchimento do DBE, guarde o seu número de recibo e o de identificação.Aguarde a validação de 30 minutos, depois acesse o site da Receita Federal e imprima o DBE."
                          ]
                      },
                      {
                          "tituloCard": "Passo 5: Solicitação de Inscrição Estadual",
                          "textoCard": [
                             " Caso a empresa exerça atividade de Comércio e tenha interesse em solicitar simultaneamente a Inscrição Estadual, acesse o DOCAD Eletrônico (Documento de Cadastro Eletrônico) através do site <a class='u-sm-link u-corAzul' href='http://www.fazenda.rj.gov.br/sefaz/faces/menu_structure/servicos?_afrLoop=250840783553000&datasource=UCMServer%23dDocName%3A106508&_afrWindowMode=0&_adf.ctrl-state=1323k07guh_47' target='_blank'> SEFAZ RJ, </a> realize o download e instalação do programa. Preencha o formulário, disponível no programa instalado, com os dados da empresa. Após o preenchimento, salve o arquivo e anexe-o no site da SEFAZ e confirme o envio através da opção <a class='u-sm-link u-corAzul' href='http://www.fazenda.rj.gov.br/sefaz/faces/pagamentos/pagamentosNavigation/DOCAD?_afrLoop=250890163726000&_afrWindowMode=0&_adf.ctrl-state=1323k07guh_70' target='_blank'>Transmissão do DOCAD.</a>"
                          ]
                      },
                      {
                          "tituloCard": "Passo 6: Protocolo Web",
                          "textoCard": [
                             "Acesse o nosso <a class='u-sm-link u-corAzul' href='http://www.jucerja.rj.gov.br/JucerjaPortalWeb/default.aspx' target='_blank'> Portal Web JUCERJA </a> e realize o login com seu usuário e senha. Gere o boleto de pagamento no site da JUCERJA no acesso “Guia Bancária”. Gere o DARF para pagamento no Site da Receita Federal clicando aqui: DARF. Preencha os dados da empresa no site da JUCERJA clicando em <a href='~/Servicos/Protocolo/' target='_blank' class='u-sm-link'>Protocolo Web</a>.",
                             "Após a geração dos documentos, efetue a entrada processo digital ou compareça à JUCERJA para a entrada de processo nos casos de processo híbrido; Para dúvidas de documentação consulte a<a class='u-sm-link u-corAzul' href='http://drei.smpe.gov.br/legislacao/instrucoes-normativas/titulo-menu/new-instrucoes-normativas-em-vigor' target='_blank'>Instrução Normativa 10/2013.</a>"
                          ]
                      },
                      {
                          "tituloCard": "Passo 7: Alvará de Funcionamento",
                          "textoCard": [
                             "Após o registro na JUCERJA, os dados serão enviados automaticamente para o sistema da Prefeitura. Aguarde o processamento e imprima o DARM (Documento de Arrecadação Municipal) através do link enviado para o e-mail cadastrado na Consulta Prévia de Local. Você poderá acessá-lo também através do <a class='u-sm-link u-corAzul' href='http://carioca.rio.rj.gov.br/' target='_blank'>Carioca Digital.</a>",
                             "Realize o pagamento das taxas e aguarde a confirmação do pagamento na prefeitura. Após a confirmação do pagamento, seu alvará de funcionamento será concedido*. Imprima-o através do <a class='u-sm-link u-corAzul' href='http://carioca.rio.rj.gov.br/' target='_blank'> Carioca Digital.</a>"
                          ],
                          "observacao": [
                             "(*) Em casos de atividades consideradas de baixo risco pela legislação municipal."
                          ]
                      },
                      {
                          "tituloCard": "Passo 8: Certificado do Corpo de Bombeiros",
                          "textoCard": [
                             "O Corpo de Bombeiros já está finalizando sua Integração ao RedeSimples. Em Breve, no seu pedido de viabilidade, estará disponível o formulário dos bombeiros para preenchimento. Com base nessas informações será possível saber, ainda na viabilidade, se o seu negócio poderá ser beneficiado pelo procedimento simplificado ou não.",
                             "Com a integração e o novo procedimento simplificado, assim que a empresa for registrada na JUCERJA, os dados serão enviados automaticamente para os Bombeiros. Você só precisará acessar o Portal Web dos Bombeiros e informar o número do seu processo na JUCERJA e o CNPJ concedido. Somente com estas informações, você poderá emitir o DAEM e dar continuidade no processo, gerando via web, respectivamente, o Termo de Responsabilidade, Verificação dasExigências e a Geração do Certificado de Aprovação Simplificado."
                          ]
                      }
                   ]
               },
               {
                   "tituloGeral": "Passos para Alterar Endereço e Atividade Econômica nos Demais Municípios",
                   "cidade": ["outrosMunicipios"],
                   "tipoTransacao": "alteracao",
                   "tipoEmpresa": ["matriz", "filial", "mei"],
                   "cards": [
                      {
                          "tituloCard": "Passo 1: Pedido de Viabilidade",
                          "textoCard": [
                             "Acesse o nosso <a class='u-sm-link u-corAzul' href='http://www.jucerja.rj.gov.br/JucerjaPortalWeb/default.aspx' target='_blank'>Portal Web JUCERJA</a> e realize o login com seu usuário e senha. Caso não possua usuário e senha, efetue o cadastro através do menu Cadastro de Usuário Web disponível em nosso portal. Feito isto, você terá em mãos o seu usuário e senha para realizar o login em nosso site.",
                             "Acesse o menu <a class='u-sm-link u-corAzul' href='http://www.jucerja.rj.gov.br/JucerjaPortalWeb/Paginas/Servicos/UsuarioAutenticacao.aspx?redir=L0p1Y2VyamFQb3J0YWxXZWIvUGFnaW5hcy9SZWdpbi9PdXRyb3MvVmlhYmlsaWRhZGVOb3JtYXRpdmEuYXNweA==' target='_blank'> REGIN – LISTA DE SERVIÇOS – PEDIDO DE VIABILIDADE, </a> preencha o formulário do pedido de viabilidade e confirme o envio. Guarde o número do protocolo de viabilidade gerado e aguarde a análise da prefeitura no prazo de 2 (dois) dias úteis.",
                             "O andamento do pedido poderá ser acompanhado através do nosso site no menu <a class='u-sm-link u-corAzul' href='https://www.jucerja.rj.gov.br/tax.juntarj/con_viabilidadeselecaoexterno.aspx' target='_blank'> REGIN - LISTA DE SERVIÇOS - ACOMPANHEMENTO DO PEDIDO DE VIABILIDADE.</a> Após a finalização do pedido, imprima seu relatório de viabilidade válido para trâmite na JUCERJA."
                          ]
                      },
                      {
                          "tituloCard": "Passo 2: Solicitação de alteração dos dados da empresa na Receita Federal",
                          "textoCard": [
                             "Realize a solicitação de alteração dos dados da empresa na Receita Federal através do site <a class='u-sm-link u-corAzul' href='https://www14.receita.fazenda.gov.br/cadsincnac/inicioAction.do' target='_blank'> Coleta Online </a>  preenchendo o DBE (Documento Básico de Entrada). Após o preenchimento do DBE, guarde o seu número de recibo e o de identificação. Aguarde a validação de 30 minutos, depois acesse o site da <a class='u-sm-link u-corAzul' href='http://www.receita.fazenda.gov.br/PessoaJuridica/CNPJ/fcpj/consulta.asp' target='_blank'>Receita Federal</a> e imprima o DBE."
                          ]
                      },
                      {
                          "tituloCard": "Passo 3: Protocolo Web",
                          "textoCard": [
                             "Acesse o nosso <a class='u-sm-link u-corAzul' href='http://www.jucerja.rj.gov.br/JucerjaPortalWeb/default.aspx' target='_blank'>Portal Web JUCERJA</a> e realize o login com seu usuário e senha.",
                             "Gere o boleto de pagamento no site da JUCERJA no acesso “Guia Bancária”.",
                             "Gere o DARF para pagamento no Site da Receita Federal clicando aqui: <a class='u-sm-link u-corAzul' href='http://idg.receita.fazenda.gov.br/orientacao/tributaria/pagamentos-e-parcelamentos/darf-calculo-e-impressao-programa-sicalc-1/programa-para-calculo-e-emissao-de-darf-on-line-de-tributos-e-contribuicoes-federais-exceto-contribuicoes-previdenciarias' target='_blank'> DARF.</a>",
                             "Após os pagamentos, preencha os dados da empresa no site da JUCERJA clicando em <a href='~/Servicos/Protocolo/' target='_blank' class='u-sm-link'>Protocolo Web</a>.",
                             "Após a geração dos documentos, efetue a entrada processo digital ou compareça à JUCERJA para a entrada de processo nos casos de processo híbrido. Para dúvidas de documentação consulte a <a class='u-sm-link u-corAzul' href='http://drei.smpe.gov.br/legislacao/instrucoes-normativas/titulo-menu/new-instrucoes-normativas-em-vigor' target='_blank'>Instrução Normativa 10/2013.</a>"
                          ]
                      },
                      {
                          "tituloCard": "Passo 4: Solicitação de Inscrição do CNPJ",
                          "textoCard": [
                             "Após o registro da empresa na JUCERJA, os dados da empresa serão enviados automaticamente para a prefeitura conceder o Alvará pelo REGIN. Acompanhe o seu processo de Alvará através do site da JUCERJA no menu <a class='u-sm-link u-corAzul' href='https://www.jucerja.rj.gov.br/tax.juntarj/con_viabilidadeselecaoexterno.aspx' target='_blank'> REGIN - LISTA DE SERVIÇOS - ACOMPANHAMENTO DE ALVARÁ</a>(Informe o número do processo da JUCERJA)."
                          ]
                      }
                   ]
               },
               {
                   "tituloGeral": "Passos para Alterar Endereço e Atividade Econômica no Rio de Janeiro",
                   "cidade": ["rioDeJaneiro"],
                   "tipoTransacao": "alteracao",
                   "tipoEmpresa": ["matriz", " filial"],
                   "cards": [
                      {
                          "tituloCard": "Passo 1: Consulta Prévia de Local",
                          "textoCard": [
                             "Solicite sua consulta prévia de endereço através do site <a class='u-sm-link u-corAzul' href='http://www.rio.rj.gov.br/web/rio-mais-facil/' target='_blank'> Rio Mais Fácil Negócios.</a> No menu ALVARÁ – CONSULTA PRÉVIA DE LOCAL, preencha o formulário da consulta prévia e confirme a solicitação. Aguarde a análise da Prefeitura. O prazo da análise é de até 2 dias úteis, quando não for necessária a realização da vistoria."
                          ]
                      },
                      {
                          "tituloCard": "Passo 2: Termo de Aceitação",
                          "textoCard": [
                             "Após a aprovação da consulta prévia de local no site <a class='u-sm-link u-corAzul' href='http://www.rio.rj.gov.br/web/rio-mais-facil/' target='_blank'> Rio Mais Fácil Negócios </a> confirme o Termo de Aceitação através do menu <a class='u-sm-link u-corAzul' href='http://www.rio.rj.gov.br/web/riomaisfacilnegocios/erucca' target='_blank'> Requerimento Eletrônico de Alvará. </a> Após a confirmação do termo, você será direcionado para o sistema JUCERJA/ REGIN."
                          ]
                      },
                      {
                          "tituloCard": "Passo 3: Viabilidade",
                          "textoCard": [
                             "Após o direcionamento para o sistema JUCERJA/REGIN, realize o login com seu usuário e senha, caso não possua usuário e senha, você poderá efetuar o cadastro através do nosso <a class='u-sm-link u-corAzul' href='http://www.jucerja.rj.gov.br/JucerjaPortalWeb/default.aspx' target='_blank'> Portal Web JUCERJA</a> menu Cadastro de Usuário Web. Após o login, preencha o formulário do pedido de viabilidade e confirme o envio. Guarde o número do protocolo gerado e imprima o relatório da viabilidade."
                          ]
                      },
                      {
                          "tituloCard": "Passo 4: Solicitação de alteração dos dados da empresa na Receita Federal",
                          "textoCard": [
                             "Realize a solicitação de alteração dos dados da empresa na Receita Federal através do site <a class='u-sm-link u-corAzul' href='https://www14.receita.fazenda.gov.br/cadsincnac/inicioAction.do' target='_blank'> Coleta Online</a> preenchendo o DBE (Documento Básico de Entrada). Após o preenchimento do DBE, guarde o seu número de recibo e o de identificação. Aguarde a validação de 30 minutos, depois acesse o site da <a class='u-sm-link u-corAzul' href='http://www.receita.fazenda.gov.br/PessoaJuridica/CNPJ/fcpj/consulta.asp' target='_blank'>Receita Federal</a> e imprima o DBE."
                          ]
                      },
                      {
                          "tituloCard": "Passo 5: Protocolo Web",
                          "textoCard": [
                             "Acesse o nosso <a class='u-sm-link u-corAzul' href='http://www.jucerja.rj.gov.br/JucerjaPortalWeb/default.aspx' target='_blank'>Portal Web JUCERJA</a> e realize o login com seu usuário e senha.",
                             "Gere o boleto de pagamento no site da JUCERJA no acesso “Guia Bancária”.",
                             "Gere o DARF para pagamento no Site da Receita Federal clicando aqui: <a class='u-sm-link u-corAzul' href='http://idg.receita.fazenda.gov.br/orientacao/tributaria/pagamentos-e-parcelamentos/darf-calculo-e-impressao-programa-sicalc-1/programa-para-calculo-e-emissao-de-darf-on-line-de-tributos-e-contribuicoes-federais-exceto-contribuicoes-previdenciarias' target='_blank'>DARF.</a>",
                             "Após os pagamentos, preencha os dados da empresa no site da JUCERJA clicando em <a href='~/Servicos/Protocolo/' target='_blank' class='u-sm-link'>Protocolo Web</a>.",
                             "Após a geração dos documentos, efetue a entrada processo digital ou compareça à JUCERJA para a entrada de processo nos casos de processo híbrido. Para dúvidas de documentação consulte a <a class='u-sm-link u-corAzul' href='http://drei.smpe.gov.br/legislacao/instrucoes-normativas/titulo-menu/new-instrucoes-normativas-em-vigor' target='_blank'>Instrução Normativa 10/2013.</a>"
                          ]
                      },
                      {
                          "tituloCard": "Passo 6: Alvará de Funcionamento",
                          "textoCard": [
                             "Após o registro na JUCERJA, os dados serão enviados automaticamente para o sistema da Prefeitura. Aguarde o processamento e imprima o DARM (Documento de Arrecadação Municipal) através do link enviado para o e-mail cadastrado na Consulta Prévia de Local. Você poderá acessá-lo também através do <a class='u-sm-link u-corAzul' href='http://carioca.rio.rj.gov.br/' target='_blank'>Carioca Digital.</a>",
                             "Realize o pagamento das taxas e aguarde a confirmação do pagamento na prefeitura. Após a confirmação do pagamento, seu alvará de funcionamento será concedido*. Imprima-o através do <a class='u-sm-link u-corAzul' href='http://carioca.rio.rj.gov.br/' target='_blank'> Carioca Digital.</a>"
                          ],
                          "observacao": [
                             "(*) Em casos de atividades consideradas de baixo risco pela legislação municipal."
                          ]
                      }
                   ]
               },
               {
                   "tituloGeral": "Passos para Alterar Nome Empresarial e Natureza Jurídica no Rio de Janeiro",
                   "cidade": ["rioDeJaneiro"],
                   "tipoTransacao": "alteracao",
                   "tipoEmpresa": ["matriz"],
                   "cards": [
                      {
                          "tituloCard": "Passo 1: Pedido de Viabilidade",
                          "textoCard": [
                             "Acesse o nosso <a class='u-sm-link u-corAzul' href='http://www.jucerja.rj.gov.br/JucerjaPortalWeb/default.aspx' target='_blank'> Portal Web JUCERJA </a> e realize o login com seu usuário e senha. Caso não possua usuário e senha, efetue o cadastro através do menu Cadastro de Usuário Web disponível em nosso portal. Feito isto, você terá em mãos o seu usuário e senha para realizar o login em nosso site. Acesse o menu <a class='u-sm-link u-corAzul' href='http://www.jucerja.rj.gov.br/JucerjaPortalWeb/Paginas/Servicos/UsuarioAutenticacao.aspx?redir=L0p1Y2VyamFQb3J0YWxXZWIvUGFnaW5hcy9SZWdpbi9PdXRyb3MvVmlhYmlsaWRhZGVOb3JtYXRpdmEuYXNweA==' target='_blank'> REGIN – LISTA DE SERVIÇOS – PEDIDO DE VIABILIDADE</a> preencha o formulário do pedido de viabilidade e confirme o envio. Guarde o número do protocolo gerado e imprima o relatório da viabilidade."
                          ]
                      },
                      {
                          "tituloCard": "Passo 2: Solicitação de alteração dos dados da empresa na Receita Federal",
                          "textoCard": [
                             "Realize a solicitação de alteração dos dados da empresa na Receita Federal através do site <a class='u-sm-link u-corAzul' href='https://www14.receita.fazenda.gov.br/cadsincnac/inicioAction.do' target='_blank'>Coleta Online</a> preenchendo o DBE (Documento Básico de Entrada). Após o preenchimento do DBE, guarde o seu número de recibo e o de identificação. Aguarde a validação de 30 minutos, depois acesse o site da <a class='u-sm-link u-corAzul' href='http://www.receita.fazenda.gov.br/PessoaJuridica/CNPJ/fcpj/consulta.asp' target='_blank'>Receita Federal</a> e imprima o DBE."
                          ]
                      },
                      {
                          "tituloCard": "Passo 3: Protocolo Web",
                          "textoCard": [
                             "Acesse o nosso <a class='u-sm-link u-corAzul' href='http://www.jucerja.rj.gov.br/JucerjaPortalWeb/default.aspx' target='_blank'>Portal Web JUCERJA</a> e realize o login com seu usuário e senha.",
                             "Gere o boleto de pagamento no site da JUCERJA no acesso “Guia Bancária”.",
                             "Gere o DARF para pagamento no Site da Receita Federal clicando aqui: <a class='u-sm-link u-corAzul' href='http://idg.receita.fazenda.gov.br/orientacao/tributaria/pagamentos-e-parcelamentos/darf-calculo-e-impressao-programa-sicalc-1/programa-para-calculo-e-emissao-de-darf-on-line-de-tributos-e-contribuicoes-federais-exceto-contribuicoes-previdenciarias' target='_blank'>DARF.</a>",
                             "Após os pagamentos, preencha os dados da empresa no site da JUCERJA clicando em <a href='~/Servicos/Protocolo/' target='_blank' class='u-sm-link'>Protocolo Web</a>.",
                             " Após a geração dos documentos, efetue a entrada processo digital ou compareça à JUCERJA para a entrada de processo nos casos de processo híbrido. Para dúvidas de documentação consulte a <a class='u-sm-link u-corAzul' href='http://drei.smpe.gov.br/legislacao/instrucoes-normativas/titulo-menu/new-instrucoes-normativas-em-vigor' target='_blank'>Instrução Normativa 10/2013.</a>"
                          ]
                      }
                   ]
               },
               {
                   "tituloGeral": "Passo a passo para realização de Baixa da Empresa",
                   "cidade": ["rioDeJaneiro", "outrosMunicipios"],
                   "tipoTransacao": "baixa",
                   "tipoEmpresa": ["matriz", "filial", "mei"],
                   "cards": [
                      {
                          "ordem": 1,
                          "tituloCard": "Passo 1:  Solicitação de baixa da empresa na Receita Federal",
                          "textoCard": [
                             "Realize a solicitação de alteração dos dados da empresa na Receita Federal através do site <a class='u-sm-link u-corAzul' href='https://www14.receita.fazenda.gov.br/cadsincnac/inicioAction.do' target='_blank'>Coleta Online</a> preenchendo o DBE (Documento Básico de Entrada). Após o preenchimento do DBE, guarde o seu número de recibo e o de identificação. Aguarde a validação de 30 minutos, depois acesse o site da <a class='u-sm-link u-corAzul' href='http://www.receita.fazenda.gov.br/PessoaJuridica/CNPJ/fcpj/consulta.asp' target='_blank'>Receita Federal</a> e imprima o DBE."
                          ]
                      },
                      {
                          "ordem": 2,
                          "tituloCard": "Passo 2: Protocolo Web",
                          "textoCard": [
                             "Acesse o nosso Portal Web JUCERJA e realize o login com seu usuário e senha. Caso não possua usuário e senha, efetue o cadastro através do menu Cadastro de Usuário Web disponível em nosso portal. Feito isto, você terá em mãos o seu usuário e senha para realizar o login em nosso site. Gere o boleto de pagamento no site da JUCERJA no acesso “Guia Bancária”. Gere o DARF para pagamento no Site da Receita Federal clicando aqui:<a class='u-sm-link u-corAzul' href='http://idg.receita.fazenda.gov.br/orientacao/tributaria/pagamentos-e-parcelamentos/darf-calculo-e-impressao-programa-sicalc-1/programa-para-calculo-e-emissao-de-darf-on-line-de-tributos-e-contribuicoes-federais-exceto-contribuicoes-previdenciarias' target='_blank'>Receita Federal DARF</a>. Após o pagamento, preencha os dados da empresa no site da JUCERJA clicando em <a href='@Url.Action('ProtocoloWeb', 'Servicos')'>Protocolo Web</a>. Após a geração dos documentos, efetue a entrada processo digital ou compareça à JUCERJA para a entrada de processo nos casos de processo híbrido. Para dúvidas de documentação consulte a Instrução Normativa 10/2013."
                          ]
                      }
                   ]
               }
            ]
        }

        localStorage.setItem("dados", JSON.stringify(Dados));
    };

})();
