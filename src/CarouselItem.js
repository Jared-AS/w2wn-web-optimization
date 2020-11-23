import h from 'hyperscript'
import moment from 'moment'

const relativeDate = dateStr => moment(dateStr, 'YYYY-MM-DD').fromNow()
const IMAGE_URL = 'https://image.tmdb.org/t/p/w200/';

const Controls = ({ slug, youtubeVideoId }) =>
    h(
        'div',
        h(
            'a', {
                href: `https://www.youtube.com/watch?v=${youtubeVideoId}`,
                title: 'Watch trailer',
                target: '_blank',
                rel: 'noreferrer',
            },
            h('img', {
                src: 'assets/play-icon.png',
                alt: 'Play',
            })
        ),
        h(
            'a', {
                href: `https://kitsu.io/explore/anime/${slug}`,
                title: 'See more',
                target: '_blank',
                rel: 'noreferrer',
            },
            h('img', {
                src: 'assets/plus-icon.png',
                alt: 'More info',
            })
        )
    )

const CarouselItem = ({
        title,
        releaseDate,
        overview,
        posterPath
    }) =>
    h(
        'div.carousel-item',
        h('img', { src: `${IMAGE_URL}/${posterPath}`, alt: '' }),
        h(
            'div',
            // Controls({ slug, youtubeVideoId }),
            h('p', title),
            h('p', overview),
            h('p', `Released: ${relativeDate(releaseDate)}`)
        )
    )

export default CarouselItem