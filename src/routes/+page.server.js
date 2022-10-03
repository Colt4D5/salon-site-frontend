import { request, gql } from 'graphql-request'

export async function load() {
  const sliderQuery = gql`
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
  const promoQuery = gql`
    query GetSliders {
      promos {
        data {
          attributes {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            link
            content
            cta
          }
        }
      }
    }  
  `

  const slides = await request('http://127.0.0.1:1337/graphql', sliderQuery)
  const promos = await request('http://127.0.0.1:1337/graphql', promoQuery)
  return {
    slides,
    promos
  }
}