import { CheckIcon } from "lucide-react"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const steps = [
    { number: 1, label: "Shipper" },
    { number: 2, label: "Recipient" },
    { number: 3, label: "Item" },
    { number: 4, label: "Shipping" },
    { number: 5, label: "Payment" },
    { number: 6, label: "Summary" },
  ]

  return (
    <div className="bg-white px-4 py-6">
      <div className="hidden md:flex items-center justify-between">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center relative">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                step.number < currentStep ? "bg-green-500" : step.number === currentStep ? "bg-primary" : "bg-gray-300"
              }`}
            >
              {step.number < currentStep ? <CheckIcon className="w-5 h-5" /> : step.number}
            </div>
            <span
              className={`mt-2 text-sm font-medium ${
                step.number === currentStep ? "text-primary font-semibold" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile progress bar */}
      <div className="md:hidden">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-primary">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-primary">{steps[currentStep - 1].label}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

