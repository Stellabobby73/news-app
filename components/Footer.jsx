import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github, Heart, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="text-pink-500 mr-2" size={24} fill="#ec4899" />
              <h3 className="text-xl font-bold">InsightStream</h3>
            </div>
            <p className="mb-4 text-gray-400">
              A revolutionary web application designed to redefine how people discover and consume news. Stay informed
              with the latest stories from around the world.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-pink-400">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/category/business" className="hover:text-pink-400 transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/category/technology" className="hover:text-pink-400 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/category/health" className="hover:text-pink-400 transition-colors">
                  Health
                </Link>
              </li>
              <li>
                <Link href="/category/science" className="hover:text-pink-400 transition-colors">
                  Science
                </Link>
              </li>
              <li>
                <Link href="/category/entertainment" className="hover:text-pink-400 transition-colors">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-pink-400">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-pink-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-pink-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-pink-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-pink-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-pink-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-pink-400">Contact Us</h4>
            <address className="not-italic text-gray-400">
              <p className="flex items-center mb-2">
                <MapPin size={16} className="mr-2 text-pink-400" />
                123 News Street, Media City, MS 12345
              </p>
              <p className="flex items-center mb-2">
                <Mail size={16} className="mr-2 text-pink-400" />
                info@insightstream.com
              </p>
              <p className="flex items-center">
                <Phone size={16} className="mr-2 text-pink-400" />
                +1 (555) 123-4567
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} InsightStream. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Made with <Heart size={12} className="inline text-pink-500" fill="#ec4899" /> for news enthusiasts
            everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}

