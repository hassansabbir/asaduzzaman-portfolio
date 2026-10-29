"use client";

import { useState } from "react";
import { Form, Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "./ContactStyle.css";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  scaleIn,
} from "@/lib/animationVariants";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
import socialLinks from "@/data/socialLinks.json";

const { TextArea } = Input;

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "Mdasadujjaman101@gmail.com",
    href: "mailto:Mdasadujjaman101@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+880 1953 512253",
    href: "tel:+8801953512253",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
  },
];

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Facebook: FaFacebook,
  LinkedIn: FaLinkedin,
  Behance: FaBehance,
  Dribble: FaDribbble,
  Dribbble: FaDribbble,
};

const inputStyle = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderColor: "rgba(255,255,255,0.08)",
  color: "white",
};

const inputClassName =
  "!bg-white/[0.03] !border-white/[0.08] !text-white placeholder:!text-gray-600 hover:!border-[#FF8D5E]/30 focus:!border-[#FF8D5E] focus:!shadow-[0_0_0_2px_rgba(255,141,94,0.08)] !px-5 !py-3.5 !rounded-xl";

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        form.resetFields();
      } else {
        toast.error(data.error || "Failed to send message.");
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Validation Failed:", errorInfo);
  };

  return (
    <div id="contact" className="contactUsBg w-full relative overflow-hidden">
      {/* Dark overlay — keeps bg image visible with dark tint */}
      <div className="absolute inset-0 bg-[#0d0e10]/90 z-0" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#FF8D5E]/8 to-transparent blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] rounded-full bg-gradient-to-tl from-[#FF6B6B]/8 to-transparent blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-[#FF8D5E] text-sm font-semibold tracking-[0.3em] uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            Let&apos;s Work{" "}
            <span className="bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] rounded-full mx-auto mb-5" />
          <p className="text-gray-500 max-w-lg mx-auto text-base">
            Have a project in mind or just want to say hello? Drop me a message
            and I&apos;ll get back to you soon.
          </p>
        </motion.div>

        {/* Two-column layout: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left Column — Contact Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 flex flex-col"
          >
            {/* Info card */}
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] flex-1">
              <div className="bg-[#161618]/80 backdrop-blur-md rounded-2xl p-7 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Contact Information
                  </h3>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                    Feel free to reach out through any of these channels.
                    I&apos;m always open to discussing new projects and
                    opportunities.
                  </p>

                  {/* Contact details */}
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-5"
                  >
                    {contactInfo.map((item, index) => {
                      const Icon = item.icon;
                      const Wrapper = item.href ? "a" : "div";
                      const wrapperProps = item.href
                        ? {
                            href: item.href,
                            target: "_blank" as const,
                            rel: "noopener noreferrer",
                          }
                        : {};
                      return (
                        <motion.div key={index} variants={fadeInUp}>
                          <Wrapper
                            {...wrapperProps}
                            className="flex items-center gap-4 group/item cursor-pointer"
                          >
                            <div className="contact-icon-box w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <Icon className="text-xl" />
                            </div>
                            <div>
                              <span className="text-gray-400 text-xs font-semibold uppercase tracking-[0.15em] block mb-1">
                                {item.label}
                              </span>
                              <span className="text-white text-sm sm:text-base font-medium group-hover/item:text-[#FF8D5E] transition-colors duration-300 break-all sm:break-normal">
                                {item.value}
                              </span>
                            </div>
                          </Wrapper>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>

                {/* Social links */}
                <div className="mt-10 pt-6 border-t border-white/[0.08]">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                    Follow Me
                  </p>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex gap-3.5"
                  >
                    {socialLinks.map((item, index) => {
                      const Icon = iconMap[item.name];
                      if (!Icon) return null;
                      return (
                        <motion.a
                          key={index}
                          variants={scaleIn}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.name}
                          className="contact-social-btn w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center cursor-pointer"
                        >
                          <Icon className="text-lg sm:text-xl" />
                        </motion.a>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Form card */}
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03]">
              <div className="bg-[#161618]/80 backdrop-blur-md rounded-2xl p-7 sm:p-8 md:p-10">
                <h3 className="text-xl font-bold text-white mb-1">
                  Send a Message
                </h3>
                <p className="text-gray-600 text-sm mb-8">
                  Fill in the form below and I&apos;ll respond within 24 hours
                </p>

                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  requiredMark={false}
                >
                  {/* Name + Email side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <Form.Item
                      name="name"
                      rules={[
                        { required: true, message: "Please input your name!" },
                      ]}
                      className="!mb-0"
                    >
                      <Input
                        placeholder="Your Name"
                        size="large"
                        className={inputClassName}
                        style={inputStyle}
                      />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please input your email!" },
                        {
                          type: "email",
                          message: "Please enter a valid email!",
                        },
                      ]}
                      className="!mb-0"
                    >
                      <Input
                        placeholder="Your Email"
                        size="large"
                        className={inputClassName}
                        style={inputStyle}
                      />
                    </Form.Item>
                  </div>

                  {/* Subject field */}
                  <Form.Item name="subject" className="!mb-5">
                    <Input
                      placeholder="Subject (Optional)"
                      size="large"
                      className={inputClassName}
                      style={inputStyle}
                    />
                  </Form.Item>

                  {/* Message */}
                  <Form.Item
                    name="message"
                    rules={[
                      { required: true, message: "Please input your message!" },
                    ]}
                    className="!mb-8"
                  >
                    <TextArea
                      placeholder="Tell me about your project..."
                      rows={5}
                      className={`${inputClassName} !resize-none`}
                      style={inputStyle}
                    />
                  </Form.Item>

                  {/* Submit */}
                  <Form.Item className="!mb-0">
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      icon={!loading && <SendOutlined style={{ color: "#ffffff" }} className="!text-white" />}
                      loading={loading}
                      className="!border-none !px-8 !py-5 !rounded-xl !font-semibold !text-base !h-auto w-full sm:w-auto !text-white [&_*]:!text-white hover:!text-white"
                      style={{
                        background: "linear-gradient(135deg, #FF8D5E, #FF6B6B)",
                        color: "#ffffff",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        boxShadow: "0 4px 20px rgba(255, 107, 107, 0.3)",
                      }}
                    >
                      <span className="!text-white" style={{ color: "#ffffff" }}>
                        {loading ? "Sending..." : "Send Message"}
                      </span>
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
