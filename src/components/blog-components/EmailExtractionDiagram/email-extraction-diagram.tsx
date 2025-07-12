import React from "react"

// Define types for shadcn components to avoid dependencies
type CardProps = React.HTMLAttributes<HTMLDivElement>
type CardContentProps = React.HTMLAttributes<HTMLDivElement>
type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>
type BadgeProps = React.HTMLAttributes<HTMLDivElement>

// Simplified shadcn-like components
const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ""}`} {...props} />
)

const CardContent: React.FC<CardContentProps> = ({ className, ...props }) => (
  <div className={`p-6 pt-0 ${className || ""}`} {...props} />
)

const CardHeader: React.FC<CardHeaderProps> = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className || ""}`} {...props} />
)

const Badge: React.FC<BadgeProps> = ({ className, ...props }) => (
  <div
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
      className || ""
    }`}
    {...props}
  />
)

export default function EmailExtractionDiagram() {
  return (
    <div className="bg-slate-950 p-4 rounded-lg">
      <div className="max-w-full mx-auto">
        <div className="relative">
          {/* System Flow Container */}
          <div className="space-y-4">
            {/* Email 1 */}
            <div className="relative">
              <Card className="border-2 border-slate-700 bg-slate-900 shadow-sm">
                <CardContent className="p-4">
                  <div className="text-xs font-mono text-slate-300 space-y-2">
                    <div className="flex items-center gap-3">
                      <p>
                        <span className="bg-red-900/50 border border-red-800 px-1 text-red-200 rounded">
                          FROM: hn@moc.dk
                        </span>
                      </p>
                      <span className="text-xs italic text-red-200 bg-red-900/50 border border-red-800 px-2 py-1 rounded">
                        can't extract name & org from email address
                      </span>
                    </div>
                    <p>TO: bob@besafe.dk</p>
                    <div className="border-t border-slate-700 pt-2 mt-2">
                      <p className="text-xs leading-relaxed mb-2">Hi Bob.</p>
                      <p className="text-xs leading-relaxed mb-2">I like what you have done to your office.</p>
                      <p className="text-xs leading-relaxed mb-2">
                        We need to get an upgrade on the security system in building 2. Can you send over a price?
                      </p>
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-xs leading-relaxed">
                          <span className="bg-orange-900/50 border border-orange-800 px-1 text-orange-200 rounded">
                            I'd like to get this done before next week.
                          </span>
                        </p>
                        <span className="text-xs italic text-orange-200 bg-orange-900/50 border border-orange-800 px-2 py-1 rounded">
                          potential deadline
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed mb-2">Best regards,</p>
                      <div className="flex items-start gap-3 mb-2">
                        <div className="bg-green-900/50 border border-green-800 px-1 text-green-200 rounded">
                          <p className="text-xs leading-relaxed mb-1">Hans Nielsen</p>
                          <p className="text-xs leading-relaxed mb-1">The Municipality of Copenhagen</p>
                          <p className="text-xs leading-relaxed">+45 23 42 23 42</p>
                        </div>
                        <span className="text-xs italic text-green-200 bg-green-900/50 border border-green-800 px-2 py-1 rounded">
                          valuable for CRM entry
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Email 2 */}
            <div className="relative">
              <Card className="border-2 border-slate-700 bg-slate-900 shadow-sm">
                <CardContent className="p-4">
                  <div className="text-xs font-mono text-slate-300 space-y-2">
                    <p>FROM: bob@besafe.dk</p>
                    <p>TO: hn@moc.dk</p>
                    <div className="border-t border-slate-700 pt-2 mt-2">
                      <p className="text-xs leading-relaxed mb-2">Hi Hans.</p>
                      <p className="text-xs leading-relaxed mb-2">
                        It was great seeing you yesterday at the conference.
                      </p>
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-xs leading-relaxed">
                          <span className="bg-blue-900/50 border border-blue-800 px-1 text-blue-200 rounded">
                            The price of 2 cameras, wiring and the security box will be €15.000.
                          </span>
                        </p>
                        <span className="text-xs italic text-blue-200 bg-blue-900/50 border border-blue-800 px-2 py-1 rounded">
                          text indicating an offer
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-xs leading-relaxed">
                          <span className="bg-purple-900/50 border border-purple-800 px-1 text-purple-200 rounded">
                            Confirm this email and we'll get this sorted.
                          </span>
                        </p>
                        <span className="text-xs italic text-purple-200 bg-purple-900/50 border border-purple-800 px-2 py-1 rounded">
                          potential next steps
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed mb-2">Best regards,</p>
                      <p className="text-xs leading-relaxed">Bob</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Overlapping Summary Card */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-10">
            <Card className="border-2 border-slate-600 bg-slate-800 shadow-xl w-80">
              <CardHeader className="bg-slate-700 border-b border-slate-600 py-2">
                <div className="flex items-center justify-center">
                  <Badge className="text-xs font-semibold border-slate-500 text-slate-200">
                    SUMMARY
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-3">
                <p className="text-xs italic font-mono text-slate-300 leading-relaxed">
                  Bob sent over a price of 2 cameras, wiring & security box for €15.000 as requested by Hans who wants
                  this done before next week after seeing each other at the conference the day before.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
