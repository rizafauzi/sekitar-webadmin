import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from '@features/Dashboard'
import MerchantList from '@features/Merchant'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="products" element={<div />}>
        <Route path=":productId" element={<div />} />
      </Route>
      <Route path="merchants" element={<MerchantList />}>
        <Route path=":merchantId" element={<div />} />
      </Route>
      <Route path="categories" element={<div />}>
        <Route path=":categoryId" element={<div />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

// const AuthRouter = () => {

// }
export default AppRouter
