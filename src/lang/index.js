import { createI18n } from "vue-i18n";

import { en, tc } from "./worddict";

const i18n = createI18n({
  legacy: false, // Composition API 模式
  globalInjection: true, // 全域註冊 $t
  // 默認語言
  locale: "en",
  messages: { en, tc },
});

export default i18n;
