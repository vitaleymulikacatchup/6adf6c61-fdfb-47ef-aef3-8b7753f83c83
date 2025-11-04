"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, ChefHat, Crown, Gift, Heart, HelpCircle, Leaf, MapPin, MessageSquare, ShoppingBag, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="full"
      sizing="standard"
      background="default"
      cardStyle="solid"
      primaryButtonStyle="solid"
      secondaryButtonStyle="outline"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Inicio", id: "hero" },
            { name: "Productos", id: "products" },
            { name: "Nosotros", id: "about" },
            { name: "Contacto", id: "contact" }
          ]}
          brandName="Myka"
          button={{
            text: "Pedidos",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="El Auténtico Yogurt Griego de Madrid"
          description="Descubre la cremosidad y el sabor tradicional del yogurt griego artesanal en el corazón de Madrid"
          tag="Artesanal"
          tagIcon={Star}
          imageSrc="https://images.pexels.com/photos/8743829/pexels-photo-8743829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Yogurt griego Myka con frutos del bosque"
          buttons={[
            { text: "Ver Productos", href: "products" },
            { text: "Visítanos", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Tradición Griega en Madrid"
          description="En Myka combinamos las recetas tradicionales griegas con ingredientes locales de la más alta calidad para ofrecerte una experiencia auténtica"
          tag="Nuestra Historia"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Receta Tradicional",
              description: "Siguiendo métodos ancestrales griegos transmitidos por generaciones",
              icon: Crown
            },
            {
              title: "Ingredientes Premium",
              description: "Leche fresca local y cultivos probióticos de la más alta calidad",
              icon: Leaf
            },
            {
              title: "Proceso Artesanal",
              description: "Elaborado a mano en pequeños lotes para garantizar la frescura",
              icon: Users
            }
          ]}
          imageSrc="https://images.pexels.com/photos/8743829/pexels-photo-8743829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Proceso artesanal de elaboración del yogurt griego"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Nuestros Yogurts Griegos"
          description="Descubre nuestra selección de yogurts griegos artesanales, perfectos para cualquier momento del día"
          tag="Productos"
          tagIcon={ShoppingBag}
          products={[
            {
              id: "1",
              name: "Yogurt Griego Clásico",
              price: "4,50€",
              imageSrc: "https://images.pexels.com/photos/7303108/pexels-photo-7303108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Yogurt griego clásico Myka"
            },
            {
              id: "2",
              name: "Con Frutos del Bosque",
              price: "5,20€",
              imageSrc: "https://images.pexels.com/photos/566564/pexels-photo-566564.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Yogurt griego con frutos del bosque"
            },
            {
              id: "3",
              name: "Con Miel y Nueces",
              price: "5,50€",
              imageSrc: "https://images.pexels.com/photos/12260058/pexels-photo-12260058.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Yogurt griego con miel y nueces"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Planes para Disfrutar"
          description="Elige la opción que mejor se adapte a tu estilo de vida saludable"
          tag="Ofertas"
          tagIcon={Gift}
          plans={[
            {
              id: "individual",
              badge: "Popular",
              badgeIcon: Star,
              price: "4,50€",
              subtitle: "Perfecto para probar nuestro sabor auténtico",
              features: [
                "500g de yogurt griego",
                "Elaborado del día",
                "Sin conservantes",
                "Rico en proteínas"
              ]
            },
            {
              id: "familiar",
              badge: "Mejor Valor",
              badgeIcon: Heart,
              price: "12,00€",
              subtitle: "Ideal para compartir en familia",
              features: [
                "3 yogurts de 500g",
                "Sabores variados",
                "Descuento del 15%",
                "Perfecto para la familia"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="La Calidad que Nos Define"
          description="Números que reflejan nuestro compromiso con la excelencia"
          tag="Calidad"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "100%",
              description: "Ingredientes Naturales"
            },
            {
              id: "2",
              value: "15g",
              description: "Proteína por Porción"
            },
            {
              id: "3",
              value: "24h",
              description: "Proceso de Fermentación"
            },
            {
              id: "4",
              value: "0%",
              description: "Conservantes Artificiales"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Lo Que Dicen Nuestros Clientes"
          description="Experiencias reales de quienes han probado nuestro yogurt griego"
          tag="Testimonios"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "María González",
              role: "Cliente Habitual",
              testimonial: "Es como viajar a Grecia con cada cucharada. La textura cremosa y el sabor auténtico me tienen enamorada.",
              imageSrc: "https://images.pexels.com/photos/733851/pexels-photo-733851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "María González"
            },
            {
              id: "2",
              name: "Carlos Ruiz",
              role: "Nutricionista",
              testimonial: "Recomiendo Myka a todos mis pacientes. Es el yogurt griego más auténtico que he probado en Madrid.",
              imageSrc: "https://images.pexels.com/photos/7791103/pexels-photo-7791103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Carlos Ruiz"
            },
            {
              id: "3",
              name: "Ana Martínez",
              role: "Food Blogger",
              testimonial: "La calidad de Myka es excepcional. Se nota el cuidado artesanal en cada producto.",
              icon: Star
            },
            {
              id: "4",
              name: "Pedro López",
              role: "Chef",
              testimonial: "Uso Myka en mis recetas porque su consistencia y sabor son incomparables.",
              icon: ChefHat
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Preguntas Frecuentes"
          description="Resolvemos tus dudas sobre nuestros yogurts griegos artesanales"
          tag="FAQ"
          tagIcon={HelpCircle}
          imageSrc="https://images.pexels.com/photos/8743829/pexels-photo-8743829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Yogurt griego Myka"
          mediaPosition="left"
          faqs={[
            {
              id: "1",
              title: "¿Qué hace especial a vuestro yogurt griego?",
              content: "Nuestro yogurt sigue la receta tradicional griega con un proceso de fermentación de 24 horas y ingredientes 100% naturales sin conservantes."
            },
            {
              id: "2",
              title: "¿Cuánto tiempo se conserva?",
              content: "Nuestro yogurt se mantiene fresco hasta 10 días en refrigeración. Al ser artesanal, recomendamos consumirlo lo antes posible para disfrutar de todo su sabor."
            },
            {
              id: "3",
              title: "¿Hacéis entregas a domicilio?",
              content: "Sí, realizamos entregas en Madrid capital. Contáctanos para conocer las zonas de reparto y horarios disponibles."
            },
            {
              id: "4",
              title: "¿Tenéis opciones sin lactosa?",
              content: "Actualmente nos especializamos en yogurt tradicional con lactosa, pero estamos desarrollando una línea sin lactosa que estará disponible pronto."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contacto"
          title="Visítanos o Haz tu Pedido"
          description="Ven a conocer nuestra tienda en Madrid o contáctanos para realizar tu pedido de yogurt griego artesanal"
          tagIcon={MapPin}
          imageSrc="https://images.pexels.com/photos/248850/pexels-photo-248850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Interior de la tienda Myka en Madrid"
          mediaPosition="right"
          inputPlaceholder="Tu email"
          buttonText="Contactar"
          termsText="Al contactarnos aceptas recibir información sobre nuestros productos y ofertas especiales."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Myka"
          columns={[
            {
              items: [
                { label: "Inicio", href: "hero" },
                { label: "Productos", href: "products" },
                { label: "Nosotros", href: "about" }
              ]
            },
            {
              items: [
                { label: "Contacto", href: "contact" },
                { label: "Pedidos", href: "contact" },
                { label: "FAQ", href: "faq" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}