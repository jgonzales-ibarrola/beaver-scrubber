"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
import toast from "react-hot-toast"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export default function BookingSection() {
  const [date, setDate] = useState<Date>()
  const [serviceType, setServiceType] = useState<string>("cleaning")
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: null as Date | null,
    time: "",
    serviceType: "cleaning",
    serviceDetails: "",
    additionalNotes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleDateChange = (date: Date | undefined) => {
    setDate(date)
    if (date) {
      setFormData({ ...formData, date })
    }
  }

  const handleServiceTypeChange = (value: string) => {
    setServiceType(value)
    setFormData({ ...formData, serviceType: value })
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (step === 1) {
      nextStep();
      return;
    }
  
    // Form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.date ||
      !formData.time
    ) {
      toast.error("Please fill in all required fields!");
      return;
    }
  
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: formData.date?.toLocaleDateString(), // convert Date to string
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send booking email");
      }
  
      toast.success("Booking Submitted! We'll contact you shortly.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  
    // Reset form
    setStep(1);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      date: null,
      time: "",
      serviceType: "cleaning",
      serviceDetails: "",
      additionalNotes: "",
    });
    setDate(undefined);
  };

  return (
    <section id="booking" className="py-24 bg-brown">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Book Your Service</h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Quick and easy scheduling. Tell us what you need, and we&apos;ll handle the rest.
          </p>
        </motion.div>

        <Card className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6">
          <CardHeader className="text-center space-y-2">
            {/* Progress Bar */}
            <div className="w-full bg-muted h-2 rounded-full overflow-hidden mb-6">
              <div
                className="bg-primary h-full transition-all duration-500"
                style={{ width: `${(step / 2) * 100}%` }}
              />
            </div>

            <CardTitle className="text-2xl font-semibold">Booking Form</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    {/* Step 1 Fields */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    {/* Step 2 Fields */}
                    <div className="space-y-2">
                      <Label>Service Type</Label>
                      <RadioGroup value={serviceType} onValueChange={handleServiceTypeChange} className="grid grid-cols-3 gap-4">
                        {["cleaning", "power-washing", "upholstery-shampooing"].map((type) => (
                          <div key={type}>
                            <RadioGroupItem value={type} id={type} className="peer sr-only" />
                            <Label
                              htmlFor={type}
                              className="flex flex-col items-center justify-center border-2 border-primary/20 rounded-lg p-4 peer-data-[state=checked]:border-primary transition"
                            >
                              <CheckCircle2 className="h-6 w-6 mb-2" />
                              {type}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className={cn("w-full justify-start border-primary", !date && "text-muted-foreground")}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={date} onSelect={handleDateChange} disabled={(date) => date < new Date()} />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label>Preferred Time</Label>
                        <Select value={formData.time} onValueChange={(value) => handleSelectChange("time", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (1PM - 5PM)</SelectItem>
                            <SelectItem value="evening">Evening (6PM - 8PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Service Details</Label>
                      <Textarea id="serviceDetails" name="serviceDetails" value={formData.serviceDetails} onChange={handleInputChange} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Buttons */}
              <div className="flex justify-between pt-4">
                {step > 1 && (
                  <Button variant="outline" type="button" onClick={prevStep}>
                    Previous
                  </Button>
                )}
                <Button type="submit" className="ml-auto">
                  {step === 2 ? "Book Now" : "Next"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
