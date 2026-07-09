import { PrismaClient, PortfolioStatus, UserType } from "@prisma/client";
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const saltRound = 10;
const password = 'simonPass'

async function main() {
  // Admin User
  await prisma.user.upsert({
    where: {
      email: "admin@example.com",
    },
    update: {},
    create: {
      name: "Admin",
      email: "admin@example.com",
      phone: "09120000000",
      password: await bcrypt.hash(password,saltRound),
      user_type: UserType.ADMIN,
    },
  });

  const portfolios = [
    {
      title: "Corporate Website",
      client_name: "TechNova",
      project_url: "https://technova.com",
      short_description: "Modern corporate website",
      description:
        "A responsive corporate website built with Next.js, Prisma and PostgreSQL.",
      technologies: "Next.js, TypeScript, Prisma, PostgreSQL",
      project_duration: "2 Months",
    },
    {
      title: "E-Commerce Platform",
      client_name: "ShopMax",
      project_url: "https://shopmax.com",
      short_description: "Online shopping platform",
      description:
        "Complete ecommerce platform with payment gateway and admin dashboard.",
      technologies: "React, Node.js, Express, PostgreSQL",
      project_duration: "4 Months",
    },
    {
      title: "Restaurant Website",
      client_name: "Italian House",
      project_url: "https://italianhouse.com",
      short_description: "Restaurant reservation system",
      description:
        "Website with online reservation and digital menu management.",
      technologies: "Next.js, TailwindCSS, Prisma",
      project_duration: "1 Month",
    },
    {
      title: "Hospital Management",
      client_name: "City Hospital",
      project_url: "https://hospital-demo.com",
      short_description: "Hospital Management System",
      description:
        "Patient management, appointment scheduling and reporting.",
      technologies: "NestJS, PostgreSQL, React",
      project_duration: "6 Months",
    },
    {
      title: "CRM Dashboard",
      client_name: "SalesPro",
      project_url: "https://crm-demo.com",
      short_description: "Customer management dashboard",
      description:
        "CRM platform with customer tracking and analytics.",
      technologies: "Next.js, Prisma, PostgreSQL",
      project_duration: "3 Months",
    },
    {
      title: "Real Estate Platform",
      client_name: "Home Finder",
      project_url: "https://homefinder.com",
      short_description: "Property listing website",
      description:
        "Real estate website with advanced filtering and maps.",
      technologies: "React, Node.js, MongoDB",
      project_duration: "5 Months",
    },
    {
      title: "Learning Management System",
      client_name: "EduTech",
      project_url: "https://edutech.com",
      short_description: "Online education platform",
      description:
        "Video courses, quizzes and student management.",
      technologies: "Next.js, Prisma, PostgreSQL",
      project_duration: "4 Months",
    },
    {
      title: "Portfolio Website",
      client_name: "Creative Studio",
      project_url: "https://creative-demo.com",
      short_description: "Agency portfolio",
      description:
        "Minimal and modern agency portfolio website.",
      technologies: "Next.js, TailwindCSS",
      project_duration: "3 Weeks",
    },
    {
      title: "Travel Booking",
      client_name: "TravelGo",
      project_url: "https://travelgo.com",
      short_description: "Travel booking system",
      description:
        "Booking flights, hotels and tour packages.",
      technologies: "React, Express, PostgreSQL",
      project_duration: "5 Months",
    },
    {
      title: "Fitness App",
      client_name: "FitLife",
      project_url: "https://fitlife.com",
      short_description: "Gym management system",
      description:
        "Membership and workout tracking platform.",
      technologies: "Next.js, Prisma",
      project_duration: "2 Months",
    },
    {
      title: "News Portal",
      client_name: "Daily News",
      project_url: "https://dailynews.com",
      short_description: "Online news website",
      description:
        "News publishing platform with categories and comments.",
      technologies: "Next.js, PostgreSQL",
      project_duration: "2 Months",
    },
    {
      title: "Accounting Software",
      client_name: "FinancePro",
      project_url: "https://financepro.com",
      short_description: "Accounting dashboard",
      description:
        "Financial reports and invoice management.",
      technologies: "NestJS, React",
      project_duration: "6 Months",
    },
    {
      title: "Marketplace",
      client_name: "MarketHub",
      project_url: "https://markethub.com",
      short_description: "Multi vendor marketplace",
      description:
        "Marketplace with vendor management and payments.",
      technologies: "Next.js, Stripe, Prisma",
      project_duration: "7 Months",
    },
    {
      title: "Event Management",
      client_name: "EventX",
      project_url: "https://eventx.com",
      short_description: "Event booking platform",
      description:
        "Conference and event registration system.",
      technologies: "React, Express",
      project_duration: "3 Months",
    },
    {
      title: "Job Portal",
      client_name: "HireFast",
      project_url: "https://hirefast.com",
      short_description: "Recruitment platform",
      description:
        "Job posting and resume management.",
      technologies: "Next.js, Prisma",
      project_duration: "4 Months",
    },
    {
      title: "Medical Clinic",
      client_name: "Smile Clinic",
      project_url: "https://smileclinic.com",
      short_description: "Clinic appointment website",
      description:
        "Appointment booking with doctor profiles.",
      technologies: "Next.js, PostgreSQL",
      project_duration: "2 Months",
    },
    {
      title: "Food Delivery",
      client_name: "FoodBox",
      project_url: "https://foodbox.com",
      short_description: "Food ordering app",
      description:
        "Restaurant ordering and delivery management.",
      technologies: "React, Node.js",
      project_duration: "5 Months",
    },
    {
      title: "Car Rental",
      client_name: "DriveNow",
      project_url: "https://drivenow.com",
      short_description: "Car reservation system",
      description:
        "Vehicle reservation and payment platform.",
      technologies: "Next.js, Prisma",
      project_duration: "3 Months",
    },
    {
      title: "Crypto Dashboard",
      client_name: "CryptoX",
      project_url: "https://cryptox.com",
      short_description: "Cryptocurrency dashboard",
      description:
        "Portfolio tracking and market analytics.",
      technologies: "Next.js, Chart.js",
      project_duration: "2 Months",
    },
    {
      title: "School Management",
      client_name: "Smart School",
      project_url: "https://smartschool.com",
      short_description: "School ERP",
      description:
        "Student, teacher and attendance management.",
      technologies: "NestJS, React, PostgreSQL",
      project_duration: "6 Months",
    },
  ];

  for (let i = 0; i < portfolios.length; i++) {
    const item = portfolios[i];

    await prisma.portfolio.create({
      data: {
        title: item.title,
        client_name: item.client_name,
        project_url: item.project_url,
        short_description: item.short_description,
        description: item.description,
        technologies: item.technologies,
        project_duration: item.project_duration,
        project_date: new Date(
          2024,
          Math.floor(Math.random() * 12),
          Math.floor(Math.random() * 28) + 1
        ),
        status: PortfolioStatus.PUBLISHED,
        view_count: Math.floor(Math.random() * 5000),

        images: {
          create: [
            {
              url: `https://picsum.photos/seed/${i + 1}-1/1200/800`,
            },
            {
              url: `https://picsum.photos/seed/${i + 1}-2/1200/800`,
            },
            {
              url: `https://picsum.photos/seed/${i + 1}-3/1200/800`,
            },
          ],
        },
      },
    });
  }

  console.log("✅ Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });