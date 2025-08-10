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
import { ClientsOverview } from './pages/ClientsOverview';
import { SettingsNotifications } from './pages/SettingsNotifications';
import { Library } from './pages/Library';
import { Calendar } from './pages/Calendar';
import { AdminCalendar } from './pages/AdminCalendar';
import { Finance } from './pages/Finance';
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
        <Route path="/practice/settings-notifications" element={<SettingsNotifications />} />
        <Route path="/practice/library" element={<Library />} />
        <Route path="/practice/calendar" element={<Calendar />} />
        <Route path="/practice/admin/calendar" element={<AdminCalendar />} />
        <Route path="/practice/finance" element={<Finance />} />
      </Routes>
    </Router>;
}