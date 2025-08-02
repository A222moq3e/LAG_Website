import TeamMemberCard from "../components/TeamMemberCard"

// Mock translation function since lib/i18n is not available
const t = (locale, key) => {
  const translations = {
    en: {
      "pages.team.title": "Our Team",
      "pages.team.description": "Meet the amazing people behind our initiative",
    },
    ar: {
      "pages.team.title": "فريقنا",
      "pages.team.description": "تعرف على الأشخاص الرائعين وراء مبادرتنا",
    },
  }
  return translations[locale]?.[key] || key
}

export default function Team() {
  const currentLocale = "en" // Default to English for preview

  // Academic Supervision Team - Added as requested
  const academicSupervision = [
    {
      nameEn: "Prof. Dr. Dhafer Mohammed Al-Qahtani",
      nameAr: "د. ظافر بن محمد القحطاني",
      positionEn: "General Supervisor of the Initiative",
      positionAr: "المشرف العام للمبادرة",
      linkedinUrl: null, // No LinkedIn available
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Dr. Moataz Thayeb Al-Otaibi",
      nameAr: "د. معتز بن ذايب العتيبي",
      positionEn: "Academic Supervisor of the Initiative",
      positionAr: "المشرف الأكاديمي للمبادرة",
      linkedinUrl: null, // No LinkedIn available
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Dr. Saad Rabhan",
      nameAr: "د. سعد ربحان",
      positionEn: "Administrative Coordinator",
      positionAr: "منسق إداري",
      linkedinUrl: null, // No LinkedIn available
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Abdullah Al-Mukhalafi",
      nameAr: "أ. عبدالله المخلفي",
      positionEn: "Administrative Coordinator",
      positionAr: "منسق إداري",
      linkedinUrl: null, // No LinkedIn available
      avatarUrl: null, // No image available
    },
    {
      nameEn: "Fouad Al-Zahrani",
      nameAr: "أ. فؤاد الزهراني",
      positionEn: "Events Coordinator",
      positionAr: "منسق الفعاليات",
      linkedinUrl: null, // No LinkedIn available
      avatarUrl: null, // No image available
    },
  ]

  // Real team members data - Organized by categories
  const leadershipTeam = [
    // Founders
    {
      nameEn: "Rahaf Almutairi",
      nameAr: "رهف المطيري",
      positionEn: "Founder of Laq",
      positionAr: "مؤسسة لاق",
      linkedinUrl: "https://www.linkedin.com/in/rahaf-almutairi-28b8a1221",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Faisal Alfallaj",
      nameAr: "فيصل الفلاج",
      positionEn: "Co-Founder",
      positionAr: "الشريك المؤسس",
      linkedinUrl: "https://www.linkedin.com/in/faisal-alfallaj-17a9ba306",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    // Head of Operations
    {
      nameEn: "Abdullah Alqahtani",
      nameAr: "عبدالله القحطاني",
      positionEn: "Head of Operations",
      positionAr: "رئيس العمليات",
      linkedinUrl: "https://www.linkedin.com/in/abdullah-alqhtani-0a964433b",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    // Managers
    {
      nameEn: "Raseel Hashim",
      nameAr: "رسيل هاشم",
      positionEn: "Manager of HR",
      positionAr: "رئيسة الموارد البشرية",
      linkedinUrl: "https://www.linkedin.com/in/raseel-hashim",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Waad Aldosari",
      nameAr: "وعد الدوسري",
      positionEn: "Media manager",
      positionAr: "رئيسة قسم الإعلام",
      linkedinUrl: "https://www.linkedin.com/in/waad-al-dosary-107621213",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Reema Alshehri",
      nameAr: "ريما الشهري",
      positionEn: "PR Manager",
      positionAr: "رئيسة العلاقات العامة",
      linkedinUrl: "https://www.linkedin.com/in/reema-alshehri-6b3331290",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    // Consultant
    {
      nameEn: "Khalid Almunazzil",
      nameAr: "خالد صالح المنزل",
      positionEn: "Consultant",
      positionAr: "مستشار",
      linkedinUrl: "https://www.linkedin.com/in/khalid-almunazzil-764114193",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
  ]

  const departmentLeads = [
    // Leads
    {
      nameEn: "Dalal Almutairi",
      nameAr: "دلال المطيري",
      positionEn: "Design Lead",
      positionAr: "قائدة التصميم",
      linkedinUrl: "https://www.linkedin.com/in/dalal-a-b59599209",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Raghad Alhafi",
      nameAr: "رغد الحافي",
      positionEn: "Booth Lead",
      positionAr: "قائدة الجناح",
      linkedinUrl: "https://www.linkedin.com/in/raghad-alhafi-56681b311/",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Amjad Al-Dosari",
      nameAr: "أمجاد الدوسري",
      positionEn: "Booth Lead",
      positionAr: "قائد الجناح",
      linkedinUrl: "https://www.linkedin.com/in/amjad-aldosari-1978a8320",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    // Leaders
    {
      nameEn: "Faten Alanazi",
      nameAr: "فاتن العنزي",
      positionEn: "Activities Leader",
      positionAr: "قائدة الأنشطة",
      linkedinUrl: "https://www.linkedin.com/in/faten-alanazi-10a74b28b",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Haya Alanzi",
      nameAr: "هيا العنزي",
      positionEn: "Activities Leader",
      positionAr: "قائدة الأنشطة",
      linkedinUrl: "https://www.linkedin.com/in/haya-alsakran-3b8789374",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Yaroub Albahli",
      nameAr: "يعرب الباهلي",
      positionEn: "Photography Leader",
      positionAr: "قائد التصوير",
      linkedinUrl: "https://www.linkedin.com/in/yaroub-albahli",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Saud Alluhaym",
      nameAr: "سعود اللحيم",
      positionEn: "Design Leader",
      positionAr: "قائد التصميم",
      linkedinUrl: "https://www.linkedin.com/in/saud-alluhaym-308928206",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
  ]

  const technicalTeam = [
    // IT Leadership
    {
      nameEn: "Saif alotaibie",
      nameAr: "سيف العتيبي",
      positionEn: "IT Leader",
      positionAr: "قائد تقنية المعلومات",
      linkedinUrl: "https://www.linkedin.com/in/saif-alotaibie-2169a72bb",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    // Web Developers
    {
      nameEn: "Abdullah Bin Ammar",
      nameAr: "عبدالله بن عمار",
      positionEn: "Web Developer",
      positionAr: "مطور ويب",
      linkedinUrl: "https://www.linkedin.com/in/a222web",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Faisal Alkhrayef",
      nameAr: "فيصل الخريف",
      positionEn: "Web Developer",
      positionAr: "مطور ويب",
      linkedinUrl: "https://www.linkedin.com/in/fkhrayef",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Abdulaziz Bin Askar",
      nameAr: "عبدالعزيز بن عسكر",
      positionEn: "Web Developer",
      positionAr: "مطور ويب",
      linkedinUrl: "https://www.linkedin.com/in/af-askar",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Saleh Alobailan",
      nameAr: "صالح العبيلان",
      positionEn: "Web Developer",
      positionAr: "مطور ويب",
      linkedinUrl: "https://www.linkedin.com/in/salehalobaylan",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Yaser Alshareef",
      nameAr: "ياسر الشريف",
      positionEn: "Web Developer",
      positionAr: "مطور ويب",
      linkedinUrl: "https://www.linkedin.com/in/yaser-alshareef-182161375",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
  ]

  const mediaContentTeam = [
    // Media Members
    {
      nameEn: "Alanoud Alhamad",
      nameAr: "العنود الحمد",
      positionEn: "Media Member",
      positionAr: "عضو إعلام",
      linkedinUrl: "https://www.linkedin.com/in/alanoud-alhamad-8733a329b",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Mutlaq Alosaimi",
      nameAr: "مطلق العصيمي",
      positionEn: "Media Member",
      positionAr: "عضو إعلام",
      linkedinUrl: "https://www.linkedin.com/in/mutlaq-alosaimi-5ab671224",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Maha Alarifi",
      nameAr: "مها العريفي",
      positionEn: "Media Member",
      positionAr: "عضو إعلام",
      linkedinUrl: "https://www.linkedin.com/in/maha-a-a45786312",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    // Photography & Editing Members
    {
      nameEn: "Ali Balhareth",
      nameAr: "علي بالحارث",
      positionEn: "Photography & Editing Member",
      positionAr: "عضو تصوير ومونتاج",
      linkedinUrl: null, // No LinkedIn available
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Raghad Aloubili",
      nameAr: "رغد العبيلي",
      positionEn: "Photography & Editing Member",
      positionAr: "عضو تصوير ومونتاج",
      linkedinUrl: "https://www.linkedin.com/in/raghad-aloubili-105761306",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Jawaher Alhaqbani",
      nameAr: "جواهر الحقباني",
      positionEn: "Photography & Editing Member",
      positionAr: "عضو تصوير ومونتاج",
      linkedinUrl: "https://www.linkedin.com/in/jawaher-alhaqbani-915560323/",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Nasseba Abdulmohsen",
      nameAr: "نسيبة عبدالمحسن",
      positionEn: "Photography & Editing Member",
      positionAr: "عضو تصوير ومونتاج",
      linkedinUrl: "https://www.linkedin.com/in/nasseba-almunis-0094962b6",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
  ]

  const publicRelationsTeam = [
    // PR Specialist
    {
      nameEn: "Azzam Alharbi",
      nameAr: "عزام الحربي",
      positionEn: "ECO - PR",
      positionAr: "مسؤول العلاقات العامة (ECO)",
      linkedinUrl: "https://www.linkedin.com/in/azam-alharbi-406862288",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    // PR Members
    {
      nameEn: "Deemah Alaklaby",
      nameAr: "ديمة الأكلبي",
      positionEn: "PR Member",
      positionAr: "عضو علاقات عامة",
      linkedinUrl: "https://www.linkedin.com/in/deemah-alaklaby-a10b89308",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Anas Shahrani",
      nameAr: "أنس الشهراني",
      positionEn: "PR Member",
      positionAr: "عضو علاقات عامة",
      linkedinUrl: null, // No LinkedIn available
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
  ]

  const operationsSupport = [
    // Operations Members
    {
      nameEn: "Mohammad Alharbey",
      nameAr: "محمد الحربي",
      positionEn: "Operations Member",
      positionAr: "عضو عمليات",
      linkedinUrl: null, // No LinkedIn available
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Assaf Alotaibi",
      nameAr: "عساف العتيبي",
      positionEn: "Operations Member",
      positionAr: "عضو عمليات",
      linkedinUrl: "https://www.linkedin.com/in/assaf-alotaibi-20255b377/",
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      nameEn: "Razan Alfawzan",
      nameAr: "رزان الفوزان",
      positionEn: "Operations Member",
      positionAr: "عضو عمليات",
      linkedinUrl: null, // No LinkedIn available (X:RazanAlfawzan)
      avatarUrl: "/placeholder.svg?height=200&width=200",
    },
  ]

  const renderTeamSection = (title, titleAr, teamArray) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {currentLocale === "ar" ? titleAr : title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {teamArray.map((member, index) => (
          <TeamMemberCard
            key={`${title}-${index}`}
            name={currentLocale === "ar" ? member.nameAr : member.nameEn}
            position={currentLocale === "ar" ? member.positionAr : member.positionEn}
            avatarUrl={member.avatarUrl}
            linkedinUrl={member.linkedinUrl}
            locale={currentLocale}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-relaxed py-2">
          {t(currentLocale, "pages.team.title")}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t(currentLocale, "pages.team.description")}</p>
      </div>

      {/* Team Members Section */}
      <section className="mb-20">
        {/* Academic Supervision - Added as first section */}
        {renderTeamSection("Academic Supervision", "الإشراف الأكاديمي", academicSupervision)}

        {renderTeamSection("Leadership & Management", "القيادة والإدارة", leadershipTeam)}

        {renderTeamSection("Department Leads", "قادة الأقسام", departmentLeads)}

        {renderTeamSection("Public Relations", "العلاقات العامة", publicRelationsTeam)}

        {renderTeamSection("Media & Creative", "الإعلام والإبداع", mediaContentTeam)}

        {renderTeamSection("Operations & Support", "العمليات والدعم", operationsSupport)}

        {renderTeamSection("Technical Team", "الفريق التقني", technicalTeam)}
      </section>
    </div>
  )
}
