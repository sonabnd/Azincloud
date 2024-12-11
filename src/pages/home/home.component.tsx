import AboutComponent from './components/about/about.component'
import NewsComponent from './components/news/news.component'
import ClientsComponent from './components/clients/clients.component'
import IntroductionComponent from './components/introduction/introduction.component'
import NumberComponent from './components/number/number.component'
import PartnersComponent from './components/partners/partners.component'
import ProductsComponent from './components/products/products.component'
import TrustComponent from './components/trust/trust.component'
import CertificatesComponent from './components/certificates/certificates.component'


const HomeComponent = () => {
  return (
    <div>
      <IntroductionComponent/>
      <ProductsComponent/>
      <AboutComponent/>
      <ClientsComponent/>
      <TrustComponent/>
      <NumberComponent/>
      <PartnersComponent/>
      <NewsComponent/>
      <CertificatesComponent/>
    </div>
  )
}

export default HomeComponent