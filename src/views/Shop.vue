<template>
  <div id="shop">
    <div id="filters" class="not-tablet">
      <div id="filter-title">
        {{ trans[lang].page.shop.filters }}
      </div>

      <label>{{ trans[lang].page.shop.searchQuery }}</label>
      <a-input placeholder="Zoeken...">
        <a-icon slot="prefix" type="search" />
      </a-input>

      <br /><br />

      <label>{{ trans[lang].page.shop.company }}</label>
      <a-select :default-value="null">
        <a-select-option :value="null"><i>{{ trans[lang].page.shop.allCompanies }}</i></a-select-option>
        <a-select-option value="bedrijf 1">bedrijf 1</a-select-option>
        <a-select-option value="bedrijf 2">bedrijf 2</a-select-option>
        <a-select-option value="bedrijf 3">bedrijf 3</a-select-option>
      </a-select>

      <br /><br />

      <label>{{ trans[lang].page.shop.price }}</label>
      <a-slider range :min="100" :max="1000" :default-value="[100, 1000]">

      </a-slider>
    </div>

    <div id="doors">
      <div style="text-align: center; margin-bottom: 20px;">
        <a-button class="tablet" icon="filter">Filters</a-button>
        <b style="margin-left: 20px;">{{ doors.length }} {{ trans[lang].page.shop.xDoorsLoaded }}</b>
      </div>

      <a-list class="door-list">
        <a-list-item v-for="door in doors">
          <div class="not-tablet">
            <div class="door-item">
              <div class="door-image">
                <img :src="door.image" alt=""/>
              </div>

              <div>
                {{ door.companyName }} <br />
                <h2>{{ door.name }}</h2>

                {{ door.description }}

                <br /><br />

                <a-button @click="$router.push(`/buy/${door.id}?lang=${lang}`)">
                  {{ trans[lang].page.shop.checkOutDoor }}
                </a-button>&nbsp;&nbsp;&nbsp;{{ trans[lang].page.shop.upwardOf }} € {{ door.basePrice.toFixed(2) }}
              </div>
            </div>
          </div>

          <div class="tablet">
            <div class="mobile-door-item-wrapper">
              <div class="mobile-door-item">
                {{ door.companyName }} <br />
                <h2>{{ door.name }}</h2>

                <br />
                <div class="door-image">
                  <img :src="door.image" alt=""/>
                </div> <br />

                {{ door.description }}

                <br /><br />

                <a-button @click="$router.push(`/buy/${door.id}?lang=${lang}`)">
                  {{ trans[lang].page.shop.checkOutDoor }}
                </a-button>&nbsp;&nbsp;&nbsp;{{ trans[lang].page.shop.upwardOf }} € {{ door.basePrice.toFixed(2) }}
              </div>
            </div>
          </div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import RMS from '@/rms-connector'

export default {
  async mounted() {
      const products = await RMS.getProductList()
      this.doors = products;
  },

  data: () => ({
    trans: window.trans,
    lang: window.lang,
    doors: []
  })
}
</script>

<style scoped lang="scss">
#shop {
  display: grid;
  grid-template-columns: 1fr 3fr;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  #filters {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px 5px;
    margin: 5px;
    height: max-content;
    position: sticky;
    top: 80px;

    #filter-title {
      text-align: center;
      margin-bottom: 10px;
    }

    .ant-input, .ant-select {
      margin-top: 5px;
      width: 100%;
    }
  }

  #doors {
    padding: 5px;
    margin: 5px;

    .door-list .tablet {
      width: 100%;

      .mobile-door-item-wrapper {
        display: flex;
        width: 100%;
        justify-content: center;

        .mobile-door-item {
          max-width: 300px;

          img {
            width: 100%;
          }
        }
      }
    }

    .door-item {
      display: grid;
      grid-template-columns: 1fr 2fr;

      .door-image {
        padding: 0 20px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
