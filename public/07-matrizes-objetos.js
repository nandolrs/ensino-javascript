// após entender o conceito de matriz e objeto, podemos utilizar o poder de ambos os conceitos


// sendo os objetos

debugger;

antonietaDeBarros = {
    'nome':'Antonieta de Barros'
   ,'nascimento':'1901-07-11'
   ,'descricao':'Antonieta de Barros (Florianópolis, 11 de julho de 1901 – Florianópolis, 28 de março de 1952) foi uma jornalista, professora e política brasileira.[1][2][3] Foi uma das primeiras mulheres eleitas no Brasil e a primeira negra brasileira a assumir um mandato popular, tendo sido pioneira e inspiração para o movimento negro, apesar de um grande apagamento de sua história, que vem sendo retomada aos poucos.[4][5][6]'
   ,'idade':0
};

terezaDeBenguela = {
    'nome':'Tereza de Benguela'
   ,'nascimento':'1700-01-01'
   ,'descricao':'Tereza de Benguela (Reino de Benguela, c. 1700 - Capitania de Mato Grosso, 1770) foi uma líder quilombola que viveu em lugar incerto, mas sabe-se que o Quilombo do Piolho, no qual liderou, estava às margens do rio Guaporé, localizado na cidade de Vila Bela da Santíssima Trindade, atual estado de Mato Grosso [1].'
   ,'idade':0
};

aqualtune = {
    'nome': 'Aqualtune'
   ,'nascimento':'0001-01-01'
   ,'descricao' : 'Aqualtune (Reino do Congo, ? - Capitania de Pernambuco, c. 1650) foi uma suposta princesa congolesa escravizada no Brasil e líder quilombola à frente de um dos 11 mocambos do Quilombo dos Palmares, que resistiu ao regime colonial por cerca de 130 anos.[1] Ela foi, segundo a tradição, a mãe de Ganga Zumba e avó materna de Zumbi dos Palmares. De acordo com uma lenda ela teria dado à luz a Ganga Zumba e seus irmãos após ter chegado ao Brasil no fim dos anos 1620, sendo líder do Quilombo dos Palmares por cerca de vinte anos.'
   ,'idade':0
};

// podemos acondicionar os objetos dentro de uma matriz

matrizPersonalidades = [antonietaDeBarros, terezaDeBenguela,aqualtune];

// podemos acessar os dados da Antonieta dentro do objeto que está dentro da matriz

nome = matrizPersonalidades[0].nome
nascimento = matrizPersonalidades[0].nascimento
descricao = matrizPersonalidades[0].descricao
idade = matrizPersonalidades[0].idade

// podemos acessar os dados da Tereza de Benguela dentro do objeto que está dentro da matriz

nome = matrizPersonalidades[1].nome
nascimento = matrizPersonalidades[1].nascimento
descricao = matrizPersonalidades[1].descricao
idade = matrizPersonalidades[1].idade

// podemos acessar os dados da Aqualtune  dentro do objeto que está dentro da matriz

nome = matrizPersonalidades[2].nome
nascimento = matrizPersonalidades[2].nascimento
descricao = matrizPersonalidades[2].descricao
idade = matrizPersonalidades[2].idade


