"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Pricing } from "@/components/Pricing";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import {
  ImageOff,
  Layers,
  Settings as Adjustments,
  Layout as Overlay,
  Type,
  Star as Sticker,
  Square as Shapes,
  Copy,
  Wand2 as Wand,
  SlidersHorizontal as Filter,
  Download,
  Eye,
  Image as ImageIcon,
  PaintBucket as Paint,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const tools = [
  { Icon: ImageOff, name: "Remove Background" },
  { Icon: Layers, name: "Customize Background" },
  { Icon: Adjustments, name: "Tune Image" },
  { Icon: Overlay, name: "Overlay Images" },
  { Icon: Type, name: "Add Text Behind" },
  { Icon: Sticker, name: "Add Logo Behind" },
  { Icon: Shapes, name: "Add Shapes" },
  { Icon: Copy, name: "Image Clone" },
  { Icon: Wand, name: "AI Detection" },
  { Icon: Filter, name: "Apply Effects" },
  { Icon: Download, name: "Export HD" },
  { Icon: Eye, name: "Toggle Overlays" },
  { Icon: Paint, name: "Object Outline" },
  { Icon: ImageIcon, name: "Image Enhance" },
];

// Key benefits of the app
const benefits = [
  {
    title: "Professional Results in Seconds",
    description:
      "Create studio-quality edits with just a few clicks, no design experience needed.",
    icon: Sparkles,
  },
  {
    title: "All-in-One Solution",
    description:
      "50+ powerful tools in one place - no need to switch between different apps.",
    icon: Layers,
  },
  {
    title: "Unique Behind-Object Technology",
    description:
      "Place text, logos, and shapes behind objects in your images with AI precision.",
    icon: Type,
  },
  {
    title: "High-Resolution Exports",
    description:
      "Download your creations in high quality for professional use.",
    icon: Download,
  },
];

// Common use cases
const useCases = [
  {
    title: "Social Media Content",
    description: "Create eye-catching posts that stand out in crowded feeds",
    image: "/social-media-example.jpg",
  },
  {
    title: "Product Photography",
    description:
      "Enhance product images with professional backgrounds and effects",
    image: "/product-example.jpg",
  },
  {
    title: "YouTube Thumbnails",
    description: "Design clickable thumbnails that boost your video views",
    image: "/youtube-example.jpg",
  },
];

const FeatureCard = ({ tool: { Icon, name } }) => (
  <div
    className="flex flex-col items-center p-3 bg-white/80 dark:bg-gray-900/50 rounded-xl backdrop-blur-sm 
      transform transition-all duration-200 
      hover:bg-gray-50 dark:hover:bg-gray-900/70 hover:scale-105 
      hover:shadow-lg hover:shadow-purple-500/20
      border border-gray-200 dark:border-white/10
      group"
  >
    <Icon
      className="w-5 h-5 mb-2 text-purple-600 dark:text-purple-500 
      transition-transform duration-200 
      group-hover:scale-110 
      group-hover:text-purple-700 dark:group-hover:text-purple-400"
    />
    <span
      className="text-xs text-gray-600 dark:text-gray-300 text-center
      transition-colors duration-200
      group-hover:text-gray-900 dark:group-hover:text-white"
    >
      {name}
    </span>
  </div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const { user } = useAuth();

  useEffect(() => {
    if (section === "pricing") {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  return (
    <div
      className="min-h-screen relative flex flex-col"
      role="region"
      aria-label="Home page content"
    >
      {/* Background with subtle pattern */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-white dark:bg-[#0A0A0A]" />
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Content Container */}
      <div ref={scrollRef} className="relative z-10 flex-grow">
        <Navbar />

        <main className="w-full" role="main" aria-label="Main content">
          {/* Hero Section - Redesigned with split layout */}
          <section className="w-full px-4 py-16 md:py-24 md:min-h-[90vh] flex flex-col justify-center">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left side - Text content */}
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-6">
                  <span className="text-xs font-medium text-purple-800 dark:text-purple-300">
                    50+ Powerful Image Editing Tools in One App
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Transform Your{" "}
                  <span className="text-purple-600 dark:text-purple-400">
                    Images
                  </span>{" "}
                  with AI-Powered Editing
                </h1>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                  Everything you need to remove backgrounds, edit photos, and
                  magically place text and logos behind objects—fast and easy.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/custom-editor"
                    onClick={() => setIsLoading(true)}
                    className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-semibold transition-all shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30"
                  >
                    {isLoading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Loading...
                      </>
                    ) : (
                      <>
                        Start Editing Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Link>
                  <Link
                    href="#examples"
                    className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg text-lg font-semibold transition-all hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    See Examples
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                  <span>No credit card required</span>
                  <span className="mx-2">•</span>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                  <span>Free to use</span>
                  <span className="mx-2">•</span>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                  <span>No downloads needed</span>
                </div>
              </div>

              {/* Right side - Hero image with floating elements */}
              <div className="order-1 md:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-gray-200 dark:border-gray-800">
                  {/* Light mode image */}
                  <Image
                    src="/hero-editor.webp"
                    alt="UnderlayX AI Editor Interface"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover dark:hidden"
                    priority
                  />
                  {/* Dark mode image */}
                  <Image
                    src="/hero-section.webp"
                    alt="UnderlayX AI Editor Interface"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover hidden dark:block"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Tools Grid Section */}
          <section className="w-full px-4 py-12 md:py-16 bg-gray-50 dark:bg-gray-900/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  All the Tools You Need
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                  One platform with everything you need to create
                  professional-looking images
                </p>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-4 lg:grid-cols-7 gap-3">
                {tools.map((tool, index) => (
                  <FeatureCard key={index} tool={tool} />
                ))}
              </div>

              {/* Mobile Carousel */}
              <div className="md:hidden w-full overflow-hidden">
                <div
                  className="flex animate-scroll"
                  style={{
                    width: "max-content",
                  }}
                >
                  {/* First set */}
                  {tools.map((tool, index) => (
                    <div key={index} className="w-[140px] flex-none mx-1.5">
                      <FeatureCard tool={tool} />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {tools.map((tool, index) => (
                    <div
                      key={`dup-${index}`}
                      className="w-[140px] flex-none mx-1.5"
                    >
                      <FeatureCard tool={tool} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Feature Showcase Section with Before/After Sliders */}
          <section
            id="examples"
            className="w-full px-4 py-16 md:py-24 bg-gray-50 dark:bg-gray-900/30"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  See What's{" "}
                  <span className="text-purple-600 dark:text-purple-400">
                    Possible
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                  Drag the slider to see the before and after transformations
                </p>
              </div>

              <FeatureShowcase />

              <div className="text-center mt-12">
                <Link
                  href="/custom-editor"
                  className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-semibold transition-all"
                >
                  Try It Yourself
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full px-4 py-16 md:py-24 bg-gray-50 dark:bg-gray-900/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  How It Works
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                  Create stunning visuals in just three simple steps
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      1
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Upload Your Image
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Start by uploading any image you want to enhance or
                    transform
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      2
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Apply Edits & Effects
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Use our powerful tools to remove backgrounds, add text,
                    shapes, and more
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      3
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Download & Share
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Export your creation in high resolution and share it with
                    the world
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/custom-editor"
                  className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-semibold transition-all"
                >
                  Start Creating Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Combined Features, Use Cases, and SEO Content Section */}
          <section className="w-full px-4 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  The Ultimate{" "}
                  <span className="text-purple-600 dark:text-purple-400">
                    All-in-One
                  </span>{" "}
                  Image Editor
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                  Discover how UnderlayX AI transforms the way you edit images
                </p>
              </div>

              {/* Feature Tabs */}
              <div className="mb-24">
                <div className="grid grid-cols-1 gap-12 items-center">
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-2xl p-8 border border-purple-100 dark:border-purple-800/20 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Left side with title and description */}
                      <div className="md:w-1/2">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
                          <span className="text-xs font-medium text-purple-800 dark:text-purple-300">
                            Exclusive Feature
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                          Advanced Behind-Object Technology
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                          Our unique technology allows you to place text, logos,
                          shapes, and other elements behind objects in your
                          images with precision. This creates a natural,
                          integrated look that makes your visuals stand out.
                        </p>
                        <Link
                          href="/custom-editor"
                          className="inline-flex items-center justify-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-base font-semibold transition-all"
                        >
                          Try it now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>

                      {/* Right side with interactive cards */}
                      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
                        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md hover:shadow-purple-500/10 transition-all group">
                          <div className="flex items-start gap-3">
                            <div className="text-3xl group-hover:scale-110 transition-transform">
                              ✍️
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                Text Behind Images
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Create depth with text behind objects for
                                eye-catching social media posts
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md hover:shadow-purple-500/10 transition-all group">
                          <div className="flex items-start gap-3">
                            <div className="text-3xl group-hover:scale-110 transition-transform">
                              🔷
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                Shapes Behind Images
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Add geometric elements for style and visual
                                interest
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md hover:shadow-purple-500/10 transition-all group">
                          <div className="flex items-start gap-3">
                            <div className="text-3xl group-hover:scale-110 transition-transform">
                              🎯
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                Logos Behind Objects
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Place brands behind your subjects for
                                professional marketing materials
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md hover:shadow-purple-500/10 transition-all group">
                          <div className="flex items-start gap-3">
                            <div className="text-3xl group-hover:scale-110 transition-transform">
                              🔄
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                Clone Objects
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Duplicate elements with precision for creative
                                compositions
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Editing Section */}
              <div className="mb-24">
                <div className="grid grid-cols-1 gap-12 items-center">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/20 shadow-sm">
                    <div className="flex flex-col md:flex-row-reverse gap-8">
                      {/* Left side with interactive elements */}
                      <div className="md:w-1/2">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                          <span className="text-xs font-medium text-blue-800 dark:text-blue-300">
                            AI-Powered
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                          Powerful Background Editing
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                          Remove backgrounds with a single click, replace them
                          with solid colors, gradients, or custom images, or
                          fine-tune them with our adjustment tools. Our
                          AI-powered background removal ensures clean edges and
                          professional results every time.
                        </p>
                        <Link
                          href="/remove-background"
                          className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-base font-semibold transition-all"
                        >
                          Remove backgrounds
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>

                      {/* Right side with interactive demo */}
                      <div className="md:w-1/2">
                        <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              Background Options
                            </h4>
                            <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                              AI-powered
                            </div>
                          </div>

                          <div className="space-y-6 sm:space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/10 cursor-pointer transition-colors group">
                              <div className="w-10 h-10 bg-red-500 rounded-md flex items-center justify-center text-white">
                                <span className="text-xl">✂️</span>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                  Remove Background
                                </h5>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  One-click background removal with AI precision
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/10 cursor-pointer transition-colors group">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center text-white">
                                <span className="text-xl">🎨</span>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                  Change Background
                                </h5>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  Replace with any color, gradient, or image
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/10 cursor-pointer transition-colors group">
                              <div className="w-10 h-10 bg-green-500 rounded-md flex items-center justify-center text-white">
                                <span className="text-xl">🔍</span>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                  Fine-tune Edges
                                </h5>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  Perfect the details for professional results
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/10 cursor-pointer transition-colors group">
                              <div className="w-10 h-10 bg-yellow-500 rounded-md flex items-center justify-center text-white">
                                <span className="text-xl">💾</span>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                  Export Transparency
                                </h5>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  Download with transparent background for
                                  versatile use
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Perfect for Every Creator Section */}
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Perfect for Every Creator
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    No matter what you're working on, UnderlayX AI helps you
                    achieve professional results
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                    <div className="h-48 relative bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      <span className="text-4xl">🎥</span>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Content Creators
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Create captivating YouTube thumbnails, Instagram posts
                        with eye-catching behind-object effects.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                    <div className="h-48 relative bg-gradient-to-r from-blue-500/20 to-green-500/20 flex items-center justify-center">
                      <span className="text-4xl">📈</span>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Marketers
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Design high-quality visuals for ads, banners, and
                        promotional materials that convert and engage your
                        audience.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                    <div className="h-48 relative bg-gradient-to-r from-green-500/20 to-yellow-500/20 flex items-center justify-center">
                      <span className="text-4xl">📸</span>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Photographers
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Transform ordinary images into extraordinary works of
                        art with seamless background editing and creative
                        effects.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Link
                    href="/custom-editor"
                    className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-semibold transition-all"
                  >
                    Start Creating Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
