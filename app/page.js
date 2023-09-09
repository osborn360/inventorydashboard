import Image from 'next/image'
import First from '@/components/First'
import Second from '@/components/Second'

export default function Home() {
  return (
    
    <>
      <div className="">
          <div className="grid grid-cols-12 h-screen">
            <div className="bg-gray-900 hidden md:block lg:block md:col-span-2">
              <First />
            </div>
            <div className="bg-gray-100 col-span-12 bg-body block w-100 md:col-span-10">
              <Second />
            </div>
            {/* <div className="bg-body px-7 hidden md:block lg:block xl:block md:col-span-4 lg:col-span-3 xl:col-span-3">
                
            </div> */}
          </div>
        </div>
    </>
  )
}
