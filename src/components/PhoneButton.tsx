'use client'

import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { Button } from './ui/button';
import { toast } from "sonner"
import { Check, Phone } from 'lucide-react';


function PhoneButton() {
    const [hasCopied, setHasCopied] = useState(false);
    const phoneNumber = "+256 701 430625";

    const copyPhoneNumber = async () => {
        await navigator.clipboard.writeText(phoneNumber);
        setHasCopied(true);
        toast.success('Phone number copied!')
        setTimeout(() => setHasCopied(false), 2000);
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size="lg"
                        
                        className="bg-white text-black hover:bg-gray-300"
                        onClick={copyPhoneNumber}
                    >
                        {hasCopied ? (
                            <Check className="mr-2 h-5 w-5 text-green-600" />
                        ) : (
                            <Phone className="mr-2 h-5 w-5" />
                        )}
                        {phoneNumber}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Click to copy phone number</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default PhoneButton