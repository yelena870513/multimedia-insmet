<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div class="q-gutter-y-md" style="max-width: 1440px">
        <q-tabs
          v-model="tab"
          class="text-white"
          inline-label
          outside-arrows
        >
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies"  label="Movies" />
          <q-tab name="i1"  label="Movies" />
          <q-tab name="i2"  label="Movies" />
          <q-tab name="i3"  label="Movies" />
          <q-tab name="i4"  label="Movies" />
          <q-tab name="i5"  label="Movies" />
          <q-tab name="i6"  label="Movies" />
          <q-tab name="i7"  label="Movies" />
        </q-tabs>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/quasar-logo-full.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'SimpleLayout',
  data () {
    return {
      tab: 'mails',
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
}
</script>

<style scoped>

</style>
