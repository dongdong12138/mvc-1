import './app2.css'
import $ from 'jquery'

/**
 * 第二个模块：tab 切换
 */
 const $app2 = $('#app2')
 const $tabBar = $app2.find('.tab-bar > li')
 const $tabContent = $app2.find('.tab-content > li')
 
 $($tabContent.eq(0)).css('display', 'block')
 
 $tabBar.on('click', function () {
     const index = $(this).index()
     $tabContent.css('display', 'none')
     $tabContent.eq(index).css('display', 'block')
 })