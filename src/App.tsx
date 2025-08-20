import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Security } from './components/Security';
import { UserTypes } from './components/UserTypes';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { VerifyEmail } from './pages/VerifyEmail';
import { ResetPassword } from './pages/ResetPassword';
import { SetNewPassword } from './pages/SetNewPassword';
import { Dashboard } from './pages/Dashboard';
import { ClientJournal } from './pages/ClientJournal';
import { ClientMessagingDropdown } from './pages/ClientMessagingDropdown';
import { Telesession } from './pages/Telesession';
import { AccountSettings } from './pages/AccountSettings';
import { ClientDetail } from './pages/ClientDetail';
import { ClientRiskAssessment } from './pages/ClientRiskAssessment';
import { ClientSessions } from './pages/ClientSessions';
import { ClientSessionsHistory } from './pages/ClientSessionsHistory';
import { ClientSessionNotes } from './pages/ClientSessionNotes';
import { ClientDocuments } from './pages/ClientDocuments';
import { ClientHomework } from './pages/ClientHomework';
import { ClientGoals } from './pages/ClientGoals';
import { ClientsOverview } from './pages/ClientsOverview';
import { SettingsNotifications } from './pages/SettingsNotifications';
import { Library } from './pages/Library';
import { Calendar } from './pages/Calendar';
import { AdminCalendar } from './pages/AdminCalendar';
import { Finance } from './pages/Finance';
// Import redesigned pages
import { Dashboard as NDashboard } from './pages/n.Dashboard';
import { ClientGoals as NClientGoals } from './pages/n.ClientGoals';
import { Calendar as NCalendar } from './pages/n.Calendar';
import { ClientDetail as NClientDetail } from './pages/n.ClientDetail';
import { ClientsOverview as NClientsOverview } from './pages/n.ClientsOverview';
import { ClientSessions as NClientSessions } from './pages/n.ClientSessions';
import { ClientSessionNotes as NClientSessionNotes } from './pages/n.ClientSessionNotes';
import { ClientDocuments as NClientDocuments } from './pages/n.ClientDocuments';
import { ClientHomework as NClientHomework } from './pages/n.ClientHomework';
import { ClientJournal as NClientJournal } from './pages/n.ClientJournal';
import { ClientMessaging as NClientMessaging } from './pages/n.ClientMessaging';
import { Telesession as NTelesession } from './pages/n.Telesession';
import { Finance as NFinance } from './pages/n.Finance';
import { AccountSettings as NAccountSettings } from './pages/n.AccountSettings';
// Import Design System page
import { DesignSystem } from './pages/DesignSystem';
// Add global styles for no-scrollbar
import './styles.css';
export function App() {
  return <Router>
      <Routes>
        <Route path="/" element={<div className="min-h-screen bg-white font-sans">
              <Header />
              <main>
                <Hero />
                <Features />
                <Security />
                <UserTypes />
                <CTA />
              </main>
              <Footer />
            </div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
        {/* Original pages */}
        <Route path="/practice/dashboard" element={<Dashboard />} />
        <Route path="/practice/client-journal" element={<ClientJournal />} />
        <Route path="/practice/client-messaging" element={<ClientMessagingDropdown />} />
        <Route path="/practice/telesession" element={<Telesession />} />
        <Route path="/practice/settings" element={<AccountSettings />} />
        <Route path="/practice/client-detail" element={<ClientDetail />} />
        <Route path="/practice/clients" element={<ClientsOverview />} />
        <Route path="/practice/client-risk-assessment" element={<ClientRiskAssessment />} />
        <Route path="/practice/client-sessions" element={<ClientSessions />} />
        <Route path="/practice/client-sessions-history" element={<ClientSessionsHistory />} />
        <Route path="/practice/client-session-notes" element={<ClientSessionNotes />} />
        <Route path="/practice/client-documents" element={<ClientDocuments />} />
        <Route path="/practice/client-homework" element={<ClientHomework />} />
        <Route path="/practice/clients-goals" element={<ClientGoals />} />
        <Route path="/practice/settings-notifications" element={<SettingsNotifications />} />
        <Route path="/practice/library" element={<Library />} />
        <Route path="/practice/calendar" element={<Calendar />} />
        <Route path="/practice/admin/calendar" element={<AdminCalendar />} />
        <Route path="/practice/finance" element={<Finance />} />
        {/* Redesigned pages */}
        <Route path="/practice/n/dashboard" element={<NDashboard />} />
        <Route path="/practice/n/clients-goals" element={<NClientGoals />} />
        <Route path="/practice/n/calendar" element={<NCalendar />} />
        <Route path="/practice/n/client-detail" element={<NClientDetail />} />
        <Route path="/practice/n/clients" element={<NClientsOverview />} />
        <Route path="/practice/n/client-sessions" element={<NClientSessions />} />
        <Route path="/practice/n/client-session-notes" element={<NClientSessionNotes />} />
        <Route path="/practice/n/client-documents" element={<NClientDocuments />} />
        <Route path="/practice/n/client-homework" element={<NClientHomework />} />
        <Route path="/practice/n/client-journal" element={<NClientJournal />} />
        <Route path="/practice/n/client-messaging" element={<NClientMessaging />} />
        <Route path="/practice/n/telesession" element={<NTelesession />} />
        <Route path="/practice/n/finance" element={<NFinance />} />
        <Route path="/practice/n/settings" element={<NAccountSettings />} />
        {/* Design System */}
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
    </Router>;
}