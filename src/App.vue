<template>
  <a-layout id="app" class="layout">
    <a-layout-header id="header">

      <img src="@/assets/rhinodoor-logo.png" alt="Rhinodoor logo" id="logo" />

      <a-menu
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
          class="not-mobile"
          :selected-keys="[activeRouteName]"
      >
        <a-menu-item key="Home" @click="goToPage(`/home?lang=${lang}`)">
          {{ trans[lang].general.navigation.home }}
        </a-menu-item>
        <a-menu-item key="Shop" @click="goToPage(`/shop?lang=${lang}`)">
          {{ trans[lang].general.navigation.shop }}
        </a-menu-item>
<!--        <a-menu-item key="3" @click="goToPage(`/contact?lang=${lang}`)">-->
<!--          {{ trans[lang].general.navigation.contact }}-->
<!--        </a-menu-item>-->
      </a-menu>

      <div id="mobile-nav" class="mobile">
        <button class="mobile" id="hamburger-btn" @click="hamburgerOpen = !hamburgerOpen">
          <a-icon type="menu" />
        </button>

        <a-menu
            theme="dark"
            mode="vertical"
            :default-selected-keys="['1']"
            :style="{ lineHeight: '64px', textAlign: 'center' }"
            class="mobile"
            v-show="hamburgerOpen"
        >
          <a-menu-item key="1" @click="goToPage(`/home?lang=${lang}`);hamburgerOpen = false">
            {{ trans[lang].general.navigation.home }}
          </a-menu-item>
          <a-menu-item key="2" @click="goToPage(`/shop?lang=${lang}`);hamburgerOpen = false">
            {{ trans[lang].general.navigation.shop }}
          </a-menu-item>
<!--          <a-menu-item key="3" @click="goToPage(`/contact?lang=${lang}`);hamburgerOpen = false">-->
<!--            {{ trans[lang].general.navigation.contact }}-->
<!--          </a-menu-item>-->
        </a-menu>
      </div>

    </a-layout-header>

    <a-layout-content style="padding: 20px 20px 0 20px;margin: 20px 20px 0 20px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: 'calc(100vh - 180px)' }">
        <router-view v-if="showingPage" />
      </div>
    </a-layout-content>

    <a-layout-footer>
      Rhino doors ©2022
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  data: () => ({
    trans: window.trans,
    lang: window.lang,
    showingPage: false,
    hamburgerOpen: false,
    activeRouteName: "Home",
  }),

  mounted() {
    this.activeRouteName = this.$route.name;

    if (this.$route.query.lang) {
      window.lang = this.$route.query.lang;
      this.lang = lang;
    }

    this.$router.afterEach((to, from) => {
      this.activeRouteName = to.name;
    });

    this.showingPage = true;
  },

  methods: {
    goToPage(pageName) {
      this.$router.push(pageName);
    }
  }
}
</script>

<style scoped lang="scss">
#app {
  min-height: 100vh;

  .ant-layout-header {
    background: #2c7755;
    height: auto;

    .ant-menu-dark {
      background: #2c7755;
    }

    .ant-menu-item-selected {
      background: #42b983;
    }
  }
}

#app #logo {
  height: 60px;
  float: left;
  margin-right: 50px;
}

#mobile-nav {
}

#hamburger-btn {
  width: 100px;
  border-radius: 0;
  border: none;
  background: #2c7755;
  height: 55px;
  justify-self: center;
  margin-top: -60px;

  .anticon {
    color: #bbb;
  }

  &:hover {
    .anticon {
      color: white;
    }

    cursor: pointer;
  }
}
</style>