import { createBrowserRouter } from "react-router-dom";
import PublicComponent from '../core/layouts/public/public.component';
import {Routes} from './routes'
import HomeComponent from "../pages/home/home.component";
import AuthProtectedComponent from "./protected/auth-protected.component";
import PartnerComponent from "../pages/partner/partner.component";
import NotFoundComponent from "../pages/not-found/not-found.component";
import NewsPageComponent from "../pages/news-page/news-page.component";
import ContactComponent from "../pages/contact-page/contact-page.component";
import ProductPageComponent from "../pages/product-page/product-page.component";
import AboutPageComponent from "../pages/about-page/about-page.component";
import NewsDetailsComponent from "../pages/news-details/news.details.component";

const router = createBrowserRouter([
    {
        element: <AuthProtectedComponent layout = 'public'><PublicComponent/></AuthProtectedComponent>,
        children: [
            {
                path: Routes.home,
                element: <HomeComponent/>
            },
            {
                path: Routes.partners,
                element: <PartnerComponent/>
            },
            {
                path: Routes.about,
                element: <AboutPageComponent/>
            },
            {
                path: Routes.contact,
                element: <ContactComponent/>
            },
            {
                path: Routes.news,
                element: <NewsPageComponent/>
            },
            {
                path: Routes.products,
                element: <ProductPageComponent/>
            },
            {
                path: Routes.newsDetails,
                element: <NewsDetailsComponent/>
            },
            {
                path: '*',
                element: <NotFoundComponent/>
            }
        ]
    },
],{basename: '/',})

export default router