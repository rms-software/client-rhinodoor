<template>
  <div class="home">
    <!-- Home page header -->
    <h1>Rhino doors</h1>
    <h2>{{ trans[lang].general.slogan }}</h2>

    <!-- Door properties -->
    <div id="why-rhinodoor">
      <a-divider>{{ trans[lang].page.home.whyRhinodoors.dividerTitle }}</a-divider>

      <a-row type="flex" justify="center" :gutter="[20, 20]">
        <a-col flex="280px" v-for="(section, index) in trans[lang].page.home.whyRhinodoors" v-if="index !== 'dividerTitle'">
          <a-card :title="section.title" style="height: 100%">
            {{ section.content }}
          </a-card>
        </a-col>
      </a-row>
    </div>

    <div id="featured-doors">
      <a-divider>{{ trans[lang].page.home.featuredDoors.dividerTitle }}</a-divider>

      <a-row type="flex" justify="center" :gutter="[20, 20]">
        <a-col flex="280px">
          <a-card title="Test deur 1" style="height: 100%; text-align: center;">
            <img
                slot="cover"
                class="featured-door-image"
                alt="example"
                src="@/assets/doors/door1.png"
            />

            {{ trans[lang].page.home.featuredDoors.upwardOf }} € 845,00<br />
            {{ trans[lang].page.home.featuredDoors.atCompanyName }} bedrijf 1<br /><br />

            <a-button type="default" @click="$router.push(`/buy/095763d8-8d0c-4093-80be-b79a0524708f?lang=${lang}`)">{{ trans[lang].page.home.featuredDoors.checkOutDoor }}</a-button>
          </a-card>
        </a-col>

        <a-col flex="280px">
          <a-card title="Test deur 2" style="height: 100%; text-align: center;">
            <img
                slot="cover"
                class="featured-door-image"
                alt="example"
                src="@/assets/doors/door2.jpg"
            />

            {{ trans[lang].page.home.featuredDoors.upwardOf }} € 845,00 <br />
            {{ trans[lang].page.home.featuredDoors.atCompanyName }} bedrijf 2<br /><br />
            <a-button type="default" @click="$router.push(`/buy/095763d8-8d0c-4093-80be-b79a0524708f?lang=${lang}`)">{{ trans[lang].page.home.featuredDoors.checkOutDoor }}</a-button>
          </a-card>
        </a-col>

        <a-col flex="280px">
          <a-card title="Test deur 3" style="height: 100%; text-align: center;">
            <img
                slot="cover"
                class="featured-door-image"
                alt="example"
                src="@/assets/doors/door3.jpg"
            />

            {{ trans[lang].page.home.featuredDoors.upwardOf }} € 377,00<br />
            {{ trans[lang].page.home.featuredDoors.atCompanyName }} bedrijf 3<br /><br />

            <a-button type="default" @click="$router.push(`/buy/095763d8-8d0c-4093-80be-b79a0524708f?lang=${lang}`)">{{ trans[lang].page.home.featuredDoors.checkOutDoor }}</a-button>
          </a-card>
        </a-col>
      </a-row>

      <br />
      <div style="text-align: center">
        <a-button type="primary" @click="$router.push(`/shop?lang=${lang}`)">{{ trans[lang].page.home.featuredDoors.moreDoors }}</a-button>
      </div>
    </div>

    <div id="our-company" style="text-align: center">
      <a-divider>{{ trans[lang].page.home.ourCompany.dividerTitle }}</a-divider>

      <a-timeline style="width: 320px;display: inline-block; text-align: left; font-weight: bold;">
        <a-timeline-item color="green">{{ trans[lang].page.home.ourCompany.excellentQuality }}</a-timeline-item>
        <a-timeline-item color="green">{{ trans[lang].page.home.ourCompany.innovativeCompany }}</a-timeline-item>
        <a-timeline-item color="green">{{ trans[lang].page.home.ourCompany.customizedDoors }}</a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    trans: window.trans,
    lang: window.lang
  }),
}
</script>

<style scoped lang="scss">
#why-rhinodoor, #our-company, #featured-doors {
  margin-top: 100px;
}

.featured-door-image {
  height: 200px;
  object-fit: cover;
}
</style>
