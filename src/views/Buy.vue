<template>
  <div id="buy">
    <div id="product-preview">
      <img :src="product.image" alt=""/>

      <div id="order-preview">
        <div id="price-preview">€ {{ calculatedFinalPrice }}</div>
        (inclusief BTW)
      </div>
    </div>

    <div id="product-form">
      <a-divider>Deur</a-divider>

      <label>Breedte</label>
      <a-select default-value="0">
        <a-select-option value="0">240 cm</a-select-option>
        <a-select-option value="1">260 cm</a-select-option>
        <a-select-option value="2">280 cm</a-select-option>
        <a-select-option value="3">300 cm</a-select-option>
        <a-select-option value="4">320 cm</a-select-option>
        <a-select-option value="5">340 cm</a-select-option>
      </a-select>

      <br /><br />

      <label>Hoogte</label>
      <a-select default-value="0">
        <a-select-option value="0">180 cm</a-select-option>
        <a-select-option value="1">220 cm</a-select-option>
        <a-select-option value="2">240 cm</a-select-option>
        <a-select-option value="3">260 cm</a-select-option>
        <a-select-option value="4">280 cm</a-select-option>
        <a-select-option value="5">300 cm</a-select-option>
      </a-select>

      <br /><br />

      <label>Kleur</label>
      <a-select default-value="0">
        <a-select-option value="0">
          <span role="img" aria-label="China" style="color: red">●</span>
          Red
        </a-select-option>
        <a-select-option value="1">
          <span role="img" aria-label="China" style="color: green">●</span>
          Green
        </a-select-option>
        <a-select-option value="2">
          <span role="img" aria-label="China" style="color: blue">●</span>
          Blue
        </a-select-option>
      </a-select>

      <br /><br />

      <a-checkbox />
      <label style="display: inline;">Montage</label>

      <br /><br />

      <!-- drukknop, montage druk knop, controle meting, -->
      <a-divider>Aandrijving</a-divider>

      <label>Electrische aandrijving</label>
      <a-select default-value="0">
        <a-select-option value="0">SL-100</a-select-option>
        <a-select-option value="1">Nova-Black</a-select-option>
      </a-select>

      <br /><br />

      <a-checkbox />
      <label style="display: inline;">Montage electrische aandrijving</label>


      <br /><br />

      <a-divider>Knop</a-divider>

      <a-checkbox />
      <label style="display: inline;">drukknop</label>


      <br />
      <a-checkbox />
      <label style="display: inline;">Montage drukknop</label>


      <br /><br />

      <a-divider>Overig</a-divider>

      <a-checkbox />
      <label style="display: inline;">Controle meting</label>

      <br /><br />

      <a-button type="primary">Bestellen</a-button>
    </div>

    <a-modal :visible="false" title="Plaats order" @ok="placeOrder">

    </a-modal>
  </div>
</template>

<script>
import RMS from '@/rms-connector'

export default {
  data() {
    return {
      product: null,
      orderPopup: false
    }
  },

  async mounted() {
    const productId = this.$route.params.id;
    this.product = await RMS.getProductInfo(productId);
    console.log(this.product)
  },

  computed: {
    calculatedFinalPrice() {
      if (this.product == null)
        return '';

      const price = this.product.basePrice;

      return price.toFixed(2);
    }
  },

  methods: {
    placeOrder() {

    }
  }
}
</script>

<style scoped lang="scss">
#buy {
  display: grid;
  grid-template-columns: 1fr 1fr;

  #product-preview {
    display: grid;
    justify-items: center;
    height: min-content;

    #order-preview {
      width: 80%;
      text-align: center;
      display: grid;
      justify-items: center;

      #price-preview {
        margin: 20px 0 0 0;
        border: 2px solid #2c7755;
        border-radius: 20px;
        font-weight: bold;
        width: 60%;
        display: inline-block;
      }
    }

    img {
      width: 80%;
    }
  }

  #product-form {
    label {
      display: block;
      margin-bottom: 2px;
    }

    .ant-divider {
      margin: 0;
    }

    .ant-checkbox-wrapper {
      width: 80px;
      display: inline;
      margin-right: 5px;
    }

    .color-preview {
      display: inline-block;
      width: 10px;
      height: 10px;
    }

    .ant-select {
      width: 100%;
    }
  }
}
</style>