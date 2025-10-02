"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    subtitle: "+91 9591622064",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    subtitle: "yashvanthr064@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    subtitle: "Bangalore, India",
  }
]

import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setStatus('error');
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Lets work together</h3>
              <p className="text-white/60">I am a frontend developer with full stack developer with experience in designing and developing scalable web solutions, ensuring secure and efficient data handling through robust backend integrations.</p>
              
              {status === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-md text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500 rounded-md text-red-400">
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  name="firstname"
                  placeholder="Firstname" 
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  type="text" 
                  name="lastname"
                  placeholder="Lastname" 
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Email address" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone number" 
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <Select value={formData.service} onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="frontend developer">Frontend Developer</SelectItem>
                    <SelectItem value="backend developer">Backend Developer</SelectItem>
                    <SelectItem value="fullstack developer">Full Stack Developer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea 
                className="h-[200px]" 
                name="message"
                placeholder="Type Your message" 
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button 
                type="submit" 
                size="md" 
                className="max-w-40"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.subtitle}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;