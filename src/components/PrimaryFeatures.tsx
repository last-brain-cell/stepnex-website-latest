'use client'

import {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import {Tab, TabGroup, TabPanel, TabPanels} from '@headlessui/react'
import clsx from 'clsx'
import Autoplay from "embla-carousel-autoplay"


import {Container} from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import LandingPage from '@/images/screenshots/ProjectManagementScreenshot.png'
import SLCM from '@/images/screenshots/SLCM.png'
import Logistics from '@/images/screenshots/Logistics.png'
import {ArrowUpRightIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";

const features = [
  {
    index: 0,
    title: 'Project Management System',
    description: "Comprehensive ERP solutions designed to meet the unique needs of your business, streamlining operations and improving efficiency.",
    image: LandingPage,
    buttonText: "View",
    url: "/wip"
  },
  {
    index: 1,
    title: 'SLCM & LMS',
    description:
        "Robust Student Lifecycle Management and Learning Management Systems to optimize educational processes, ensuring seamless administration and learning experiences.",
    image: SLCM,
    buttonText: "View",
    url: "/wip"
  },
  {
    index: 1,
    title: 'Logistics Management System',
    description:
        "Robust Student Lifecycle Management and Learning Management Systems to optimize educational processes, ensuring seamless administration and learning experiences.",
    image: Logistics,
    buttonText: "View",
    url: "/wip"
  },
  {
    index: 2,
    title: 'High Performance AI Solutions',
    description:
        'Advanced AI solutions built to handle complex tasks with speed and precision, empowering your business to achieve more.',
    image: Logistics,
    buttonText: "Contact us",
    url: "#get-started-today"
  },
  {
    index: 3,
    title: 'Custom Software Development',
    description:
        "Tailored software development services that align with your specific business requirements, delivering scalable and efficient solutions.",
    image: Logistics,
    buttonText: "Contact us",
    url: "#get-started-today"
  },
]

export function PrimaryFeatures() {
  const [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>('horizontal')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [userHasInteracted, setUserHasInteracted] = useState(false)
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs for tabs

  // Handle manual tab change and stop auto-switching
  const handleTabChange = (index: number) => {
    setSelectedIndex(index)
    setUserHasInteracted(true) // Mark that the user has manually interacted
  }

  // Auto-switch tabs
  useEffect(() => {
    if (userHasInteracted) return; // Don't auto-switch if the user has interacted

    const intervalId = setInterval(() => {
      setSelectedIndex(prevIndex => (prevIndex + 1) % features.length)
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [userHasInteracted]);

  // Handle the tab orientation change on screen resize
  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  // Scroll the selected tab into view
  useEffect(() => {
    if (tabRefs.current[selectedIndex]) {
      tabRefs.current[selectedIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // Center the tab vertically
        inline: 'center' // Center the tab horizontally
      });
    }
  }, [selectedIndex]);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Services
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Innovative, tailored solutions designed to elevate your business to the next level.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
          selectedIndex={selectedIndex} // Set selected index
          onChange={handleTabChange}   // Handle manual tab change
        >
          <Carousel plugins={[Autoplay({ delay: 2000 })]} opts={{ align: "start", loop: true }} orientation="vertical" className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-hidden sm:pb-0 lg:col-span-5 h-3/4">
            <CarouselContent className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal mt-4">
              {features.map((feature, featureIndex) => (
                <CarouselItem
                  key={feature.title}
                  className={clsx(
                    'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-4',
                    selectedIndex === featureIndex
                      ? 'lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                      : 'hover:bg-white/10 lg:hover:bg-white/5',
                  )}
                >
                  <h3>
                    <Tab
                      ref={el => {
                        tabRefs.current[featureIndex] = el as HTMLDivElement | null; // Assign ref to each tab
                      }}
                      className={clsx(
                        'font-display text-lg ui-not-focus-visible:outline-none outline-none border-none',
                        selectedIndex === featureIndex
                          ? 'font-bold text-white'
                          : 'hover:text-white text-white',
                      )}
                    >
                      <span className="absolute inset-0 font-bold rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                      {feature.title}
                    </Tab>

                  </h3>
                  <p
                    className={clsx(
                      'mt-2 hidden text-sm lg:block',
                      selectedIndex === featureIndex
                        ? 'text-white'
                        : 'text-blue-100 group-hover:text-white',
                    )}
                  >
                    {feature.description}
                  </p>
                  <div className={'justify-end mt-6 mr-8 lg:flex hidden'}>
                    <Link
                      className={
                        'py-1 px-4 hover:bg-blue-400 text-center ring-1 ring-white ring-opacity-30 justify-center font-bold backdrop-blur text-sm rounded-md text-white flex flex-row items-center gap-2'
                      }
                      href={feature.url}
                    >
                      <div className={'text-center justify-center'}>
                        {feature.buttonText}
                      </div>
                      <ArrowUpRightIcon className={'h-3 w-auto stroke-2'} />
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <TabPanels className="lg:col-span-7">
            {features.map((feature, index) => (
              <TabPanel
                key={feature.title}
                className={clsx(
                  'tab-panel',
                  selectedIndex === index && 'tab-panel-active'
                )}
                unmount={false}
              >
                <div className="relative sm:px-6 lg:hidden">
                  <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                  <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center transition ease-in-out">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                  <Image
                    className="w-full"
                    src={feature.image}
                    alt=""
                    unoptimized={true}
                    priority={true}
                    quality={100}
                    sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                  />
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  )
}
