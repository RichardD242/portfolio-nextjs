"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function LanguagePopup() {
  const { showLanguagePopup, setLanguage } = useLanguage();

  return (
    <AnimatePresence>
      {showLanguagePopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl shadow-cyan-500/10">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-2">
                Choose your language
              </h2>
              <p className="text-gray-400 text-center mb-8">
                Wähle deine Sprache
              </p>

              {/* Language Options */}
              <div className="flex flex-col gap-4">
                {/* English */}
                <button
                  onClick={() => setLanguage("en")}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-700 bg-gray-800/50 hover:border-cyan-500 hover:bg-gray-800 transition-all duration-300"
                >
                  <span className="text-4xl">🇬🇧</span>
                  <div className="text-left">
                    <p className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">
                      English
                    </p>
                    <p className="text-sm text-gray-500">
                      Continue in English
                    </p>
                  </div>
                </button>

                {/* German */}
                <button
                  onClick={() => setLanguage("de")}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-700 bg-gray-800/50 hover:border-cyan-500 hover:bg-gray-800 transition-all duration-300"
                >
                  <span className="text-4xl">🇩🇪</span>
                  <div className="text-left">
                    <p className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">
                      Deutsch
                    </p>
                    <p className="text-sm text-gray-500">
                      Weiter auf Deutsch
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
