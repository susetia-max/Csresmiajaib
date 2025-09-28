import React, { useState, useEffect } from 'react';
import { Button } from "/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/components/ui/card";
import { Input } from "/components/ui/input";
import { Textarea } from "/components/ui/textarea";
import { Label } from "/components/ui/label";
import { Phone, MessageCircle, Clock, MapPin, Mail, Users, Shield, Award } from 'lucide-react';

export default function AjaibCallCenter() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsLoaded(true);
    
    // Update current time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Halo Ajaib Call Center, saya ingin mendapatkan informasi lebih lanjut.";
    const whatsappUrl = `https://wa.me/6285180537299?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Nama: ${formData.name}%0AEmail: ${formData.email}%0APesan: ${formData.message}`;
    const whatsappUrl = `https://wa.me/6285180537299?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isBusinessHours = () => {
    const hour = currentTime.getHours();
    return hour >= 8 && hour < 20; // 08:00 - 20:00
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>Ajaib Call Center - Layanan Pelanggan Terbaik Indonesia | 085180537299</title>
        <meta name="description" content="Hubungi Ajaib Call Center 085180537299 untuk layanan pelanggan terbaik. Customer service profesional siap membantu Anda 24/7 via WhatsApp dan telepon." />
        <meta name="keywords" content="ajaib call center, customer service ajaib, layanan pelanggan, whatsapp 085180537299, bantuan pelanggan indonesia" />
        <meta name="author" content="Ajaib Call Center" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Ajaib Call Center - Layanan Pelanggan Terbaik" />
        <meta property="og:description" content="Hubungi kami di 085180537299 untuk mendapatkan bantuan profesional dari tim customer service Ajaib." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ajaib-callcenter.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ajaib Call Center",
            "description": "Layanan call center profesional untuk kebutuhan customer service terbaik",
            "telephone": "+62-85180537299",
            "url": "https://ajaib-callcenter.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62-85180537299",
              "contactType": "customer service",
              "availableLanguage": "Indonesian"
            }
          })}
        </script>
      </head>

      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Ajaib Call Center</h1>
                <p className="text-sm opacity-90">Layanan Pelanggan Terpercaya</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm">
                  {isBusinessHours() ? "Buka Sekarang" : "Tutup"} | {currentTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hubungi Kami Sekarang
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tim customer service profesional Ajaib siap membantu Anda 24/7. 
              Dapatkan solusi terbaik untuk setiap kebutuhan Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                WhatsApp: 085180537299
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = 'tel:+6285180537299'}
                className="px-8 py-4 text-lg font-semibold"
              >
                <Phone className="mr-2 h-6 w-6" />
                Telepon Langsung
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Tim Profesional</h3>
                  <p className="text-muted-foreground">Customer service berpengalaman dan terlatih</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Layanan 24/7</h3>
                  <p className="text-muted-foreground">Siap membantu Anda kapan saja dibutuhkan</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Terpercaya</h3>
                  <p className="text-muted-foreground">Solusi terbaik dengan tingkat kepuasan tinggi</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Layanan Call Center Ajaib
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan customer service profesional untuk mendukung bisnis dan kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-2" />
                  Layanan Telepon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hubungi langsung melalui telepon untuk konsultasi dan bantuan segera dari tim ahli kami.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-6 w-6 text-primary mr-2" />
                  Chat WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Komunikasi praktis via WhatsApp untuk pertanyaan cepat dan koordinasi yang efisien.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-2" />
                  Support Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kirim pertanyaan detail melalui email untuk mendapatkan jawaban komprehensif dari tim kami.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  Konsultasi Bisnis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dapatkan saran profesional untuk mengembangkan strategi bisnis dan customer service yang efektif.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-2" />
                  Technical Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bantuan teknis profesional untuk mengatasi berbagai masalah sistem dan aplikasi.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  Premium Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Layanan prioritas dengan response time cepat dan dedicated account manager.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Hubungi Kami
              </h2>
              <p className="text-lg text-muted-foreground">
                Isi form dibawah ini dan kami akan menghubungi Anda melalui WhatsApp
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Formulir Kontak</CardTitle>
                <CardDescription>
                  Tim customer service kami akan merespons dalam waktu 15 menit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap Anda"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Masukkan alamat email Anda"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Jelaskan kebutuhan atau pertanyaan Anda..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Kirim via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Informasi Kontak
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Telepon</h3>
                <p className="text-muted-foreground">085180537299</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground">085180537299</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Jam Operasional</h3>
                <p className="text-muted-foreground text-sm">Senin - Minggu<br />08:00 - 20:00 WIB</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Lokasi</h3>
                <p className="text-muted-foreground text-sm">Customer Service<br />Seluruh Indonesia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pertanyaan Sering Diajukan
            </h2>
            <p className="text-lg text-muted-foreground">
              Temukan jawaban untuk pertanyaan umum tentang layanan call center kami
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Bagaimana cara menghubungi customer service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Anda dapat menghubungi kami melalui WhatsApp di 085180537299, telepon langsung, atau mengisi formulir kontak di website ini. Tim kami siap membantu 24/7.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Apakah layanan call center tersedia 24 jam?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ya, layanan customer service Ajaib tersedia 24 jam sehari, 7 hari seminggu. Namun untuk respon terbaik, kami merekomendasikan menghubungi pada jam operasional 08:00-20:00 WIB.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Berapa lama waktu respon customer service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kami berkomitmen memberikan respon dalam waktu maksimal 15 menit untuk chat WhatsApp dan 5 menit untuk panggilan telepon selama jam operasional.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Apakah ada biaya untuk konsultasi?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Konsultasi dasar melalui WhatsApp dan telepon gratis. Untuk layanan konsultasi bisnis mendalam atau technical support khusus, kami akan menginformasikan terlebih dahulu jika ada biaya yang terkait.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Membantu Anda Sekarang Juga!
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi tim customer service profesional Ajaib. 
            Kami siap memberikan solusi terbaik untuk kebutuhan Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleWhatsAppClick}
              className="px-8 py-4 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Chat WhatsApp Sekarang
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = 'tel:+6285180537299'}
              className="px-8 py-4 text-lg font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Phone className="mr-2 h-6 w-6" />
              085180537299
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Ajaib Call Center</h3>
              <p className="text-muted-foreground mb-4">
                Layanan customer service profesional terpercaya untuk mendukung kesuksesan bisnis Anda.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" onClick={handleWhatsAppClick}>
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => window.location.href = 'tel:+6285180537299'}>
                  <Phone className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Customer Service 24/7</li>
                <li>Technical Support</li>
                <li>Konsultasi Bisnis</li>
                <li>Live Chat Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  085180537299
                </p>
                <p className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp: 085180537299
                </p>
                <p className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  24/7 Customer Service
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Ajaib Call Center. Semua hak dilindungi. Layanan customer service profesional Indonesia.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="rounded-full w-16 h-16 bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
}