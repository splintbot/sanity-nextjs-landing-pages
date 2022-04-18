export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '625cca270fc57253211a5c8e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-t27mjsk5',
                  apiId: '9e6d7245-a083-4102-a336-6bb62eb032e6'
                },
                {
                  buildHookId: '625cca287e5f4f51998fcd33',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mjrcg8kh',
                  apiId: '82a527e5-a719-401d-8953-ac5db61a0386'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/splintbot/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mjrcg8kh.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
