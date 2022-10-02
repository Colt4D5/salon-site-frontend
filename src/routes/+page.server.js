import { request, gql } from 'graphql-request'

export async function load() {
  const query = gql`
    query GetSliders {
      sliders {
        data {
          attributes {
            title
            content
            img_full {
              data {
                attributes {
                  url
                }
              }
            }
            img_mobile {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `

  const slides = await request('http://127.0.0.1:1337/graphql', query)
  return slides
}