<template>
  <div class="l_utility l_utility_tools study-header">
    <div class="l_header_logo">
      <router-link to="/">
        <picture>
          <source media="(max-width: 767px)" srcset="@/assets/images/logo.png">
          <img src="@/assets/images/logo.png" alt="Study in Japan" style="display: inline; width: 600px; margin-left: -200px">
        </picture>
      </router-link>
    </div>
    <div class="l_utility_column" style="width: 100%;text-align: right; padding-left: 20px;">

      <div class="l_utility_column_item l_utility_column_item_tools" style="float: right;">
          <form id="cse-search-box" action="https://google.com/cse" target="_blank" class="l_utility_search">
            <input type="text" name="q" size="31" :placeholder="$t('menu.search2')" class="l_utility_search_input">
            <input type="submit" name="sa" :value="$t('menu.search')" id="search_btn" class="l_utility_search_submit">
            <input type="hidden" name="cx" value="001053951043051989747:tsw40oj1f_w">
            <input type="hidden" name="ie" value="UTF-8">
          </form>

<!--        <div class="m_fontchange">-->
<!--          <div class="m_fontchange_title">{{$t("menu.fontsize")}}</div>-->
<!--          <div class="m_fontchange_btn">-->
<!--            <input type="radio" name="page_font" value="is_font_md" id="page_font_md" class="m_fontchange_btn_input js_font_control is_active" @click="changeSizeNormal()" checked>-->
<!--            <label for="page_font_md" class="m_fontchange_btn_label">{{$t("menu.standard")}}</label>-->
<!--          </div>-->
<!--          <div class="m_fontchange_btn">-->
<!--            <input type="radio" name="page_font" value="is_font_lg" id="page_font_lg" class="m_fontchange_btn_input js_font_control" @click="changeSizeBig()">-->
<!--            <label for="page_font_lg" class="m_fontchange_btn_label">{{$t("menu.zoom")}}</label>-->
<!--          </div>-->
<!--        </div>-->

        <div class="m_language" lang="mn">
            <label for="page_language" class="m_language_title">{{ $t("menu.lang") }}</label>
            <div class="m_language_select">
                <select name="search_lang" id="page_language" class="js_language_replace" @change="changeLang($event)" v-model="lang">
                    <option value="mn" selected>Монгол</option>
                    <option value="en">English</option>
                    <option value="jp">日本</option>
                </select>
            </div>
        </div>
      </div>

<!--      <div class="l_utility_column_item l_utility_column_item_mail">-->
<!--        <router-link to="/contact" class="m_btn m_btn_contact">{{$t("menu.contact")}}</router-link>-->
<!--      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data(){
    return {
      lang: "",
      $i18n: {
        locale: "mn",
      },
    }
  },
  methods: {
    changeLang()
    {
      if (this.lang == "mn")
      {
        this.$i18n.locale = "mn";
      }
      if (this.lang == "en")
      {
        this.$i18n.locale = "en";
      }
      if (this.lang == "jp")
      {
        this.$i18n.locale = "jp";
      }
    },

    changeSizeBig()
    {
      document.documentElement.classList.add("MyClass");
    },
    changeSizeNormal()
    {
      document.documentElement.classList.remove("MyClass");
    }
  }
}
</script>

<style>
.MyClass
{
  font-size: 19px;
}
.study-header {
  position: absolute !important;
  display: flex;
  width: 100%;
  z-index: 2;
  background-color: transparent !important;
}


.nav__toggle {
  position: absolute;
  cursor: pointer;
  margin: 0rem 1rem;
  right: 0;
}

.close,
input[type="checkbox"] {
  display: none;
}
@media only screen and (min-width: 768px) {

  .nav__toggle {
    display: none;
  }
  .l_global_parent {
    flex-direction: row;
  }
  .l_global_parent li {
    display: block;
  }
}
</style>