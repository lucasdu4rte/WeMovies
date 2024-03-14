var $ = window.$

// Alterar header menu para horizontal
$('body > div > div:nth-child(1) > div > div')
  .toggleClass('btn-group-vertical btn-group-horizontal')

// Mudar cores e alinhamento do texto do jumbotron
let jumbotronEl = $('.jumbotron');
jumbotronEl.toggleClass('bg-secondary text-white text-right');
let buttonEl = jumbotronEl.find(".btn-primary");
buttonEl.toggleClass('btn-primary btn-success')

// Alterar posições dos cards
const cardsSectionEl = $('#cards-section')
const [, Animais, Tecnologia, Pessoas, Natureza] = cardsSectionEl.children()

$(Animais).detach()
$(Tecnologia).detach()
$(Pessoas).detach()
$(Natureza).detach()

cardsSectionEl.append(Natureza)
cardsSectionEl.append(Animais)
cardsSectionEl.append(Pessoas)
cardsSectionEl.append(Tecnologia)

// Alterar cor do botão do segundo cards
const secondCardEl = cardsSectionEl.children()[2]
$(secondCardEl).find('a').toggleClass('btn-primary btn-success')

$('.list-group').append('<li class="list-group-item">Quarto item</li>')
$('.list-group').append('<li class="list-group-item">Quinto item</li>')
$($('.list-group').children()[0]).toggleClass('active')
$($('.list-group').children()[3]).toggleClass('active')
