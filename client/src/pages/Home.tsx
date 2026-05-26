import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Box, QrCode, Search, Cloud, Share, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AndroidBetaDialog from "@/components/AndroidBetaDialog";
import StoreButtons from "@/components/StoreButtons";

const Home = () => {
  const [location] = useLocation();
  const [isAndroidDialogOpen, setIsAndroidDialogOpen] = useState(false);

  const handleAndroidClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAndroidDialogOpen(true);
  };

  useEffect(() => {
    // Handle hash navigation on load
    if (location.includes("#")) {
      const id = location.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Never lose track of your belongings again</h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Locrate helps you organise your possessions with virtual boxes and QR codes, making finding them as simple as scanning with your mobile phone.
              </p>
              <StoreButtons onAndroidClick={handleAndroidClick} />
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2 ">
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 justify-center items-center">
                <div className="w-full flex justify-center">
                  <img
                    src="images/app-crates.jpg"
                    alt="Locrate App Home Page"
                    className="rounded-xl w-full h-auto max-w-sm"
                  />
                </div>
              </div>

            </div>
            <div className="lg:w-1/2 hidden lg:block order-3 ">
              <div className=" flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 justify-center items-center">

                <div className="w-full flex justify-center">
                  <img
                    src="images/app-print-qr.jpg"
                    alt="Locrate Print QR Code Example"
                    className="rounded-xl w-full h-auto max-w-sm"
                  />
                </div>
              </div></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Features that simplify your life</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how Locrate makes organising and finding your items easier than ever before.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <Box className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Virtual Boxes</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create digital containers for your physical items. Organise and categorise your belongings into intuitive virtual boxes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <QrCode className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">QR Code Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Generate unique QR codes for your boxes and items. Simply scan them with your phone to instantly locate and identify.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Search</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quickly find any item in any box with our powerful search function.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <Cloud className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Sync</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access your inventory from any device. Your data is securely stored in the cloud and synced across all your devices.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 relative overflow-hidden">
              <div className="absolute -right-9 top-7 rotate-[45deg]">
                <Badge variant="secondary" className="text-white text-md px-8 py-1 shadow-lg">Coming Soon</Badge>
              </div>
              <div className="text-primary text-3xl mb-4">
                <Share className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Shared Access</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share specific boxes with family or roommates. Perfect for household items, shared collections, and more.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 relative overflow-hidden">
              <div className="absolute -right-9 top-7 rotate-[45deg]">
                <Badge variant="secondary" className="text-white text-md px-8 py-1 shadow-lg">Coming Soon</Badge>
              </div>
              <div className="text-primary text-3xl mb-4">
                <Bell className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Many More Features</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Stay tuned for new features including multiple inventories, advanced filtering, smart labels, and much more to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Locrate Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform how you organise your possessions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-6 mx-auto">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Create Virtual Boxes</h3>
              <p className="text-gray-600">
                Effortlessly set up digital containers that mirror your physical storage. These are called your crates. Give them custom names, and organise by location or purpose.
              </p>
              <div className="mt-4 text-primary font-medium">
                Perfect for: Lofts, garages, storage units, wardrobes, etc.
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-6 mx-auto">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Apply QR Stickers</h3>
              <p className="text-gray-600">
                Print your personalised QR code stickers and affix them to your physical boxes or storage containers. Each QR code links to an individual crate.
              </p>
              <br />
              <div className="mt-4 text-primary font-medium">
                Benefit: No more opening multiple boxes to find what you need
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-6 mx-auto">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Scan & Find</h3>
              <p className="text-gray-600">
                When you need something, simply scan the QR code with your mobile camera to instantly view the contents, or use our powerful search feature to locate any item across all boxes.
              </p>
              <div className="mt-4 text-primary font-medium">
                Save time: Locate items in seconds, not minutes or hours
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="#download"
              className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium inline-block"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("download");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Locrate Today</h2>
              <p className="text-lg mb-8 max-w-md">
                Available for iOS and Android devices. Start organising your life with just a few taps.
              </p>
              <StoreButtons onAndroidClick={handleAndroidClick} variant="download" />
            </div>
            <div className="lg:w-1/2">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <img
                  src="images/app-search.jpg"
                  alt="Locrate app scanning QR code"
                  className="rounded-xl shadow-lg w-3/4 lg:w-1/2 h-auto max-w-sm"
                />
                <img
                  src="images/app-locate.jpg"
                  alt="Locrate app search"
                  className="rounded-xl shadow-lg w-3/4 lg:w-1/2 h-auto max-w-sm"
                />
                <img
                  src="images/app-scan-qr.jpg"
                  alt="Locrate app search"
                  className="rounded-xl shadow-lg w-3/4 lg:w-1/2 h-auto max-w-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AndroidBetaDialog open={isAndroidDialogOpen} onOpenChange={setIsAndroidDialogOpen} />
    </>
  );
};

export default Home;
