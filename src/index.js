import h from 'hyperscript'
import { fetchPopularMovies, fetchPopularTVShows } from './api'
import CarouselItem from './CarouselItem'

const SectionTitle = title => h('h3.carousel-title', title)

const Carousel = ({ itemsList = [] }) =>
    h(
        'section.carousel',
        h(
            'div',
            itemsList.map(
                (result) =>
                CarouselItem({
                    title: !!result.title ? result.title : result.name,
                    releaseDate: !!result.release_date ? result.release_date : result.first_air_date,
                    overview: result.overview,
                    posterPath: result.poster_path,
                })
            )
        )
    )

window.addEventListener('DOMContentLoaded', async() => {
    const mountReference = document.querySelector('.main').lastElementChild

    if (!mountReference) {
        return 0
    }

    const trending = await fetchPopularMovies()
    const trendingTV = await fetchPopularTVShows()
        /*
          const popular = await fetchPopular()
          const highestRated = await fetchHighestRated()
        */
    mountReference
        .insertAdjacentElement('afterend', SectionTitle('Trending Movies'))
        .insertAdjacentElement(
            'afterend',
            Carousel({
                itemsList: trending,
            })
        )
        .insertAdjacentElement('afterend', SectionTitle('Trending TV Shows'))
        .insertAdjacentElement(
            'afterend',
            Carousel({
                itemsList: trendingTV,
            })
        )
        /*
                    .insertAdjacentElement('afterend', SectionTitle('Most Popular Anime'))
                    .insertAdjacentElement(
                      'afterend',
                      Carousel({
                        itemsList: popular,
                      })
                    )*/
})