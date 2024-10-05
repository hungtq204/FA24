import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutsWebsite from './pages/(website)/Layouts'
import HomePage from './pages/(website)/home/page'
import SigupPage from './pages/(auth)/signup/page'
import LayoutsAdmin from './pages/(admin)/Layouts'
import DashborashPage from './pages/(admin)/dashborash/page'
import NotFoundPage from './pages/(website)/404/page'
import Shop from './pages/(website)/shop/page'
import Cart from './pages/(website)/cart/page'
import Payment from './pages/(website)/payment/pages'
import Productdetail from './pages/(website)/product-detail.tsx/pages'
import Contact from './pages/(website)/contact/pages'
import AboutPage from './pages/(website)/about/pages'
import AdminProductsPage from './pages/(admin)/products/edit/pages'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutsWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Shop />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="payment" element={<Payment />}></Route>
          <Route path="product-detail" element={<Productdetail />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="signup" element={<SigupPage />} />
        </Route>
        <Route path="admin" element={<LayoutsAdmin />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashborashPage />} />
          <Route path='product' element={<AdminProductsPage></AdminProductsPage>}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );

}

export default App
