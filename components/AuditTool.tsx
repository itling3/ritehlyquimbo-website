
import React, { useState } from 'react';

interface AnalysisResults {
  score: number;
  criticalIssues: number;
  recommended: number;
  goodResults: number;
  totalChecks: number;
  siteURL: string;
  keywordData: any;
  basicSEO: any[];
  mobileOptimization: any[];
  mobilePreview: {
    title: string;
    siteURL: string;
    desc: string;
    h1: string;
  };
  toolsIntegration: any[];
  advancedSEO: any[];
  security: any[];
  indexability: {
    summary: string;
    status: string;
    statusClass: string;
    items: any[];
    score: number;
  };
}

const AuditTool: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [targetKeyword, setTargetKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [error, setError] = useState('');

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!htmlCode.trim()) {
      setError('❌ Please paste your webpage\'s full HTML source code before analyzing.');
      return;
    }

    setIsLoading(true);
    setError('');
    
    // Process on next tick to allow loader to show
    setTimeout(() => {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlCode, 'text/html');
        
        let totalChecks = 0;
        let goodResults = 0;
        let criticalIssues = 0;
        let recommended = 0;

        const basicSEO = [];
        const mobileOptimization = [];
        const toolsIntegration = [];
        const advancedSEO = [];
        const security = [];
        const indexabilityItems = [];

        // Canonical & Site URL Info
        const canonical = doc.querySelector('link[rel="canonical"]');
        const canonicalHref = canonical ? canonical.getAttribute('href') : null;
        let siteURL = canonicalHref || "https://yourwebsite.com";
        let canonicalPath = "";
        if (canonicalHref) {
          try {
            const url = new URL(canonicalHref);
            canonicalPath = url.pathname.toLowerCase();
          } catch (e) { canonicalPath = ""; }
        }

        // --- KEYWORD ANALYSIS ---
        let keywordData = null;
        if (targetKeyword.trim()) {
          const keyword = targetKeyword.toLowerCase().trim();
          const keywordWords = keyword.split(/\s+/).filter(word => word.length > 2);
          const mainKeyword = keywordWords[0] || keyword;
          
          let kwScore = 0;
          const kwResults = [];

          const containsKW = (text: string) => {
            if (!text) return false;
            const t = text.toLowerCase();
            if (t.includes(keyword)) return true;
            if (mainKeyword && t.includes(mainKeyword)) return true;
            for (const word of keywordWords) {
              const stem = word.replace(/(ing|ed|s|es|'s|ies)$/, '');
              if ((stem.length > 2 && t.includes(stem)) || (word.length > 2 && t.includes(word))) return true;
            }
            return false;
          };

          // Title KW
          const titleTag = doc.querySelector("title");
          const titleText = titleTag?.textContent || "";
          const foundInTitle = containsKW(titleText);
          if (foundInTitle) kwScore++;
          kwResults.push({ element: "SEO Title", found: foundInTitle, content: titleText, matchType: foundInTitle ? "Flexible match" : "Not found" });

          // URL KW
          const checkUrlKW = (path: string) => {
            if (!path || path === "/") return false;
            const normalized = path.toLowerCase().replace(/[-_]/g, ' ').replace(/[^a-z\s]/g, ' ').replace(/\s+/g, ' ').trim();
            return containsKW(normalized);
          };
          const foundInUrl = checkUrlKW(canonicalPath);
          if (foundInUrl) kwScore++;
          kwResults.push({ element: "URL Path", found: foundInUrl, content: canonicalPath || siteURL, matchType: foundInUrl ? "Flexible match" : "Not found" });

          // H1 KW
          const h1Tag = doc.querySelector("h1");
          const h1Text = h1Tag?.textContent || "";
          const foundInH1 = containsKW(h1Text);
          if (foundInH1) kwScore++;
          kwResults.push({ element: "H1 Heading", found: foundInH1, content: h1Text, matchType: foundInH1 ? "Flexible match" : "Not found" });

          // Content KW
          const clone = doc.cloneNode(true) as HTMLDocument;
          clone.querySelectorAll('script, style, noscript, iframe').forEach(el => el.remove());
          const visibleText = clone.body?.textContent?.replace(/\s+/g, ' ').trim() || "";
          const foundInContent = containsKW(visibleText);
          if (foundInContent) kwScore++;
          kwResults.push({ element: "Page Content", found: foundInContent, content: visibleText.substring(0, 150) + "...", matchType: foundInContent ? "Found in content" : "Not found" });

          // Meta Desc KW
          const metaDescTag = doc.querySelector('meta[name="description"]') as HTMLMetaElement;
          const metaDescText = metaDescTag?.content || "";
          const foundInMeta = containsKW(metaDescText);
          if (foundInMeta) kwScore++;
          kwResults.push({ element: "Meta Description", found: foundInMeta, content: metaDescText, matchType: foundInMeta ? "Flexible match" : "Not found" });

          keywordData = {
            keyword,
            optimizationScore: Math.round((kwScore / 5) * 100),
            results: kwResults
          };
        }

        // --- BASIC SEO ---
        const title = doc.querySelector("title");
        totalChecks++;
        if (title && title.textContent?.length) {
          goodResults++;
          basicSEO.push({ type: 'good', title: `✅ Title tag is set (${title.textContent.length} chars)`, desc: 'Ensure it includes keywords and encourages clicks.' });
        } else {
          criticalIssues++;
          basicSEO.push({ type: 'critical', title: '❌ Missing title tag', desc: 'Critical for search engine understanding.' });
        }

        const metaDesc = doc.querySelector('meta[name="description"]') as HTMLMetaElement;
        totalChecks++;
        if (metaDesc && metaDesc.content?.length) {
          goodResults++;
          basicSEO.push({ type: 'good', title: `✅ Meta description found (${metaDesc.content.length} chars)`, desc: 'Great for boosting click-through rates.' });
        } else {
          criticalIssues++;
          basicSEO.push({ type: 'critical', title: '❌ No meta description found', desc: 'Add a summary to attract searchers.' });
        }

        const h1 = doc.querySelector("h1");
        totalChecks++;
        if (h1) {
          goodResults++;
          basicSEO.push({ type: 'good', title: '✅ H1 tag is present', desc: 'Correct use of primary page heading.' });
        } else {
          recommended++;
          basicSEO.push({ type: 'recommended', title: '⚠️ No H1 tag found', desc: 'Consider adding one H1 for SEO and accessibility.' });
        }

        const wordCount = (doc.body?.innerText || "").trim().split(/\s+/).length;
        totalChecks++;
        if (wordCount >= 300) {
          goodResults++;
          basicSEO.push({ type: 'good', title: `✅ Adequate content: ${wordCount} words`, desc: 'Longer content generally ranks better.' });
        } else {
          recommended++;
          basicSEO.push({ type: 'recommended', title: `⚠️ Low word count: ${wordCount} words`, desc: 'Target at least 300 words for depth.' });
        }

        // Images
        const imgs = doc.querySelectorAll('img');
        let missingAlt = 0;
        imgs.forEach(img => { if (!img.hasAttribute('alt') || !img.getAttribute('alt')?.trim()) missingAlt++; });
        totalChecks++;
        if (missingAlt === 0) {
          goodResults++;
          basicSEO.push({ type: 'good', title: '✅ All images have ALT tags', desc: 'Excellent for accessibility and image search.' });
        } else {
          recommended++;
          basicSEO.push({ type: 'recommended', title: `⚠️ ${missingAlt} image(s) missing ALT text`, desc: 'Critical for accessibility.' });
        }

        // --- MOBILE ---
        const viewport = doc.querySelector('meta[name="viewport"]');
        totalChecks++;
        if (viewport) {
          goodResults++;
          mobileOptimization.push({ type: 'good', title: '✅ Mobile viewport tag detected', desc: 'Essential for mobile responsiveness.' });
        } else {
          recommended++;
          mobileOptimization.push({ type: 'recommended', title: '⚠️ Missing viewport tag', desc: 'Your site may not render correctly on phones.' });
        }

        // --- TOOLS ---
        const htmlLower = htmlCode.toLowerCase();
        const tools = [
          { label: 'Google Analytics', found: htmlLower.includes('googletagmanager.com/gtag/js') },
          { label: 'Google Search Console', found: htmlLower.includes('google-site-verification') },
          { label: 'Bing Webmaster Tools', found: htmlLower.includes('msvalidate.01') },
          { label: 'Sitemap.xml linked', found: htmlLower.includes('sitemap.xml') },
          { label: 'robots.txt referenced', found: htmlLower.includes('robots.txt') },
        ];
        tools.forEach(t => {
          totalChecks++;
          if (t.found) { goodResults++; toolsIntegration.push({ type: 'good', title: `✅ ${t.label} detected` }); }
          else { recommended++; toolsIntegration.push({ type: 'recommended', title: `⚠️ ${t.label} not found` }); }
        });

        // --- ADVANCED ---
        const hasSchema = doc.querySelector('script[type="application/ld+json"], [itemscope], [itemprop]');
        totalChecks++;
        if (hasSchema) { goodResults++; advancedSEO.push({ type: 'good', title: '✅ Schema markup detected' }); }
        else { recommended++; advancedSEO.push({ type: 'recommended', title: '⚠️ No schema markup found' }); }

        totalChecks++;
        if (canonicalHref) { goodResults++; advancedSEO.push({ type: 'good', title: '✅ Canonical link present', desc: `Points to: ${canonicalHref}` }); }
        else { recommended++; advancedSEO.push({ type: 'recommended', title: '⚠️ Missing canonical URL' }); }

        // --- SECURITY ---
        totalChecks++;
        const secure = window.location.protocol === "https:";
        if (secure) { goodResults++; security.push({ type: 'good', title: '✅ SSL/TLS (HTTPS) Enabled' }); }
        else { criticalIssues++; security.push({ type: 'critical', title: '❌ HTTP only detected' }); }

        // --- INDEXABILITY ---
        let idxScore = 100;
        let idxBlockers = 0;
        const noindex = doc.querySelector('meta[name="robots"][content*="noindex"], meta[name="googlebot"][content*="noindex"]');
        totalChecks++;
        if (noindex) {
          idxScore -= 40; idxBlockers++;
          indexabilityItems.push({ type: 'critical', title: '❌ Blocking: NOINDEX tag detected', desc: 'Search engines are forbidden from indexing this page.' });
        } else {
          goodResults++;
          indexabilityItems.push({ type: 'good', title: '✅ No NOINDEX tag found' });
        }

        totalChecks++;
        if (htmlLower.includes('x-robots-tag: noindex')) {
          idxScore -= 40; idxBlockers++;
          indexabilityItems.push({ type: 'critical', title: '❌ Blocking: X-Robots NOINDEX detected' });
        } else {
          goodResults++;
          indexabilityItems.push({ type: 'good', title: '✅ No X-Robots header blocking' });
        }

        const finalScore = Math.round((goodResults / totalChecks) * 100);

        setResults({
          score: finalScore,
          criticalIssues,
          recommended,
          goodResults,
          totalChecks,
          siteURL,
          keywordData,
          basicSEO,
          mobileOptimization,
          mobilePreview: {
            title: title?.textContent || "[No Title]",
            siteURL,
            desc: metaDesc?.content || "[No Meta Description]",
            h1: h1?.textContent || "[No H1 Heading]"
          },
          toolsIntegration,
          advancedSEO,
          security,
          indexability: {
            score: Math.max(0, idxScore),
            status: idxBlockers > 0 ? "Blocked from Indexing" : (idxScore < 70 ? "Indexable with Issues" : "Fully Indexable"),
            statusClass: idxBlockers > 0 ? "status-critical" : (idxScore < 70 ? "status-warning" : "status-good"),
            summary: idxBlockers > 0 ? "Critical blocking issues detected." : "Page appears indexable.",
            items: indexabilityItems
          }
        });

      } catch (err) {
        setError('An error occurred during analysis. Please check your HTML input.');
      } finally {
        setIsLoading(false);
      }
    }, 500);
  };

  const handleBookSession = (e: React.MouseEvent) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="audit" className="py-14 md:py-24 px-4 md:px-6 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-6 text-white uppercase italic tracking-tighter">SEO Deep Scan Arsenal</h2>
        <p className="text-gray-300 mb-10 font-medium leading-relaxed">Choose your analysis method: Use our built-in deep HTML parser or visit our dedicated live web application.</p>

        {/* Live Tool Option Link - High Visibility */}
        <div className="mb-12 glass-morphism p-6 rounded-[2rem] border-2 border-blue-500/30 bg-blue-600/5 flex flex-col md:flex-row items-center justify-between gap-6 group">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 text-[10px] font-black bg-blue-500 text-white px-3 py-1 rounded-full uppercase tracking-widest mb-2 italic">Official Live Tool</div>
            <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">RIT SEO Audit Analyzer</h3>
            <p className="text-xs text-gray-400 mt-1">Prefer a standalone web app with URL-based analysis? Use our live cloud version.</p>
          </div>
          <a 
            href="https://rit-seo-audit-analyzer.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-orange-500/20 uppercase tracking-tighter text-sm flex items-center gap-2 group-hover:scale-105"
          >
            Launch Live App
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="relative flex items-center justify-center mb-12">
          <div className="absolute left-0 right-0 h-[1px] bg-white/10"></div>
          <span className="relative z-10 bg-[#030712] px-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">OR USE THE IN-PAGE SCANNER BELOW</span>
        </div>

        <form onSubmit={handleAudit} className="glass-morphism p-8 rounded-3xl border border-white/10 mb-12 text-left">
          <div className="space-y-6 mb-6">
            <div>
              <label htmlFor="html-input" className="block text-sm font-black text-gray-300 mb-2 uppercase tracking-widest">Full Webpage HTML Source</label>
              <textarea 
                id="html-input"
                placeholder="Right-click page > View Page Source > Copy all (Ctrl+A) > Paste here"
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                rows={8}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-white placeholder-gray-500 font-mono text-xs"
                required
              />
            </div>
            <div>
              <label htmlFor="keyword-input" className="block text-sm font-black text-gray-300 mb-2 uppercase tracking-widest">Target Keyword (Optional)</label>
              <input 
                id="keyword-input"
                type="text" 
                placeholder="e.g. Full-Stack SEO Philippines"
                value={targetKeyword}
                onChange={(e) => setTargetKeyword(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-white placeholder-gray-500"
              />
            </div>
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full py-4 rounded-xl font-black text-white transition-all shadow-lg uppercase tracking-tighter ${
              isLoading ? 'bg-orange-600/50 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 shadow-orange-500/20'
            }`}
          >
            {isLoading ? 'Deep Scanning Metadata...' : 'Run Comprehensive In-Page Audit'}
          </button>
        </form>

        {error && <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl mb-8 font-bold uppercase text-xs">{error}</div>}

        {results && (
          <div className="glass-morphism rounded-3xl border border-white/10 p-8 text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="score-box">
              <div className="site-score">
                <div>
                  <h2 className="text-white font-black uppercase italic tracking-tighter text-xl mb-2 line-clamp-1">{results.siteURL}</h2>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Overall SEO Health Score</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-white font-black text-xl">{results.totalChecks}</div>
                      <div className="text-[9px] text-gray-500 uppercase font-black">Total Checks</div>
                    </div>
                    <div>
                      <div className="text-red-500 font-black text-xl">{results.criticalIssues}</div>
                      <div className="text-[9px] text-gray-500 uppercase font-black">Critical</div>
                    </div>
                    <div>
                      <div className="text-yellow-500 font-black text-xl">{results.recommended}</div>
                      <div className="text-[9px] text-gray-500 uppercase font-black">Recommended</div>
                    </div>
                    <div>
                      <div className="text-green-500 font-black text-xl">{results.goodResults}</div>
                      <div className="text-[9px] text-gray-500 uppercase font-black">Good</div>
                    </div>
                  </div>
                </div>

                <div className="meter" style={{ background: `conic-gradient(#3b82f6 ${(results.score / 100) * 360}deg, rgba(255,255,255,0.1) 0deg)` }}>
                  <div className="meter-text">
                    {results.score}<br />
                    <span className="meter-sub">{results.score >= 70 ? 'Optimal' : 'Needs Work'}</span>
                  </div>
                </div>
              </div>
            </div>

            {results.keywordData && (
              <div className="analysis-section">
                <h2>Keyword Analysis: "{results.keywordData.keyword}"</h2>
                <div className="indexability-summary">
                  <div className="indexability-status">
                    <span>Optimization Score</span>
                    <span className="text-blue-400">{results.keywordData.optimizationScore}%</span>
                  </div>
                  <p className="text-xs text-gray-400">Analysis of how well your page is optimized for the specified target keyword across critical zones.</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="keyword-table">
                    <thead>
                      <tr>
                        <th>SEO Element</th>
                        <th>Status</th>
                        <th>Content Preview</th>
                        <th>Match Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.keywordData.results.map((r: any, idx: number) => (
                        <tr key={idx}>
                          <td><span className="font-bold text-white uppercase text-[10px]">{r.element}</span></td>
                          <td><span className={r.found ? 'keyword-found' : 'keyword-missing'}>{r.found ? '✅ FOUND' : '❌ MISSING'}</span></td>
                          <td className="text-gray-500 max-w-[200px] truncate">{r.content || 'N/A'}</td>
                          <td className="text-[10px] text-blue-500 italic">{r.matchType}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="analysis-section">
              <h2>Indexability & Visibility</h2>
              <div className="indexability-summary">
                <div className="indexability-status">
                  <span className={results.indexability.statusClass}>{results.indexability.status}</span>
                  <span className="text-gray-500">Score: {results.indexability.score}/100</span>
                </div>
                <p className="text-xs text-gray-400">{results.indexability.summary}</p>
              </div>
              {results.indexability.items.map((item: any, i: number) => (
                <div key={i} className={`result-item ${item.type}`}>
                  <div className="result-title text-white">{item.title}</div>
                  {item.desc && <p>{item.desc}</p>}
                </div>
              ))}
            </div>

            <div className="analysis-section">
              <h2>Search Preview (Mobile)</h2>
              <div className="preview-box">
                <div className="text-[10px] text-gray-500 mb-1 line-clamp-1">{results.mobilePreview.siteURL}</div>
                <div className="text-blue-600 font-bold text-base leading-tight mb-1">{results.mobilePreview.title}</div>
                <div className="text-sm text-gray-600 line-clamp-2">{results.mobilePreview.desc}</div>
              </div>
            </div>

            <div className="analysis-section">
              <h2>Basic SEO Integrity</h2>
              {results.basicSEO.map((item: any, i: number) => (
                <div key={i} className={`result-item ${item.type}`}>
                  <div className="result-title text-white">{item.title}</div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="analysis-section">
              <h2>Mobile Optimization</h2>
              {results.mobileOptimization.map((item: any, i: number) => (
                <div key={i} className={`result-item ${item.type}`}>
                  <div className="result-title text-white">{item.title}</div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="analysis-section">
              <h2>Security & Trust</h2>
              {results.security.map((item: any, i: number) => (
                <div key={i} className={`result-item ${item.type}`}>
                  <div className="result-title text-white">{item.title}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center pt-8 border-t border-white/5">
              <p className="text-sm text-gray-400 mb-6 italic font-bold uppercase tracking-widest">Found critical issues in your audit?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleBookSession}
                  className="px-10 py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-black transition-all uppercase tracking-tighter shadow-xl shadow-white/5"
                >
                  Book Specialist Correction
                </button>
                <a 
                  href="tel:09611525318"
                  className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-tighter flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.007 12.04c0 2.123.553 4.197 1.602 6.06L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.635 0 12.04-5.405 12.043-12.041a11.811 11.811 0 00-3.535-8.414"/>
                  </svg>
                  Emergency Fix: 0961 152 5318
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AuditTool;
