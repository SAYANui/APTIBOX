import React from 'react'

import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background/index.jsx"
import Navbar from '@/components/navbar';

const Hero = () => {
  return (
    <AuroraBackground>
      <Navbar />
    </AuroraBackground>
  );
}

export default Hero