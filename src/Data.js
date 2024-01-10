import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaPhoneAlt, FaUser, FaPaperPlane,  FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";


export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  
  <FaInstagram />,
  <FaLinkedin />,
  
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Timothy Danfield"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+9208105488"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "danfieldtimothy@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Kenzie Academy",
    company: "Kenzie.com"
  },
  
]
export const finishes = [
  {
    id: 1,
    number: '5+',
    itemName: "Years Of Experience"
  },

]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
 
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
 
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "danfieldtimothy@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "920-810-5488"
  }
]
