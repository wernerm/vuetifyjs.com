export default {
  header: 'Botões: Botão de ação flutuante',
  headerText: 'O componente `v-btn` pode ser usado como um botão de ação flutuante. Isso fornece uma aplicação com um ponto de ação principal. Combinado com o componente `v-speed-dial`, você poderá criar uma diversidade de funções disponíveis para seus usuários.',
  components: ['v-speed-dial', 'v-btn'],
  examples: [{
    promotedAction: {
      header: 'Ação promovida',
      desc: 'Botões de ação flutuantes podem ser anexados ao material para indicar uma ação promovida em seu aplicativo. O tamanho padrão será usado na maioria dos casos, enquanto a variante `small` pode ser usada para manter a continuidade com elementos de tamanho semelhantes.'
    },
    small: {
      header: 'Variante Small',
      desc: 'Para um melhor visual, usamos um pequeno botão para combinar com nossos avatares de lista.'
    },
    displayAnimation: {
      header: 'Exibir animação',
      desc: 'Ao exibir pela primeira vez, um botão de ação flutuante deve ser animado na tela. Aqui nós usamos o `v-fab-transition` com o v-show. Você também pode usar qualquer transição personalizada fornecida pela Vuetify ou de autoria própria.'
    },
    lateralScreens: {
      header: 'Telas laterais',
      desc: 'Ao alterar a ação padrão do botão, é recomendável exibir uma transição para indicar uma alteração. Fazemos isso ligando a prop `key` a um dado que pode sinalizar corretamente uma mudança na ação para o sistema de transição Vue. Embora você possa usar uma transição personalizada para isso, assegure-se de definir a prop `mode` como **active**.'
    },
    speedDial: {
      header: 'FAB com speed-dial',
      desc: 'O componente speed-dial  tem uma api robusta para customisar sua experiencia com o FAB para você fazer tudo exatamente como quiser.'
    }
  }],
  props: {
    'v-btn': {
      block: 'Expande o botão para 100% do espaço disponível',
      depressed: 'Remove a sombra da box do botão',
      fab: 'Faz o botão ficar redondo',
      flat: 'Remove a cor de fundo do botão',
      icon: 'Designa o botão como ícone - round e flat',
      inputValue: 'Controla o estado de ativo do botão',
      large: 'Botão com tamanho grande',
      loading: 'Adiciona a animação e ícone de loading',
      outline: 'O botão vai ter uma outline',
      round: 'O botão vai ser redondo nos lados',
      small: 'Botão com o tamanho pequeno',
      type: 'Define o tipo do botão'
    },
    'v-speed-dial': {
      direction: 'Direção em que o conteúdo do speed-dial irá ser mostrado. Os valores possíveis são `top`, `bottom`, `left`, `right`.',
      openOnHover: 'Abre o speed-dial ao passar o mouse em cima'
    }
  }
}
