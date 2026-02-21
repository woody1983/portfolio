import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Article {
  category: string;
  size: string;
  date: string;
  title: string;
  link: string;
}

// Generate random articles
const generateArticles = (): Article[] => {
  const categories = ['Linux', 'MySQL', 'DBA', 'FreeBSD', 'staff', 'DevOps', 'Python', 'React', 'Node.js'];
  const titles = [
    'my_agent_project',
    'Perching_Light',
    'Pictures',
    'Public',
    'remark_winsome',
    'data_pipeline',
    'server_config',
    'backup_strategy',
    'query_optimization',
    'monitoring_setup',
    'automation_scripts',
    'deployment_guide',
  ];
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return titles.map((title, index) => {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const size = `${Math.floor(Math.random() * 900 + 100)}B`;
    const month = months[Math.floor(Math.random() * 12)];
    const day = Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0');
    const hour = Math.floor(Math.random() * 24).toString().padStart(2, '0');
    const minute = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    const year = Math.random() > 0.5 ? '2025' : Math.floor(Math.random() * 5 + 2020).toString();
    
    return {
      category,
      size,
      date: `${month} ${day} ${hour}:${minute}`,
      title,
      link: '#',
    };
  });
};

export default function Lib() {
  const [command, setCommand] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [articles] = useState(generateArticles());
  
  const fullCommand = 'ls -lah /jiang/lib';
  
  // Type command animation
  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullCommand.length) {
        setCommand(fullCommand.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        // Show output after typing completes
        setTimeout(() => {
          setShowOutput(true);
        }, 300);
      }
    }, 80);
    
    return () => clearInterval(typeInterval);
  }, []);
  
  // Blink cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Show lines one by one
  useEffect(() => {
    if (showOutput && visibleLines < articles.length) {
      const lineInterval = setInterval(() => {
        setVisibleLines(prev => {
          if (prev < articles.length) {
            return prev + 1;
          }
          clearInterval(lineInterval);
          return prev;
        });
      }, 100);
      
      return () => clearInterval(lineInterval);
    }
  }, [showOutput, visibleLines, articles.length]);
  
  return (
    <section id="lib" className="min-h-screen bg-[var(--color-noir-bg)] text-[var(--color-noir-text)] font-mono px-4 py-8 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Command Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[var(--color-noir-green)]">jiang@portfolio</span>
            <span className="text-[var(--color-noir-muted)]">:</span>
            <span className="text-[var(--color-noir-blue)]">~</span>
            <span className="text-[var(--color-noir-muted)]">$</span>
            <span className="ml-2">{command}</span>
            {!showOutput && (
              <motion.span 
                animate={{ opacity: showCursor ? 1 : 0 }}
                className="w-2 h-5 bg-[var(--color-noir-green)] ml-0.5 inline-block"
              />
            )}
          </div>
        </motion.div>
        
        {/* Output */}
        <AnimatePresence>
          {showOutput && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-1"
            >
              {/* Header */}
              <div className="text-[var(--color-noir-muted)] text-xs mb-4 border-b border-[var(--color-noir-muted)]/30 pb-2">
                total {articles.length}
              </div>
              
              {/* Article List */}
              <div className="space-y-1">
                {articles.slice(0, visibleLines).map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 text-sm hover:bg-[var(--color-noir-muted)]/10 px-2 py-1 rounded cursor-pointer group"
                  >
                    <span className="text-[var(--color-noir-muted)] w-20 truncate">{article.category}</span>
                    <span className="text-[var(--color-noir-text)] w-16 text-right">{article.size}</span>
                    <span className="text-[var(--color-noir-muted)] w-32">{article.date}</span>
                    <a 
                      href={article.link}
                      className="text-[var(--color-noir-green)] hover:underline truncate flex-1"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Article: ${article.title}\nLink: ${article.link}`);
                      }}
                    >
                      {article.title}
                    </a>
                  </motion.div>
                ))}
              </div>
              
              {/* Footer */}
              {visibleLines >= articles.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 pt-4 border-t border-[var(--color-noir-muted)]/30"
                >
                  <div className="flex items-center gap-2 text-sm text-[var(--color-noir-muted)]">
                    <span>jiang@portfolio</span>
                    <span>:</span>
                    <span className="text-[var(--color-noir-blue)]">~/lib</span>
                    <span>$</span>
                    <motion.span 
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-2 h-5 bg-[var(--color-noir-green)] ml-0.5 inline-block"
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
