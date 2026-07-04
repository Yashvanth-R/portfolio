"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const info = [
  { icon: <Phone className="h-5 w-5" />, title: "Phone", subtitle: "+91 9591622064" },
  { icon: <Mail className="h-5 w-5" />, title: "Email", subtitle: "yashvanthr064@gmail.com" },
  { icon: <MapPin className="h-5 w-5" />, title: "Location", subtitle: "Bangalore, India" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
        console.error("Error:", result.error);
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="page-shell">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container relative z-10 mx-auto py-10 xl:py-16"
      >
        <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div>
              <span className="theme-chip rounded-full px-4 py-2 text-sm">Contact</span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#fff8ec] xl:text-6xl">
                Have a product idea or role in mind?
              </h1>
              <p className="mt-5 max-w-xl leading-8 text-[#f8f2e8]/62">
                Tell me what you want to build. I can help with frontend interfaces,
                backend services, full-stack applications, and production-ready delivery.
              </p>
            </div>

            <div className="grid gap-4">
              {info.map((item) => (
                <div key={item.title} className="theme-panel flex items-center gap-4 rounded-lg p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/15 text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-[#f8f2e8]/45">{item.title}</p>
                    <h2 className="text-lg font-semibold text-[#fff8ec]">{item.subtitle}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="theme-panel rounded-lg p-6 sm:p-8">
            <div className="mb-7">
              <p className="text-sm font-semibold text-accent">Start a conversation</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#fff8ec]">Send me the details</h2>
            </div>

            {status === "success" && (
              <div className="mb-5 rounded-md border border-teal-300/40 bg-teal-300/10 p-4 text-teal-200">
                Message sent successfully. I will get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="mb-5 rounded-md border border-red-300/40 bg-red-300/10 p-4 text-red-200">
                Failed to send message. Please try again or contact me directly.
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input type="text" name="firstname" placeholder="First name" value={formData.firstname} onChange={handleInputChange} required />
              <Input type="text" name="lastname" placeholder="Last name" value={formData.lastname} onChange={handleInputChange} required />
              <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleInputChange} required />
              <Input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleInputChange} />
            </div>

            <div className="mt-4">
              <Select value={formData.service} onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="fullstack developer">Full Stack Developer</SelectItem>
                    <SelectItem value="backend developer">Backend Developer</SelectItem>
                    <SelectItem value="frontend developer">Frontend Developer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Textarea
              className="mt-4 h-[190px]"
              name="message"
              placeholder="Tell me about your project"
              value={formData.message}
              onChange={handleInputChange}
              required
            />

            <Button type="submit" size="lg" className="mt-5 gap-3 shadow-xl shadow-accent/20" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send message"}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </motion.section>
    </main>
  );
};

export default Contact;
