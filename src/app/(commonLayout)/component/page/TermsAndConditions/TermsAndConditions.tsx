import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className="container max-w-4xl py-12">
      <div className="space-y-2 text-center mb-8">
        <h1 className="text-3xl font-bold">Terms and Conditions</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="bg-card p-6 rounded-lg border shadow-sm">
        <div className="prose prose-sm max-w-none mb-6 space-y-3">
          <p>
            Welcome to Banksia, a registered trading name of Banksia Limited
            (29-31 Adelaide Road, NW3 3QB).
          </p>
          <p>
            These terms and conditions outline the rules and guidelines for
            using our website, www.banksialondon.com. By accessing this site,
            you agree to comply with and be bound by the following terms. If you
            do not agree with any part of these terms, please do not use our
            website.
          </p>
        </div>

        <Separator className="my-6" />

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">
              Terminology
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  &quot;You&quot;, &quot;Your&quot;, or &quot;User&quot; refers
                  to anyone accessing or using this website. &quot;We&quot;,
                  &quot;Us&quot;, &quot;Our&quot;, and &quot;Banksia&quot;
                  refers to Banksia Limited. These terms apply to all users,
                  browsers, and visitors of the site.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">
              Nature of Operations
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  Banksia is not a letting agent and should not be regarded as
                  one. We operate as a corporate landlord, leasing properties
                  directly from head freeholders and head leaseholders for the
                  purpose of offering high-quality serviced accommodation.
                  Banksia does not issue Assured Shorthold Tenancy (AST)
                  agreements. Instead, all guests are provided accommodation
                  under Short-Term Licence Agreements or Licences to Occupy.
                  These agreements do not grant exclusive possession of any
                  unit, as our in-house housekeeping, linen, and maintenance
                  teams require regular access to the premises to uphold our
                  service standards. This structure ensures compliance,
                  operational efficiency, and a consistently high-quality guest
                  experience.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">
              Use of Our Platform
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  Banksia provides short-term and long-term rental options
                  managed directly by us as corporate landlords. Unlike
                  traditional letting agents or individual landlords, we deliver
                  a streamlined, professional renting experience with consistent
                  service standards.
                </p>
                <p>By using this platform, you agree:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide accurate and truthful information</li>
                  <li>
                    Not to use the website for any unlawful or fraudulent
                    purposes.
                  </li>
                  <li>
                    Not to copy, reproduce, or misuse the content for commercial
                    gain without consent.
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium">
              Intellectual Property
            </AccordionTrigger>
            <AccordionContent>
              <p>
                All content, including text, images, graphics, and brand assets
                on this website, are owned by Banksia Limited unless otherwise
                stated. You may view and download material for personal use
                only. Commercial use or redistribution requires our written
                permission.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium">
              Smart Access & Security
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Banksia properties are fitted with smart lock systems and
                monitored for safety and efficiency. You agree to use these
                responsibly and not share access codes or devices without
                authorisation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-medium">
              Bookings and Licences
            </AccordionTrigger>
            <AccordionContent>
              <p>
                All bookings made through Banksia are for serviced accommodation
                only and are governed by Short-Term Licence or Licence to Occupy
                agreements. These are not tenancy agreements and do not confer
                tenant rights under landlord and tenant legislation. Bookings
                are subject to availability and confirmation from Banksia.
                Guests are expected to comply with all house rules provided
                prior to check-in.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg font-medium">
              Occupier Insurance Requirement
            </AccordionTrigger>
            <AccordionContent>
              <p>
                All occupiers are required to arrange their own personal
                insurance to cover their belongings and any incidental
                liabilities for the duration of their stay. Banksia does not
                accept responsibility for loss, damage, or theft of personal
                property within the premises. Proof of insurance may be
                requested prior to or during the stay.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg font-medium">
              Offers & Promotions
            </AccordionTrigger>
            <AccordionContent>
              <p>
                From time to time, Banksia may provide promotions such as{" "}
                <strong>£50 off the first month&apos;s rent</strong> or
                giveaways for confirmed bookings. These offers are subject to
                availability and may be withdrawn or modified at any time
                without notice.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-lg font-medium">
              Third-Party Links
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Our website may contain links to other websites for your
                convenience. We are not responsible for the content or accuracy
                of these external sites.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-lg font-medium">
              User-Generated Content
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  You may have the opportunity to submit feedback or reviews. By
                  doing so, you grant Banksia a non-exclusive right to use,
                  display, and reproduce your content across our platforms.
                </p>
                <p>You agree that your submissions:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Do not violate any intellectual property or privacy rights.
                  </li>
                  <li>Are not defamatory, abusive, or offensive.</li>
                  <li>
                    Will not be used to advertise or promote third-party
                    services
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11">
            <AccordionTrigger className="text-lg font-medium">
              Hyperlinking to Banksia
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Only approved organizations may link to our homepage or content.
                We reserve the right to revoke linking permission at any time
                and to request link removal if the context or tone does not
                align with our brand.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12">
            <AccordionTrigger className="text-lg font-medium">
              Limitation of Liability
            </AccordionTrigger>
            <AccordionContent>
              <p>
                While we strive to ensure the accuracy of all information on our
                website, Banksia Limited does not guarantee its completeness or
                reliability. We are not liable for any direct or indirect loss
                arising from the use of our site.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-13">
            <AccordionTrigger className="text-lg font-medium">
              Changes to Terms
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Banksia reserves the right to modify these terms and conditions
                at any time. Continued use of the site after changes implies
                acceptance of the updated terms.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* <Separator className="my-6" /> */}

      <div className="mt-8 text-center text-muted-foreground">
        <p>
          For any questions about these Terms and Conditions, please contact us
          at{" "}
          <Link
            href="mailto:support@example.com"
            className="underline underline-offset-4 hover:text-primary"
          >
            support@banksialondon.com
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
