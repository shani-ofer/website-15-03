import React from "react";
import { Button } from "../components/Layout";
import { Card } from "./Homepage";

function PromoBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-[#4DB8A4]/12 text-soft-teal text-[13px] font-semibold rounded-full px-3.5 py-1 mb-6">
      {children}
    </span>
  );
}

export function IndividualsPage() {
  return (
    <div className="flex flex-col">
      <section className="pt-[120px] pb-[80px] px-6 text-center max-w-[1000px] mx-auto w-full">
        <PromoBadge>שיחת היכרות ללא עלות</PromoBadge>
        <h1 className="text-deep-navy mb-4">הדרך קדימה מתחילה בשיחה</h1>
        <p className="text-[18px] md:text-[22px] font-medium text-[#555] max-w-3xl mx-auto mb-10 leading-relaxed">
          קואצ'ינג קריירה עם עפר שני. הכוונה אישית ומעשית לכל שלב בקריירה שלך.
        </p>
        <Button 
          variant="whatsapp" 
          href="https://wa.me/972545422634" 
          className="flex items-center gap-2 mx-auto"
        >
          <span>קבע/י שיחת היכרות ללא עלות</span>
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </Button>
      </section>

      <section className="py-12 md:py-20 px-6 bg-warm-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-deep-navy mb-10">נשמע מוכר?</h2>
          <div className="space-y-6 max-w-3xl">
            {[
              "אני לא בטוח/ה מה אני רוצה לעשות הלאה.",
              "קודמתי לתפקיד ניהולי ואני מרגיש/ה שאני מנסה להבין אותו תוך כדי תנועה.",
              "העסק שלי לא צומח ואני לא יודע/ת מה לשנות.",
              "אני יודע/ת שאני צריך/ה שינוי, אבל לא יודע/ת מאיפה להתחיל.",
              "אני באותו מקום יותר מדי זמן ומרגיש/ה תקוע/ה."
            ].map((text, i) => (
              <div key={i} className="border-r-4 border-sky-blue pr-6 py-2">
                <p className="text-[18px] italic text-[#555]">"{text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-deep-navy mb-10">אני עובד עם אנשים בכל שלב בקריירה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card 
              title="בתחילת הדרך"
              text="את/ה בונה את היסודות. הבחירות שאת/ה עושה עכשיו מעצבות את כל מה שיבוא אחר כך. בואו נחשוב עליהן ביחד."
            />
            <Card 
              title="באמצע הקריירה"
              text="יש לך ניסיון וכישורים. השאלה עכשיו היא איך להשתמש בהם בדרך שמרגישה נכונה לפרק הבא."
            />
            <Card 
              title="מנהלים חדשים"
              text="היית מצוין/ת בעבודה שלך, ועכשיו את/ה מנהל/ת אחרים שעושים אותה. המעבר הזה הוא אחד הקשים בכל קריירה, והוא לא מגיע עם מדריך למשתמש."
            />
            <Card 
              title="עצמאיים ובעלי עסקים"
              text="לנהל משהו משלך אומר לקבל כל החלטה לבד. כשהעסק נעצר או שאת/ה מאבד/ת כיוון, שיחה עם מישהו לחשוב איתו משנה הכל."
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 bg-warm-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-deep-navy mb-8">קצת עליי</h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="space-y-5 text-[#555] body-text leading-relaxed max-w-3xl mb-10">
                <p>
                  אני עפר שני. ביליתי מעל 25 שנה בהובלת טכנולוגיה, כולל הקמה והובלה של חברת טכנולוגיה דרך מספר שלבי צמיחה. עבדתי בתחומי טלקום, טכנולוגיה רפואית, גיימינג, חממות טכנולוגיות ומרטק, וניהלתי צוותים בפיתוח, מוצר, תפעול ותמיכה.
                </p>
                <p>
                  היום אני מאמן אנשים דרך אתגרי קריירה. הגישה שלי פשוטה: שאלות אמיתיות, שיחה כנה והכוונה מעשית הבנויה על ניסיון, לא על ספרי לימוד.
                </p>
                <p className="font-medium text-deep-navy text-[18px] mt-6">
                  השיחה הראשונה היא ללא עלות וללא התחייבות. בואו נבדוק אם יש התאמה.
                </p>
              </div>
              <Button 
                variant="whatsapp" 
                href="https://wa.me/972545422634" 
                className="flex items-center gap-2"
              >
                <span>קבע/י שיחת היכרות ללא עלות</span>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </Button>
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
    </div>
  );
}
