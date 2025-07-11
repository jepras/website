"use client"

import { useState, useEffect } from "react"
import styles from "./AnimatedSystemDiagram.module.css"

export default function AnimatedSystemDiagram() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const processSteps = [
    "Email received",
    "Orchestrator activated",
    "Content analyzed",
    "Deal processed",
    "Activity logged",
    "UI updated",
  ]

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Email-to-CRM Automation Flow</h1>
          <p className={styles.subtitle}>Intelligent email processing with AI orchestration</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.diagramContainer}>
              <svg className={styles.svg}>
                {/* Connection Lines */}
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(107, 114, 128)" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="rgb(249, 115, 22)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="rgb(107, 114, 128)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Email to Orchestrator */}
                <line x1="50%" y1="8%" x2="50%" y2="20%" className={styles.line} />

                {/* Orchestrator to Agents */}
                <line x1="50%" y1="27%" x2="20%" y2="55%" className={styles.line} />
                <line x1="50%" y1="27%" x2="50%" y2="55%" className={styles.line} />
                <line x1="50%" y1="27%" x2="80%" y2="55%" className={styles.line} />

                {/* Agents to Logger */}
                <line x1="20%" y1="65%" x2="50%" y2="85%" className={styles.line} />
                <line x1="50%" y1="65%" x2="50%" y2="85%" className={styles.line} />
                <line x1="80%" y1="65%" x2="50%" y2="85%" className={styles.line} />

                {/* Animated Flow Pulses */}
                {activeStep >= 1 && (
                  <circle r="3" className={styles.pulse}>
                    <animateMotion dur="1s" fill="freeze">
                      <path d="M 50% 8% L 50% 20%" />
                    </animateMotion>
                    <animate attributeName="opacity" values="1;0" dur="1s" fill="freeze" />
                  </circle>
                )}

                {activeStep >= 2 && (
                  <circle r="3" className={styles.pulse}>
                    <animateMotion dur="1s" fill="freeze">
                      <path d="M 50% 27% L 20% 55%" />
                    </animateMotion>
                    <animate attributeName="opacity" values="1;0" dur="1s" fill="freeze" />
                  </circle>
                )}

                {activeStep >= 3 && (
                  <circle r="3" className={styles.pulse}>
                    <animateMotion dur="1s" fill="freeze">
                      <path d="M 20% 55% L 50% 55%" />
                    </animateMotion>
                    <animate attributeName="opacity" values="1;0" dur="1s" fill="freeze" />
                  </circle>
                )}

                {activeStep >= 4 && (
                  <circle r="3" className={styles.pulse}>
                    <animateMotion dur="1s" fill="freeze">
                      <path d="M 50% 55% L 80% 55%" />
                    </animateMotion>
                    <animate attributeName="opacity" values="1;0" dur="1s" fill="freeze" />
                  </circle>
                )}

                {activeStep >= 5 && (
                  <circle r="3" className={styles.pulse}>
                    <animateMotion dur="1s" fill="freeze">
                      <path d="M 80% 65% L 50% 85%" />
                    </animateMotion>
                    <animate attributeName="opacity" values="1;0" dur="1s" fill="freeze" />
                  </circle>
                )}
              </svg>

              {/* Email Webhook - Top */}
              <div className={styles.emailWebhook}>
                <div className={`${styles.componentCard} ${activeStep === 0 ? styles.componentCardActive : ""}`}>
                  <div className={styles.componentHeader}>
                    <div className={`${styles.statusDot} ${styles.statusOrange}`}></div>
                    <div>
                      <p className={styles.componentTitle}>Email Webhook</p>
                      <p className={styles.componentDescription}>Incoming customer email</p>
                    </div>
                  </div>
                  {activeStep === 0 && <div className={styles.pulseBorder}></div>}
                </div>
              </div>

              {/* AI Orchestrator - Center Top */}
              <div className={styles.aiOrchestrator}>
                <div
                  className={`${styles.componentCard} ${styles.componentCardLarge} ${activeStep === 1 ? styles.componentCardActive : ""}`}
                >
                  <div className={styles.componentHeader}>
                    <div className={`${styles.statusDotLarge} ${styles.statusBlue}`}></div>
                    <div>
                      <p className={styles.componentTitle}>AI Orchestrator</p>
                      <p className={styles.componentDescription}>Coordinates agent workflow</p>
                    </div>
                  </div>
                  {activeStep === 1 && <div className={styles.pulseBorder}></div>}
                </div>
              </div>

              {/* Analysis Agent - Left */}
              <div className={styles.analysisAgent}>
                <div
                  className={`${styles.componentCard} ${styles.componentCardConstrained} ${activeStep === 2 ? styles.componentCardActive : ""}`}
                >
                  <div className={styles.componentContent}>
                    <div className={styles.componentHeader}>
                      <div className={`${styles.statusDotSmall} ${styles.statusPurple}`}></div>
                      <p className={styles.componentTitle}>Analysis Agent</p>
                    </div>
                    <p className={styles.componentDescription}>Analyzes email content for sales opportunities</p>
                    <p className={styles.componentOutput}>Returns deal confidence score</p>
                  </div>
                  {activeStep === 2 && <div className={styles.pulseBorder}></div>}
                </div>
              </div>

              {/* CRM Agent - Center */}
              <div className={styles.crmAgent}>
                <div
                  className={`${styles.componentCard} ${styles.componentCardConstrained} ${activeStep === 3 ? styles.componentCardActive : ""}`}
                >
                  <div className={styles.componentContent}>
                    <div className={styles.componentHeader}>
                      <div className={`${styles.statusDotSmall} ${styles.statusGreen}`}></div>
                      <p className={styles.componentTitle}>CRM Agent</p>
                    </div>
                    <p className={styles.componentDescription}>Creates deals in CRM if they don't exist</p>
                    <p className={styles.componentOutput}>Creates deal if it doesn't exist</p>
                  </div>
                  {activeStep === 3 && <div className={styles.pulseBorder}></div>}
                </div>
              </div>

              {/* Logging Agent - Right */}
              <div className={styles.loggingAgent}>
                <div
                  className={`${styles.componentCard} ${styles.componentCardConstrained} ${activeStep === 4 ? styles.componentCardActive : ""}`}
                >
                  <div className={styles.componentContent}>
                    <div className={styles.componentHeader}>
                      <div className={`${styles.statusDotSmall} ${styles.statusAmber}`}></div>
                      <p className={styles.componentTitle}>Logging Agent</p>
                    </div>
                    <p className={styles.componentDescription}>Monitors and logs all activity</p>
                    <p className={styles.componentOutput}>Creates & stores the activity log</p>
                  </div>
                  {activeStep === 4 && <div className={styles.pulseBorder}></div>}
                </div>
              </div>

              {/* UI Update - Bottom Center */}
              <div className={styles.uiUpdate}>
                <div className={`${styles.componentCard} ${activeStep === 5 ? styles.componentCardActive : ""}`}>
                  <div className={styles.componentHeader}>
                    <div className={`${styles.statusDot} ${styles.statusSlate}`}></div>
                    <div>
                      <p className={styles.componentTitle}>UI Update</p>
                      <p className={styles.componentDescription}>Shows all activity in UI for transparency</p>
                    </div>
                  </div>
                  {activeStep === 5 && <div className={styles.pulseBorder}></div>}
                </div>
              </div>

              {/* Process Steps Indicator */}
              <div className={styles.processSteps}>
                <div className={styles.processStepsContent}>
                  <p className={styles.processStepsTitle}>Process Flow</p>
                  <div className={styles.processStepsList}>
                    {processSteps.map((step, index) => (
                      <div key={index} className={styles.processStep}>
                        <div
                          className={`${styles.processStepDot} ${
                            activeStep >= index ? styles.processStepDotActive : styles.processStepDotInactive
                          }`}
                        />
                        <span
                          className={`${styles.processStepText} ${
                            activeStep === index ? styles.processStepTextActive : styles.processStepTextInactive
                          }`}
                        >
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
