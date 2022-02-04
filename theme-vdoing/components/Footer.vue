<template>
  <div class="footer">
    <div
      class="icons"
      v-if="social && social.icons"
    >
      <a
        :href="item.link"
        :title="item.title"
        :class="['iconfont', item.iconClass]"
        v-for="(item, index) in social.icons"
        :key="index"
        target="_blank"
      ></a>
    </div>
    <!--Vdoing主题遵循MIT协议，完全开源且免费。如果您对主题的修改并不大，希望您保留主题的链接。-->
     <span id="momk"></span><span id="momk" style="color: #969696;"></span>  

<script>
function NewDate(str) {
str = str.split('-');
var date = new Date();
date.setUTCFullYear(str[0], str[1] - 1, str[2]);
date.setUTCHours(0, 0, 0, 0);
return date;
}
function momxc() {
var birthDay =NewDate("2021-11-14");
var today=new Date();
var timeold=today.getTime()-birthDay.getTime();
var sectimeold=timeold/1000
var secondsold=Math.floor(sectimeold);
var msPerDay=24*60*60*1000; var e_daysold=timeold/msPerDay;
var daysold=Math.floor(e_daysold);
var e_hrsold=(daysold-e_daysold)*-24;
var hrsold=Math.floor(e_hrsold);
var e_minsold=(hrsold-e_hrsold)*-60;
var minsold=Math.floor((hrsold-e_hrsold)*-60); var seconds=Math.floor((minsold-e_minsold)*-60).toString();
document.getElementById("momk").innerHTML = "风里雨里，已等待你"+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒";
setTimeout(momxc, 1000);
}momxc();
</script>    

<style>
#momk{animation:change 10000s infinite;font-weight:800; }
@keyframes change{0%{color: #969696;}}
</style>
  
   <br/>
    <template v-if="footer">
      Copyright © {{ footer.createYear }}-{{ new Date().getFullYear() }}
      <span
        v-html="footer.copyrightInfo"
      ></span>
    </template>
    <br/>
    <!--备案号-->
        <!-- <a
      href="https://beian.miit.gov.cn/#/Integrated/index"
      target="_blank"
      title="icp备案"

    >蜀ICP备2021024989号-4</a> -->
        <a
      href="https://beian.miit.gov.cn/#/Integrated/index"
      target="_blank"
      title="icp备案"

    >蜀ICP备2021024989号-4</a>
    <br/>
        <a
      href="http://www.beian.gov.cn/portal/registerSystemInfo"
      target="_blank"
      title="网安备案"
    >蜀公网安备51202202511081号</a>
  </div>
</template>
<script>
export default {
  computed: {
    social () {
      return this.$themeConfig.social
    },
    footer () {
      return this.$themeConfig.footer
    }
  }
}
</script>

<style lang='stylus'>
// $mobileSidebarWidth = $sidebarWidth * 0.82
.footer
  padding 5rem 1.5rem 2.5rem
  text-align center
  color #666
  box-sizing border-box
  font-size 0.85rem
  transition all 0.2s ease
  .icons
    margin-bottom 12px
    .iconfont
      padding 0 10px
      font-size 1.3rem
  a
    color inherit
    &:hover
      color $accentColor
@media (min-width ($MQMobile + 1px))
  .sidebar-open .footer
    width auto
    padding-left ($sidebarWidth + 1.5rem)
@media (min-width 1520px)
  .have-rightmenu .footer
    padding-right ($rightMenuWidth + 1.5rem)
.no-sidebar .footer
  width auto
  padding-left 1.5rem
</style>
