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
    description: "gurkiratsingh12a@gmail.com",
  },
];

export const ContactFormData = [
  {
    name: "Full name *",
    id: "name",
    type: "text",
    placeholder: "Enter your name",
    emailName: "from_name",
  },
  {
    name: "Email *",
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    emailName: "user_email",
  },
  {
    name: "Message *",
    type: "textarea",
    id: "message",
    rows: 4,
    placeholder: "Enter your message",
    emailName: "message",
  },
];
