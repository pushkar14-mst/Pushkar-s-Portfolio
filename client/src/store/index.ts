import { configureStore } from "@reduxjs/toolkit";
import { portfloioCommonStoreSliceRducer } from "./portfolio-common-store";

const store=configureStore({
    reducer:{
        portfolioCommonStore:portfloioCommonStoreSliceRducer
    }
})
export default store;