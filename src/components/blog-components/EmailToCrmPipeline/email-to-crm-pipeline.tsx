"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Mail, Database, FileJson } from "lucide-react"

interface EmailData {
  from: string
  to: string
  content: string
  annotations?: string[]
}

interface JsonData {
  person: {
    email: string
    name: string
    phone: string
  }
  organisation: {
    name: string
  }
  deal: {
    value: string
    next_steps: string
    deadline: string
  }
  summary: string
}

interface CrmEntry {
  contact: {
    name: string
    email: string
    phone: string
    company: string
  }
  opportunity: {
    title: string
    value: string
    stage: string
    close_date: string
    description: string
  }
  activities: {
    type: string
    date: string
    description: string
  }[]
}

export default function EmailToCrmPipeline() {
  const [currentStep, setCurrentStep] = useState<"email" | "json" | "crm">("email")

  const emailChain: EmailData[] = [
    {
      from: "hn@moc.dk",
      to: "bob@besafe.dk",
      content:
        "Hi Bob.\n\nI like what you have done to your office.\n\nWe need to get an upgrade on the security system in building 2. Can you send over a price?\n\nI'd like to get this done before next week.\n\nBest regards,\nHans Nielsen\nThe Municipality of Copenhagen\n+45 23 42 23 42",
    },
    {
      from: "bob@besafe.dk",
      to: "hn@moc.dk",
      content:
        "Hi Hans.\n\nIt was great seeing you yesterday at the conference.\n\nThe price of 2 cameras, wiring and the security box will be €15.000.\n\nConfirm this email and we'll get this sorted.\n\nBest regards,\nBob",
      
    },
  ]

  const jsonData: JsonData = {
    person: {
      email: "hn@moc.dk",
      name: "Hans Nielsen",
      phone: "+45 23 42 23 42",
    },
    organisation: {
      name: "Municipality of Copenhagen",
    },
    deal: {
      value: "€15.000",
      next_steps: "waiting for Hans to confirm",
      deadline: "11/7/2025",
    },
    summary:
      "Bob sent over a price of 2 cameras, wiring & security box for €15.000 as requested by Hans who wants this done before next week after seeing each other at the conference the day before.",
  }

  const crmEntry: CrmEntry = {
    contact: {
      name: "Hans Nielsen",
      email: "hn@moc.dk",
      phone: "+45 23 42 23 42",
      company: "Municipality of Copenhagen",
    },
    opportunity: {
      title: "Security System Upgrade - Building 2",
      value: "€15,000",
      stage: "Proposal Sent",
      close_date: "2025-07-11",
      description: "2 cameras, wiring and security box installation",
    },
    activities: [
      {
        type: "Email",
        date: "2025-07-09",
        description: "Hans requested price quote for security system upgrade",
      },
      {
        type: "Email",
        date: "2025-07-09",
        description: "Sent proposal for €15,000 - awaiting confirmation",
      },
    ],
  }

  return (
    <div className="w-full bg-background p-6 rounded-lg border">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Email Chain → JSON → CRM Pipeline</h2>
          <p className="text-muted-foreground">AI agents processing email communications into structured CRM data</p>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center space-x-4">
          <div
            className={`flex items-center space-x-2 ${currentStep === "email" ? "text-primary" : "text-muted-foreground"}`}
          >
            <Mail className="h-5 w-5" />
            <span>Email Chain</span>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
          <div
            className={`flex items-center space-x-2 ${currentStep === "json" ? "text-primary" : "text-muted-foreground"}`}
          >
            <FileJson className="h-5 w-5" />
            <span>JSON Extract</span>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
          <div
            className={`flex items-center space-x-2 ${currentStep === "crm" ? "text-primary" : "text-muted-foreground"}`}
          >
            <Database className="h-5 w-5" />
            <span>CRM Entry</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Email Chain */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Email Chain</span>
              </CardTitle>
              <CardDescription>Raw email conversation between Hans and Bob</CardDescription>
              <Button onClick={() => setCurrentStep("json")} className="w-full">
                Analyse email & extract deal data
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {emailChain.map((email, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="text-sm">
                        <span className="font-medium">FROM:</span> {email.from}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">TO:</span> {email.to}
                      </div>
                    </div>
                    {email.annotations && (
                      <div className="flex flex-wrap gap-1">
                        {email.annotations.map((annotation, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {annotation}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <pre className="text-sm whitespace-pre-wrap font-sans">{email.content}</pre>
                  </div>
                  {index < emailChain.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Right Column - JSON Extract & CRM Entry */}
          <div className="flex flex-col gap-6">
            {/* JSON Extract */}
            <Card className={`h-fit transition-opacity ${currentStep === "email" ? "opacity-50" : "opacity-100"}`}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileJson className="h-5 w-5" />
                  <span>JSON Extract</span>
                </CardTitle>
                <CardDescription>Structured data extracted by AI Agent 1</CardDescription>
                <Button onClick={() => setCurrentStep("crm")} className="w-full" disabled={currentStep !== "json"}>
                  Check for duplicates and create deal
                </Button>
              </CardHeader>
              <CardContent>
                {currentStep === "email" ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <FileJson className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Click "Analyse email & extract deal data" to process emails</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-md">
                      <pre className="text-sm overflow-x-auto">{JSON.stringify(jsonData, null, 2)}</pre>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* CRM Entry */}
            <Card className={`h-fit transition-opacity ${currentStep !== "crm" ? "opacity-50" : "opacity-100"}`}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5" />
                  <span>CRM Entry</span>
                </CardTitle>
                <CardDescription>Final CRM record created by AI Agent 2</CardDescription>
                <Button onClick={() => setCurrentStep("email")} variant="outline" className="w-full mb-4">
                  Reset Demo
                </Button>
              </CardHeader>
              <CardContent>
                {currentStep !== "crm" ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Database className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Convert JSON to see CRM entry</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Contact Info */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Contact</h3>
                      <div className="bg-muted p-3 rounded-md space-y-1">
                        <div>
                          <span className="font-medium">Name:</span> {crmEntry.contact.name}
                        </div>
                        <div>
                          <span className="font-medium">Email:</span> {crmEntry.contact.email}
                        </div>
                        <div>
                          <span className="font-medium">Phone:</span> {crmEntry.contact.phone}
                        </div>
                        <div>
                          <span className="font-medium">Company:</span> {crmEntry.contact.company}
                        </div>
                      </div>
                    </div>

                    {/* Deal */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Deal</h3>
                      <div className="bg-muted p-3 rounded-md space-y-1">
                        <div>
                          <span className="font-medium">Title:</span> {crmEntry.opportunity.title}
                        </div>
                        <div>
                          <span className="font-medium">Value:</span> {crmEntry.opportunity.value}
                        </div>
                        <div>
                          <span className="font-medium">Stage:</span> {crmEntry.opportunity.stage}
                        </div>
                        <div>
                          <span className="font-medium">Close Date:</span> {crmEntry.opportunity.close_date}
                        </div>
                        <div>
                          <span className="font-medium">Description:</span> {crmEntry.opportunity.description}
                        </div>
                      </div>
                    </div>

                    {/* Activities */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Activities</h3>
                      <div className="space-y-2">
                        {crmEntry.activities.map((activity, index) => (
                          <div key={index} className="bg-muted p-3 rounded-md">
                            <div className="flex justify-between items-start mb-1">
                              <Badge variant="outline">{activity.type}</Badge>
                              <span className="text-sm text-muted-foreground">{activity.date}</span>
                            </div>
                            <div className="text-sm">{activity.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
