import Cookies from 'js-cookie'
import _isEmpty from 'lodash/isEmpty'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from '@features/Login'
import Dashboard from '@features/Dashboard'
import MerchantPage from '@features/Merchant'
import CategoryPage from '@features/Categories'
import MasterDataPage from '@features/MasterData'
import Layout from '@components/templates/Layout'
import MerchantDetail from '@features/Merchant/screens/Detail'
import { QueryClient, QueryClientProvider } from 'react-query'

const AppRouter: React.FC = () => {
  const token = Cookies.get('token')
  const queryClient = new QueryClient()

  if (_isEmpty(token)) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="merchants" element={<MerchantPage />} />
            <Route path="merchants/:merchantId" element={<MerchantDetail />} />
            <Route path="categories" element={<CategoryPage />}>
              <Route path=":categoryId" element={<div />} />
            </Route>
            <Route path="master-data" element={<MasterDataPage />}>
              <Route path=":categoryId" element={<div />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default AppRouter
