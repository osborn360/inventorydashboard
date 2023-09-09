'use client'
import {data} from "@/data"
import { useState, useEffect } from "react"

export default function FirstTable() {
    const [xdata, setxData] = useState([])

    useEffect(() => {
        setxData(data);
    }, []);
    
    return (
        <div className="overflow-x-auto hidden-scrollx-sidebar">
            <div className="min-w-full inline-block">
                <table className="min-w-full">
                <thead>
                    <tr className="text-left text-xs bg-neutral-100">
                        <th scope="col" className="px-4 py-3 font-semibold">Order ID</th>
                        <th scope="col" className="px-4 py-3 font-semibol">Customer</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Date</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Status</th>
                        <th scope="col" className="px-4 py-3 font-semibold text-right">Order Total</th>
                    </tr>
                </thead>
                <tbody className="">


                    {xdata.map((x) => (

                            <tr key={x.id} className="border-t border-neutral-300">
                                <td className="px-4 py-6 whitespace-nowrap text-xs font-semibold">OR{x.xid}</td>                                
                                <td className="px-4 py-6 whitespace-nowrap text-xs text-graytext">{x.customer}</td>
                                <td className="px-4 py-6 whitespace-nowrap text-xs text-graytext">{x.date}</td>
                                <td className="px-4 py-6 whitespace-nowrap text-xs">{x.status}</td>
                                <td className="px-4 py-6 whitespace-nowrap text-xs font-semibold text-right">${(Number(x.total).toFixed(2))}</td>
                            </tr>   
                    ))} 
               
                    
                    
                </tbody>
                </table>
            </div>
        </div>
    )
}