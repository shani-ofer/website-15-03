import React from "react";
import { Compass, Rocket, Route, Users, Target, TrendingUp, Lightbulb, Briefcase } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../components/Layout";

export function Card({ title, text, className, icon }: { title: string; text: string; className?: string; icon?: React.ReactNode }) {
  return (
    <div className={cn(
      "bg-white border border-light-gray rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
      className
    )}>
      {icon && <div className="mb-4 text-soft-teal">{icon}</div>}
      <h3 className="text-[18px] font-bold text-deep-navy mb-3">{title}</h3>
      <p className="text-[15px] font-normal text-[#555] leading-[1.65]">{text}</p>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-warm-white border border-light-gray rounded-full px-4 py-1.5 text-[14px] font-medium text-deep-navy">
      {children}
    </span>
  );
}

function PromoBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn(
      "inline-block bg-[#4DB8A4]/12 text-soft-teal text-[13px] font-semibold rounded-full px-3.5 py-1 mb-6",
      className
    )}>
      {children}
    </span>
  );
}

export function Homepage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-[160px] pb-[120px] px-6 text-center w-full flex flex-col items-center justify-center min-h-[80vh] bg-[#f0f9f4] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://ofer-shani.com/Gemini_Generated_Image_4gyx1s4gyx1s4gyx.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/25 via-transparent to-black/15" />
        
        <div className="relative z-10 max-w-[1000px] mx-auto w-full">
          <PromoBadge className="bg-soft-teal/10 text-white border-soft-teal/20 backdrop-blur-sm mb-6">
            שיחת היכרות ללא עלות
          </PromoBadge>
          <h1 className="text-white mb-6 text-5xl md:text-7xl font-bold tracking-tight">
            הכוונה מקצועית.<br />גישה אישית.
          </h1>
          <p className="text-[20px] md:text-[24px] font-medium text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            קואצ'ינג קריירה לאנשים פרטיים וייעוץ ניהולי לחברות, מבוסס על מעל 25 שנות ניסיון מעשי בהובלת טכנולוגיה.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary-blue" href="/coaching" className="w-full sm:w-auto text-lg px-8 py-4">
              לאנשים פרטיים
            </Button>
            <Button 
              variant="outline" 
              href="/management" 
              className="w-full sm:w-auto text-lg px-8 py-4 bg-white text-deep-navy border-deep-navy/20 hover:bg-gray-50 transition-colors"
            >
              לחברות וארגונים
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 px-6 bg-warm-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-deep-navy mb-8">קצת עליי</h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="space-y-5 text-[#555] body-text leading-relaxed max-w-3xl flex-1">
              <p>
                שמי עפר שני. במשך למעלה מ-25 שנה, בניתי והובלתי חברות טכנולוגיה, החל מהקמת סטארט-אפ והצמחתו דרך מספר שלבים, ועד לניהול צוותים גלובליים בתחומי פיתוח (R&D), מוצר, תפעול, תמיכה ועוד.
              </p>
              <p>
                לאורך הדרך, עבדתי במגוון רחב של תעשיות, כולל טלקום, טכנולוגיה רפואית, גיימינג אונליין, חממות טכנולוגיות ומרטק (Martech). כל אחת מהן לימדה אותי משהו שונה על מה שגורם לצוותים להצליח ומה שמעכב אותם.
              </p>
              <p>
                היום, אני מביא את כל הניסיון הזה לקואצ'ינג. אני עובד עם אנשים פרטיים שמנווטים את הקריירה שלהם ועם חברות שרוצות לחזק את המנהלים שלהן. הגישה שלי נטועה בניסיון מהעולם האמיתי, לא בתיאוריה. אני מאמין שהתוצאות הטובות ביותר מגיעות כשמשקיעים קודם כל באנשים.
              </p>
              <p className="small-text text-medium-gray mt-6">
                תואר שני (MA) במנהל עסקים ותואר ראשון (BSc) במדעי המחשב ומנהל עסקים, האוניברסיטה העברית בירושלים.
              </p>
            </div>
            <div className="w-[70%] md:w-[23%] mx-auto md:mx-0 shrink-0">
              <img 
                src="/profile2.png" 
                alt="עפר שני" 
                className="w-full h-auto rounded-2xl shadow-md object-cover aspect-square md:aspect-auto"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://ofer-shani.com/profile2.png";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-deep-navy mb-3">קואצ'ינג קריירה שפוגש אותך איפה שאת/ה</h2>
          <p className="text-[18px] md:text-[22px] font-medium text-[#555] mb-12">
            כל שלב בקריירה מביא איתו אתגרים שונים. אני כאן בשביל כולם.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            <Card 
              icon={<Compass className="w-8 h-8" strokeWidth={1.5} />}
              title="מרגיש/ה תקוע/ה?"
              text="את/ה יודע/ת שאת/ה רוצה להתקדם, אבל לא בטוח/ה לאן. לפעמים כל מה שצריך זה שיחה עם מישהו שהיה שם."
            />
            <Card 
              icon={<Rocket className="w-8 h-8" strokeWidth={1.5} />}
              title="בתחילת הדרך?"
              text="הצעדים הראשונים הם המשמעותיים ביותר. בואו נוודא שהם בכיוון הנכון."
            />
            <Card 
              icon={<Route className="w-8 h-8" strokeWidth={1.5} />}
              title="חושב/ת על הצעד הבא?"
              text="עברת דרך ארוכה. עכשיו השאלה היא לא האם להתקדם, אלא לאן."
            />
            <Card 
              icon={<Users className="w-8 h-8" strokeWidth={1.5} />}
              title="נכנסת לתפקיד ניהולי?"
              text="ניהול אנשים הוא לא המשך טבעי של להיות מצוין/ת בעבודה שלך. זה סט כישורים חדש לגמרי, ואת/ה לא חייב/ת לפענח את זה לבד."
            />
            <Card 
              icon={<Briefcase className="w-8 h-8" strokeWidth={1.5} />}
              title="מנהל/ת עסק עצמאי?"
              text="כשאת/ה מקבל/ת החלטות לבד והעסק מרגיש תקוע, שיחה עם מישהו שהקים והצמיח חברה עושה את כל ההבדל."
              className="md:col-span-2 lg:col-span-1"
            />
          </div>

          <div className="text-center">
            <p className="text-[19px] font-medium text-deep-navy mb-8">
              את/ה לא צריך/ה את כל התשובות. את/ה צריך/ה את השאלות הנכונות. כאן אני נכנס לתמונה.
            </p>
            <Button variant="primary-blue" href="/coaching">
              קבע/י שיחת היכרות ללא עלות
            </Button>
          </div>
        </div>
      </section>

      <div className="h-px bg-light-gray w-full" />

      {/* Management Section */}
      <section className="relative py-12 md:py-20 px-6">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/input_file_1.png')" }}
        />
        <div className="absolute inset-0 z-0 bg-white/70" />
        
        <div className="relative z-10 max-w-[1000px] mx-auto">
          <h2 className="text-deep-navy mb-3">לאמן מנהלים להוביל, לא רק לנהל</h2>
          <p className="text-[18px] md:text-[22px] font-medium text-[#555] mb-12">
            ארגונים חזקים נבנים על מנהלים חזקים. אני עוזר לשלכם להגיע לשם.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            <Card 
              icon={<Target className="w-8 h-8" strokeWidth={1.5} />}
              title="עובדים חזקים, מנהלים מתקשים"
              text="קידמתם את האנשים הטובים ביותר שלכם לתפקידי ניהול, אבל מצוינות טכנית לא מתורגמת אוטומטית לכישורי ניהול. הם צריכים תמיכה כדי לצמוח לתוך התפקיד."
            />
            <Card 
              icon={<TrendingUp className="w-8 h-8" strokeWidth={1.5} />}
              title="צומחים מהר יותר מהמנהלים"
              text="צמיחה היא מרגשת, אבל היא מביאה מורכבות. המנהלים שלכם צריכים להתפתח באותו קצב כמו החברה, או שהפערים יתחילו לבלוט."
            />
            <Card 
              icon={<Lightbulb className="w-8 h-8" strokeWidth={1.5} />}
              title="מחפשים פרספקטיבה חיצונית"
              text="לפעמים קול חיצוני מנוסה הוא מה שנדרש כדי לשבור דפוסים ולעזור למנהלים לראות את מה שנמצא ממש מולם."
            />
          </div>

          <div className="mb-10">
            <div className="flex flex-wrap gap-2.5 mb-6">
              <Badge>פיתוח ומוצר (R&D & Product)</Badge>
              <Badge>תפעול (Operations)</Badge>
              <Badge>תשתיות (Infrastructure)</Badge>
              <Badge>תמיכה ושירות (Support & Service)</Badge>
              <Badge>משאבי אנוש (HR)</Badge>
              <Badge>כספים (Finance)</Badge>
            </div>
            <p className="body-text text-[#555]">
              מראשי צוותים (Team Leads) דרך דרגי ביניים ועד לסמנכ"לים (VPs), אני עובד עם כל שכבות הניהול.
            </p>
          </div>

          <div className="text-center">
            <p className="text-[19px] font-medium text-deep-navy mb-8">
              מעל 25 שנות ניסיון בבניית צוותים וחברות טכנולוגיה, עכשיו לשירותכם.
            </p>
            <Button variant="primary-navy" href="/management">
              צרו קשר לשיחת ייעוץ ראשונית
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
