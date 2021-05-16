<template>
  <q-carousel
    v-model="slide"
    swipeable
    animated
    control-color="orange-14"
    navigation
    padding
    height="500px"
    class="bg-primary text-white shadow-1 rounded-borders q-mt-md"
  >
    <q-carousel-slide name="chapter1" class="column no-wrap flex-center" :img-src="'images/app/chapter1.jpg'">
      <div class="overlay">
        <div class="q-mt-md text-center">
          <div class="header-title text-h4">
            {{ $t('navbar.chapter1')}}
          </div>
          <div class="chapter-description">
            LOREM IPSUM
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="chapter2" class="column no-wrap flex-center" :img-src="'images/app/chapter2.jpg'">
      <div class="overlay">
        <div class="q-mt-md text-center">
          <div class="header-title text-h4">
            {{ $t('navbar.chapter2')}}
          </div>
          <div class="chapter-description">
            LOREM IPSUM
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="chapter3" class="column no-wrap flex-center" :img-src="'images/app/chapter3.jpg'">
      <div class="overlay">
        <div class="q-mt-md text-center">
          <div class="header-title text-h4">
            {{ $t('navbar.chapter3')}}
          </div>
          <div class="chapter-description">
            LOREM IPSUM
          </div>
          <div id="overlay"></div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="chapter4" class="column no-wrap flex-center" :img-src="'images/app/chapter4.jpg'">
      <div class="overlay">
        <div class="q-mt-md text-center">
          <div class="header-title text-h4">
            {{ $t('navbar.chapter4')}}
          </div>
          <div class="chapter-description">
            LOREM IPSUM
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="chapter5" class="column no-wrap flex-center" :img-src="'images/app/chapter5.jpg'">
      <div class="overlay">
        <div class="q-mt-md text-center">
          <div class="header-title text-h4">
            {{ $t('navbar.chapter5')}}
          </div>
          <div class="chapter-description">
            LOREM IPSUM
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="chapter6" class="column no-wrap flex-center" :img-src="'images/app/chapter6.jpg'">
      <div class="overlay">
        <div class="q-mt-md text-center">
          <div class="header-title text-h4">
            {{ $t('navbar.chapter6')}}
          </div>
          <div class="chapter-description">
            LOREM IPSUM
          </div>
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]
export default {
  name: 'PageIndex',
  data () {
    return {
      left: false,
      leftDrawerOpen: false,
      essentialLinks: linksData.concat(linksData, linksData, linksData, linksData),
      slide: 'chapter1',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      contentStyle: {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: '#555'
      },
      contentActiveStyle: {
        backgroundColor: '#eee',
        color: 'black'
      },
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      }
    }
  }
  // components: { EssentialLink }
}
</script>

<style scoped lang="scss">
  .header-title {
    text-decoration: underline #fb8c00;
  }

  .chapter-description {
    margin-top: 5px;
  }

  .overlay {
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    position: fixed; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 25%; /* Full height (cover the whole page) */
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
  }

</style>
