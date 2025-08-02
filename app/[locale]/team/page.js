import React from "react";
import { t } from "../../lib/i18n";
import TeamMemberCard from "../../components/TeamMemberCard";

export default async function Team({ params }) {
  const { locale } = await params;
  const currentLocale = locale || "en";

  // Real team members data - Organized by categories

  const academicSupervision = [
    {
      nameEn: "Prof. Dhafer bin Mohammed Alqahtani",
      nameAr: "أ.د. ظافر بن محمد القحطاني",
      positionEn: "General Supervisor of the Initiative",
      positionAr: "المشرف العام للمبادرة",
      linkedinUrl: null,
      avatarUrl: null,
    },
    {
      nameEn: "Dr. Moataz bin Dhaib Alotaibi",
      nameAr: "د. معتز بن ذايب العتيبي",
      positionEn: "Academic Supervisor of the Initiative",
      positionAr: "المشرف الأكاديمي للمبادرة",
      linkedinUrl: null,
      avatarUrl: null,
    },
    {
      nameEn: "Dr. Saad Rabhan",
      nameAr: "د. سعد ربحان",
      positionEn: "Administrative Coordinator",
      positionAr: "منسق إداري",
      linkedinUrl: null,
      avatarUrl: null,
    },
    {
      nameEn: "Abdullah Almakhlafi",
      nameAr: "أ. عبدالله المخلفي",
      positionEn: "Administrative Coordinator",
      positionAr: "منسق إداري",
      linkedinUrl: null,
      avatarUrl: null,
    },
    {
      nameEn: "Fouad Alzahrani",
      nameAr: "أ. فؤاد الزهراني",
      positionEn: "Events Coordinator",
      positionAr: "منسق الفعاليات",
      linkedinUrl: null,
      avatarUrl: null,
    },
  ];
  
  // Inside your JSX (make sure this is the first section to render)
  {renderTeamSection(
    "Academic Supervision",
    "الإشراف الأكاديمي",
    academicSupervision
  )}
  
  const leadershipTeam = [
    // Founders
    {
      nameEn: "Rahaf Almutairi",
      nameAr: "رهف المطيري",
      positionEn: "Founder of Laq",
      positionAr: "مؤسسة لاق",
      linkedinUrl: "https://www.linkedin.com/in/rahaf-almutairi-28b8a1221",
      avatarUrl: "/team/rahaf-almutairi.jpg",
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
      positionAr: "رئيسة الموارد البشرية",
      linkedinUrl:
        "https://www.linkedin.com/in/%D8%B1%D8%B3%D9%8A%D9%84-%D9%87%D8%A7%D8%B4%D9%85%F0%9F%87%B8%F0%9F%87%A6-88300a197",
      avatarUrl: "/team/raseel-hashim.jpg",
    },
    {
      nameEn: "Waad Aldosari",
      nameAr: "وعد الدوسري",
      positionEn: "Media manager",
      positionAr: "رئيسة قسم الإعلام ",
      linkedinUrl: "https://www.linkedin.com/in/waad-al-dosary-107621213",
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Reema Alshehri",
      nameAr: "ريما الشهري",
      positionEn: "PR Manager",
      positionAr: "رئيسة العلاقات العامة",
      linkedinUrl: "https://www.linkedin.com/in/reema-alshehri-6b3331290",
      avatarUrl: "/team/reema-alshehri.jpeg",
    },
    // Consultant
    {
      nameEn: "Khalid Almunazzil",
      nameAr: "خالد صالح المنزل",
      positionEn: "Consultant",
      positionAr: "مستشار",
      linkedinUrl: "https://www.linkedin.com/in/khalid-almunazzil-764114193",
      avatarUrl: "/team/khalid.JPG",
    },
  ];

  const departmentLeads = [
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
      linkedinUrl: "https://www.linkedin.com/in/raghad-alhafi-56681b311/",
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Amjad Al-Dosari",
      nameAr: "أمجاد الدوسري",
      positionEn: "Booth Lead",
      positionAr: "قائد الجناح",
      linkedinUrl: "https://www.linkedin.com/in/amjad-aldosari-1978a8320",
      avatarUrl: null, // No image available
    },
    // Leaders
    {
      nameEn: "Faten Alanazi",
      nameAr: "فاتن العنزي",
      positionEn: "Activities Leader",
      positionAr: "قائدة الأنشطة",
      linkedinUrl: "https://www.linkedin.com/in/faten-alanazi-10a74b28b",
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Haya Alanzi",
      nameAr: "هيا العنزي",
      positionEn: "Activities Leader",
      positionAr: "قائدة الأنشطة",
      linkedinUrl: "https://www.linkedin.com/in/haya-alsakran-3b8789374",
      avatarUrl: "/team/haya-alanzi.jpg",
    },
    {
      nameEn: "Yaroub Albahli",
      nameAr: "يعرب الباهلي",
      positionEn: "Photography Leader",
      positionAr: "قائد التصوير",
      linkedinUrl:
        "https://www.linkedin.com/in/%D9%8A%D9%80%D8%B9%D9%80%D8%B1%D8%A8-%D8%A7%D9%84%D8%A8%D8%A7%D9%87%D9%84%D9%8A-24b357287",
      avatarUrl: "/team/yaroub-albahli.png",
    },
    {
      nameEn: "Saud Alluhaym",
      nameAr: "سعود اللحيم",
      positionEn: "Design Leader",
      positionAr: "قائد التصميم",
      linkedinUrl: "https://www.linkedin.com/in/saud-alluhaym-308928206",
      avatarUrl: "/team/saud-alluhaym.jpeg",
    },
  ];

  const technicalTeam = [
    // IT Leadership
    {
      nameEn: "Saif alotaibie",
      nameAr: "سيف العتيبي",
      positionEn: "IT Leader",
      positionAr: "قائد تقنية المعلومات",
      linkedinUrl: "https://www.linkedin.com/in/saif-alotaibie-2169a72bb",
      avatarUrl: "/team/saif-alotaibie.jpg",
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
      linkedinUrl: "https://www.linkedin.com/in/af-askar",
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
      linkedinUrl: "https://www.linkedin.com/in/yaser-alshareef-182161375",
      avatarUrl: null, // No image available
    },
  ];

  const mediaContentTeam = [
    // Media Members
    {
      nameEn: "Alanoud Alhamad",
      nameAr: "العنود الحمد",
      positionEn: "Media Member",
      positionAr: "عضو إعلام",
      linkedinUrl: "https://www.linkedin.com/in/alanoud-alhamad-8733a329b",
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Mutlaq Alosaimi",
      nameAr: "مطلق العصيمي",
      positionEn: "Media Member",
      positionAr: "عضو إعلام",
      linkedinUrl: "https://www.linkedin.com/in/mutlaq-alosaimi-5ab671224",
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Maha Alarifi",
      nameAr: "مها العريفي",
      positionEn: "Media Member",
      positionAr: "عضو إعلام",
      linkedinUrl: "https://www.linkedin.com/in/maha-a-a45786312",
      avatarUrl: null, // No image available
    },
    // Photography & Editing Members
    {
      nameEn: "Ali Balhareth",
      nameAr: "علي بالحارث",
      positionEn: "Photography & Editing Member",
      positionAr: "عضو تصوير ومونتاج",
      linkedinUrl: null, // No LinkedIn available
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Raghad Aloubili",
      nameAr: "رغد العبيلي",
      positionEn: "Photography & Editing Member",
      positionAr: "عضو تصوير ومونتاج",
      linkedinUrl: "https://www.linkedin.com/in/raghad-aloubili-105761306",
      avatarUrl: "/team/raghad-aloubili.jpeg",
    },
    {
      nameEn: "Jawaher Alhaqbani",
      nameAr: "جواهر الحقباني",
      positionEn: "Photography & Editing Member",
      positionAr: "عضو تصوير ومونتاج",
      linkedinUrl: "https://www.linkedin.com/in/jawaher-alhaqbani-915560323/",
      avatarUrl: "/team/jawaher-alhaqbani.jpeg",
    },
    {
      nameEn: "Nasseba Abdulmohsen",
      nameAr: "نسيبة عبدالمحسن",
      positionEn: "Photography & Editing Member",
      positionAr: "عضو تصوير ومونتاج",
      linkedinUrl: "https://www.linkedin.com/in/nasseba-almunis-0094962b6",
      avatarUrl: null, // No image available
    },
  ];

  const publicRelationsTeam = [
    // PR Specialist
    {
      nameEn: "Azzam Alharbi",
      nameAr: "عزام الحربي",
      positionEn: "ECO - PR",
      positionAr: "مسؤول العلاقات العامة (ECO)",
      linkedinUrl: "https://www.linkedin.com/in/azam-alharbi-406862288",
      avatarUrl: "/team/azzam-alharbi.jpeg",
    },
    // PR Members
    {
      nameEn: "Deemah Alaklaby",
      nameAr: "ديمة الأكلبي",
      positionEn: "PR Member",
      positionAr: "عضو علاقات عامة",
      linkedinUrl: "https://www.linkedin.com/in/deemah-alaklaby-a10b89308",
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Anas Shahrani",
      nameAr: "أنس الشهراني",
      positionEn: "PR Member",
      positionAr: "عضو علاقات عامة",
      linkedinUrl: null, // No LinkedIn available
      avatarUrl: null, // No image available
    },
  ];

  const operationsSupport = [
    // Operations Members
    {
      nameEn: "Mohammad Alharbey",
      nameAr: "محمد الحربي",
      positionEn: "Operations Member",
      positionAr: "عضو عمليات",
      linkedinUrl: null, // No LinkedIn available
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Assaf Alotaibi",
      nameAr: "عساف العتيبي",
      positionEn: "Operations Member",
      positionAr: "عضو عمليات",
      linkedinUrl: "https://www.linkedin.com/in/assaf-alotaibi-20255b377/",
      avatarUrl: "/team/assaf-alotaibi.jpg",
    },
    {
      nameEn: "Razan Alfawzan",
      nameAr: "رزان الفوزان",
      positionEn: "Operations Member",
      positionAr: "عضو عمليات",
      linkedinUrl: null, // No LinkedIn available (X:RazanAlfawzan)
      avatarUrl: null, // No image available
    },
  ];

  const renderTeamSection = (title, titleAr, teamArray) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 main-gradient-text">
        {currentLocale === "ar" ? titleAr : title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {teamArray.map((member, index) => (
          <TeamMemberCard
            key={`${title}-${index}`}
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
    </div>
  );

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

      {/* Team Members Section */}
      <section className="mb-20">
        {renderTeamSection(
          "Leadership & Management",
          "القيادة والإدارة",
          leadershipTeam
        )}

        {renderTeamSection("Department Leads", "قادة الأقسام", departmentLeads)}

        {renderTeamSection(
          "Public Relations",
          "العلاقات العامة",
          publicRelationsTeam
        )}

        {renderTeamSection(
          "Media & Creative",
          "الإعلام والإبداع",
          mediaContentTeam
        )}

        {renderTeamSection(
          "Operations & Support",
          "العمليات والدعم",
          operationsSupport
        )}

        {renderTeamSection("Technical Team", "الفريق التقني", technicalTeam)}
      </section>
    </div>
  );
}
