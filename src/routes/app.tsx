import Cookies from 'js-cookie'
import _isEmpty from 'lodash/isEmpty'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginPage from '@features/Login'
import OrderPage from '@features/Order'
import Dashboard from '@features/Dashboard'
import MerchantPage from '@features/Merchant'
import CategoryPage from '@features/Categories'
import CourierPage from '@features/Courier/screens/List'
import OrderDetailPage from '@features/Order/screens/Detail'
import CategoryProductDetail from '@features/Categories/screens/Detail'
import MasterDataPage from '@features/MasterData'
import PromoPage from '@features/Promo'
import CreatePromoPage from '@features/Promo/screens/Create'
import EditPromoPage from '@features/Promo/screens/Edit'
import Layout from '@components/templates/Layout'
import MerchantDetail from '@features/Merchant/screens/Detail'
import { QueryClient, QueryClientProvider } from 'react-query'

const AppRouter: React.FC = () => {
  const token = Cookies.get('token')
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  if (_isEmpty(token)) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="*">
            <LoginPage />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <MerchantPage />
            </Route>
            <Route exact path="/Dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/merchants">
              <MerchantPage />
            </Route>
            <Route exact path="/merchants/:merchantId">
              <MerchantDetail />
            </Route>
            <Route exact path="/categories">
              <CategoryPage />
            </Route>
            <Route exact path="/categories/:categoryId">
              <CategoryProductDetail />
            </Route>
            <Route exact path="/promo">
              <PromoPage />
            </Route>
            <Route exact path="/promo/create">
              <CreatePromoPage />
            </Route>
            <Route exact path="/promo/edit/:id">
              <EditPromoPage />
            </Route>
            <Route exact path="/master-data">
              <MasterDataPage />
            </Route>
            <Route path="/master-data/:id">
              <MasterDataPage />
            </Route>
            <Route exact path="/orders">
              <OrderPage />
            </Route>
            <Route exact path="/orders/:id">
              <OrderDetailPage />
            </Route>
            <Route path="/couriers">
              <CourierPage />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default AppRouter
