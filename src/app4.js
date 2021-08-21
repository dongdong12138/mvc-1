import './app4.css'
import $ from 'jquery'

$('.circle').on('mouseenter', function () {
    $(this).addClass('active')
}).on('mouseleave', function () {
    $(this).removeClass('active')
})