const {
  posts,
} = require('../config/initialData');
// const { githubKit } = require('../config/github');

module.exports = async () => {
  try {
    var postsCount = await strapi.db.query('api::article.article').count();
    // initial fetch
    posts.map(async (posts, index) => {
      if (index <= postsCount - 1) {
        await strapi.db.query('api::article.article').update({
          where: { id: posts.id },
          data: {
            date: new Date(posts.date).toISOString(),
            date_gmt: new Date(posts.date_gmt).toISOString(),
            modified: new Date(posts.modified).toISOString(),
            modified_gmt: new Date(posts.modified_gmt).toISOString(),
            slug: posts.slug,
            status: posts.status,
            type: posts.type,
            link: posts.link,
            title: posts.title,
            content: posts.content,
            excerpt: posts.excerpt,
            author: posts.author,
            featured_media: posts.featured_media,
            comment_status: posts.comment_status,
            ping_status: posts.ping_status,
            sticky: posts.sticky,
            template: posts.template,
            format: posts.format,
            meta: posts.meta,
            categories: posts.categories,
            tags: posts.tags,
            acf: posts.acf,
            _links: posts._links,
          },
        });
      } else {
        await strapi.service('api::posts.posts').create({
          data: {
            date: new Date(posts.date).toISOString(),
            date_gmt: new Date(posts.date_gmt).toISOString(),
            modified: new Date(posts.modified).toISOString(),
            modified_gmt: new Date(posts.modified_gmt).toISOString(),
            slug: posts.slug,
            status: posts.status,
            type: posts.type,
            link: posts.link,
            title: posts.title,
            content: posts.content,
            excerpt: posts.excerpt,
            author: posts.author,
            featured_media: posts.featured_media,
            comment_status: posts.comment_status,
            ping_status: posts.ping_status,
            sticky: posts.sticky,
            template: posts.template,
            format: posts.format,
            meta: posts.meta,
            categories: posts.categories,
            tags: posts.tags,
            acf: posts.acf,
            _links: posts._links,
          },
        });
      }
    });

};
