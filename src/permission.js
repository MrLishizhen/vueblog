import router from "@/router/index.js"
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
NProgress.configure({ showSpinner: false });
router.beforeEach(async (to, from, next) => {
    NProgress.start();
    next();

});


router.afterEach((to, from) => {

    NProgress.done();

})