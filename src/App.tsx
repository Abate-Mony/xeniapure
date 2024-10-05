import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import RootLayout from './Layouts/RootLayout';
import AboutUsPage from './pages/AboutUsPage';
import BecomeAMember from './pages/BecomeAMember';
import ContactUsPage from './pages/ContactUsPage';
import Convention from './pages/Convention';
import Events from './pages/Events';
import Home from './pages/Home';
function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about-us",
          element: <AboutUsPage />
        },
        {
          path: "contact-us",
          element: <ContactUsPage />
        },
        {
          path: "events",
          element: <Events />
        },
        {
          path: "become-a-member",
          element: <BecomeAMember/>
        },
        {
          path: "convention",
          element: <Convention/>
        },

      ]

    }
  ])
  return (

    <div className='max-w-7xl mx-auto'>

      <RouterProvider
        router={router}
      >
      </RouterProvider>

    </div>

  )
}

export default App
