<template>
  <div class="addressBox">
    <ul class="addressTitle">
      <li
        @click="clickProvince('province')"
        :class="provinceActive ? 'active' : ''"
      >
        省份
      </li>
      <li
        @click="clickCity('city')"
        v-if="cityTitleActive"
        :class="cityActive ? 'active' : ''"
      >
        城市
      </li>
      <li
        @click="clickCounty('county')"
        v-if="countyTitleActive"
        :class="countyActive ? 'active' : ''"
      >
        县区
      </li>
      <li
        @click="clickStreet('street')"
        v-if="streetTitleActive"
        :class="streetActive ? 'active' : ''"
      >
        街道
      </li>
    </ul>
    <i class="iconfont icon-cha" @click="$emit('hideX')"></i>
    <div>
      <ul v-show="provinceActive" class="addressWrap" @click="selectAddr($event,'province')">
        <li v-for="item in address.provinceInfo" :key="item.id">
          <a
            :data-id="item.id"
            :data-name="item.name"
            :class="item.active ? 'active' : ''"
            >{{ item.name }}</a
          >
        </li>
      </ul>
      <ul v-show="cityActive" class="addressWrap" @click="selectAddr($event,'city')">
        <li v-for="item in address.cityInfo" :key="item.id">
          <a
            :data-id="item.id"
            :data-name="item.name"
            :class="item.active ? 'active' : ''"
            >{{ item.name }}</a
          >
        </li>
      </ul>
      <ul v-show="countyActive" class="addressWrap" @click="selectAddr($event,'county')">
        <li v-for="item in address.countyInfo" :key="item.id">
          <a
            :data-id="item.id"
            :data-name="item.name"
            :class="item.active ? 'active' : ''"
            >{{ item.name }}</a
          >
        </li>
      </ul>
      <ul v-show="streetActive" class="addressWrap" @click="selectAddr($event,'street')">
        <li v-for="item in address.streetInfo" :key="item.id">
          <a
            :data-id="item.id"
            :data-name="item.name"
            :class="item.active ? 'active' : ''"
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getAddress, getAddress2 } from "../../api/detail";
export default {
  name: "Address",
  data() {
    return {
      address: {
        provinceInfo: [],
        cityInfo: [],
        countyInfo: [],
        streetInfo: [],
      },
      provinceActive: true,
      cityActive: false,
      countyActive: false,
      streetActive: false,
      cityTitleActive: false,
      countyTitleActive: false,
      streetTitleActive: false,
      addressArr: ["province", "city", "county", "street"],
    };
  },
  props: ["provinceFromDetail", "addressInfo"],
  watch: {
    async provinceFromDetail(val) {
      this.address.provinceInfo = val;
      if (this.address.cityInfo.length) return;
      // 当省份数据获取到时获取城市数据
      this.getCity(this.addressInfo.addressIds.provinceId);  //触发两次？
    },
    //当地址中的id与localStorage中的地址的id一样时给地址加上active: true
    address: {
      handler(newAddress) {
        // this.addActiveForA(newAddress,this.addressInfo.addressIds[ele + "Id"])
        this.addressArr.forEach((ele) => {
          newAddress[ele + "Info"].map((item) => {
            if (item.id === this.addressInfo.addressIds[ele + "Id"]) {
              this.$set(item, "active", true);
            }
            return item;
          });
        });
      },
      deep: true,
    },
  },
  methods: {
    //获取城市数据的方法
    async getCity(id) {
      let city;
      //如果选择的是北京、上海、重庆、天津，
      if (
        id === "101101" ||
        id === "101102" ||
        id === "105100" ||
        id === "103101"
      ) {
        city = await getAddress2(id);
      } else {
        //如果选择的是其他省份
        city = await getAddress(id);
      }
      const cityInfo = city.data.list;
      cityInfo.splice(0, 1);
      this.address.cityInfo = cityInfo;
    },

    //把当前选择的地址类型的下标取出来
    getAddrCodeIndex(addrCode) {
      let addrIndex;
      this.addressArr.forEach((item, index) => {
        if (item === addrCode) {
          addrIndex = index;
        }
      });
      return addrIndex;
    },

    //触发给Detail组件传递地址数据的函数
    triggerSelectAddress(name, id, addrCode) {
      //把当前选择的地址类型的下标取出来
      const addrIndex = this.getAddrCodeIndex(addrCode);

      //把已经选择过的地址类型过滤掉来触发自定义事件
      this.addressArr
        .filter((item, index) => index >= addrIndex)
        .forEach((item) => {
          if (item === addrCode) {
            this.$emit("selectAddress", item, name, id);
          } else {
            this.$emit("selectAddress", item, "", id);
          }
        });
    },

    //改变地址类型active值
    changeActive(addrCode) {
      const addrIndex = this.getAddrCodeIndex(addrCode);

      //addressArr: ["province", "city", "county", "street"]

      this.addressArr.forEach((item) => {
        if (item === this.addressArr[addrIndex + 1]) {
          this[item + "Active"] = true;
          this[item + "TitleActive"] = true;
        } else {
          this[item + "Active"] = false;
          //地址头部出现就不需要隐藏了
          // this[item+'TitleActive'] = false
        }
      });
    },

    //点击地址头部标签
    clickAddrTab(addrCode) {
      this.addressArr.forEach((item) => {
        if (item === addrCode) {
          this[item + "Active"] = true;
        } else {
          this[item + "Active"] = false;
        }
      });
    },

    //给具体地址a标签加active:true
    addActiveForA(addrObj,id) {
      this.addressArr.forEach((ele) => {
        this.address[ele + "Info"].map((item) => {
          if (item.id === id) {
            this.$set(item, "active", true);
          } else {
            this.$set(item, "active", false);
          }
          return item;
        });
      });
    },

    //获取下一个地址类型的数据的方法
    async getData(id,addrCode){
      const addrIndex = this.getAddrCodeIndex(addrCode)

      let addrInfo = await getAddress(id);
      addrInfo = addrInfo.data.list
      addrInfo.splice(0,1)
      this.address[this.addressArr[addrIndex+1]+"Info"] = addrInfo
    },

    //选择地址事件委托
    selectAddr(e,addrCode){
      const addrId =e.target.dataset.id
      const addrName = e.target.dataset.name
      if(!addrId) return
      console.log('select'+addrCode)
      this['select'+addrCode](addrId,addrName,addrCode)
    },

    //选择省份
    async selectprovince(id, name, addrCode) {
      this.addActiveForA(this.address,id)

      this.triggerSelectAddress(name, id, addrCode);

      this.changeActive(addrCode);

      this.address.cityInfo = [];
      this.getCity(id);
    },
    //选择市
    selectcity(id, name, addrCode) {
      this.addActiveForA(this.address,id)

      this.triggerSelectAddress(name, id, addrCode);

      this.changeActive(addrCode);

      this.address.countyInfo = [];

      this.getData(id,addrCode)

    },
    //选择县
    async selectcounty(id, name, addrCode) {
      this.addActiveForA(this.address,id)

      this.triggerSelectAddress(name, id, addrCode);

      this.changeActive(addrCode);

      //清空原来的街道数据
      this.address.streetInfo = [];
      //获取街道数据
      this.getData(id,addrCode)
    },
    //选择街道
    selectstreet(id, name, addrCode) {
      this.addActiveForA(this.address,id)

      //选择街道后不需要隐藏自己
      // this.changeActive(addrCode)

      this.triggerSelectAddress(name, id, addrCode);

      //直接隐藏整个地址组件
      this.$emit("hideX");
    },
    //点击地址头部
    async clickProvince(addrCode) {
      this.clickAddrTab(addrCode);
    },
    async clickCity(addrCode) {
      this.clickAddrTab(addrCode);

      //获取数据
      if (this.address.countyInfo.length) return;

      this.getData(this.addressInfo.addressIds.cityId,addrCode)

    },
    async clickCounty(addrCode) {
      this.clickAddrTab(addrCode);
      //获取县数据
      if (this.address.countyInfo.length) return;
      const res = await getAddress(this.addressInfo.addressIds.cityId);
      const county = res.data.list;
      county.splice(0, 1);
      this.address.countyInfo = county;
      //获取街道数据
      // if (this.address.streetInfo.length) return;

      this.getData(this.addressInfo.addressIds.countyId,addrCode)

    },
    clickStreet(addrCode) {
      this.clickAddrTab(addrCode);
    },
  },
  async mounted() {
    if (this.addressInfo.addressName.street) {
      //如果localStorage有地址数据，就显示全部地址头部
      this.addressArr.forEach((item) => {
        this[item + "TitleActive"] = true;
      });

      //显示街道
      this.clickAddrTab("street");
      //获取街道数据
      // this.getData(this.addressInfo.addressIds.countyId,'street')
      const res = await getAddress(this.addressInfo.addressIds.countyId);
      const street = res.data.list;
      street.splice(0, 1);
      this.address.streetInfo = street;
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
    &:hover {
      color: #666;
    }
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
    cursor: pointer;
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
      max-width: 68px;
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
