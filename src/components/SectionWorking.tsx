"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useMutation } from "@tanstack/react-query"
import { Footprints, Plane, Home, BookOpen, Package, LifeBuoy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Zod schema
const formSchema = z.object({
    fullName: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    flightNumber: z.string().min(1, "Flight number is required"),
    services: z.array(z.string()).min(1, "Select one service"),
    notes: z.string().optional(),
    fileName: z.string().nullable().optional(),
})

type FormData = z.infer<typeof formSchema>

const SERVICE_OPTIONS = [
    { key: "airport_pickup", label: "Airport Pickup", icon: Plane },
    { key: "housing", label: "Housing", icon: Home },
    { key: "orientation", label: "Orientation", icon: BookOpen },
    { key: "sim_bank", label: "SIM & Bank", icon: Package },
    { key: "community", label: "Community", icon: LifeBuoy },
]

export default function SectionWorking() {
    const [step, setStep] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [file, setFile] = useState<File | null>(null)
    const [status, setStatus] = useState<{ type: string; message: string } | null>(null)

    const { register, handleSubmit, formState: { errors }, setValue, getValues, reset } =
        useForm<FormData>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                fullName: "",
                email: "",
                flightNumber: "",
                services: ["airport_pickup"],
                notes: "",
                fileName: null,
            }
        })

    const mutation = useMutation({
        mutationFn: async (data: FormData) => {
            const key = `onboard_${Date.now()}`
            const payload = { ...data, fileName: file?.name ?? null }
            localStorage.setItem(key, JSON.stringify(payload))

            if (data.flightNumber && process.env.NEXT_PUBLIC_AVIATIONSTACK_API_KEY) {
                const apiKey = process.env.NEXT_PUBLIC_AVIATIONSTACK_API_KEY
                const response = await fetch(
                    `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${data.flightNumber}`
                )
                const flightStatus = await response.json()

                if (flightStatus.data && flightStatus.data[0]?.flight_status === 'arrived') {
                    localStorage.setItem(`${key}_status`, JSON.stringify({ arrived: true, timestamp: new Date().toISOString() }))
                }

                payload.flightStatus = flightStatus
            }

            return { key, message: "Saved locally with flight tracking" }
        },
        onSuccess: ({ key }) => {
            setStatus({ type: "success", message: `Saved: ${key}` })
            reset()
            setStep(0)
            setFile(null)
        },
        onError: () => setStatus({ type: "error", message: "Failed to save" }),
    })

    // Service selection toggle
    const toggleService = (key: string) => {
        const current = getValues("services")
        if (current.includes(key)) {
            setValue("services", current.filter((k) => k !== key), { shouldValidate: true })
        } else {
            setValue("services", [...current, key], { shouldValidate: true })
        }
    }

    const onSubmit = (data: FormData) => {
        mutation.mutate(data)
        setIsOpen(false) // Dialog auto-closes on submit
    }

    const steps = [
        {
            title: "Personal Info",
            skippable: false,
            content: (
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Name</label>
                        <Input {...register("fullName")} placeholder="Aditi Rao" />
                        {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
                    </div>
                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <Input {...register("email")} placeholder="aditi@example.com" type="email" />
                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="text-sm font-medium">Flight Number</label>
                        <Input {...register("flightNumber")} placeholder="e.g., UA2402" />
                        {errors.flightNumber && <p className="text-sm text-red-500">{errors.flightNumber.message}</p>}
                    </div>
                </div>
            ),
        },
        {
            title: "Services",
            skippable: true,
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SERVICE_OPTIONS.map((s) => {
                        const Icon = s.icon
                        const checked = getValues("services").includes(s.key)
                        return (
                            <div
                                key={s.key}
                                onClick={() => toggleService(s.key)}
                                className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${checked ? "bg-blue-50 border-blue-500" : "bg-white border-gray-200"} hover:bg-blue-100`}
                            >
                                <Icon className="size-5 text-gray-600" />
                                <span className="text-sm font-medium">{s.label}</span>
                                {checked && <Check className="size-4 text-blue-500 ml-auto" />}
                            </div>
                        )
                    })}
                    {errors.services && <p className="text-sm text-red-500">{errors.services.message}</p>}
                </div>
            ),
        },
        {
            title: "Notes & Docs",
            skippable: true,
            content: (
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Document</label>
                        <Input
                            type="file"
                            accept="image/*,application/pdf"
                            onChange={(e) => {
                                const selectedFile = e.target.files?.[0] ?? null
                                setFile(selectedFile)
                                setValue("fileName", selectedFile?.name ?? null)
                            }}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Notes</label>
                        <Textarea {...register("notes")} placeholder="E.g., Vegetarian, wheelchair" />
                    </div>
                </div>
            ),
        },
    ]

    return (
        <Card className="max-w-7xl mx-auto my-8">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Footprints className="size-5" /> ArrivalPath
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Button onClick={() => {
                    setIsOpen(true)
                    setStatus(null)
                }} className="w-full max-w-xs">Book Now</Button>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Step {step + 1}: {steps[step].title}</DialogTitle>
                            <div className="h-1 bg-gray-200 rounded-full">
                                <div className="h-1 bg-blue-600 rounded-full" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
                            </div>
                        </DialogHeader>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {steps[step].content}
                            {status && (
                                <p className={`text-sm ${status.type === "error" ? "text-red-500" : "text-green-500"}`}>
                                    {status.message}
                                </p>
                            )}
                            <DialogFooter>
                                <div className="flex justify-between gap-2 w-full">
                                    <div className="flex gap-2">
                                        {step > 0 && <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>Back</Button>}
                                        <Button type="button" variant="outline" onClick={() => {
                                            setIsOpen(false)
                                            setStatus(null)
                                            setStep(0)
                                            reset()
                                        }}>Cancel</Button>
                                    </div>
                                    <div className="flex gap-2">
                                        {steps[step].skippable && <Button type="button" variant="ghost" onClick={() => setStep(Math.min(steps.length - 1, step + 1))}>Skip</Button>}
                                        {step < steps.length - 1 ? (
                                            <Button
                                                type="button"
                                                onClick={() => {
                                                    if (step === 0 && (errors.fullName || errors.email || errors.flightNumber)) return
                                                    setStep(step + 1)
                                                }}
                                                disabled={step === 0 && (errors.fullName || errors.email || errors.flightNumber)}
                                            >
                                                Next
                                            </Button>
                                        ) : (
                                            <Button type="submit" disabled={mutation.isPending}>
                                                {mutation.isPending ? "Saving..." : "Submit"}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    )
}
