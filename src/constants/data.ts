export const siteMetadata = {
  title: "Simplify Your Social Media Scheduling",
  description: "Affordable, All-in-One Solution for Your Social Needs",
  iconUrl: "/favicon.ico",
};

export const navbar = {
  name: "SocialScheduler",
};

export const heroContent = {
  title: "Simplify Your Social Media Scheduling",
  subtitle: "Affordable, All-in-One Solution for Your Social Needs",
  reasons: [
  "Schedule posts easily across multiple platforms",
  "Save time and enhance productivity",
  "Affordable pricing plans for everyone",
  "User-friendly interface for seamless experience"
],
  users: [
  "https://utfs.io/f/sa3Zmp7NSoFJn79bJXyZRdKsH7X3EPBG8Lw2cYZ05NmDgVoq",
  "https://utfs.io/f/sa3Zmp7NSoFJcS8wfbtqK7tRlBkzS9mHINAVQiFhZJboU62M",
  "https://utfs.io/f/sa3Zmp7NSoFJcs4s6JtqK7tRlBkzS9mHINAVQiFhZJboU62M",
  "https://utfs.io/f/sa3Zmp7NSoFJRDfM2GcSjA5Kd9nDeTxlbUorMpQ7qswaH3gI",
  "https://utfs.io/f/sa3Zmp7NSoFJZlFt0psI5PdxSUweyzCJN3ZHFt7sbA1kGQ9h"
],
  image: "https://utfs.io/f/sa3Zmp7NSoFJiRbiZRo7PKd2mVoaeYNgcxCZX89DuIk0AG1z",
};

export const beforeAfterContent = {
  mainTitle: "Achieve More with Smart Scheduling",
  without: {
    title: "Without SocialScheduler",
    items: [
  "Wasting time on multiple platforms",
  "Unorganized content calendar",
  "Missed posting opportunities",
  "Stressful last-minute scheduling"
],
  },
  with: {
    title: "With SocialScheduler",
    items: [
  "Effortlessly manage all accounts",
  "Streamlined content calendar",
  "Optimized posting schedules",
  "Smoother workflow and peace of mind"
],
  },
};


export const demoContent = {
  userName: "Alex Johnson",
  userImage: "https://utfs.io/f/sa3Zmp7NSoFJpuwqPgWJHD0CIydPTAEKzeZNn4Fa2mUOsQ16",
  userStory: "I used to struggle with social media management, juggling posts across different platforms and often missing out on key opportunities. Since using SocialScheduler, my workflow is streamlined, and my engagement has skyrocketed!",
  demoText: "Experience how SocialScheduler simplifies your social media strategy, allowing you to focus on what matters most: engaging your audience and growing your brand.",
  footerText: "Join Alex and discover the future of social media management!",
  thumbnail: "https://utfs.io/f/81ebe817-47a5-4eea-bec0-bb35cb68de81-4mmh0w.png",
  videoSrc: "https://www.youtube.com/embed/6ZfuNTqbHE8?si=hx-wI193gB2vbFqI",
};

export const features= {
  title: "Key Features of SocialScheduler", 
  features: [
  {
    "icon": "📅",
    "title": "Cross-platform Scheduling",
    "description": "Schedule and post content across multiple social media platforms seamlessly.",
    "image": "url_to_image1"
  },
  {
    "icon": "🗓️",
    "title": "Content Calendar",
    "description": "Visualize your scheduled posts with an easy-to-use content calendar.",
    "image": "url_to_image2"
  },
  {
    "icon": "🔔",
    "title": "Post Reminders",
    "description": "Get reminders for upcoming posts to never miss a beat.",
    "image": "url_to_image3"
  },
  {
    "icon": "📊",
    "title": "Analytics Dashboard",
    "description": "Monitor your post performance and engagement with our analytics tool.",
    "image": "url_to_image4"
  }
]
};


export const faqs = [
  {
    "question": "What is the product about?",
    "answer": "SocialScheduler is an app designed to streamline the social media scheduling process, allowing users to manage all their content in one place."
  },
  {
    "question": "What are potential benefits?",
    "answer": "Benefits include time-saving efficiencies, improved organization, better engagement, and a user-friendly platform that caters to all social media needs."
  },
  {
    "question": "How can users contact support?",
    "answer": "Users can reach out to our support team via email at support@socialscheduler.com or through the in-app chat feature."
  },
  {
    "question": "Why should you use it?",
    "answer": "Using SocialScheduler simplifies social media management, helping brands maintain an active online presence without the hassle."
  },
  {
    "question": "Is it suitable for beginners?",
    "answer": "Absolutely! SocialScheduler is designed to be intuitive and easy to use, making it perfect for both beginners and experienced users."
  }
];

export const cta = {
  action_header: "Start Your Free Trial Today!",
  action_copy: "Join SocialScheduler to maximize your social media potential!",
};

export const footerContent = {
  appName: "SocialScheduler",
  logoText: "SocialScheduler - Manage Your Content",
  description: "The ultimate solution for all your social media scheduling needs.",
};

export const tiers = [
  {
    "name": "Basic",
    "monthlyPrice": 9.99,
    "annualPrice": 99.99,
    "popular": false,
    "description": "Ideal for individuals starting out with social media scheduling.",
    "features": [
      "Manage 3 social accounts",
      "Basic analytics",
      "Cross-platform scheduling"
    ]
  },
  {
    "name": "Pro",
    "monthlyPrice": 19.99,
    "annualPrice": 199.99,
    "popular": true,
    "description": "Perfect for small businesses looking to enhance their online presence.",
    "features": [
      "Manage 10 social accounts",
      "Advanced analytics",
      "Content calendar"
    ]
  },
  {
    "name": "Business",
    "monthlyPrice": 29.99,
    "annualPrice": 299.99,
    "popular": false,
    "description": "Comprehensive features for large brands and agencies.",
    "features": [
      "Manage unlimited social accounts",
      "Team collaboration tools",
      "Custom analytics reports"
    ]
  }
];

  export type Item =
  | { type: "productHunt"; id: string }
  | { type: "tweet"; id: string }
  | {
      type: "custom";
      content: string;
      imageSrc: string;
      name: string;
      username: string;
    };

    export const items: Item[] = [
  {
    "type": "productHunt",
    "id": "3977200"
  },
  {
    "type": "tweet",
    "id": "1840336417626390878"
  },
  {
    "type": "tweet",
    "id": "1840336417626390878"
  },
  {
    "type": "productHunt",
    "id": "3955336"
  },
  {
    "type": "tweet",
    "id": "1840336417626390878"
  },
  {
    "type": "productHunt",
    "id": "3977371"
  },
  {
    "type": "tweet",
    "id": "1842833750985408631"
  },
  {
    "type": "productHunt",
    "id": "3977767"
  },
  {
    "type": "tweet",
    "id": "1842833750985408631"
  },
  {
    "type": "tweet",
    "id": "1842833750985408631"
  },
  {
    "type": "custom",
    "content": "This could be you. Try it today! Use this as a codebase, clone to your local, npm install then off you go🚀",
    "imageSrc": "https://utfs.io/f/sa3Zmp7NSoFJdWqfLngr8jLPeVCU9YKIpNZTihJg0uaMxsQA",
    "name": "Your name",
    "username": "@You"
  }
];

  export const waitlistContent = {
    title: "Stay Ahead of the Curve!",
    subtitle: "Join the waitlist to access SocialScheduler when we launch.",
  };

 export const staticData = {
  language: "English",
  get: "Get Started",
  start: "Start Now",
  pricing: "Pricing",
  support: "Support",
  links: "LINKS",
  legal: "LEGAL",
  privacy_policy: "Privacy Policy",
  tos: "Terms of Service",
  faq_short: "FAQ",
  faq_long: "Frequently Asked Questions",
  more: "More",
  sign_in: "Sign In",
  sign_up: "Sign Up",
  demo: "Hey there,it's",
  plan: "Choose Your Plan",
  plan_sub: "Select the perfect plan for your needs. Upgrade or downgrade at any time.",
  monthly: "Monthly",
  annual: "Annualy",
  month: "month",
  year: "year",
  popular: "Most Popular",
  rights: "All rights reserved",
  credit: "No credit card required",
  customer: "happy customers",
  hear_us: "Hear from our satisfied customers about their experience with our products and services."
};

export const theme = {
  background: " bg-gray-50 ",
  foreground: " bg-gray-100 ",
  button: " bg-gray-100 hover:bg-gray-200 ",
  border: " border-gray-200 ",
};

export const privacyData = {
  companyName: "Your Company Name",
  lastUpdatedDate: "September 18,2024",
  contactInfo: "[Your Contact,Information]",
};

export const tosData = {
  companyName: "Your Company Name", 
  websiteURL: "www.yourwebsite.com", 
  lastUpdatedDate: "September 18,2024", 
  countryOrState: "[Your Country/State]", 
};

export const staticPrivacyPolicy = {
      privacyPolicyTitle: "Privacy Policy",
      lastUpdatedText: "Last updated:",
      atText: "At",
      weValueText: ", we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.",
      infoTitle: "Information We Collect",
      infoContent: "We collect personal information that you provide to us, including but not limited to your name, email address, and usage data when you interact with our services.",
      howWeUseTitle: "How We Use Your Information",
      howWeUseContent: "Your information helps us to provide, improve, and personalize our services, as well as to communicate with you about updates and offers.",
      sharingTitle: "Sharing Your Information",
      sharingContent: "We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you.",
      yourRightsTitle: "Your Rights",
      yourRightsContent: "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data.",
      contactUsTitle: "Contact Us",
      contactUsContent: "If you have any questions about this Privacy Policy, please contact us at:",
      viewTermsButtonText: "View Terms and Conditions",
    };

export const staticTOS = {
      termsAndConditionsTitle: "Terms and Conditions",
      lastUpdatedText: "Last updated:",
      leadText: "Please read these Terms and Conditions carefully before using the ",
      leadText2: " website operated by ",
      agreementTitle: "1. Agreement to Terms",
      agreementContent: "By accessing our website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the website.",
      intellectualPropertyTitle: "2. Intellectual Property",
      intellectualPropertyContent: "The content on this Website, unless otherwise specified, is owned by ",
      intellectualPropertyContent2: " and is protected by copyright and other intellectual property laws.",
      restrictionsTitle: "3. Restrictions",
      restrictionsContent: "You are restricted from: publishing our material elsewhere, selling our material, or using this Website in any way that causes damage to the Website or impairs user access.",
      limitationOfLiabilityTitle: "4. Limitation of Liability",
      limitationOfLiabilityContentStart: "",
      limitationOfLiabilityContentEnd: " shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.",
      governingLawTitle: "5. Governing Law",
      governingLawContentStart: "These Terms shall be governed by and construed in accordance with the laws of ",
      governingLawContentMiddle: ". Any disputes relating to these Terms will be subject to the exclusive jurisdiction of the courts of ",
      governingLawContentEnd: ".",
      viewPrivacyPolicyButtonText: "View Privacy Policy",
    };