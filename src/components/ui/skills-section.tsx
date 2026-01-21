"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

interface SkillsSectionProps {
  title: string;
  buttonText: string;
  buttonHref?: string;
}

interface Company {
  name: string;
  logo: string;
  invert?: boolean;
  size?: string;
}

// Tech company logos - colorful horizontal wordmarks
const techCompanies: Company[] = [
  { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
  { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
  { name: "Apple", logo: "https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg", invert: true, size: "h-10 md:h-12" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Nvidia", logo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-grn-500x200-4c25-p@2x.png" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg", invert: true, size: "h-10 md:h-12" },
  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png" },
  { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg", invert: true },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png", invert: true },
  { name: "AMD", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg", invert: true },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg", size: "h-10 md:h-12" },
];

// Finance & Banking logos - text/wordmark versions (horizontal) from wikimedia
const financeCompanies: Company[] = [
  { name: "JPMorgan", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Logo_2008_1.svg", invert: true },
  { name: "Goldman Sachs", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg" },
  { name: "Morgan Stanley", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Morgan_Stanley_Logo_1.svg", invert: true },
  { name: "Bank of America", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Bank_of_America_logo.svg" },
  { name: "Wells Fargo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg" },
  { name: "Deutsche Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Deutsche_Bank_logo.svg/1024px-Deutsche_Bank_logo.svg.png" },
  { name: "Barclays", logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Barclays_logo.svg" },
  { name: "Citi", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Citi.svg" },
  { name: "BlackRock", logo: "https://s24.q4cdn.com/856567660/files/design/logo-white.png" },
  { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" },
  { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
  { name: "Nasdaq", logo: "https://www.pikpng.com/pngl/b/417-4172451_nasdaq-logo-nasdaq-logo-white-png-clipart.png" },
  { name: "Bloomberg", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Bloomberg_logo.svg", invert: true },
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
];

export default function SkillsSection({
  title,
  buttonText,
  buttonHref = "/certificates",
}: SkillsSectionProps) {
  return (
    <section className="relative w-full mx-auto">
      {/* Title on top */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          {title}
        </h1>
      </div>
      
      {/* Slider container */}
      <div className="overflow-hidden rounded-3xl bg-gray-950 border border-gray-800 shadow-md py-16">
        {/* First row - Tech companies */}
        <InfiniteSlider gap={64} duration={40} className="mb-12">
          {techCompanies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center h-12 px-6"
            >
              <img
                src={company.logo}
                alt={company.name}
                className={`${company.size || 'h-8 md:h-10'} w-auto object-contain opacity-80 hover:opacity-100 transition-opacity ${company.invert ? 'brightness-0 invert' : ''}`}
              />
            </div>
          ))}
        </InfiniteSlider>
        
        {/* Second row - Finance companies (reverse direction) */}
        <InfiniteSlider gap={64} duration={45} reverse className="mb-12">
          {financeCompanies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center h-12 px-6"
            >
              <img
                src={company.logo}
                alt={company.name}
                className={`h-8 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity ${company.invert ? 'brightness-0 invert' : ''}`}
              />
            </div>
          ))}
        </InfiniteSlider>
        
        {/* Button */}
        <div className="flex justify-center">
          <a href={buttonHref}>
            <Button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">
              {buttonText} <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
