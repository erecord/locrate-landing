import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Box, QrCode, Search, Cloud, Share, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const APP_STORE_URL = "https://apps.apple.com/uk/app/qr-box-organiser-locrate/id6746659418";
const ANDROID_GROUP_URL = "https://groups.google.com/g/locrate";
const ANDROID_STORE_URL = "https://play.google.com/store/apps/details?id=app.locrate.android";
const ANDROID_BETA_URL = "https://play.google.com/apps/testing/app.locrate.android";

const Home = () => {
  const [location] = useLocation();
  const [isAndroidDialogOpen, setIsAndroidDialogOpen] = useState(false);

  const handleStoreClick = (storeName: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (storeName === "Google Play") {
      setIsAndroidDialogOpen(true);
    }
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
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium"
                >
                  <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
                    <svg viewBox="0 0 384 512" width="16" height="16" className="mr-2" fill="currentColor">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    App Store
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium"
                  onClick={handleStoreClick("Google Play")}
                >
                  <svg viewBox="0 0 512 512" width="16" height="16" className="mr-2" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg> Google Play
                </Button>
              </div>
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
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start ">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center cursor-pointer"
                >
                  <svg viewBox="0 0 384 512" width="24" height="24" className="mr-3" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href={ANDROID_BETA_URL}
                  onClick={handleStoreClick("Google Play")}
                  className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center cursor-pointer"
                >
                  <svg viewBox="0 0 512 512" width="24" height="24" className="mr-3" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
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

      <Dialog open={isAndroidDialogOpen} onOpenChange={setIsAndroidDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>How to join the Android closed beta</DialogTitle>
            <DialogDescription>
              The Android app is currently in closed beta. To get access, complete these two steps in order.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-5 text-sm text-gray-700">
            <div className="grid grid-cols-[1.5rem_1fr] gap-3">
              <div className="flex flex-col items-center">
                <span className="mt-1 h-3 w-3 rounded-full bg-primary" />
                <span className="mt-2 h-full w-px bg-primary/30" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Step 1: join the testing group</p>
                <a
                  href={ANDROID_GROUP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline underline-offset-4 break-all"
                >
                  {ANDROID_GROUP_URL}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-[1.5rem_1fr] gap-3">
              <div className="flex flex-col items-center">
                <span className="mt-1 h-3 w-3 rounded-full bg-primary" />
                <span className="mt-2 h-full w-px bg-primary/30" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Step 2: open the beta link</p>
                <p className="mt-1 text-gray-600">
                  After joining the group, use this link to enable beta access in Google Play.
                </p>
                <a
                  href={ANDROID_BETA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-primary underline underline-offset-4 break-all"
                >
                  {ANDROID_BETA_URL}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-[1.5rem_1fr] gap-3">
              <div className="flex flex-col items-center">
                <span className="mt-1 h-3 w-3 rounded-full bg-primary" />
              </div>
              <div>
                <p className="font-medium text-gray-900">After access is enabled: Play Store listing</p>
                <p className="mt-1 text-gray-600">
                  Use the normal app page only after beta access has been enabled on your account.
                </p>
                <a
                  href={ANDROID_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-primary underline underline-offset-4 break-all"
                >
                  {ANDROID_STORE_URL}
                </a>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button asChild variant="outline">
              <a href={ANDROID_GROUP_URL} target="_blank" rel="noreferrer">
                Join Group First
              </a>
            </Button>
            <Button asChild>
              <a href={ANDROID_BETA_URL} target="_blank" rel="noreferrer">
                Then Open Beta Link
              </a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Home;
