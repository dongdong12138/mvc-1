import './app1.css'
import $ from 'jquery'

/**
 * 第一个模块：加减乘除
 */
 const $app1 = $('#app1')
 const $span = $app1.children('span')
 const $btns = $app1.children('button')
 
 let number = Number(localStorage.getItem('number')) || 100
 $span.text(number)
 
 $btns.on('click', function () {
     const index = $(this).index()
     if (index === 1) number += 1
     if (index === 2) number -= 1
     if (index === 3) number *= 2
     if (index === 4) number /= 2
     $span.text(number)
     localStorage.setItem('number', number)
 })