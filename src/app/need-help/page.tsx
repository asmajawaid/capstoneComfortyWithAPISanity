import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function NeedHelp() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#272343] mb-6">Need Help?</h1>

      <p className="mb-8 text-gray-600">
        We are here to assist you. Check out our frequently asked questions below or contact us for further support.
      </p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I place an order?</AccordionTrigger>
          <AccordionContent>
            To place an order, simply browse our products, add items to your cart, and proceed to checkout. Follow the
            steps to enter your shipping and payment information, then confirm your order.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
          <AccordionContent>
            We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal,
            and Apple Pay.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>How can I track my order?</AccordionTrigger>
          <AccordionContent>
            Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this
            number on our website or the couriers website to track your package.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            We offer a 30-day return policy for most items. Products must be in their original condition with tags
            attached. Please refer to our full return policy for more details.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-[#272343]">Still need assistance?</h2>
        <p className="mb-4 text-gray-600">
          Our customer support team is available to help you with any questions or concerns.
        </p>
        <Link
          href="/contact"
          className="bg-[#029FAE] text-white px-6 py-2 rounded-full hover:bg-[#027d8e] transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}

