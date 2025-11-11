export const metadata = {
  title: "Refund Policy — Digital Transformation",
  description:
    "Read our refund and cancellation policy for digital services, custom software, and marketing solutions.",
};

export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-6 py-20 text-slate-800">
      <h1 className="text-3xl font-bold mb-6">Refund & Cancellation Policy</h1>

      <p className="mb-4">
        At <strong>Digital Transformation Pvt. Ltd.</strong>, we strive to deliver
        exceptional results through our web, mobile, and digital services. Since
        our work involves time, effort, and intellectual creativity, we maintain
        a transparent and fair refund policy outlined below.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Project Initiation</h2>
      <p className="mb-4">
        Once a project has been initiated and the first milestone or payment has
        been received, refunds are not applicable for completed phases of work.
        However, if no work has been started and the client wishes to cancel
        within <strong>7 business days</strong> of payment, a partial refund (up
        to 80%) may be considered.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Subscriptions</h2>
      <p className="mb-4">
        For ongoing or subscription-based services (such as hosting, marketing,
        or maintenance plans), cancellations will take effect at the end of the
        current billing cycle. Refunds will not be provided for partial months or
        unused periods.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Non-Refundable Services
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>Domain name registrations and renewals</li>
        <li>Third-party licensing fees or integrations</li>
        <li>Paid advertisements or digital media spends</li>
        <li>Completed design, development, or consultation deliverables</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Refund Process</h2>
      <p className="mb-4">
        Any eligible refunds will be processed to the original payment source
        within <strong>7–14 business days</strong> after approval. Requests must
        be submitted in writing to{" "}
        <a
          href="mailto:billing@digitaltransformation.com"
          className="text-indigo-600 underline"
        >
          billing@digitaltransformation.com
        </a>{" "}
        with proof of payment and project reference details.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Contact for Refund Requests
      </h2>
      <p>
        For any concerns regarding this policy, contact us at:
        <br />
        <strong>Email:</strong>{" "}
        <a
          href="mailto:support@digitaltransformation.com"
          className="text-indigo-600 underline"
        >
          support@digitaltransformation.com
        </a>
        <br />
        <strong>Phone:</strong> +91 98765 43210
      </p>

      <p className="mt-8 text-sm text-slate-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
