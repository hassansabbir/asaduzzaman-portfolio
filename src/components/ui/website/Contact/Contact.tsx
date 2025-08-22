"use client";

import { Form, Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "./ContactStyle.css";

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form submitted:", values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email!",
              },
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
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input the subject!",
              },
            ]}
            className="mb-6"
          >
            <Input
              placeholder="Subject"
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
            name="projectDetails"
            rules={[
              {
                required: true,
                message: "Please input project details!",
              },
            ]}
            className="mb-8"
          >
            <TextArea
              placeholder="Project Details..."
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
              icon={<SendOutlined />}
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
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
