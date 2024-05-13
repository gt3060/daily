import { createSSRApp } from "vue";
import "@/assets/iconfont/iconfont.css";
import uviewPlus from "uview-plus";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus);
  (uni as any).$u.config.unit = "rpx";
  return {
    app,
  };
}
