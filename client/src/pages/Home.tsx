import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Box, QrCode, Search, Cloud, Share, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AppScreenshotCard from "@/components/AppScreenshotCard";
import AndroidBetaDialog from "@/components/AndroidBetaDialog";
import StoreButtons from "@/components/StoreButtons";

const features = [
  {
    icon: Box,
    title: "Virtual Boxes",
    description:
      "Create digital containers for your physical items. Organise and categorise your belongings into intuitive virtual boxes.",
    status: "Available now",
  },
  {
    icon: QrCode,
    title: "QR Code Tracking",
    description:
      "Generate unique QR codes for your boxes and items. Simply scan them with your phone to instantly locate and identify.",
    status: "Available now",
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Quickly find any item in any box with our powerful search function.",
    status: "Available now",
  },
  {
    icon: Share,
    title: "Locations",
    description: "Separate the house, loft, garage or storage unit so you can browse the right place before you start opening boxes.",
    status: "Available now",
  },
  {
    icon: QrCode,
    title: "Categories",
    description: "Group crates into categories like Christmas, craft supplies or home office to keep large collections easier to scan.",
    status: "Available now",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Access your inventory from any device. Your data is securely stored in the cloud and synced across all your devices.",
    status: "Available now",
  },
  {
    icon: Bell,
    title: "Thermal Printer Support",
    description: "Print QR labels straight to supported thermal printers so crates can be labelled as soon as you create them.",
    status: "Available now",
  },
  {
    icon: Share,
    title: "Shared Access",
    description: "Share specific boxes with family or roommates. Perfect for household items, shared collections, and more.",
    status: "Coming soon",
  },
  {
    icon: Bell,
    title: "Many More Features",
    description:
      "Stay tuned for new features including multiple inventories, advanced filtering, smart labels, and much more to come.",
    status: "Coming soon",
  },
];

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
      <section id="hero" className="bg-[#2D92D2] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 order-3 lg:order-1">
              <h1 className="mb-4 text-4xl font-bold leading-none md:text-5xl lg:text-6xl">
                <span className="block text-[#081B34]">Know what you have.</span>
                <span className="mt-2 block text-white">Find where it is.</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Locrate helps you keep track of everything, so you can find what you need, fast.
              </p>
              <div className="hidden lg:block">
                <StoreButtons onAndroidClick={handleAndroidClick} />
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2 ">
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 justify-center items-center">
                <div className="w-full flex justify-center">
                  <img
                    src="images/screenshots/organise-storage-header.jpg"
                    alt="Locrate organise storage screen"
                    className="h-auto w-full max-w-md rounded-xl lg:max-w-xl xl:max-w-2xl"
                  />
                </div>
              </div>

            </div>
            <div className="mb-8 w-full order-2 lg:hidden">
              <StoreButtons onAndroidClick={handleAndroidClick} />
            </div>
            <div className="lg:w-1/2 hidden lg:block order-3 ">
              <div className=" flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 justify-center items-center">

                <div className="w-full flex justify-center">
                  <img
                    src="images/screenshots/print-to-label-printers-header.jpg"
                    alt="Printing Locrate QR labels on a label printer"
                    className="h-auto w-full max-w-md rounded-xl lg:max-w-xl xl:max-w-2xl"
                  />
                </div>
              </div></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#F8FBFD] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why People Use Locrate</p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">Features that simplify your life</h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
              Discover how Locrate makes organising and finding your items easier to browse, search and recover later.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isPlanned = feature.status === "Coming soon";

              return (
                <div
                  key={feature.title}
                  className={`rounded-2xl border p-6 transition duration-200 ${
                    isPlanned
                      ? "border-[#E7D3C2] bg-[#FFF8F4]"
                      : "border-slate-200 bg-white shadow-[0_10px_30px_rgba(8,27,52,0.06)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(8,27,52,0.10)]"
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className={`rounded-2xl p-3 ${isPlanned ? "bg-white" : "bg-[#EFF7FD]"}`}>
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <Badge
                      variant="secondary"
                      className={isPlanned ? "bg-[#E2A477] text-white" : "bg-[#EAF6FF] text-primary hover:bg-[#EAF6FF]"}
                    >
                      {feature.status}
                    </Badge>
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold tracking-[-0.02em] text-slate-950">{feature.title}</h3>
                  <p className="text-base leading-8 text-gray-600">{feature.description}</p>
                </div>
              );
            })}
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
            <div className="order-2 mt-10 w-full lg:mt-0 lg:w-1/2">
              <div className="grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-3">
                <AppScreenshotCard
                  src="images/screenshots/view-crate-page.png"
                  alt="Locrate crate contents view"
                  statusBarColor="#2D92D2"
                  cropTop={10}
                  topInset={10}
                />
                <AppScreenshotCard
                  src="images/screenshots/change location bottom sheet.jpeg"
                  alt="Locrate change location screen"
                  statusBarColor="#1F4C68"
                  cropTop={8}
                  topInset={0}
                />
                <AppScreenshotCard
                  src="images/screenshots/locate-success.png"
                  alt="Locrate locate crate success screen"
                  statusBarColor="#2D92D2"
                  cropTop={10}
                  topInset={24}
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
