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
import { Check, Mail } from 'lucide-react';


function EmailButton() {
    const [hasCopied, setHasCopied] = useState(false);
    const email = "riversidewoods.ssezibwa@gmail.com";

    const copyEmail = async () => {
        await navigator.clipboard.writeText(email);
        setHasCopied(true);
        toast.success('Email copied!')
        setTimeout(() => setHasCopied(false), 2000);
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size="lg"
                        
                        className="bg-white text-black hover:bg-gray-300"
                        onClick={copyEmail}
                    >
                        {hasCopied ? (
                            <Check className="mr-2 h-5 w-5 text-green-600" />
                        ) : (
                            <Mail className="mr-2 h-5 w-5" />
                        )}
                        {email}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Click to copy phone number</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default EmailButton