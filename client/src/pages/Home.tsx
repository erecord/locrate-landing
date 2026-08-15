import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Box, QrCode, Search, Cloud, Share, Bell, Camera, MapPinned, Tags, Printer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AppScreenshotCard from "@/components/AppScreenshotCard";
import AndroidBetaDialog from "@/components/AndroidBetaDialog";
import StoreButtons from "@/components/StoreButtons";

const features = [
  {
    icon: Box,
    title: "Virtual Boxes",
    description:
      "Build a home inventory for boxes, tubs and shelves so you can see what you own in one place.",
    status: "Available now",
  },
  {
    icon: Camera,
    title: "One photo. Many items added.",
    description:
      "Take one photo of an open box and let Locrate detect, crop and add multiple items in one go.",
    status: "Available now",
  },
  {
    icon: QrCode,
    title: "QR Code Tracking",
    description:
      "Print QR labels for storage boxes so you can scan a crate and check contents before opening it.",
    status: "Available now",
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Search stored items by name or browse through what you have when you only remember part of it.",
    status: "Available now",
  },
  {
    icon: MapPinned,
    title: "Locations",
    description: "Keep crates tied to real places like the house, loft, garage or storage unit so you always know where things are.",
    status: "Available now",
  },
  {
    icon: Tags,
    title: "Categories",
    description: "Browse boxes by category like tools, Christmas or home office as your storage grows.",
    status: "Available now",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Keep your storage inventory on your phone whenever you need to check a crate.",
    status: "Available now",
  },
  {
    icon: Printer,
    title: "Thermal Printer Support",
    description: "Print QR labels straight to supported thermal printers while you are packing, moving or reorganising.",
    status: "Available now",
  },
  {
    icon: Share,
    title: "Shared Access",
    description: "Share specific boxes with family or roommates for household storage and shared collections.",
    status: "Coming soon",
  },
  {
    icon: Bell,
    title: "Many More Features",
    description:
      "More features are on the way, including multiple inventories, smarter filtering and better sharing controls.",
    status: "Coming soon",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Snap the box once.",
    description: "Take one photo of the box, drawer or shelf to start your crate.",
  },
  {
    step: "02",
    title: "Confirm what was found.",
    description: "Review the detected items, adjust quick crops, and save what matters.",
  },
  {
    step: "03",
    title: "Label and store it.",
    description: "Add a location and category, then print or apply the QR label before it goes into storage.",
  },
  {
    step: "04",
    title: "Search for the item later.",
    description: "When you need something back, search the item name and retrieve the right crate.",
  },
  {
    step: "05",
    title: "Scan before you open it.",
    description: "Scan the printed QR code to check contents or confirm you have the exact box in front of you.",
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
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">What You Can Do</h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
              Know what you have, where it is, and browse through storage without opening every box to check.
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
      <section id="how-it-works" className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">How It Works</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Pack it once. Find it later.</h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
              Add multiple items from one photo, store them by location, then browse, search and scan the right box later.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-[#F8FBFD] p-7 shadow-[0_10px_30px_rgba(8,27,52,0.05)]"
              >
                <div className="mb-5">
                  <span className="inline-flex rounded-full bg-[#EAF6FF] px-3 py-1 text-sm font-semibold tracking-[0.12em] text-primary">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-semibold tracking-[-0.02em] text-slate-950">{item.title}</h3>
                <p className="text-base leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
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
