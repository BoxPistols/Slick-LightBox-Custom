// Slick Target
$('#slick-demo, #slick-demo2').slick()
$('#slick-demo, #slick-demo2').slickLightbox({
  src: 'src',
  itemSelector: '.item img',
  caption: 'caption'
})

// TODO:　タイトル付与テスト
/* $(function () {
  $('.altText').each(function () {
    alt = $(this)
      .addClass('pc')
      .attr('title')
    $(this).after('<span class="cap sp">' + alt + '</span>')
  })
})
*/

// TODO: 番目
// $(function () {
//   $('.slick-lightbox-slick-img')
//     .eq(0) // 3番目の要素に絞り込み
//     .css('border', 'solid 4px #fff') // 枠線を設定
//     .css('background-color', '#0ff') // 背景色を設定
// })
