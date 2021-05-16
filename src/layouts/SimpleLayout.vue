<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div class="q-gutter-y-md flex-row">
          <q-tabs
            v-model="tab"
            class="text-white"
            inline-label
            outside-arrows
            active-bg-color="orange-14"
          >
            <q-route-tab to="/" name="home" :label="$t('navbar.home')"/>
            <q-route-tab to="/summary" name="summary"
                         :label="$t('navbar.summary')"/>
            <q-route-tab to="/chapter/1" name="start"
                         :label="$t('navbar.start')"/>
            <q-route-tab to="/chapter/1" name="chapter1"
                         :label="$t('navbar.chapter1')"/>
            <q-route-tab to="/chapter/1" name="chapter2"
                         :label="$t('navbar.chapter2')"/>
            <q-route-tab to="/chapter/1" name="chapter3"
                         :label="$t('navbar.chapter3')"/>
            <q-route-tab to="/chapter/1" name="chapter4"
                         :label="$t('navbar.chapter4')"/>
            <q-route-tab to="/chapter/1" name="chapter5"
                         :label="$t('navbar.chapter5')"/>
            <q-route-tab to="/chapter/1" name="chapter6"
                         :label="$t('navbar.chapter6')"/>
            <q-route-tab to="/chapter/1" name="reference"
                         :label="$t('navbar.reference')"/>
            <q-route-tab to="/chapter/1" name="annexed"
                         :label="$t('navbar.annexed')"/>
          </q-tabs>
          <div class="exit-button">
            <q-icon size="md" name="close" @click="confirm = true"/>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer elevated class="bg-white text-white">
      <q-toolbar>
        <div class="footer-img">
          <img class="img-thumbnail" :src="'images/app/footer.png'">
        </div>
        <q-toolbar-title>
          <div class="flow-right">
            <div
              class="bg-orange-7 text-white inline-block rounded side-title text-weight-medium">
              {{ $t('footer.title') }}
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white"/>
          <span class="q-ml-sm">{{ $t('dialog.exit.header')}}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('dialog.exit.accept')" color="orange-14"
                 @click="exit()"/>
          <q-btn flat :label="$t('dialog.exit.cancel')" color="primary"
                 v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-layout>
</template>

<script>
export default {
  name: 'SimpleLayout',
  data () {
    return {
      tab: 'home',
      confirm: false
    }
  },
  methods: {
    exit () {
      try {
        this.confirm = false
        const remote = require('electron').remote
        const w = remote.getCurrentWindow()
        w.close()
      } catch (e) {
        console.warn(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .footer-img {
    width: 190px;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    img {
      width: 100%
    }
  }

  .rounded {
    border-radius: 5px;
  }

  .flow-right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .side-title {
    padding: 5px 10px;
  }

  .flex-row {
    max-width: 1200px;
    display: inline-block;
  }

  .exit-button {
    position: absolute;
    top: -10%;
    left: 90%;
    cursor: pointer;
  }
</style>
