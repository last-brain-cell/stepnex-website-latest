"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";
import LandingPage from '@/images/screenshots/ProjectManagementScreenshot.png'
import SLCM from '@/images/screenshots/SLCM.png'
import Logistics from '@/images/screenshots/Logistics.png';

const items = [
  { title: "Project Management System", content: "Comprehensive ERP solutions designed to meet the unique needs of your business, streamlining operations and improving efficiency.", image: LandingPage},
  { title: "SLCM & LMS", content: "Robust Student Lifecycle Management and Learning Management Systems to optimize educational processes, ensuring seamless administration and learning experiences.", image: SLCM },
  { title: "Logistics Management System", content: "Efficient system for managing logistics operations, optimizing supply chain processes and improving overall operational efficiency.", image: Logistics },
  { title: "High Performance AI Solutions", content: "Advanced AI solutions built to handle complex tasks with speed and precision, empowering your business to achieve more.", image: Logistics },
  { title: "Data Analytics Platform", content: "Powerful data analytics tools to derive meaningful insights from your data, enabling data-driven decision making across your organization.", image: Logistics }
]

export default function PrimaryFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const moveUp = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1))
  }

  const moveDown = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0))
  }

  const visibleItems = [
    items[(currentIndex - 1 + items.length) % items.length],
    items[currentIndex],
    items[(currentIndex + 1) % items.length],
    items[(currentIndex + 2) % items.length]
  ]

  return (
      <div className="flex flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-800 to-blue-200 py-12 gap-4 px-8">
        <div className="relative w-1/3">
          <Button
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full mb-2 z-10"
              onClick={moveUp}
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          <div className="relative h-[480px] overflow-hidden">
            <AnimatePresence initial={false}>
              {visibleItems.map((item, index) => (
                  <motion.div
                      key={item.title}
                      className="absolute w-full"
                      initial={{ opacity: 0, y: index === 1 ? 0 : index === 0 ? -160 : index === 2 ? 160 : 320 }}
                      animate={{
                        opacity: 1,
                        y: (index - 1) * 160,
                      }}
                      exit={{ opacity: 0, y: index === 1 ? 0 : index === 0 ? -160 : index === 2 ? 160 : 320 }}
                      transition={{ duration: 0.3 }}
                  >
                    <Card
                        className="w-full h-[150px] mb-2 cursor-pointer transition-shadow hover:shadow-lg overflow-hidden"
                        onClick={() => setCurrentIndex((currentIndex + index - 1 + items.length) % items.length)}
                    >
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground line-clamp-2">{item.content}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <Button
              className="absolute  stroke-black left-1/2 bottom-0 -translate-x-1/2 translate-y-full mt-2 z-10"
              onClick={moveDown}
          >
            <ChevronDown className="h-4 stoke-black stoke-2 w-4" />
          </Button>
        </div>
        <div className={'w-2/3'}>
          <Image src={items[currentIndex].image} alt={items[currentIndex].title} className={'w-auto h-400 object-contain rounded-lg'}/>
        </div>
      </div>
  )
}
