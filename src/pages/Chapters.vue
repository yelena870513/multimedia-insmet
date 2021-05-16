<template>
  <q-page-container>
    <div class="row-layout">
      <q-scroll-area
        :thumb-style="thumbStyle"
        :content-style="contentStyle"
        :content-active-style="contentActiveStyle"
        style="height: 450px; width: 15%; margin-right: 0.8em;"
      >

        <q-list>
          <q-item-label
            header
            class="text-grey-8"
          >
            Essential Links
          </q-item-label>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>

      </q-scroll-area>
      <div class="container">
       <div class="text-h4 text-center">Title</div>
       <q-scroll-area
         :thumb-style="thumbStyle"
         :content-style="contentStyle"
         :content-active-style="contentActiveStyle"
         style="height: 350px; margin-right: 0.8em;"
       ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
           culpa qui officia deserunt mollit anim id est laborum.
         </p>
       </q-scroll-area>
       <template>
         <div class="q-pa-lg flex flex-center">
           <q-pagination
             v-model="current"
             :max="5"
             direction-links
           />
         </div>
       </template>
     </div>
    </div>
  </q-page-container>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { matMenu } from '@quasar/extras/material-icons'
const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat'
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
    icon: 'rss_feed'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite'
  }
]
export default {
  name: 'Chapters',
  data () {
    return {
      contentStyle: {
        backgroundColor: 'white',
        color: '#555'
      },
      contentActiveStyle: {
        backgroundColor: 'white',
        color: 'black'
      },
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
      current: 3,
      essentialLinks: linksData.concat(linksData, linksData, linksData, linksData)
    }
  },
  created () {
    this.matMenu = matMenu
  },
  components: {
    EssentialLink
  }
}
</script>

<style scoped lang="scss">
  .row-layout {
    display: flex;
    flex-direction: row;
  }
  .container {
    width: 100%;
    height: 400px;
  }
</style>
