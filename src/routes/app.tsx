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
import LearningPage from '@features/Learning/screens/List'
import CreateLearningPage from '@features/Learning/screens/Create'
import { QueryClient, QueryClientProvider } from 'react-query'
import EditLearningPage from '@features/Learning/screens/Edit'
import WithdrawPage from '@features/Withdraw/screens/List'
import DetailWithdrawPage from '@features/Withdraw/screens/Detail'
import BankAccountList from '@features/BankAccount/screens/List'
import BankAccountDetail from '@features/BankAccount/screens/Detail'
import RefundList from '@features/Refund/screens/List'
import MerchantVerificationList from '@features/MerchantVerification/screens/List'

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
            <Route exact path="/bank-account">
              <BankAccountList />
            </Route>
            <Route exact path="/bank-account/:bankAccountId">
              <BankAccountDetail />
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
            <Route exact path="/learning">
              <LearningPage />
            </Route>
            <Route exact path="/learning/create">
              <CreateLearningPage />
            </Route>
            <Route exact path="/learning/edit/:id">
              <EditLearningPage />
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
            <Route exact path="/withdraw-request">
              <WithdrawPage />
            </Route>
            <Route exact path="/withdraw-request/:id">
              <DetailWithdrawPage />
            </Route>
            <Route exact path="/refund">
              <RefundList />
            </Route>
            <Route exact path="/merchant-verification">
              <MerchantVerificationList />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default AppRouter
