<template>
  <div>
    <div class="registerContainer" v-wechat-title="$route.meta.title">
      <div class="registerHeader">
        <img
          class="logo"
          src="//b.appsimg.com/upload/momin/2020/06/16/82/1592278113502.png"
          alt=""
        />
        <div class="Service"></div>
      </div>

      <div class="registerContent">
        <div class="back">
          <div class="registerContentRight">
            <div class="registerContentRightTop">
              <h3
                :class="{
                  memberRegisterTxetL: true,
                  active: showLogin ? '' : 'active',
                }"
                @click="fncShowLogin(0)"
              >
                扫码登录
              </h3>
              <h3
                :class="{
                  memberRegisterTxetR: true,
                  active: showLogin ? 'active' : '',
                }"
                @click="fncShowLogin(1)"
              >
                账户登录
              </h3>
            </div>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm"
              v-if="showLogin"
            >
              <el-form-item prop="phone" class="formHome">
                <el-input
                  class="formHomeInput"
                  v-model="ruleForm.phone"
                  placeholder="手机号/用户名/邮箱"
                ></el-input>
                <span class="iconfont icon-phone"></span>
                <span></span>
              </el-form-item>
              <el-form-item prop="password" class="formPasswor">
                <el-input
                  type="password"
                  class="formPasswordInput"
                  v-model="ruleForm.password"
                  placeholder="密码"
                ></el-input>
                <span class="iconfont icon-icon-test3"></span>
              </el-form-item>

              <div class="registerTreaty">
                <div class="treaty">
                  <a href="">短信验证登录</a>
                  <a href="">忘记密码?</a>
                </div>
              </div>

              <button class="registeBtn" @click.prevent="toLogin">登录</button>
            </el-form>

            <div class="registerContentRightFooter">
              <div class="weixin">
                <div class="halvingLine"></div>
                <a
                  class="jinglingtu"
                  href="https://open.weixin.qq.com/connect/qrconnect?appid=wxce0a56c2bb620e25&redirect_uri=https%3A%2F%2Fpassport.vip.com%2Fcallback%2Fweixin&response_type=code&scope=snsapi_login&state=c7c15643eb9f42b99f4c4b9d5a0bc516#wechat_redirect"
                ></a>
                <div class="halvingLine"></div>
              </div>
              <ul class="loginList">
                <li>新浪微博</li>
                <li>QQ</li>
                <li>支付宝</li>
                <router-link class="registerClick" to="/register"
                  >免费注册</router-link
                >
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="registerBottom">
        <span
          >Copyright 2008-2020 vip.com，All Rights Reserved ICP证：粤
          B2-20080329</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      showLogin: true,
      ruleForm: {
        phone: "",
        password: "",
      },
      rules: {
        phone: [{ required: true, message: "请输入登录名", trigger: "blur" }],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
      isLogining: false,
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.user.token,
      name: (state) => state.user.name,
    }),
  },
  methods: {
    async toLogin() {
      try {
        const { phone, password } = this.ruleForm;
        if (this.isLogining) return;
        if (!phone && !password) {
          this.$message.error("请输入账号和密码");
          return;
        }
        this.isLogining = true;
        await this.$store.dispatch("login", { phone, password });
        localStorage.setItem("token", this.token);
        localStorage.setItem("name", this.name);
        this.$router.push("/");
      } catch {
        this.isLogining = false;
      }
    },
    fncShowLogin(type) {
      if (type) {
        this.showLogin = true;
        console.log(111, this.showLogin);
      } else {
        this.showLogin = false;
        console.log(222, this.showLogin);
      }
    },
  },
};
</script>

<style lang='less' scoped>
.registerHeader {
  display: flex;
  margin: 0 auto;
  width: 1000px;
  height: 100px;
  justify-content: space-between;
  .logo {
    width: 180px;
    height: 100px;
  }

  .Service {
    width: 304px;
    height: 100px;
    background-image: url("./images/sprites-hash-c9975078.png");
  }
}
.registerContent {
  background-image: url("//b.appsimg.com/upload/momin/2020/12/14/15/1607915393371.jpg");
  background-position: top center;
  background-repeat: no-repeat;
  height: 550px;
  .back {
    margin-right: auto;
    margin-left: auto;
    padding: 50px 20px;
    min-height: 550px;
    width: 1000px;
  }
  .registerContentRight {
    width: 400px;
    border-radius: 2px;
    background-color: #f3f1f4;
    float: right;
  }
  .registerContentRightTop {
    // display: flex;
    width: 100%;
    // justify-content: space-around;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e0e0e0;
    align-items: center;
    cursor: pointer;
    .memberRegisterTxetL {
      // display: flex;
      // align-items: center;
      display: inline-block;
      font-size: 18px;
      border-right: 1px solid #ccc;
      width: 50%;
      text-align: center;
      box-sizing: border-box;
    }
    .memberRegisterTxetR {
      display: inline-block;
      text-align: center;
      font-size: 18px;
      width: 50%;
    }
    .active {
      color: #f10180;
    }
    .registerTxet {
      font-size: 14px;
      a {
        color: #f10180;
      }
    }
  }
  .demo-ruleForm {
    padding: 15px 30px;
    .formHome {
      position: relative;
      .formHomeInput {
        padding-left: 40px;
        width: 302px;
        height: 46px;
        line-height: 46px;
        font-size: 16px;
        border-radius: 5px;
      }
      .icon-phone {
        position: absolute;
        top: 4px;
        left: 11px;
        z-index: 1;
        height: 30px;
        width: 30px;
        font-size: 22px;
      }
      .icon-icon-test4 {
        position: absolute;
        right: 7px;
        top: 3px;
        color: #f64a4a;
      }
    }
    .formCode {
      position: relative;
      .formCodeInput {
        width: 155px;
        margin-right: 10px;
        height: 32px;
        line-height: 32px;
        border-radius: 5px;
        padding-left: 40px;
        font-size: 16px;
      }
      .icon-icon-test2 {
        position: absolute;
        top: 11px;
        left: 11px;
        z-index: 1;
        font-size: 23px;
      }
      .formCodeBtn {
        padding: 0 12px;
        width: 135px;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #d0d0d0;
        color: #999;
        background: #d0d0d0;
        cursor: not-allowed;
        border-radius: 5px;
      }
    }
    .formPasswor {
      position: relative;
      .formPasswordInput {
        padding-left: 40px;
        width: 302px;
        height: 46px;
        line-height: 46px;
        font-size: 16px;
        border-radius: 5px;
      }
      .icon-icon-test3 {
        position: absolute;
        top: 4px;
        left: 11px;
        z-index: 1;
        height: 30px;
        width: 30px;
        font-size: 22px;
      }
    }
  }
  .appWeixin {
    width: 360px;
    height: 264px;
    padding-top: 20px;

    img {
      border: 0 none;
      width: 150px;
      height: 150px;
      padding: 26px 0 0 52px;
    }
    .jinglintu {
      background-image: url(//member-ssl.vipstatic.com/img/passport/sprites-hash-c9975078.png?4eaaf192);
      background-position: 0 -104px;
      width: 120px;
      height: 192px;
      // display: none;
      position: absolute;
      top: 0;
      right: 30px;
      // z-index: 1;
      // opacity: 0;
    }
    .apptext {
      width: 100%;
      height: 80px;
      line-height: 80px;
      text-align: center;
    }
  }
  .registerTreaty {
    .treaty {
      display: flex;
      justify-content: space-between;
      width: 300px;
      height: 19px;
      padding-left: 42px;
    }
  }
  .registeBtn {
    width: 327px;
    height: 42px;
    margin: 20px 13px;
    font-size: 18px;
    color: white;
    background-color: #f10180;
    outline: none;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
  }
}
.registerBottom {
  margin: 0 auto;
  text-align: center;
  width: 1200px;
  height: 77px;
  line-height: 77px;
}
.registerContentRightFooter {
  width: 324px;
  margin: 0 45px;
  padding-bottom: 15px;
  .weixin {
    position: relative;
    z-index: 1;
    margin-bottom: 10px;
    // margin: 10 auto;
    height: 40px;
    display: flex;
    .jinglingtu {
      background-image: url("./images/sprites-hash-c9975078.png");
      background-position: -580px -161px;
      width: 48px;
      height: 40px;
      display: inline-block;
      position: relative;
      z-index: 3;
      margin: 0 5px;
      cursor: pointer;
    }
    .halvingLine {
      width: 50%;
      height: 23px;
      border-bottom: 1px solid rgb(182, 174, 174);
    }
  }
  .loginList {
    display: flex;
    align-items: center;
    li {
      text-align: center;
      width: 60px;
      height: 12px;
      line-height: 12px;
      border-right: 1px solid black;
      // margin-right: 5px;
      // padding-right: 10px;
    }
    .registerClick {
      margin-left: 30px;
      font-size: 18px;
      // height: 20px;
      // line-height: 20px;
    }
  }
}
</style>
