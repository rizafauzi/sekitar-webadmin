import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from '@features/Dashboard'
import MerchantPage from '@features/Merchant'
import CategoryPage from '@features/Categories'
import MasterDataPage from '@features/MasterData'
import Layout from '@components/templates/Layout'

const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="merchants" element={<MerchantPage />}>
          <Route path=":merchantId" element={<div />} />
        </Route>
        <Route path="categories" element={<CategoryPage />}>
          <Route path=":categoryId" element={<div />} />
        </Route>
        <Route path="master-data" element={<MasterDataPage />}>
          <Route path=":categoryId" element={<div />} />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
)

// const AuthRouter = () => {

// }
export default AppRouter
