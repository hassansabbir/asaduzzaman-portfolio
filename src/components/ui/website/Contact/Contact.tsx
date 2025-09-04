"use client";

import { useState } from "react";
import { Form, Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "./ContactStyle.css";
import toast from "react-hot-toast";

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false); // <-- new state

  const onFinish = async (values: any) => {
    setLoading(true); // start loader
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
      setLoading(false); // stop loader
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Validation Failed:", errorInfo);
  };

  return (
    <div
      id="contact"
      className="contactUsBg min-h-screen w-full relative flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-95 z-0"></div>
      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-white">Contact</span>{" "}
          <span className="bg-gradient-to-r from-[#FF8D5E] to-[#FF6B6B] bg-clip-text text-transparent">
            me
          </span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-lg mx-auto">
          Cultivating Connections: Reach Out and Connect with Me
        </p>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="space-y-6"
          requiredMark={false}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
            className="mb-6"
          >
            <Input
              placeholder="Email"
              size="large"
              className="!bg-gray-700 !border-gray-600 !text-white placeholder:!text-gray-400 hover:!border-orange-500 focus:!border-orange-500 focus:!shadow-none !px-6 !py-4 !rounded-lg"
              style={{
                backgroundColor: "#374151",
                borderColor: "#4B5563",
                color: "white",
              }}
            />
          </Form.Item>

          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
            className="mb-6"
          >
            <Input
              placeholder="Name"
              size="large"
              className="!bg-gray-700 !border-gray-600 !text-white placeholder:!text-gray-400 hover:!border-orange-500 focus:!border-orange-500 focus:!shadow-none !px-6 !py-4 !rounded-lg"
              style={{
                backgroundColor: "#374151",
                borderColor: "#4B5563",
                color: "white",
              }}
            />
          </Form.Item>

          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please input your message!" }]}
            className="mb-8"
          >
            <TextArea
              placeholder="Message..."
              rows={6}
              className="!bg-gray-700 !border-gray-600 !text-white placeholder:!text-gray-400 hover:!border-orange-500 focus:!border-orange-500 focus:!shadow-none !px-6 !py-4 !rounded-lg !resize-none"
              style={{
                backgroundColor: "#374151",
                borderColor: "#4B5563",
                color: "white",
              }}
            />
          </Form.Item>

          <Form.Item className="mb-0 text-center">
            <Button
              type="default"
              htmlType="submit"
              size="large"
              icon={!loading && <SendOutlined />} // hide icon when loading
              loading={loading} // <-- Ant Design loader
              className="!hover:bg-orange-500 !hover:text-white !hover:border-orange-500 !hover:shadow-none !px-6 !py-4 !rounded-lg"
              style={{
                backgroundColor: "#374151",
                borderColor: "#4B5563",
                color: "white",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
