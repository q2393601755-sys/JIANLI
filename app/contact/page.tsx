"use client";

import { useLanguage } from "@/lib/i18n/context";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/data/site-config";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
      <SectionTitle title={{ zh: "联系我", en: "Contact" }} />

      <ScrollReveal>
        <div className="max-w-2xl mx-auto text-center mt-12">
          <p className="text-silver leading-relaxed mb-12">
            {t("contact.desc")}
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* WeChat QR */}
            <div className="flex flex-col items-center">
              <h3 className="text-snow text-sm uppercase tracking-wider mb-4">
                {t("contact.wechat")}
              </h3>
              <div className="inline-block p-4 bg-snow">
                <img
                  src="/images/qr-code/wechat.jpg"
                  alt="WeChat QR Code"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              {siteConfig.wechatId && (
                <p className="text-silver text-sm mt-4">
                  {t("contact.wechatId")}: <span className="text-glow">{siteConfig.wechatId}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col items-center md:items-start md:pt-4">
              <h3 className="text-snow text-sm uppercase tracking-wider mb-4">
                {t("contact.email")}
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-glow hover:text-glow-bright transition-colors duration-300 text-lg break-all"
              >
                {siteConfig.email}
              </a>

              {/* Social Links */}
              {siteConfig.social.length > 0 && (
                <div className="mt-8 space-y-2">
                  {siteConfig.social.map((item) => (
                    <a
                      key={item.platform}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-silver hover:text-glow transition-colors duration-300 text-sm"
                    >
                      {item.label.zh} / {item.label.en}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
