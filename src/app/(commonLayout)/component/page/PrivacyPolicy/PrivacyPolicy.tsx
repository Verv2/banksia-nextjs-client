import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="container max-w-4xl py-12">
      <div className="space-y-2 text-center mb-8">
        <h1 className="text-3xl font-bold">Privacy Policy for Banksia</h1>
      </div>

      <div className="bg-card p-6 rounded-lg border shadow-sm">
        <div className="prose prose-sm max-w-none mb-6 space-y-3">
          <p>
            At Banksia, accessible at <strong>www.banksialondon.com</strong>,
            one of our core priorities is protecting the privacy and personal
            data of our visitors and guests.
          </p>
          <p>
            This Privacy Policy explains what information is collected and
            recorded by Banksia and how we use it.
          </p>
          <p>
            If you have any questions or require further information, please
            contact us at support@banksialondon.com.
          </p>
          <p>
            This policy applies only to information collected through our
            website and does not apply to information gathered offline or via
            other channels.
          </p>
        </div>

        <Separator className="my-6" />

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">
              Consent
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  By using our website, you consent to our Privacy Policy and
                  agree to its terms.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">
              Information We Collect
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  We may collect personal information such as your name, email
                  address, phone number, and other details when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Make an inquiry</li>
                  <li>Submit a booking request</li>
                  <li>Contact us directly</li>
                  <li>Interact with forms or chat features on our website</li>
                </ul>
                <p>
                  We may also collect additional information such as payment
                  details, ID verification (where required), and preferences
                  related to your stay.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">
              How We Use Your Information
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and manage bookings</li>
                  <li>Provide customer support</li>
                  <li>Send booking confirmations and updates</li>
                  <li>
                    Communicate promotions, discounts, and service updates
                  </li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium">
              Log Files
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Banksia follows standard log file usage. These files log
                visitors when they access the website. Information may include
                IP addresses, browser types, ISP, date/time stamps,
                referring/exit pages, and clicks. These are used to analyse
                trends, administer the site, and gather demographic data. None
                of this data is personally identifiable.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium">
              Cookies and Web Beacons
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Banksia uses cookies to enhance user experience by remembering
                preferences and tailoring content. Cookies help us understand
                how users interact with our site and allow us to improve the
                overall experience. You can choose to disable cookies through
                your browser settings.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-medium">
              Insurance Requirement
            </AccordionTrigger>
            <AccordionContent>
              <p>
                All guests and occupiers are required to arrange their own
                insurance to protect personal belongings and cover any
                incidental damages or liabilities during their stay. Banksia
                does not accept responsibility for lost, stolen, or damaged
                personal property.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg font-medium text-left">
              CCPA Privacy Rights (California Residents)
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>Under the CCPA, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request disclosure of personal data collected</li>
                  <li>Request deletion of personal data</li>
                  <li>
                    Opt-out of the sale of personal data (Note: Banksia does not
                    sell personal data)
                  </li>
                </ul>
                <p>
                  To exercise your rights, please contact us. We will respond
                  within one month.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg font-medium text-left">
              GDPR Data Protection Rights (EU/UK Residents)
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>You are entitled to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion under certain conditions</li>
                  <li>Restrict or object to processing</li>
                  <li>Request data portability</li>
                </ul>
                <p>
                  To exercise these rights, please email{" "}
                  <strong>support@banksialondon.com</strong>. We aim to respond
                  within one month.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-lg font-medium">
              Children&apos;s Privacy
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Banksia does not knowingly collect personal information from
                individuals under 13 years of age. If you believe your child has
                submitted such data, please contact us immediately and we will
                remove it from our records.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-lg font-medium">
              Changes to This Policy
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Banksia may update this Privacy Policy periodically. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-8 text-center text-muted-foreground">
        <p>
          If you have questions about this policy or wish to exercise your
          privacy rights, email us at{" "}
          <a
            href="mailto:support@banksialondon.com"
            className="underline underline-offset-4 hover:text-primary"
          >
            support@banksialondon.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
