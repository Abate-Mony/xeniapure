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
import JoinUsLayout from './Layouts/JoinUsLayout';
import RegistrationJoinUs from './pages/RegistrationJoinUs';
import PreviewJoinUsUser from './pages/PreviewJoinUsUser';
import NotFoundPage from './pages/NotFoundPage';
import FAQsPage from './pages/FAQsPage';
import GalleryPage from './pages/GalleryPage';
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
          element: <BecomeAMember />
        },
        {
          path: "convention",
          element: <Convention />
        },
        {
          path: "gallery",
          element: <GalleryPage />
        },
        {
          path: "faqs",
          element: <FAQsPage />
        },
        {
          path: "join-us",
          element: <JoinUsLayout />,
          children: [
            {
              index: true,
              element: <RegistrationJoinUs />
            }, {
              path: "preview",
              element: <PreviewJoinUsUser />
            }
          ]
        },
        {
          path: "*",
          element: <NotFoundPage />
    
        }

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
