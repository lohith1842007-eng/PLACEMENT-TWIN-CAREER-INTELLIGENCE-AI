import React from 'react';
import { AppProvider } from './context/AppContext';
import { Shell } from './components/layout/Shell';

// Modules
import { DashboardModule } from './components/modules/dashboard/DashboardModule';
import { OnboardingModule } from './components/modules/onboarding/OnboardingModule';
import { ResumeModule } from './components/modules/resume/ResumeModule';
import { CareerDiscoveryModule } from './components/modules/discovery/CareerDiscoveryModule';
import { SkillGapModule } from './components/modules/skillgap/SkillGapModule';
import { LearningHubModule } from './components/modules/learning/LearningHubModule';
import { LearningEvidenceModule } from './components/modules/evidence/LearningEvidenceModule';
import { LivingProfileModule } from './components/modules/profile/LivingProfileModule';
import { ResumeEvolutionModule } from './components/modules/resume-evolution/ResumeEvolutionModule';
import { AssessmentModule } from './components/modules/assessment/AssessmentModule';
import { MockInterviewModule } from './components/modules/mock-interview/MockInterviewModule';
import { CareerPlanModule } from './components/modules/career-plan/CareerPlanModule';
import { AlumniModule } from './components/modules/alumni/AlumniModule';
import { ResourcesModule } from './components/modules/resources/ResourcesModule';
import { TimelineModule } from './components/modules/timeline/TimelineModule';
import { SettingsModule } from './components/modules/settings/SettingsModule';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <Shell>
        {(currentTab, setTab) => {
          switch (currentTab) {
            case 'dashboard':
              return <DashboardModule onNavigate={setTab} />;
            case 'onboarding':
              return <OnboardingModule onComplete={() => setTab('dashboard')} />;
            case 'resume':
              return <ResumeModule />;
            case 'career-discovery':
              return <CareerDiscoveryModule />;
            case 'skill-gap':
              return <SkillGapModule onNavigate={setTab} />;
            case 'learning-hub':
              return <LearningHubModule onNavigateToEvidence={() => setTab('evidence')} />;
            case 'evidence':
              return <LearningEvidenceModule onNavigateToProfile={() => setTab('profile')} />;
            case 'profile':
              return <LivingProfileModule onNavigate={setTab} />;
            case 'resume-evolution':
              return <ResumeEvolutionModule />;
            case 'assessments':
              return <AssessmentModule onNavigateToDashboard={() => setTab('dashboard')} />;
            case 'mock-interview':
              return <MockInterviewModule />;
            case 'career-plan':
              return <CareerPlanModule onNavigate={setTab} />;
            case 'alumni':
              return <AlumniModule />;
            case 'resources':
              return <ResourcesModule />;
            case 'timeline':
              return <TimelineModule />;
            case 'settings':
              return <SettingsModule />;
            default:
              return <DashboardModule onNavigate={setTab} />;
          }
        }}
      </Shell>
    </AppProvider>
  );
};

export default App;
