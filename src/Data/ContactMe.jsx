import { IoMdHome } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CgRowFirst } from "react-icons/cg";

export const ContactMeData = [
  {
    icon: <IoMdHome />,
    heading: "Address",
    description: "Ludhiana,Punjab,India",
  },
  {
    icon: <FaPhoneAlt />,
    heading: "Phone number",
    description: "+91 7696409799",
  },
  {
    icon: <MdEmail />,
    heading: "Email",
    description: "demo@gmail.com",
  },
];

export const ContactFormData = [
  {
    name: "Full name *",
    id: "name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    name: "Email *",
    id: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "Phone number",
    id: "phone",
    type: "number",
    placeholder: "Enter your phone number",
  },
  {
    name: "Message *",
    type: "textarea",
    id: "message",
    rows: 4,
    placeholder: "Enter your message",
  },
];
