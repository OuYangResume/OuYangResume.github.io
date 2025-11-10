hexo.extend.filter.register('theme_inject', function(injects) {
  // Inject love.js script for heart animation effect
  injects.bodyEnd.raw('load-custom-js', `<script src="./js/love.js"></script>`, {}, {cache: true});
});