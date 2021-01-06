<template>
  <div class="addressBox">
    <ul class="addressTitle">
      <li @click="clickProvince" :class="provinceActive ? 'active' : ''">
        省份
      </li>
      <li
        @click="clickCity"
        v-if="cityTitleActive"
        :class="cityActive ? 'active' : ''"
      >
        城市
      </li>
      <li
        @click="clickCounty"
        v-if="countyTitleActive"
        :class="countyActive ? 'active' : ''"
      >
        县区
      </li>
      <li
        @click="clickStreet"
        v-if="streetTitleActive"
        :class="streetActive ? 'active' : ''"
      >
        街道
      </li>
    </ul>
    <i class="iconfont icon-cha" @click="$emit('hideX')"></i>
    <div>
      <ul v-show="provinceActive" class="addressWrap">
        <li v-for="item in provInfo" :key="item.id">
          <a
            :class="item.active ? 'active' : ''"
            @click="selectProvince(item.id, item.name)"
            >{{ item.name }}</a
          >
        </li>
      </ul>
      <ul v-show="cityActive" class="addressWrap">
        <li v-for="item in cityInfo" :key="item.id">
          <a
            :class="item.active ? 'active' : ''"
            @click="selectCity(item.id, item.name)"
            >{{ item.name }}</a
          >
        </li>
      </ul>
      <ul v-show="countyActive" class="addressWrap">
        <li v-for="item in countyInfo" :key="item.id">
          <a
            :class="item.active ? 'active' : ''"
            @click="selectCounty(item.id, item.name)"
            >{{ item.name }}</a
          >
        </li>
      </ul>
      <ul v-show="streetActive" class="addressWrap">
        <li v-for="item in streetInfo" :key="item.id">
          <a
            :class="item.active ? 'active' : ''"
            @click="selectStreet(item.id, item.name)"
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getAddress } from "../../api/detail";
export default {
  name: "Address",
  data() {
    return {
      provInfo: [],
      cityInfo: [],
      countyInfo: [],
      streetInfo: [],
      provinceActive: true,
      cityActive: false,
      countyActive: false,
      streetActive: false,
      cityTitleActive: false,
      countyTitleActive: false,
      streetTitleActive: false,
      provinceId: null,
      cityId: null,
      countyId: null,
    };
  },
  props: ["provinceInfo", "addressInfo"],
  watch: {
    async provinceInfo(val) {
      this.provInfo = val;
      this.provInfo.map((item) => {
        if (item.name === this.addressInfo.province) {
          this.$set(item, "active", true);
          this.provinceId = item.id;
        }
        return item;
      });
      let city;
      if(this.cityInfo.length) return
      if (this.provinceId === "101101") {
        city = [{ name: "北京市", id: "101101" }];
        this.cityInfo = city;
      } else {
        city = await getAddress(this.provinceId);
        this.cityInfo = city.data.list;
      }
    },
    cityInfo() {
      this.cityInfo.map((item) => {
        if (item.name === this.addressInfo.city) {
          this.$set(item, "active", true);
          this.cityId = item.id;
        }
        return item
      });
    },
    countyInfo(){
      this.countyInfo.map((item) => {
        if (item.name === this.addressInfo.county) {
          this.$set(item, "active", true);
          this.countyId = item.id;
        }
        return item
      });
    },
    streetInfo(){
      this.streetInfo.map((item) => {
        if (item.name === this.addressInfo.street) {
          this.$set(item, "active", true);
        }
        return item
      });
    }
  },
  methods: {
    //选择省份
    async selectProvince(id, name) {
      this.provInfo.map((info) => {
        if (info.id === id) {
          this.$set(info, "active", true);
        } else {
          this.$set(info, "active", false);
        }
        return info;
      });
      this.$emit("selectAddress", "province", name);
      this.$emit("selectAddress", "city", "");
      this.$emit("selectAddress", "county", "");
      this.$emit("selectAddress", "street", "");
      this.provinceActive = false;
      this.cityTitleActive = true;
      this.countyTitleActive = false;
      this.streetTitleActive = false;
      this.cityActive = true;
      this.cityInfo = [];
      let city;
      if (id === "101101") {
        city = [{ name: "北京市", id: "101101" }];
        this.cityInfo = city;
      } else {
        city = await getAddress(id);
        this.cityInfo = city.data.list;
      }
    },
    //选择市
    async selectCity(id, name) {
      this.cityInfo.map((info) => {
        if (info.id === id) {
          this.$set(info, "active", true);
        } else {
          this.$set(info, "active", false);
        }
        return info;
      });
      this.$emit("selectAddress", "city", name);
      this.$emit("selectAddress", "county", "");
      this.$emit("selectAddress", "street", "");
      this.countyTitleActive = true;
      this.streetTitleActive = false;
      this.provinceActive = false;
      this.cityActive = false;
      this.countyActive = true;
      this.countyInfo = [];
      const county = await getAddress(id);
      this.countyInfo = county.data.list;
    },
    //选择县
    async selectCounty(id, name) {
      this.countyInfo.map((info) => {
        if (info.id === id) {
          this.$set(info, "active", true);
        } else {
          this.$set(info, "active", false);
        }
        return info;
      });
      this.$emit("selectAddress", "county", name);
      this.$emit("selectAddress", "street", "");
      this.streetTitleActive = true;
      this.countyActive = false;
      this.streetActive = true;
      this.streetInfo = [];
      const street = await getAddress(id);
      this.streetInfo = street.data.list;
    },
    //选择街道
    selectStreet(id, name) {
      this.streetInfo.map((info) => {
        if (info.id === id) {
          this.$set(info, "active", true);
        } else {
          this.$set(info, "active", false);
        }
        return info;
      });
      this.$emit("selectAddress", "street", name);
      this.$emit("hideX");
    },
    //点击地址头部
    async clickProvince() {
      this.provinceActive = true;
      this.cityActive = false;
      this.countyActive = false;
      this.streetActive = false;
    },
    async clickCity() {
      this.provinceActive = false;
      this.cityActive = true;
      this.countyActive = false;
      this.streetActive = false;
      if(this.countyInfo.length) return
      const county = await getAddress(this.cityId);
      this.countyInfo = county.data.list;
    },
    async clickCounty() {
      this.provinceActive = false;
      this.cityActive = false;
      this.countyActive = true;
      this.streetActive = false;
      if(this.streetInfo.length) return
      const street = await getAddress(this.countyId);
      this.streetInfo = street.data.list;
    },
    clickStreet() {
      this.provinceActive = false;
      this.cityActive = false;
      this.countyActive = false;
      this.streetActive = true;
    },
  },
  mounted() {
    //如果localStorage有地址数据，就显示全部地址头部
    if (this.addressInfo) {
      this.cityTitleActive = true;
      this.countyTitleActive = true;
      this.streetTitleActive = true;
    }
  },
};
</script>

<style lang="less" scoped>
.addressBox {
  padding: 20px;
  padding-bottom: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  position: absolute;
  left: -20px;
  top: 29px;
  z-index: 2;
  .icon-cha {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 12px;
    color: #8b8a8b;
  }
}
.addressTitle {
  width: 455px;
  border-bottom: 1px solid #ccc;
  display: flex;
  li {
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-right: -1px;
    margin-bottom: -1px;
    padding-top: 1px;
    border: 1px solid #ccc;
    // border-bottom: transparent;
    background-color: #f9f9f9;
    &.active {
      background-color: #fff;
      border-top: 2px solid indianred;
      border-bottom: 1px solid #fff;
      padding-top: 0;
    }
  }
}
.addressWrap {
  width: 450px;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 90px;
    height: 22px;
    margin: 4px 0;
    a {
      display: inline-block;
      max-width: 47px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 2px 10px;
      border: 1px solid transparent;
      cursor: pointer;
      &.active {
        background-color: indianred;
        color: #fff;
      }
    }
    a:hover {
      text-decoration: none;
      border: 1px solid rgb(245, 86, 144);
    }
  }
}
</style>
