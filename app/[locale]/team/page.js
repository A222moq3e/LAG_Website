import React from "react";
import { Heart, Target, Users, Wrench } from "lucide-react";
import { t } from "../../lib/i18n";
import StatCard from "../../components/StatCard";
import TeamMemberCard from "../../components/TeamMemberCard";
import JoinTeamSection from "../../components/JoinTeamSection";

export default async function Team({ params }) {
  const { locale } = await params;
  const currentLocale = locale || "en";

  // Statistics data
  const statsData = [
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      value: t(currentLocale, "pages.team.stats.support.value"),
      label: t(currentLocale, "pages.team.stats.support.label"),
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      value: t(currentLocale, "pages.team.stats.satisfaction.value"),
      label: t(currentLocale, "pages.team.stats.satisfaction.label"),
    },
    {
      icon: <Wrench className="w-6 h-6 text-white" />,
      value: t(currentLocale, "pages.team.stats.workshops.value"),
      label: t(currentLocale, "pages.team.stats.workshops.label"),
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      value: t(currentLocale, "pages.team.stats.members.value"),
      label: t(currentLocale, "pages.team.stats.members.label"),
    },
  ];

  // Real team members data - Ordered by position hierarchy
  const teamMembers = [
    // Founders
    {
      nameEn: "Rahaf Al-Mutairi",
      nameAr: "رهف المطيري",
      positionEn: "Founder of Laaq",
      positionAr: "مؤسسة لاق",
      linkedinUrl: "https://www.linkedin.com/in/rahaf-almutairi-28b8a1221",
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Faisal Alfallaj",
      nameAr: "فيصل الفلاج",
      positionEn: "Co-Founder",
      positionAr: "الشريك المؤسس",
      linkedinUrl: "https://www.linkedin.com/in/faisal-alfallaj-17a9ba306",
      avatarUrl: "/team/faisal-alfallaj.jpeg",
    },
    // Head of Operations
    {
      nameEn: "Abdullah Alqahtani",
      nameAr: "عبدالله القحطاني",
      positionEn: "Head of Operations",
      positionAr: "رئيس العمليات",
      linkedinUrl: "https://www.linkedin.com/in/abdullah-alqhtani-0a964433b",
      avatarUrl: "/team/abdullah-alqahtani.jpeg",
    },
    // Managers
    {
      nameEn: "Raseel Hashim",
      nameAr: "رسيل هاشم",
      positionEn: "Manager of HR",
      positionAr: "مديرة الموارد البشرية",
      linkedinUrl:
        "https://www.linkedin.com/in/%D8%B1%D8%B3%D9%8A%D9%84-%D9%87%D8%A7%D8%B4%D9%85%F0%9F%87%B8%F0%9F%87%A6-88300a197",
      avatarUrl: "/team/raseel-hashim.jpg",
    },
    {
      nameEn: "Reema Al-Shahri",
      nameAr: "ريما الشهري",
      positionEn: "PR Manager",
      positionAr: "مديرة العلاقات العامة",
      linkedinUrl: "https://www.linkedin.com/in/reema-alshehri-6b3331290",
      avatarUrl: "/team/reema-al-shahri.jpeg",
    },
    // Leads
    {
      nameEn: "Dalal Almutairi",
      nameAr: "دلال المطيري",
      positionEn: "Design Lead",
      positionAr: "قائدة التصميم",
      linkedinUrl: "https://www.linkedin.com/in/dalal-a-b59599209",
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Raghad Alhafi",
      nameAr: "رغد الحافي",
      positionEn: "Booth Lead",
      positionAr: "قائدة الجناح",
      linkedinUrl: "https://www.linkedin.com/in/raghad-alhafi",
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Amjad Al-Dosari",
      nameAr: "أمجد الدوسري",
      positionEn: "Booth Lead",
      positionAr: "قائد الجناح",
      linkedinUrl: "https://www.linkedin.com/in/amjad-aldosari-1978a8320",
      avatarUrl: null, // No image available
    },
    // Leaders
    {
      nameEn: "Waad Al-Dosari",
      nameAr: "وعد الدوسري",
      positionEn: "Social Media Leader",
      positionAr: "قائدة وسائل التواصل الاجتماعي",
      linkedinUrl: "https://www.linkedin.com/in/waad-al-dosary-107621213",
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Faten Al-Anazi",
      nameAr: "فاتن العنزي",
      positionEn: "Activities Leader",
      positionAr: "قائدة الأنشطة",
      linkedinUrl: "https://www.linkedin.com/in/faten-alanazi-10a74b28b",
      avatarUrl: null, // No image available
    },
    // Specialists
    {
      nameEn: "Azzam Alharbi",
      nameAr: "عزام الحربي",
      positionEn: "ECO - PR",
      positionAr: "مسؤول العلاقات العامة (ECO)",
      linkedinUrl: "https://www.linkedin.com/in/azam-alharbi",
      avatarUrl: "/team/azzam-alharbi.jpeg",
    },
    // General Members
    {
      nameEn: "Deemah Alaklaby",
      nameAr: "ديمة العقلاوي",
      positionEn: "Member",
      positionAr: "عضو",
      linkedinUrl: "https://www.linkedin.com/in/deemah-alaklaby",
      avatarUrl: null, // No image available
    },
    // Web Developers
    {
      nameEn: "Abdullah Bin Ammar",
      nameAr: "عبدالله بن عمار",
      positionEn: "Web Developer",
      positionAr: "مطور ويب",
      linkedinUrl: "https://www.linkedin.com/in/a222web",
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Faisal Alkhrayef",
      nameAr: "فيصل الخريف",
      positionEn: "Web Developer",
      positionAr: "مطور ويب",
      linkedinUrl: "https://www.linkedin.com/in/fkhrayef",
      avatarUrl: "/team/faisal-alkhrayef.jpg",
    },
    {
      nameEn: "Abdulaziz Bin Askar",
      nameAr: "عبدالعزيز بن عسكر",
      positionEn: "Web Developer",
      positionAr: "مطور ويب",
      linkedinUrl: "https://www.linkedin.com/in/af-askar/",
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Saleh Alobailan",
      nameAr: "صالح العبيلان",
      positionEn: "Web Developer",
      positionAr: "مطور ويب",
      linkedinUrl: "https://www.linkedin.com/in/salehalobaylan",
      avatarUrl: "/team/saleh-alobailan.jpg",
    },
    {
      nameEn: "Yaser Alshareef",
      nameAr: "ياسر الشريف",
      positionEn: "Web Developer",
      positionAr: "مطور ويب",
      linkedinUrl: "https://www.linkedin.com/in/yaser-alshareef-182161375/",
      avatarUrl: null, // No image available
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 main-gradient-text leading-relaxed py-2">
          {t(currentLocale, "pages.team.title")}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t(currentLocale, "pages.team.description")}
        </p>
      </div>

      {/* Statistics Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              locale={currentLocale}
            />
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={currentLocale === "ar" ? member.nameAr : member.nameEn}
              position={
                currentLocale === "ar" ? member.positionAr : member.positionEn
              }
              avatarUrl={member.avatarUrl}
              linkedinUrl={member.linkedinUrl}
              locale={currentLocale}
            />
          ))}
        </div>
      </section>

      {/* Join Team Section */}
      <JoinTeamSection
        title={t(currentLocale, "pages.team.joinTeam.title")}
        description={t(currentLocale, "pages.team.joinTeam.description")}
        buttonText={t(currentLocale, "pages.team.joinTeam.buttonText")}
        locale={currentLocale}
      />
    </div>
  );
}
