import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "@components/common/Layout";
import LoadingSpinner from "@components/common/LoadingSpinner";

// Lazy load pages
const HomePage = lazy(() => import("@pages/home"));
const PracticePage = lazy(() => import("@pages/practice"));
const AnalysisPage = lazy(() => import("@pages/analysis"));
const HistoryPage = lazy(() => import("@pages/history"));
const ProgressPage = lazy(() => import("@pages/progress"));
const SettingsPage = lazy(() => import("@pages/settings"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
