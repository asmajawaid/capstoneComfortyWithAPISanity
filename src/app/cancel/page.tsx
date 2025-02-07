import Link from "next/link"

export default function CancelPage() {
  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Payment Cancelled</h1>
      <p className="mb-6">Your payment was cancelled. If you have any questions, please contact our support team.</p>
      <Link
        href="/"
        className="bg-[#029FAE] text-white font-medium rounded-full py-3 px-6 hover:bg-[#027d8e] transition duration-300"
      >
        Return to Home
      </Link>
    </div>
  )
}

