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
                        
                        className="max-w-[calc(100vw-2rem)] rounded-full px-6 h-12 text-sm border border-white/60 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                        onClick={copyEmail}
                    >
                        {hasCopied ? (
                            <Check className="mr-2 h-5 w-5 text-green-600" />
                        ) : (
                            <Mail className="mr-2 h-5 w-5" />
                        )}
                        <span className="truncate">{email}</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Click to copy email address</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default EmailButton