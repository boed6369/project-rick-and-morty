const $name = $('#name')
const $status = $('#status')
const $species = $('#species')
const $gender = $('#gender')
const $origin = $('#origin')
const $location = $('#location')
const $input= $('input')
const $img = $('#image')
const $submition = $('submition')
const $form = $('form')
const url = 

$form.on('click', 'button', function(rickMorty){
    rickMorty.preventDefault()
    inputNumber = $input.val()
$.ajax({
    url: 'https://rickandmortyapi.com/api/character/' + inputNumber
}).then(
    function(rmInfo) {
        console.log(rmInfo)
        rm=rmInfo
        $name.text(rm.name)
        $status.text(rm.status)
        $species.text(rm.species)
        $gender.text(rm.gender)
        $origin.text(rm.origin.name)
        $location.text(rm.location.name)
        $img.attr('src', rm.image)
    }
)
})

