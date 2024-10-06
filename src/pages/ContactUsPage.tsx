import { VariantHeading } from "@/components/ui/heading"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Label } from "@/components/ui/label"
import { Mail, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactUsPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative flex items-center justify-center h-[min(calc(100vh-4rem),25rem)] bg-black">
                <img 
                    src="https://loispiration.com/wp-content/uploads/2023/09/toghu-1776742398-e1693934791460.jpg" 
                    alt="Hero Background" 
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 text-center">
                    <VariantHeading className="text-4xl lg:text-5xl font-black text-white uppercase tracking-wider">
                        Contact Us
                    </VariantHeading>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-gray-50 py-4">
                <div className="max-w-5xl mx-auto px-4">
                    <Breadcrumb>
                        <BreadcrumbList className="flex gap-2">
                            <BreadcrumbItem>
                                <BreadcrumbLink  >
                                <Link to={"/"}>
                                Home
                                </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink >Support</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Contact Us</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Contact Form and Info */}
            <div className="max-w-5xl mx-auto py-12 px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                    <form className="space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5 }}
                        >
                            <Label htmlFor="name" className="block font-medium text-gray-700">Full Name</Label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <Input 
                                    type="text" 
                                    id="name" 
                                    placeholder="Enter your full name" 
                                    className="block w-full pl-10 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5 }}
                        >
                            <Label htmlFor="email" className="block font-medium text-gray-700">Email Address</Label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <Input 
                                    type="email" 
                                    id="email" 
                                    placeholder="Enter your email" 
                                    className="block w-full pl-10 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5 }}
                        >
                            <Label htmlFor="message" className="block font-medium text-gray-700">Your Message</Label>
                            <Textarea 
                                id="message" 
                                placeholder="Type your message here" 
                                className="block w-full py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </motion.div>
                        <motion.button 
                            type="submit" 
                            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        <p><strong>Phone:</strong> <a href="tel:001234567" className="text-indigo-600">001234567</a></p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        <p><strong>Email:</strong> <a href="mailto:example@gmail.com" className="text-indigo-600">example@gmail.com</a></p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        <p><strong>Address:</strong> Coventry, United Kingdom</p>
                    </motion.div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                </div>
            </div>

            {/* Google Maps */}
            <motion.iframe
                className="w-full h-72 lg:h-96 rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38757.60294799903!2d-1.5503777747094894!3d52.40682299457911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774b7b310b48c1%3A0x5fe0509882bff300!2sCoventry%2C%20UK!5e0!3m2!1sen!2suk!4v1696581234567!5m2!1sen!2suk"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
            ></motion.iframe>
        </div>
    )
}

export default ContactUsPage
