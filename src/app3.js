import './app3.css'
import $ from 'jquery'

$('.square').on('click', function () {
    $(this).toggleClass('active')
})