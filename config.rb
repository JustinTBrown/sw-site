###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout
page "styleguide.html", layout: :layout_min

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

Time.zone = "MST"

activate :directory_indexes

# add_import_path "node_modules/foundation-sites/scss"

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end

# # Contentful Config
# activate :contentful do |f|
#   f.space         = { website: '1oj2xa3ditq8' }
#   # f.space         = '1oj2xa3ditq8'
#   f.access_token  = '56bba8df98d887a655af77c73c4cc5c6bbde5d010d0c3741917224f39f0a1900'
#   # f.cda_query     = { limit: 1000 }
#   # f.cda_query     = { content_type: 'content-type-id', include: 1 }
#   # f.cda_query     = { drink: 'drink-id', include: 1 }
#   # f.content_types = { partner: 'content-type-id'}
#   # f.content_types = { drink: 'drink-id'}
#   f.content_types = { drink: 'drink'}
# end

# Data Config
activate :dato

# dato.tap do |dato|
#   @page_title = dato.homepage.page_title
#   return @page_title
#   # # iterate over the "Blog post" records...
#   # dato.blog_posts.each do |article|

#   #   # ...and create a page for each article starting from a template!
#   #   proxy "/articles/#{article.slug}.html", "/templates/article.html", locals: { article: article }

#   # end
# end