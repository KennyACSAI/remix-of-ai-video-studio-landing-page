import { MessageSquare, FileText, Image, Video, Play, HelpCircle, User, Lock, Skull, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const ProBadge = () => (
  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-lime text-accent-foreground text-xs font-semibold rounded-full">
    <Lock className="w-3 h-3" />
    PRO
  </span>
);

const CategoryCard = ({ 
  icon: Icon, 
  label 
}: { 
  icon: React.ElementType; 
  label: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-card rounded-2xl p-5 card-shadow cursor-pointer transition-shadow hover:card-shadow-hover"
  >
    <div className="flex justify-end mb-3">
      <ProBadge />
    </div>
    <div className="flex flex-col items-start gap-3">
      <div className="w-14 h-14 bg-icon-bg rounded-xl flex items-center justify-center">
        <Icon className="w-7 h-7 text-muted-foreground" />
      </div>
      <span className="text-lg font-medium text-foreground">{label}</span>
    </div>
  </motion.div>
);

const FeaturedCard = () => (
  <motion.div
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    className="gradient-purple rounded-3xl p-6 cursor-pointer relative overflow-hidden"
  >
    {/* Decorative circles */}
    <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
    
    <div className="relative z-10 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-4xl font-bold text-white tracking-tight">REAL?</h2>
          <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full backdrop-blur-sm">
            MIX
          </span>
        </div>
        <p className="text-white/80 text-lg leading-relaxed">
          A little of everything. Fast rounds.<br />
          Test what is real.
        </p>
      </div>
      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
        <Play className="w-8 h-8 text-white fill-white" />
      </div>
    </div>
  </motion.div>
);

const WarningCard = () => (
  <div className="bg-card rounded-2xl p-4 card-shadow flex items-center gap-4">
    <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
      <Skull className="w-6 h-6 text-destructive" />
    </div>
    <p className="text-foreground text-base">
      One wrong answer ends the run. <span className="font-semibold">How far can you go?</span>
    </p>
  </div>
);

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background px-5 py-8 pb-12">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            {/* App Icon */}
            <div className="relative">
              <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center shadow-lg">
                <div className="w-10 h-10 bg-white/20 rounded-full" />
              </div>
            </div>
            
            {/* Score Badge */}
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 card-shadow">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-foreground">0</span>
              <span className="text-muted-foreground">Best</span>
              <ProBadge />
            </div>
          </div>
          
          {/* Header Icons */}
          <div className="flex items-center gap-2">
            <button className="w-11 h-11 bg-card rounded-full flex items-center justify-center card-shadow">
              <HelpCircle className="w-5 h-5 text-primary" />
            </button>
            <button className="w-11 h-11 bg-card rounded-full flex items-center justify-center card-shadow">
              <User className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 tracking-tight">
            Guess what's human vs AI
          </h1>
          <p className="text-muted-foreground text-lg">
            See where your judgment fails you
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <CategoryCard icon={MessageSquare} label="Text" />
          <CategoryCard icon={FileText} label="Articles" />
          <CategoryCard icon={Image} label="Images" />
          <CategoryCard icon={Video} label="Video" />
        </div>

        {/* Featured Card */}
        <div className="mb-8">
          <FeaturedCard />
        </div>

        {/* Warning Card */}
        <WarningCard />
      </div>
    </div>
  );
};
