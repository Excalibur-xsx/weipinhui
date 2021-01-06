<template>
  <div class="registerContainer">
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
            <h3 class="memberRegisterTxet">会员注册</h3>
            <div class="registerTxet">已注册可<a href="">直接登录</a></div>
          </div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item prop="phone" class="formHome">
              <el-input
                class="formHomeInput"
                v-model="ruleForm.phone"
                placeholder="请输入手机号码"
              ></el-input>
              <span class="iconfont icon-phone"></span>
              <span></span>
            </el-form-item>
            <el-form-item prop="code" class="formCode">
              <el-input
                class="formCodeInput"
                v-model="ruleForm.code"
                placeholder="请输入验证码"
              ></el-input>
              <span class="iconfont icon-icon-test2"></span>
              <img
                @click="refresh"
                src="http://182.92.128.115/api/user/passport/code"
                alt="code"
                ref="code"
              />
            </el-form-item>
            <el-form-item prop="password" class="formPasswor">
              <el-input
                type="password"
                class="formPasswordInput"
                v-model="ruleForm.password"
                placeholder="密码由8-20位字母，数字和符号组合"
              ></el-input>
              <span class="iconfont icon-icon-test3"></span>
            </el-form-item>
            <el-form-item prop="notarizePassword" class="formPasswor">
              <el-input
                type="password"
                class="formPasswordInput"
                v-model="ruleForm.notarizePassword"
                placeholder="请再次输入上面的密码"
              ></el-input>
              <span class="iconfont icon-icon-test3"></span>
            </el-form-item>

            <div class="registerTreaty">
              <el-checkbox
                v-model="ruleForm.checked"
                class="checkedTreaty"
              ></el-checkbox>
              <div class="treaty">
                我已阅读并接受以下条款：<a
                  href="https://viva.vip.com/act/supportClause-pc?wapid=vivac_802&ff=125|2|1|12"
                  >《隐私条款》</a
                ><a href="https://i.vpal.com/portal/clause/clause.html"
                  >《唯品支付用户服务协议》</a
                >
              </div>
            </div>

            <button class="registeBtn" @click="submit">立即注册</button>
          </el-form>
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
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      ruleForm: {
        phone: "",
        code: "",
        password: "",
        notarizePassword: "",
        checked: false,
      },
      rules: {
        phone: [{ required: true, message: "手机号不能为空", trigger: "blur" }],
        code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
        ],
        notarizePassword: [
          {
            required: true,
            message: "请确认密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async submit() {
      // console.log(111);
      try {
        const {
          phone,
          code,
          password,
          notarizePassword,
          checked,
        } = this.ruleForm;
        // const code = this.refresh()
        if (!phone) {
          this.$message.error("请输入手机号码");
          return;
        }
        if (!code) {
          this.$message.error("请输入验证码");
          return;
        }
        if (!password) {
          this.$message.error("请输入密码");
          return;
        }
        if (password !== notarizePassword) {
          this.$message.error("两次密码输入不一致！");
          return;
        }
        if (!checked) {
          this.$message.error("请同意用户协议");
          return;
        }
        //发送请求注册
        await this.$store.dispatch("register", {
          phone,
          password,
          code,
        });
        // console.log(111);
        this.$router.push("/login");
      } catch {
        // console.log(111);
        this.$message.error("注册失败,手机号已注册，请重新填写新的手机号码");
        this.ruleForm.phone = "";
        this.ruleForm.password = "";
        this.ruleForm.notarizePassword = "";
        this.refresh();
      }
    },
    //获取最新验证码
    refresh() {
      // console.log(111);
      this.$refs.code.src = "http://182.92.128.115/api/user/passport/code";
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
    display: flex;
    width: 100%;
    justify-content: space-around;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e0e0e0;
    .memberRegisterTxet {
      font-size: 18px;
    }
    .registerTxet {
      font-size: 14px;
      a {
        color: #f10180;
      }
    }
  }
  .demo-ruleForm {
    padding: 30px;
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
  .registerTreaty {
    display: flex;
    .checkedTreaty {
      //   width: 25px;
      //   height: 25px;
      padding-left: 15px;
    }
    .treaty {
      padding-left: 20px;
    }
  }
  .registeBtn {
    width: 300px;
    height: 42px;
    margin: 20px 30px;
    font-size: 18px;
    color: white;
    background-color: #f10180;
    outline: none;
    border: 0;
  }
}
.registerBottom {
  margin: 0 auto;
  text-align: center;
  width: 1000px;
  height: 77px;
  line-height: 77px;
}
</style>
