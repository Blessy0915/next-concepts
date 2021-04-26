module.exports = {
    env : {
        name : 'blessy'
    },

    //Rewrites the url with the source url
    async rewrites(){
            return {
                beforeFiles : [
                    {
                        source: '/about-us',
                        destination: '/template1',
                    },
                    {
                        source: '/about-company',
                        destination: '/template1',
                    },
                    {
                        source: '/policy',
                        destination: '/template2',
                    },
                ]
            }
        },
    //Redirects to the destination file(url : destination file name)
    async redirects() {
        return [
          {
            source: '/template1',
            destination: '/404',
            permanent: true,
          },
          {
            source: '/template2',
            destination: '/404',
            permanent: true,
          },
        ]
      },
}