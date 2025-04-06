import { BookingForm } from "@/components/booking/booking-form"

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-montserrat">Book Your Shipment</h1>
        <p className="text-gray-600 mb-8 font-poppins">
          Complete the form below to book your shipment with ShipLite. We'll make sure your package arrives safely and
          on time.
        </p>
        <BookingForm />
      </div>
    </main>
  )
}

