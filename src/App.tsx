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
import PreviewJoinUsUser, { action as previewAction } from './pages/PreviewJoinUsUser';
import NotFoundPage from './pages/NotFoundPage';
import FAQsPage from './pages/FAQsPage';
import GalleryPage from './pages/GalleryPage';
import PayGateWay from './pages/PayGateWay';
import DownloadInvoice from './pages/DownloadInvoice';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import DashBoardLayout,{loader as dashboardLoader} from './Layouts/DashBoardLayout';
import Login, { action as loginAction } from './pages/Login';
import OPTPage, { action as verifyOptAction } from './pages/VerifyOtp';
import Users, { loader as usersLoader } from './pages/UsersPage';
import { ErrorElement } from './components/errorComponent';
// import axios from 'axios';

// axios.defaults.withCredentials = true;

const queryClient = new QueryClient({
  defaultOptions: {
    // queries: {
    //   refetchOnMount: false
    // },
    mutations: {}
  }
})
function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      errorElement: <ErrorElement/>,
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
          path: "login",
          element: <Login />,
          action: loginAction(queryClient)
        },
        {
          path: "join-us",
          element: <JoinUsLayout />,
          children: [
            {
              index: true,
              element: <RegistrationJoinUs />
            },
            {
              path: "preview",
              element: <PreviewJoinUsUser />,
              action: previewAction(queryClient)

            },
            {
              path: "verify-email",
              element: <OPTPage />,
              action: verifyOptAction
            },
            {
              path: "payment",
              element: <PayGateWay />
            },
            {
              path: "download-invoice",
              element: <DownloadInvoice />
            },
          ]
        },
        {
          path: "*",
          element: <NotFoundPage />

        }

      ]

    }, {
      path: "/dashboard",
      element: <DashBoardLayout />,
      errorElement: <ErrorElement/>,
      loader:dashboardLoader(queryClient),
      
      children: [
        {
          index: true,
          element: <div>
            root element
          </div>
        }, {
          path: "users",
          element: <Users />,
          loader: usersLoader(queryClient)
        }
      ]
    }
  ])
  return (

    <div className='max-w-7xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={router}
        ></RouterProvider>
      </QueryClientProvider>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>

  )
}

export default App
