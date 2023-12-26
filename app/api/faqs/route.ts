import { client } from '../../contentful/util';

// Retrieve the list of FAQs from Contentful
export async function GET() {
    try {
        const response = await client.getEntries({
          'fields.show': true,
          content_type: 'faq',
          //limit: 2,
          order: ['fields.orderId'] //-to descend
        });
          
        return new Response(JSON.stringify( response.items ), {
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 's-maxage=300, stale-while-revalidate'
            },
            status: 200,
            statusText: 'OK'
          });
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({error: `${error}`}), {
          status: 500,
          statusText: 'Internal Server Error'
        })
      }
};

  
      
