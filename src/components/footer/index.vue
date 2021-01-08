<template>
  <div>
    <div class="footer_contaiter">
      <div class="footer_inner_contaiter">
        <div class="footer_inner">
          <div class="inner_link">
            <a href="#">关于我们</a>
            |
            <a href="#">About us</a>
            |
            <a href="#">Investor Relations</a>
            |
            <a href="#">媒体报道</a>
            |
            <a href="#">品牌招商</a>
            |
            <a href="#">隐私条款</a>
            |
            <a href="#">唯品诚聘</a>
            |
            <a href="#">唯品卡</a>
            |
            <a href="#">联系我们</a>
            |
            <a href="#">廉正举报</a>
          </div>
          <div class="inner_txt">
            <p>Copyright © 2008-2021 vip.com，All Rights Reserved 使用本网站即表示接受 唯品会用户协议。版权所有 广州唯品会电子商务有限公司</p>
            <p>
              <img src="./images/police_icon.png" />粤公网安备 44010302111111号&nbsp;&nbsp;&nbsp;&nbsp;粤ICP备08114786号 增值业务经营许可证：粤B2-20170777 网络文化经营许可证：粤网文〔2018〕5030-1743号
            </p>
            <p>经营主体证照&nbsp;&nbsp;&nbsp;风险监测信息&nbsp;&nbsp;&nbsp;互联网药品信息服务资格证书：（粤）-经营性-2018-0271 网络食品交易第三方平台备案凭证：粤B2-20170777 医疗器械网络交易服务第三方平台备案</p>
            <p>凭证：（粤）网械平台备字[2019]第00001号</p>
          </div>
        </div>
      </div>

      <div class="footer_ft">
        <div class="ft_1th"></div>
        <div class="ft_2th"></div>
        <div class="ft_3th"></div>
        <div class="ft_4th"></div>
        <div class="ft_5th"></div>
        <div class="ft_6th"></div>
        <div class="ft_7th"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.footer_contaiter {
  font: 12px/1.5 tahoma, arial, Hiragino Sans GB, WenQuanYi Micro Hei,
    \5fae\8f6f\96c5\9ed1, \5b8b\4f53, sans-serif;
  display: block;
  clear: both;
  overflow: hidden;
  line-height: 22px;
  border-top: 1px solid #ebebeb;
  color: #4d4d4d;
  .footer_inner_contaiter {
    background-color: #fcfcfc;
    padding-top: 30px;
    padding-bottom: 1px;
    .footer_inner {
      width: 960px;
      margin: 0 auto;
      text-align: center;
      .inner_link {
        background-color: #d7237e;
        line-height: 30px;
        color: #fff;
        a {
          color: #fff;
        }
      }
      .inner_txt {
        margin: 14px 0;
        color: #808080;
        p {
          margin: 0;
          padding: 0;
          line-height: 19px;
          img {
            margin: 2px 3px 0 0;
            width: 14px;
            height: 14px;
            vertical-align: top;
          }
        }
      }
    }
  }
  .footer_ft {
    width: 960px;
    margin: 0 auto;
    padding: 4px 0;
    display: flex;
    justify-content: center;
    div {
      margin-right: 9px;
      height: 40px;
      background-image: url("./images/footer-hash.png");
    }
    .ft_1th {
      width: 105px;
      background-position: 0 0;
    }
    .ft_2th {
      width: 99px;
      background-position: 0 -150px;
    }
    .ft_3th {
      background-image: url("./images/footer_no_good-hash.png");
      background-repeat: no-repeat;
      width: 76px;
    }
    .ft_4th {
      width: 70px;
      background-position: 0 -250px;
    }
    .ft_5th {
      width: 75px;
      background-position: 0 -300px;
    }
    .ft_6th {
      width: 76px;
      background-position: 0 -400px;
    }
    .ft_7th {
      width: 76px;
      background-position: 0 -450px;
    }
  }
}
</style>
