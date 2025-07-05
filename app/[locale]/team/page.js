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

  // Team members data
  const teamMembers = [
    {
      name: t(currentLocale, "pages.team.members.ahmad.name"),
      position: t(currentLocale, "pages.team.members.ahmad.position"),
      specialization: t(
        currentLocale,
        "pages.team.members.ahmad.specialization"
      ),
      description: t(currentLocale, "pages.team.members.ahmad.description"),
      avatarUrl: null, // Will display initials
    },
    {
      name: t(currentLocale, "pages.team.members.raghad.name"),
      position: t(currentLocale, "pages.team.members.raghad.position"),
      specialization: t(
        currentLocale,
        "pages.team.members.raghad.specialization"
      ),
      description: t(currentLocale, "pages.team.members.raghad.description"),
      avatarUrl: null, // Will display initials
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 main-gradient-text leading-tight">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              position={member.position}
              specialization={member.specialization}
              description={member.description}
              avatarUrl={member.avatarUrl}
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
