"use client";
import { Check, Crown, Star, Zap } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out Pixora AI",
    features: [
      "3 edits on free plan",
      "Basic AI background removal",
      "Standard resolution output",
      "Community support",
    ],
    limitations: ["Limited daily usage"],
    cta: "Start Free",
    popular: false,
    icon: Star,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Unlimited power for professionals",
    features: [
      "Unlimited edits",
      "All AI features unlocked",
      "Up to 4K resolution",
      "Priority support",
      "Batch processing",
      "API access",
      "Commercial license",
    ],
    cta: "Go Pro",
    popular: true,
    icon: Crown,
  },
];

const Pricing = () => {
  const scrollToEditor = () => {
    const element = document.getElementById("editor");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-glass rounded-full px-6 py-3 mb-6 glass border border-card-border">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-medium">Simple Pricing</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Choose Your </span>
            <span className="bg-gradient-primary !bg-clip-text text-transparent">
              Magic Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free, upgrade when you need more. No hidden fees, cancel
            anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans?.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative group ${plan.popular ? "lg:-mt-8" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-primary px-6 py-2 rounded-full text-sm font-bold text-background">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full glass rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? "border-primary/50 shadow-glow-primary"
                    : "border-card-border hover:border-primary/30 shadow-glow-subtle hover:shadow-glow-primary"
                }`}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-gradient-to-br from-primary to-secondary group-hover:animate-glow-pulse">
                    <plan.icon className="w-8 h-8 text-background" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan?.features?.map((feature) => (
                    <div key={index} className={"flex items-center space-x-3"}>
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}

                  {plan?.limitations?.map((limitation) => (
                    <div
                      key={limitation}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                        <div className="w-3 h-0.5 bg-muted-foreground" />
                      </div>
                      <span className="text-muted-foreground">
                        {limitation}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={plan.popular ? "hero" : "secondary"}
                  className="w-full font-semibold"
                  onClick={scrollToEditor}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            All plans include access to our core AI features. Upgrade anytime
            for more power.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;